import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import type { ColumnsType } from "antd/es/table";
function App() {
  interface DataType {
    id: number;
    nickname: string;
    post_count: number;
    date_of_register: string;
    achievements: String[];
  }

  const columns: ColumnsType<DataType> = [
    { 
      title: "id",
      dataIndex: "userId",
      key: "userId" 
    },
    {
      title: "Ник",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Кол-во постов",
      dataIndex: "postCount",
      key: "postCount",
    },
    {
      title: "Дата регистрации",
      dataIndex: "registrationDate",
      key: "registrationDate",
    },
    {
      title: "Достижения",
      dataIndex: "achievements",
      key: "achievements",
    },
  ];
  const [page, setPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<DataType[]>();
  const getUsers = async (limit: number, offset: number) => {
    const response = await axios.get(`http://192.168.0.20:3001/users?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);    
  }
  
  useEffect(() => {
    const limit = 10;
    const offset = (page - 1) * limit;
    getUsers(limit, offset);
  }, [page]);

  return (
    <>
      <Table dataSource={dataSource} columns={columns} pagination={false}/>
      <Button onClick={() => setPage(page - 1)} disabled={page===1}>Назад</Button>
      <Button onClick={() => setPage(page + 1)} disabled={page===2}>Вперед</Button>
			<p>{page}</p>
    </>
  )
}

export default App;
