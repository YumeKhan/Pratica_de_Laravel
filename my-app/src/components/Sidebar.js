// src/components/Sidebar.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Sidebar = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 bg-light d-md-block sidebar" style={{ position: 'fixed', top: 0, height: '100vh', overflowY: 'auto', paddingTop: '48px' }}>
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link" href="/home">Home</a>
          </li>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 text-muted">Listas</h6>
          <li className="nav-item">
            <a className="nav-link" href="/lista-genero">Lista Gêneros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/lista-livros">Lista Livros</a>
          </li>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 text-muted">Cadastros</h6>
          <li className="nav-item">
            <a className="nav-link" href="/lista-genero/cadastro-genero">Cadastro Gêneros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/lista-livros/cadastro-livros">Cadastro Livros</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
