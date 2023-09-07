import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  constructor(private router: Router, private apiService: ApiServiceService){}
  step=1
  totalstep = 3 
  category_preferences: string[] = []

  preference_options = [
    {name: "Vegetable", selected: false},
    {name: "Chicken", selected: false},
    {name: "Vegan", selected: false},
    {name: "Meat", selected: false},
  ]

  category_options = [
    {name: "Very Low Carbs", selected: false},
    {name: "Healthy", selected: false},
    {name: "High Fibre", selected: false},
    {name: "Low Cholesterol", selected: false},
    {name: "High Protein", selected: false},
  ]

  cooktime_options = [
    {name: "< 15 Mins", selected: false},
    {name: "< 30 Mins", selected: false},
    {name: "< 60 Mins", selected: false},
    {name: "< 4 Hours", selected: false},
  ]

  toggleOption(option: any){
    option.selected = !option.selected;
  }

  showOptions(){
    switch (this.step) {
      case 1:
        for (var option of this.preference_options){
          if(option.selected){
            console.log(option.name)
            this.category_preferences.push(option.name)
          }
        }
        break;
      case 2:
        for (var option of this.category_options){
          if(option.selected){
            console.log(option.name)
            this.category_preferences.push(option.name)
          }
        }
        break;
      case 3:
        for (var option of this.cooktime_options){
          if(option.selected){
            console.log(option.name)
            this.category_preferences.push(option.name)
          }
        }
        break;
      default:
        break;
    }
    if (this.step == this.totalstep){
      this.saveDetails()
    }
    else{
      this.step += 1;
    }
    
  }

  saveDetails(){
    console.log("Done");
    console.log(this.category_preferences)
    this.apiService.updateUserPreferences(this.category_preferences)
    .subscribe(responseData => {
      console.log(responseData)
      localStorage.setItem('onboarding', '1')
      this.router.navigate(['/feed'])
    })
  }
}
