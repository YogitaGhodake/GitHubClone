import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserCard from "../components/Pagination/UserCrad";
import Paginate from "../components/Pagination/Paginate";
import Navbar from "../components/Navbar/Navbar";
import "../container/SearchResults.css";

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

type SearchResultsProps = {
  results: User[];
  onUserSelect: (userId: string) => void;
};

const SearchResults: React.FC<SearchResultsProps> = ({
  results,
  onUserSelect,
}) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setUsers([]);
    setCurrentPage(1);
    // navigate(`/search/${query}`);
  };

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("q");
    if (queryParam) {
      setQuery(queryParam);
    }
  }, [location]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://api.github.com/search/users?q=${query}`
      );
      const data = await response.json();
      setUsers(data.items || []);
      setCurrentPage(1);
    };

    if (query) {
      fetchUsers();
    }
  }, [query]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users?.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="mainDiv">
      <div className="container_2">
        <div className="container text-center">
          <img
            src="./green_2.png"
            width="100"
            height="100"
            className="img-fluid"
            alt="Github Logo"
          />

          <h1>Welcome to GitHub</h1>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form
            className="form-inline my-2 my-lg-0 mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="inputbtn">
              <div>
                <input
                  className="form-control mr-sm-2 search-input"
                  placeholder="Search"
                  type="search"
                  aria-label="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

              <button
                className="btn btn-outline-success my-2 my-sm-0 search-button"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="usersmain">
        {users.length > 0 ? (
          <div className="container">
            <div className="row ">
              {currentUsers?.map((user) => (
                <div key={user.id} className="col-md-4 mb-3 usersgrid">
                  <UserCard user={user} />
                  <Link to={"/profile/" + user.login}> {user.login} </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="my-2 my-sm-0 text-center">No users found.</div>
        )}
        </div>

       

      </div>

      <Paginate
        currentPage={currentPage}
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default SearchResults;
