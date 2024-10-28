// src/components/CadastroLivros.js
import React, { useState } from 'react';
import Layout from './Layout'; // Importa o layout que você criou

const CadastroLivros = ({ listaGenero }) => {
    const [codigoGenero, setCodigoGenero] = useState('');
    const [codigoLivro, setCodigoLivro] = useState('');
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [imgCapa, setImgCapa] = useState(null);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('codigoGenero', codigoGenero);
        formData.append('codigoLivro', codigoLivro);
        formData.append('titulo', titulo);
        formData.append('descricao', descricao);
        formData.append('imgCapa', imgCapa);

        try {
            const response = await fetch('/lista-livros/cadastro-livros', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            });

            if (!response.ok) {
                const data = await response.json();
                setErrors(data.errors || ['Erro ao cadastrar livro']);
            } else {
                // Redirecionar ou mostrar mensagem de sucesso
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário', error);
            setErrors(['Erro ao enviar o formulário']);
        }
    };

    return (
        <Layout title="Cadastro de Livros">
            {errors.length > 0 && (
                <div className="alert alert-danger">
                    <ul>
                        {errors.map((error, index) => (
                            <li key={index}>{error}</li>
                        ))}
                    </ul>
                </div>
            )}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mt-4 mb-3">
                    <label htmlFor="codigoGenero" className="form-label">Código do Gênero</label>
                    <select
                        className="form-select"
                        id="codigoGenero"
                        name="codigoGenero"
                        value={codigoGenero}
                        onChange={(e) => setCodigoGenero(e.target.value)}
                    >
                        <option value="" disabled>Selecione o código do Gênero...</option>
                        {listaGenero.map(genero => (
                            <option key={genero.codigo} value={genero.codigo}>
                                {genero.codigo} - {genero.descricao}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="codigoLivro" className="form-label">Código do Livro</label>
                    <input
                        className="form-control"
                        type="number"
                        id="codigoLivro"
                        name="codigoLivro"
                        value={codigoLivro}
                        onChange={(e) => setCodigoLivro(e.target.value)}
                        placeholder="Digite o código do Livro"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="titulo" className="form-label">Título do Livro</label>
                    <input
                        className="form-control"
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        placeholder="Digite o título do Livro"
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="descricao" className="form-label">Descrição</label>
                    <textarea
                        className="form-control"
                        id="descricao"
                        name="descricao"
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        placeholder="Digite a descrição do Livro"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="imgCapa" className="form-label">Escolha a imagem da capa:</label>
                    <input
                        className="form-control"
                        type="file"
                        name="imgCapa"
                        id="imgCapa"
                        onChange={(e) => setImgCapa(e.target.files[0])}
                    />
                </div>

                <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                    <a className="btn btn-secondary" href="/lista-livros">Cancelar</a>
                </div>
            </form>
        </Layout>
    );
};

export default CadastroLivros;
