import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Tree } from 'antd';
export default function Home() {
  const treeData = [
    {
      title: '自然资源',
      key: '0-0',
      children: [
        {
          title: '1. 基础',
          key: '0-0-0',
          children: [
            {
              title: '土地利用现状',
              key: '0-0-0-0',
            },
            {
              title: '土地利用规划',
              key: '0-0-0-1',
              children: [
                {
                  title: '土地管制',
                  key: '0-0-0-0-0'
                },
                {
                  title: '土地用途',
                  key: '0-0-0-0-1'
                },
                {
                  title: '规划图',
                  key: '0-0-0-0-2'
                },
                {
                  title: '生态红线',
                  key: '0-0-0-0-3'
                }
              ]
            },
            {
              title: '影像',
              key: '0-0-0-2',
            },
            {
              title: '基准地价',
              key: '0-0-0-3',
            },
            {
              title: '耕地等级(国家自然等)',
              key: '0-0-0-4',
            },
          ],
        },
        {
          title: '2. 土地管理',
          key: '0-0-1',
          children: [
            {
              title: '报批',
              key: '0-0-1-0',
            },
            {
              title: '储备',
              key: '0-0-1-1',
              children: [
                {
                  title: '征收',
                  key: '0-0-1-1-0'
                },
                {
                  title: '流转',
                  key: '0-0-1-1-1'
                },
                {
                  title: '拆迁',
                  key: '0-0-1-1-2'
                },
              ]
            },
            {
              title: '供应',
              key: '0-0-1-2',
              children: [
                {
                  title: '划拨',
                  key: '0-0-1-2-0'
                },
                {
                  title: '出让',
                  key: '0-0-1-2-1'
                },
              ]
            },
            {
              title: '不动产登记',
              key: '0-0-1-3',
            },
            {
              title: '执法',
              key: '0-0-1-4',
            },
          ],
        },
        {
          title: '3. 四类异常',
          key: '0-0-2',
          children: [
            {
              title: '供而未用',
              key: '0-0-2-0'
            },
            {
              title: '批而未供',
              key: '0-0-2-1'
            },
            {
              title: '批而未用',
              key: '0-0-2-2'
            },
            {
              title: '闲置地',
              key: '0-0-2-3'
            },
          ]
        }
      ],
    },
    {
      title: '城市建设',
      key: '0-1',
      children: [
        {
          title: '配套设施',
          key: '0-1-0'
        },
        {
          title: '项目建设',
          key: '0-1-1'
        },
        {
          title: '产业经济',
          key: '0-1-2'
        }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Tree blockNode treeData={treeData} defaultExpandedKeys={['0-0-0', '0-0-0-1']} />
    </div>
  )
}
