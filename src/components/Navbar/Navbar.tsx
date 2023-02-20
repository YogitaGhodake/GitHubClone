import './Navbar.css';
import React from 'react'

const Navbar =() => (
    < div>
    {/* <nav classNameName='navbar navbar-dark bg-dark'>
        <img
            src="./github-logo.png"
            width="50"
            height="50"
            classNameName='mr-3 avatar'
            alt='profile' />
        <h3 style={{ color: "white" }}> Username
        </h3>
        <a classNameName='ml-auto d-flex align-items-center' href="#">
            Search for other user
        </a>
    </nav> */}
    
    
    
    <nav className="navbar navbar-dark bg-dark" >
    <img
            src="./gitimg.png"
            width="50"
            height="50"
            className='mr-3 avatar'
            alt='profile' />
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul>
   <li className="nav-item active">
        <a className="nav-link" href="/">Home </a>
      </li>
   </ul>
      {/* <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li> */}
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
  
    {/* <form className="form-inline my-2" style= {{display: "flex"}}>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</div>
);

export default Navbar;



