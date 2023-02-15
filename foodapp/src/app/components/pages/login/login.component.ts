import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginForm!: FormGroup;
 username!: any;
 password!:any;
 loading = false;
 submitted = false;
 error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['' , Validators.required],
      password:['', Validators.required]
    
    })
  }

  login(){
      if(this.username == "Admin" && this.password =="Admin"){
        this.submitted=true;
        this.router.navigateByUrl('home');
        console.log("Login Successful");
      }
      else{
        alert("Wrong username or password")
      }
  }
}
