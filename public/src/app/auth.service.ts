import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@ Injectable()
export class AuthService {
 constructor (private http: HttpClient){
     
 }
}