import './Navbar.css';
import React from 'react'

const Navbar =() => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
<img 
src="https://avatars.githubusercontent.com/u/1?v=4"
width="50"
height="50"
className='mr-3 avatar' 
alt='profile'
/>
<h3 style={{color: "white"}}> Username
</h3>
<a className='ml-auto d-flex align-items-center' href="#">
Search for other user
</a>
    </nav>
);

export default Navbar;



