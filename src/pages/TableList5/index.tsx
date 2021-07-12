import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect, useRef } from 'react';
const TableList: React.FC = () => {
  const ref = useRef<any>();
  useEffect(() => {
    function start() {
      try {
        // const c = ( || []).map(r => dataURItoBlob(r))
        const blob = new Blob((window.videos || []), {
          type: "video/mp4",
        });
        console.log(window.videos, blob)
        const url = window.URL.createObjectURL(blob);
        console.log(url)
        ref.current.src = url;
        // ref.current.autoPlay();
      } catch (err) {
        console.log("err", err.message);
      }
    }
    start();
  }, []);

  return (
    <PageContainer>
      <video width="1200" ref={ref} height="400" id="videoStream" controls></video>
    </PageContainer>
  );
};

export default TableList;
