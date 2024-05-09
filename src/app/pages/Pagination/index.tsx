import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import axios from "axios";
import type { ColumnsType } from "antd/es/table";
interface DataType {
  id: number;
  nickname: string;
  post_count: number;
  date_of_register: string;
  achievements: string[];
}
const limit = 5;
function Pagination() {
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
  const getUsers = async (limit: number, page: number) => {
    const offset = (page - 1) * limit;
    const response = await axios.get(`http://localhost:3001/users?offset=${offset}&limit=${limit}`)
    setDataSource(response.data);    
  }
  
  useEffect(() => { getUsers(limit, page); }, [page])

  return (
    <div>
    <div>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
    <div>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Назад
      </Button>
      <Button onClick={() => setPage(page + 1)} disabled={page === 4}>
        Вперед
      </Button>
    </div>
    <p>{page}</p>
  </div>
  )
}

export default Pagination;
