import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  errorExists: Boolean
  loginForm: FormGroup;

  constructor (private apiService: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    })
  }

  onSubmit(){
      this.apiService.login(this.loginForm.value)
      .subscribe({next: responseData => {
        console.table(responseData)
        if (responseData.code == 1){
          localStorage.setItem('token', responseData.data.tokens.access)
          localStorage.setItem('user_id', responseData.data.user.user_id)
          localStorage.setItem('onboarding', responseData.data.user.onboarding)
          // if (responseData.data.user.onboarding){
            // }
            // else{
              //   this.router.navigate(['/user-details'])
              // }
          this.router.navigate(['/feed'])
      }
    
      }, error: (error)=>{
        console.log("Error")
        console.error(error.error.message)
      }})
      // else if (responseData.ok == false){
      //   console.warn("Error")
      //   this.errorExists = true
      // }
  }
}
