import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  faBookmark = faBookmark
  onboarding: number;
  selectUserPreferences = false;
  resultArray: Recipe[] = []

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    const onboard = this.apiService.getOnboardingStatus()
    console.log(onboard)
    this.onboarding = Number(this.apiService.getOnboardingStatus())
    console.log(this.onboarding)
    if (this.onboarding == 1){
      this.apiService.getRecipesByUserId()
      .subscribe((responseData)=> {
        console.log(responseData)
        this.resultArray = responseData
        if (this.resultArray.length == 0){
          this.selectUserPreferences = true;
        }
      })
    }
    else{
      this.selectUserPreferences = true
    }
  }
}
