import React, { FC, useState } from "react";
import "./styles.css";
import styled from "styled-components";
export interface IUser {
  userId: number;
  username: string;
  postCount: number;
  registrationDate: string;
  achievements: string[];
}
const CardStyled = styled.div`
  height: 200px;
  background-color: #e9e7e7;
  color: red;
`;

const CardUser: FC<{ data: IUser }> = ({ data }) => (
  <CardStyled>
    <h2>{data.username}</h2>
    <p>{data.userId}</p>
    <p>{data.postCount}</p>
    <p>{data.registrationDate}</p>
    <p>{data.achievements}</p>
  </CardStyled>
);

export default CardUser;
