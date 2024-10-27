// src/components/App.js
import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM for rendering
import Header from './Header';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row">
        <Sidebar />
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ marginTop: '56px' }}>
          <h2>Conteúdo Principal</h2>
          <p>Bem-vindo à sua aplicação!</p>
        </main>
      </div>
    </div>
  );
};

// Render the App component into the div with id 'app' in your Blade view
ReactDOM.render(<App />, document.getElementById('app'));

export default App;
