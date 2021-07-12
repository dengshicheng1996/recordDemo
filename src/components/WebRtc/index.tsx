import React, { useEffect, useState } from 'react'
import { postlive } from '@/services/ant-design-pro/api'

export default function index(props: any) {
  window.videos = [];
  useEffect(() => {
    (async () => {
      const stream = await navigator.mediaDevices?.getDisplayMedia({ 
        video: true, 
        echoCancellation: true
      });
      const recorder = new MediaRecorder(stream);
      recorder.start(1000);
      recorder.ondataavailable = async (event: any) => {
        // let reader = new FileReader();
        // reader.onload = function (e: any) {
        //   console.log(e.target.result, chunks)
        //   // 13.9kb
        //   setChunks([...chunks, (e.target.result)]);
        // };
        // reader.readAsDataURL(event.data);
        console.log(event.data.size)
        window.videos.push(event.data)
        // 发起io
        // if (chunk.length === 10) {
          // console.log(chunks, chunk)
          // var fd = new FormData();
          // fd.append('type', 'webrtc');
          // fd.append('data', chunk);
          // await postlive({
          //   type: 'webrtc',
          //   data: chunks
          // });
          // setChunks([]);
        // }

        // setchunks([...chunks, event.data]);
      };
    })()
  }, [])
  return (
    <div>
      {props.children}
    </div>
  )
}
