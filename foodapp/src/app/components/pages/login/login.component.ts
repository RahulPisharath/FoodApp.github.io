import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService} from '../../../services/authentication.service';

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
    public authService: AuthService
    
  ) { }

  ngOnInit() {
   
  }

  login(){
    this.authService.login();
  }
}
