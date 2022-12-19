<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('main.index');});
Route::get('/hosts', function () {  return view('main.index');});
Route::get('/blog', function () {  return view('main.index');});
