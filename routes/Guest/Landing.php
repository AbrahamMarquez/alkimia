<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () { return view('main.index');});
Route::get('/downloadApp', function () { return view('main.index');});
Route::get('/hosts', function () {  return view('main.index');});
Route::get('/hosts/register', function () {  return view('main.index');});
Route::get('/blog', function () {  return view('main.index');});
Route::get('/blog/{id}/show', function () {  return view('main.index');});
Route::get('/contact', function () {  return view('main.index');}); 
Route::get('/terms-conditions', function () {  return view('main.index');});
