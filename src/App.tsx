import React from 'react';
import { Table } from 'antd';

function App() {
  interface DataType {
    key: string;
    nickname: string;
    post_count: number;
    date_of_register: string;
    achievements: String[];
  }

  const columns = [
    {
      title: 'Ник',
      dataIndex: 'nickname',
      key: 'nickname',
    },
    {
      title: 'Кол-во постов',
      dataIndex: 'post_count',
      key: 'post_count',
    },
    {
      title: 'Дата регистрации',
      dataIndex: 'date_of_register',
      key: 'date_of_register',
    },
    {
      title: 'Достижения',
      dataIndex: 'achievements',
      key: 'achievements',
    },
  ];
  const achievements: String[] = [
    "Old User / ", "5+ posts made / "
  ]
  const data: DataType[] = [
    {
      key: '1',
      nickname: 'admin',
      post_count: 5,
      date_of_register: '09-12-2023',
      achievements: [achievements[0], achievements[1]],
    },
    {
      key: '2',
      nickname: 'plex',
      post_count: 2,
      date_of_register: '09-12-2023',
      achievements: [],
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}

export default App;
