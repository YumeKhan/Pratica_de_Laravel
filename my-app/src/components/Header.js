// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style={{ backgroundColor: '#957DAD' }}>
      <h1 className="navbar-brand">Meu Projeto Biblioteca</h1>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </header>
  );
};

export default Header;
