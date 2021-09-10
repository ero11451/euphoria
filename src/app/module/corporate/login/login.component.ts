import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  Submitted = false;
  
  constructor(
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.createForm()
  }
  createForm(){
    this.loginForm = this.formBuilder.group({
      userID: ['', Validators.required],
      password: ['', Validators.required],
    }
    );
  }
  onSubmit(){

  }

}
