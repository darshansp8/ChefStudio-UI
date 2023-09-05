import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleLeft, faArrowLeft, faBookBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  faSearch = faSearch
  faBookmark = faBookmark
  faBack = faArrowAltCircleLeft
  faBack1 = faArrowLeft
  displayResult = false
  modalFlag = false
  searchQuery = ''
  resultArray: Recipe[] = []

  diet_preferences = [
    "Vegan",
    "Vegetable",
    "Chicken"
  ]

  cooking_time = [
    "< 15 Mins",
    "< 30 Mins",
    "< 60 Mins",
    "< 4 Hours",
  ]

  cooking_style = [
    "Pressure Cooker",
    "Microwave",
    "Deep Fried",
    "No Cook",
    "Baking"
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
    private apiservice: ApiServiceService
  ) { }

  ngOnInit() {
    console.log(this.countries)
    for (const recipe in this.resultArray) {
      console.log(recipe)
    }
  }


  onSubmit(form: NgForm) {
    console.log(form)
    this.searchQuery = form.value.search.trim()
    console.log(this.searchQuery)

    if (this.searchQuery) {
	  this.displayResult = !this.displayResult
      this.apiservice.getRecipes(this.searchQuery)
        .pipe(map(responseData => {
          const recipeArray = [];
          const recipe_details: any = [];
          // recipe_details.push(responseData)
          responseData['recipe_details'][0].forEach((recipe: any) => recipe_details.push(recipe))
          console.log(recipe_details.length)
          // for (const key in recipe_details){
          //   if (recipe_details.hasOwnProperty(key)){
          //     recipeArray.push({ ...recipe_details[key], id: key })
          //   }
          // }
          return recipe_details;
        }))
        .subscribe((responseData) => {
          this.resultArray = []
          // console.log(responseData[0][2])
          // console.log(typeof(responseData))
          // for (const recipe in responseData){
          //   console.log(recipe)
          //   this.resultArray.push(responseData[recipe][0])
          // }
          responseData.forEach((recipe: any) => this.resultArray.push(recipe))

          console.log(this.resultArray)
          console.log(this.resultArray.length)
          console.log(typeof(this.resultArray[0]?.images))
          this.resultArray.forEach((recipe: any) => JSON.parse(recipe?.images))
          // console.log(this.resultArray[0]?.images?.at(0))
        })
    }
  }

  closeSearchResult() {
    this.displayResult = !this.displayResult
    console.log(this.displayResult)
  }


  showModal() {
    this.modalFlag = !this.modalFlag
  }
}
