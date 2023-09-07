import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{

  user: User | null;

  constructor(private apiService: ApiServiceService, private router: Router){ }

  ngOnInit(): void {
    this.apiService.getUserProfile()
    .subscribe({next: responseData => {
      console.log(responseData)
      this.user = responseData.response
      console.log(this.user)
    },
    error: error => {
      console.error(error)
    }
  
  })
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('onboarding')
    localStorage.removeItem('user_id')
    this.router.navigate(['/login'])
  }
}
