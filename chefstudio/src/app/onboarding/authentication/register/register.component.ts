import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailExists= false;
  registerForm: FormGroup;

  constructor(private apiService: ApiServiceService, private router: Router){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'name': new FormControl('', Validators.required),
    });
  }  


  onSubmit(){
    this.apiService.register(this.registerForm.value)
    .subscribe(responseData => {
      console.log(responseData)
      if (responseData.code == 1){
          localStorage.setItem('token', responseData.data.tokens.access)
          localStorage.setItem('user_id', responseData.data.user.user_id)
          localStorage.setItem('onboarding', responseData.data.user.onboarding)
          if (responseData.data.user.onboarding){
            this.router.navigate(['/feed'])
          }
          else{
            this.router.navigate(['/user-details'])
          }
      }
      else if (responseData.code == 0){
        this.emailExists = true
      }
    })
  }
}
