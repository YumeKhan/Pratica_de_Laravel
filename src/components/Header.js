import React from 'react';

function Header() {
  return (
    <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
      <button 
        id="btn-mobile" 
        className="navbar-toggler position-absolute d-md-none collapsed mt-3" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#sidebarMenu" 
        aria-controls="sidebarMenu" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span id="hamburger"></span>
      </button>
    </header>
  );
}

export default Header;
