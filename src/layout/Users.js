import React, { useState } from 'react';
import axios from 'axios';
import { useAsync } from '../hook/useAsync';
import User from './User';

const fetchUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );

  return response.data;
};

const Users = () => {
  const [state, refetch] = useAsync(fetchUsers, [], true);
  const [userId, setUserId] = useState(null);

  const { loading, data: users, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => setUserId(user.id)}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
};

export default Users;
