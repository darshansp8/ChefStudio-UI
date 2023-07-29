import { Component, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  faSearch = faSearch
  faBookmark = faBookmark
  displayResult = false

  diet_preferences = [
    "vegan",
    "vegetarian",
    "non-vegetarian",
  ]

  cooking_time = [
    "< 15M",
    "< 30M",
    "< 60M",
    "< 4H",
  ]

  cooking_style = [
    "boiled",
    "pressure cooker",
    "microwave",
    "roasting",
    "deep fry"
  ]

  countries = [
    "Asian",
    "African",
    "Australian",
    "Austrian",
    "Belgian",
    "Brazilian",
    "Costa Rican",
    "Cuban",
    "Cambodian",
    "Canadian",
    "Egyptian",
    "Euthopian",
    "European",
    "Indian",
  ]


  constructor(
    ){}


    onSubmit(form: NgForm){
      console.log(form)
      this.displayResult = !this.displayResult
    }
}
