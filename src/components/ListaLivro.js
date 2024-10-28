// src/components/ListaLivros.js
import React, { useEffect, useState } from 'react';

function ListaLivros() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/livros') // Altere para o URL do seu backend Laravel
            .then(response => response.json())
            .then(data => setLivros(data));
    }, []);

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {livros.map(livro => (
                    <li key={livro.id}>{livro.titulo}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaLivros;
