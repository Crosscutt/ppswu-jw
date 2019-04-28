<?php

namespace ppswu\jw\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DashBoardController extends Controller
{

    public function dashboard(){
            return view('index::index');
    }
}
