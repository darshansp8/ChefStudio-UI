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
    {name: "Vegetarian", selected: false},
    {name: "Non-Vegetarian", selected: false},
    {name: "Vegan", selected: false},
    {name: "Keto", selected: false},
    {name: "Dairy-Free", selected: false}
  ]

  category_options = [
    {name: "Main-dish", selected: false},
    {name: "Breakfast", selected: false},
    {name: "Soup", selected: false},
    {name: "Salad", selected: false},
    {name: "Desserts", selected: false},
    {name: "Drinks", selected: false},
    {name: "Side-dish", selected: false},
    {name: "Bread", selected: false},
    {name: "Meat and Prok", selected: false},
    {name: "Fruits and Vegetables", selected: false},
    {name: "World Cuisine", selected: false}
  ]

  cooktime_options = [
    {name: "Quick and easy", selected: false},
    {name: "Moderately quick", selected: false},
    {name: "Flexible", selected: false},
    {name: "Leisurely", selected: false},
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
    // localStorage.setItem('onboarding', true)
    this.router.navigate(['/feed'])
  }
}
