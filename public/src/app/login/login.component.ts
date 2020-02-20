import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form;
  login: any;
  newUser: any
  loginUser: any
  errors: any
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute)
    // private fb : FormBuilder){ 
    //   this.form = fb.group({
    //     r_first_name: []
    //   })
  {}

  ngOnInit() {
    this.newUser = { name: "" }
    this.loginUser = { email: ""}
    this.loginUser = { password: ""}
    this.login = true;
  }
  CreateAccountFormShow(){
    this.login = false;
  }

}
