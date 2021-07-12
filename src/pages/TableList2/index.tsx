import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';

const TableList: React.FC = () => {
  const ref = useRef<any>();
  var data = [];
  
  useEffect(() => {
    let canvas = document.getElementById('canvas');
    let drawIndex = 0
    let le = window.chunklist.length;
    function drawImageDemo () {
      var img = document.createElement('img')
      img.src = window.chunklist[drawIndex]
      img.width = 300
      img.height = 300
      var dom = canvas.getContext('2d')
      img.onload = function () {
        dom.drawImage(img, 0, 0, canvas.width, canvas.height)
        setTimeout(() => {
          drawIndex++
          if (drawIndex > le) {
            drawIndex = 0;
            recorder.stop()
            return
          }
          drawImageDemo()
        }, 1000)
      }
    }
    
    const stream = canvas.captureStream();
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
    recorder.ondataavailable = function (event) {
      if (event.data && event.data.size) {
        console.log(event.data)
        data.push(event.data)
      }
    };
    recorder.onstop = () => {
      const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }));
      console.log(url)
      ref.current.src = url;
    }
    recorder.start();
    drawImageDemo()
  }, []);
  return (
    <PageContainer>
      <canvas id="canvas" width='600' height='300' ></canvas>
      <video width="1200" ref={ref} height="400" controls></video>
    </PageContainer>
  );
};

export default TableList;
