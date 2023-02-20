import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserRepos from "./UserRepos";


interface UserProfileInterface {
  repos_url: string;
  avatar_url: string;
  login: string;
  bio: string;
  tags?: string[];
}

interface Repo {
  language: string;
}


const UserProfile = ()=> {
  const { username } = useParams<{ username: string }>();
  const [userProfile, setUserProfile] = useState<UserProfileInterface | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);

console.log("userID==> 18", username);

  useEffect(() => {
    async function fetchUserProfile() {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log("data", data)
      setUserProfile({
        repos_url: data.repos_url,
        avatar_url: data.avatar_url,
        login: data.login,
        bio: data.bio,
        tags: data.tags,
      });
      
    }
    

    if (username) {
      fetchUserProfile();
    } else {
      setUserProfile(null);
    }
  }, [username]);

  useEffect(()=> {
    async function fetchRepos() {
      if(!userProfile) {
        return;
      }

      const response = await fetch(userProfile.repos_url);
      const data = await response.json();
      const languages = data.map((repo: Repo) => repo.language).filter((language: string) => language !== null);
      setLanguages(languages);
    }
    fetchRepos();
  },[userProfile]);


  if (!username) {
    return <div>Please select a user to view their profile.</div>;
  }

  if (!userProfile) {
    return null;
  }

  // console.log("userProfile.avatar_url", userProfile.avatar_url)
console.log("Tags========> 55empty",userProfile.tags);

return (
  <div className="container my-4">
    <div className="row">
      <div className="col-md-4">
      <img src={userProfile.avatar_url} alt={username} className="img-fluid"/>
    <h3 className="mt-3">{userProfile.login}</h3>
    <h3>{userProfile.bio}</h3>
      </div>
    </div>
    
     <div className="col-md-8">
      <h2> Languages</h2> 
      <ul>
            {languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>

      {username && <UserRepos username={userProfile.login} id={0} name={''} html_url={''} />}
     
  </div>
  </div>
  
);
}

export default UserProfile;
