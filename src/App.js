import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ListaLivros from './components/ListaLivros';
import CadastroLivros from './components/CadastroLivros';
import CadastroGenero from './components/CadastroGenero';
import Home from './components/Home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'uikit/dist/css/uikit.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <div className="row">
          <Sidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-column">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/lista-livros" element={<ListaLivros />} />
              <Route path="/lista-livros/cadastro-livros" element={<CadastroLivros />} />
              <Route path="/lista-genero/cadastro-genero" element={<CadastroGenero />} />
              {/* Adicione mais rotas conforme necessário */}
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
