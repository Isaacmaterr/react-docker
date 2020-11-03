<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\RegisterController;
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




Route::group(['middleware' => ['auth:api','cors']], function(){
    
    Route::post('user','User\RegisterController@create');
    Route::get('user', function(){
        return \App\User::all();
    });

      Route::get('user/{id}', function($id){
        return \App\User::findOrFail($id);
    });
     Route::put('user/{id}','User\RegisterController@updated');
  
    Route::post('logout', 'Api\AuthController@logout');
    //Route::resource('clients', 'ClientController', ['except' => ['create', 'edit']]);
});

Route::name('api.login')->post('login', 'Api\AuthController@login');
Route::post('refresh', 'Api\AuthController@refresh');