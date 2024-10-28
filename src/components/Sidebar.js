import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 bg-light d-md-block sidebar lilas-menu">
      <div className="position-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              <img className="feather" src="/img/icons/icon_home.svg" alt="" /> Home
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 text-muted">Listas</h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/lista-genero">
              <img className="feather" src="/img/icons/icon_list_genero.svg" alt="" /> Lista Gêneros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lista-livros">
              <img className="feather" src="/img/icons/icon_list_livros.svg" alt="" /> Lista Livros
            </Link>
          </li>
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 text-muted">Cadastros</h6>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/lista-genero/cadastro-genero">
              <img className="feather" src="/img/icons/icon_cad_genero.svg" alt="" /> Cadastro Gêneros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lista-livros/cadastro-livros">
              <img className="feather" src="/img/icons/icon_cad_livros.svg" alt="" /> Cadastro Livros
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
