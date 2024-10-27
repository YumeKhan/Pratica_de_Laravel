<?php
namespace App\Http\Controllers;

use App\Models\Livros;
use App\Models\Pessoa;
use App\Models\Reserva;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class ReservaController extends Controller
{
    public function listaReservas(Request $request)
    {
        $listaReservas = Reserva::all();

        $mensagem = $request->session()->get('mensagem');
        $request->session()->remove('mensagem');

        return view('lista-reservas', [
            'listaReservas' => $listaReservas,
            'mensagem' => $mensagem
        ]);
    }

    public function cadastroReservas()
    {
        $listaPessoas = Pessoa::all();
        $listaLivros = Livros::all();
        return view('cadastro-reservas', [
            'listaPessoas' => $listaPessoas,
            'listaLivros' => $listaLivros
        ]);
    }

    public function editar(Request $request)
    {
        $reservas = Reserva::find($request->id);
        $listaPessoas = Pessoa::all();
        $listaLivros = Livros::all();

        return view('cadastro-reservas', [
            "reservas" => $reservas,
            'listaPessoas' => $listaPessoas,
            'listaLivros' => $listaLivros
        ]);
    }

    public function excluir(Request $request)
    {
        $reservas = Reserva::find($request->id);
        $reservas->delete();

        $request->session()->put('mensagem', "Reserva {$reservas->id} excluida!");

        return redirect('/lista-reservas');
    }

    public function salvarReservas(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'codigo' => 'required|min:1|max:20',
            'dataRetirada' => 'required|min:1|max:250',
            'dataDevolucao' => 'required|min:1|max:250',
            'pessoa' => 'required|min:1|max:250',
            'livro' => 'required|min:1|max:250',
            'status' => 'required|min:1|max:10',
        ], [
            'required' => 'O campo :attribute é obrigatório',
            'min' => 'O campo :attribute precisa ter no mínimo :min caracteres',
            'max' => 'O campo :attribute precisa ter no máximo :max caracteres'
        ]);
 
        if ($validator->fails()) {
            return Redirect::back()->withInput()->withErrors($validator);
        }

        if ($request->id != null) {
            $reserva = Reserva::find($request->id);
            $reserva->codigo = $request->codigo;
            $reserva->dataRetirada = $request->dataRetirada;
            $reserva->dataDevolucao = $request->dataDevolucao;
            $reserva->pessoa = $request->pessoa;
            $reserva->livro = $request->livro;
            $reserva->status = $request->status;
            $reserva->save();

            $request->session()->put('mensagem', "Reserva {$reserva->id} atualizada!");
        } else {
            $reserva = Reserva::create([
                'codigo' => $request->codigo,
                'dataRetirada' => $request->dataRetirada,
                'dataDevolucao' => $request->dataDevolucao,
                'pessoa' => $request->pessoa,
                'livro' => $request->livro,
                'status' => $request->status,
            ]);

            $request->session()->put('mensagem', "Reserva {$reserva->id} criada!");
        }

        return redirect('/lista-reservas');
    }
}
