import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User, SearchUsersResponse } from "../Interface/Interface";



interface SearchUserProps {
  results: User[];
  onUserSelect: (userId: string) => void;
}


async function searchUsers(query: string) {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}`
  );
  const data = await response.json();
  return data.items;
}

function SearchResults(props: SearchUserProps) {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const { onUserSelect, results } = props;

  async function handleSearch() {
    const results = await searchUsers(query);
    setUsers(results);

    console.log("results", results);
  }

  return (
    <div>
      <input
        placeholder="UserID"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={"/profile/" + user.login}> {user.login}</Link>{" "}
            {/* <div>Tags: {user.tags?.join(', ')}</div> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
