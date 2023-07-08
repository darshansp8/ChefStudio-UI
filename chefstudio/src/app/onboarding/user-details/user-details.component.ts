import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  step=1

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

  toggleOption(option: any){
    option.selected = !option.selected;
  }

  showOptions(){
    for (var option of this.preference_options){
      if(option.selected){
        console.log(option.name)
      }
    }
    for (var option of this.category_options){
      if(option.selected){
        console.log(option.name)
      }
    }
    this.step += 1;
  }

  saveDetails(){
    console.log("Done")
  }
}
