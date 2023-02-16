import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserRepos from "./UserRepos";

interface UserProfileInterface {
  repos_url: string;
  avatar_url: string;
  login: string;
  bio: string;
  tags?: string[];
  // username: string;
}



const UserProfile = ()=> {
  const { username } = useParams<{ username: string }>();
  const [userProfile, setUserProfile] = useState<UserProfileInterface | null>(null);
  

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

  if (!username) {
    return <div>Please select a user to view their profile.</div>;
  }

  if (!userProfile) {
    return <div>Loading profile...</div>;
  }

  // console.log("userProfile.avatar_url", userProfile.avatar_url)
console.log("Tags========> 55empty",userProfile.tags);
  return (
    <div>
       
       <img src={userProfile.avatar_url} alt={username} />
       <h3>{userProfile.login}</h3>
     <h3>{userProfile.bio}</h3>
     <div>Tags:
      {userProfile.tags?.join(', ') || "No tags"}
         </div>
     
      

     {username && <UserRepos username={userProfile.login} id={0} name={""} html_url={""} />}
    </div>
    
  );
}

export default UserProfile;
