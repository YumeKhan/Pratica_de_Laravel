// src/components/CadastroGenero.js
import React, { useState } from 'react';
import Layout from './Layout'; // Importa o layout que você criou

const CadastroGenero = () => {
    const [codigo, setCodigo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            codigo,
            descricao,
        };

        try {
            const response = await fetch('/lista-genero/cadastro-genero', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrors(data.errors || ['Erro ao cadastrar gênero']);
            } else {
                // Redirecionar ou mostrar mensagem de sucesso
                // Por exemplo, redirecionar para a lista de gêneros
                window.location.href = '/lista-genero';
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário', error);
            setErrors(['Erro ao enviar o formulário']);
        }
    };

    return (
        <Layout title="Cadastro de Gênero">
            {errors.length > 0 && (
                <div className="alert alert-danger">
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mt-4 mb-3">
                    <label htmlFor="codigo" className="form-label">Código do Gênero</label>
                    <input
                        className="form-control"
                        type="number"
                        id="codigo"
                        name="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        placeholder="Digite o código do Gênero"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="descricao" className="form-label">Descrição do Gênero</label>
                    <textarea
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Digite a descrição do Gênero"
                    />
                </div>
                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                    <a className="btn btn-secondary" href="/lista-genero">Cancelar</a>
                </div>
            </form>
        </Layout>
    );
};

export default CadastroGenero;
