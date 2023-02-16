import React, { useState } from "react";
import SearchResults from "./container/SearchResults";
import UserProfile from "./container/UserProfile";
import { User } from "./Interface/Interface";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  const handleUserSelect = (userId: string) => {
    setSelectedUserId(userId);
    console.log("userId", userId);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" 
            element = {
            <SearchResults results={searchResults} onUserSelect={handleUserSelect}/> } />
          
          <Route path="/profile/:username" 
          element = {<UserProfile />} />   
          {/* <Route path="/profile" element= {<h1>Hello</h1>}/>  */}
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
