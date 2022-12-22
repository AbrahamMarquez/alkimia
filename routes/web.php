<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::middleware('route.mapping')->group(function () {

  

// });

require (__DIR__ . '/Guest.php');
require (__DIR__ . '/Auth.php');

Route::get('/validation-code', function () {  return view('email.ValidationCode');})->name("home");

