import React from "react";
import { Link } from 'react-router-dom';

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  const { user } = props;

  return (
    <div>
      <Link to={"/profile/" + user.login}> 
      <img src={user.avatar_url} alt={user.login} />
      <h3 >{user.login}</h3>
      </Link>{" "}
    </div>
  );
};

export default UserCard;
