<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Lang;
use Tymon\JWTAuth\Facades\JWTAuth;


class AuthController extends Controller
{
    //
    use AuthenticatesUsers;


    public function login(Request $request)
    {
        $this->validateLogin($request);

        $credentials = $request->only('email', 'password');
        $token = JWTAuth::attempt($credentials);
        return $this->responseToken($token);
    }

    private function responseToken($token)
    {
        return $token ? ['token' => $token] :
            response()->json([
                'error' => Lang::get('auth.failed')
            ], 400);
    }

    public function logout(){
        Auth::logout('api');
        return response()->json([],204); //No-content
    }

    public function refresh(){
        $token = Auth::refresh();
        return response()->json([],204); //No-content
    }
}
