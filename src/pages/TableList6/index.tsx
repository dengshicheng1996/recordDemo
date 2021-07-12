import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Player } from 'timecatjs'

const TableList: React.FC = () => {
 
  useEffect(() => {
    const player = new Player({
      target: '.timecat-replay'
    });
    return () => {
      player?.destroy();
    }
  }, []);

  return (
    <PageContainer>
       <div>
          <h2>Replay</h2>
          <div className="timecat-replay" style={{ margin: '0 auto', height: 'calc(100vh - 130px)' }}></div>
      </div>
    </PageContainer>
  );
};

export default TableList;
