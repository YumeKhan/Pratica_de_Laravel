@extends('layout')

@section('tituloGuia')
    Cadastro de Gênero
@endsection

@section('titulo')
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 pt-3 pb-3" href="/lista-genero/cadastro-genero">Cadastro de Gênero</a>
@endsection

@section('liCadGenero')
    active
@endsection

@section('conteudo')
    @if (count($errors) > 0)
        <div class="alert alert-danger">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <form action="/lista-genero/cadastro-genero" method="POST">
        @csrf

        <input type="hidden" name="id" value="{{isset($genero)}}" />
        
        <div class="mt-4 mb-3">
            <label for="formTitulo" class="form-label">Código do gênero</label>
            <input class="form-control" type="number" id="formTitulo" name="codigo" value="{{isset($genero)}}" placeholder="Digite o código do Gênero">
        </div>
        <div class="mb-4">
            <label for="formDescricao" class="form-label">Descrição do gênero</label>
            <textarea class="form-control" type="text" id="formDescricao" name="descricao" placeholder="Digite a descrição do Gênero">{{isset($genero)}}</textarea>
        </div>
        
        <div class="col-md-12">
            <button type="submit" class="btn btn-primary">Salvar</button>
            <a type="button" class="btn btn-secondary" href="/lista-genero">Cancelar</a>
        </div>
    </form>
@endsection
