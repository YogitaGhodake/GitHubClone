import React from 'react';
import { useQuery } from "react-query"
import {useParams} from 'react-router-dom';

interface UserRepoProps {
  id: number;
  name: string;
  html_url: string;
  username:string;
}

const getUserRepos = async (username: string | undefined): Promise<UserRepoProps[]> => {
  if (!username) {
    return [];
  }
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if(!response.ok)
  {
    throw new Error(`Error fetching user repos: ${response.statusText}`);
  }
  const data = await response.json();
  console.log("data ===> 19", data);
  return data;
  
};

const UserRepos = (props: UserRepoProps)=>  {
    // const {username} = props;
  const {username } = useParams<{username: string}>();

  const { data, isLoading, isError } = useQuery<UserRepoProps[], Error>(
    ['userRepos', username],
    ()=> username? getUserRepos(username): Promise.resolve([]),
  );

  // if(data?.length >= 0){
  //   <div>There are no repositories</div>
  // }

  if(isLoading) {
    return <div>
      Losding Respositories...
    </div>
  }

  if(isError) {
    return <div>
      Error fetching repositories!
    </div>
  }

  return (
    <div> 
      <h2>Repositories:</h2>
      <ul>
        {data?.map((repo: UserRepoProps) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserRepos
