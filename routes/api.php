<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LivroController;
use App\Http\Controllers\LivrosController;



Route::get('/livros', [LivroController::class, 'index']);
Route::post('/livros', [LivroController::class, 'store']);
Route::get('/livros/{id}', [LivroController::class, 'show']);
Route::put('/livros/{id}', [LivroController::class, 'update']);
Route::delete('/livros/{id}', [LivroController::class, 'destroy']);
Route::apiResource('livros', LivroController::class);


Route::get('/livros', [LivrosController::class, 'index']);
Route::post('/livros', [LivrosController::class, 'store']);
Route::get('/livros/{id}', [LivrosController::class, 'show']);
Route::put('/livros/{id}', [LivrosController::class, 'update']);
Route::delete('/livros/{id}', [LivrosController::class, 'destroy']);
Route::apiResource('livros', LivrosController::class);


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/data', function () {
    return response()->json(['message' => 'Hello from Laravel!']);
});