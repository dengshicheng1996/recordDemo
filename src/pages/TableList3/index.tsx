import React, { useState, useRef } from 'react';
import { Chart } from '@antv/g2';
import { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';

const TableList: React.FC = () => {
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/blockchain.json')
      .then((res) => res.json())
      .then((data) => {
        const chart = new Chart({
          container: 'container',
          autoFit: true,
          height: 500,
          padding: [30, 20, 70, 30],
          renderer: 'svg',
        });

        chart.data(data);
        chart.scale({
          nlp: {
            min: 0,
            max: 100,
          },
          blockchain: {
            min: 0,
            max: 100,
          },
        });

        chart.axis('nlp', false);

        chart.legend({
          custom: true,
          items: [
            {
              name: 'blockchain',
              value: 'blockchain',
              marker: { symbol: 'line', style: { stroke: '#1890ff', lineWidth: 2 } },
            },
            {
              name: 'nlp',
              value: 'nlp',
              marker: { symbol: 'line', style: { stroke: '#2fc25b', lineWidth: 2 } },
            },
          ],
        });

        chart.line().position('date*blockchain').color('#1890ff');
        chart.line().position('date*nlp').color('#2fc25b');

        chart.annotation().dataMarker({
          top: true,
          position: ['2016-02-28', 9],
          text: {
            content: 'Blockchain 首超 NLP',
            style: {
              textAlign: 'left',
            },
          },
          line: {
            length: 30,
          },
        });
        chart.annotation().dataMarker({
          top: true,
          position: ['2017-12-17', 100],
          line: {
            length: 30,
          },
          text: {
            content: '2017-12-17, 受比特币影响，\n blockchain搜索热度达到顶峰\n峰值：100',
            style: {
              textAlign: 'right',
            },
          },
        });
        chart.removeInteraction('legend-filter'); // 自定义图例，移除默认的分类图例筛选交互
        chart.render();
      });
  }, []);

  useEffect(() => {
    const data = [
      { type: '未知', value: 654, percent: 0.02 },
      { type: '17 岁以下', value: 654, percent: 0.02 },
      { type: '18-24 岁', value: 4400, percent: 0.2 },
      { type: '25-29 岁', value: 5300, percent: 0.24 },
      { type: '30-39 岁', value: 6200, percent: 0.28 },
      { type: '40-49 岁', value: 3300, percent: 0.14 },
      { type: '50 岁以上', value: 1500, percent: 0.06 },
    ];

    const chart = new Chart({
      container: 'container1',
      autoFit: true,
      height: 500,
      padding: [50, 20, 50, 20],
    });
    chart.data(data);
    chart.scale('value', {
      alias: '销售额(万)',
    });

    chart.axis('type', {
      tickLine: {
        alignTick: false,
      },
    });
    chart.axis('value', false);

    chart.tooltip({
      showMarkers: false,
    });
    chart.interval().position('type*value');
    chart.interaction('element-active');

    // 添加文本标注
    data.forEach((item) => {
      chart
        .annotation()
        .text({
          position: [item.type, item.value],
          content: item.value,
          style: {
            textAlign: 'center',
          },
          offsetY: -30,
        })
        .text({
          position: [item.type, item.value],
          content: (item.percent * 100).toFixed(0) + '%',
          style: {
            textAlign: 'center',
          },
          offsetY: -12,
        });
    });
    chart.render();
  }, []);

  return (
    <PageContainer>
      <div id="container"></div>
      <div id="container1"></div>
      <video src='/watch?v=RkX68QJfyQU' width="800" height="400" controls></video>
      <iframe frameBorder="0" width="800" height="400" >
      </iframe>
    </PageContainer>
  );
};

export default TableList;
