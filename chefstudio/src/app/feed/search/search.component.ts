import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FaConfig } from '@fortawesome/angular-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faArrowAltCircleLeft, faArrowLeft, faBookBookmark, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { map } from 'rxjs/operators';
import { Recipe } from 'src/app/recipe.model';
import { Router } from '@angular/router';

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
    private apiService: ApiServiceService,
    private router: Router
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

    this.router.navigate(['feed/search-results', this.searchQuery])
  }

  closeSearchResult() {
    this.displayResult = !this.displayResult
    console.log(this.displayResult)
  }


  showModal() {
    this.modalFlag = !this.modalFlag
  }
}
