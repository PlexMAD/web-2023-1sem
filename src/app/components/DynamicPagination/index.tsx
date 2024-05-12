import { FC, useEffect, useState } from "react";
import CardUser, { IUser } from "../CardUser";
import axios from "axios";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const limit = 15;
const BlockObserver = styled.div`
  height: 40px;
  background-color: black;
`;

const ListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const DynamicPagination: FC = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    getUsers();
  }, [currentPage]);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView && !loading && hasMore) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [inView]);

  const getUsers = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * limit;
      const response = await axios.get(`http://localhost:3001/users?offset=${offset}&limit=${limit}`);
      const newData = response.data;
      if (newData.length === 0) {
        setHasMore(false);
      } else {
        setUsers((prev) => [...prev, ...newData]);
      }
    } catch (error) {
      console.log("Error fetching users...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ListStyled>
      <h1>List Users</h1>
      {users.map((user) => (
        <CardUser data={user} key={user.userId}></CardUser>
      ))}
      {loading && <div>Loading...</div>}
      {!loading && hasMore && <BlockObserver ref={ref}></BlockObserver>}
      {!hasMore && <div>No more users</div>}
    </ListStyled>
  );
};

export default DynamicPagination;
