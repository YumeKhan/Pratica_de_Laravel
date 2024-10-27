<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        <!-- Estilo personalizado -->
        <link rel="stylesheet" href="/css/estilo.css">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">

        <!-- UIkit CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.13.7/dist/css/uikit.min.css" />

        <title>Projeto Biblioteca - @yield('tituloGuia')</title>
    </head>
    <body>
        <header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow">
            @yield('titulo')         
            <button id="btn-mobile" class="navbar-toggler position-absolute d-md-none collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
               <span id="hamburger"></span>
            </button>
        </header>

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 bg-light d-md-block sidebar lilas-menu">
                    <div class="position-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link @yield('liHome')" aria-current="page" href="/home">
                                    <img class="feather" src="/img/icons/icon_home.svg" alt="">
                                    Home
                                </a>
                            </li>
                        </ul>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 text-muted">
                            Listas
                        </h6>

                        <ul class="nav flex-column">
                           <li class="nav-item">
                               <a class="nav-link @yield('liListGenero')" aria-current="page" href="/lista-genero">
                                  <img class="feather" src="/img/icons/icon_list_genero.svg" alt="">
                                  Lista Gêneros
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link @yield('liListLivros')" aria-current="page" href="/lista-livros">
                                  <img class="feather" src="/img/icons/icon_list_livros.svg" alt="">
                                  Lista Livros
                               </a>
                           </li>
                        </ul>

                        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 text-muted">
                           Cadastros
                        </h6>

                        <ul class="nav flex-column">
                           <li class="nav-item">
                               <a class="nav-link @yield('liCadGenero')" aria-current="page" href="/lista-genero/cadastro-genero">
                                  <img class="feather" src="/img/icons/icon_cad_genero.svg" alt="">
                                  Cadastro Gêneros
                               </a>
                           </li>
                           <li class="nav-item">
                               <a class="nav-link @yield('liCadLivros')" aria-current="page" href="/lista-livros/cadastro-livros">
                                  <img class="feather" src="/img/icons/icon_cad_livros.svg" alt="">
                                  Cadastro Livros
                               </a>
                           </li>
                        </ul>
                    </div>
                </nav>
                
                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-column">
                    <br>
                    <div class="code-container">
                        <!-- Aqui vai o conteúdo do código -->
                        @yield('conteudo')
                    </div>
                </main>

                <p class="copyright uk-position-bottom-center" style="font-size: 20px; font-weight: lighter; text-align: center; color: #C8A2C8;" tabindex="0">Déborah Iara - 2024</p>
            </div>
        </div>

        <div id="app"></div> <!-- React app will render here -->
        <script src="{{ mix('js/app.js') }}"></script> <!-- Link to your compiled JS -->

        <!-- Bootstrap JS -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>
