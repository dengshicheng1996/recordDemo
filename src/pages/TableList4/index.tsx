import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useEffect } from 'react';
import { Replayer } from 'rrweb';

const TableList: React.FC = () => {
  useEffect(() => {
    console.log(window.chunks);
    console.log(document.getElementById('playback'))
    const replayer = new Replayer(window.chunks || [], {
      root: document.getElementById('playback'),
    });
    replayer.play()
  }, []);

  return (
    <PageContainer>
      <div id="playback"></div>
    </PageContainer>
  );
};

export default TableList;
