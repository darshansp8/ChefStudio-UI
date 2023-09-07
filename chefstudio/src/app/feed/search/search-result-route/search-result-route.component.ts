import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-search-result-route',
  templateUrl: './search-result-route.component.html',
  styleUrls: ['./search-result-route.component.scss']
})
export class SearchResultRouteComponent implements OnInit {

  faBack1 = faArrowLeft

  resultArray: Recipe[] = []
  searchQuery: string;

  constructor(private apiService: ApiServiceService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe(_params => {
      this.searchQuery = _params['search_query']
    })
    if (this.searchQuery) {
        this.apiService.getRecipes(this.searchQuery)
          .pipe(map((responseData: { [x: string]: any[][]; }) => {
            const recipe_details: any = [];
            // recipe_details.push(responseData)
            responseData['recipe_details'][0].forEach((recipe: any) => recipe_details.push(recipe))
            console.log(recipe_details.length)
            return recipe_details;
          }))
          .subscribe((responseData) => {
            this.resultArray = []
            responseData.forEach((recipe: any) => this.resultArray.push(recipe))
  
            // console.log(this.resultArray)
            // console.log(this.resultArray.length)
            // console.log(typeof(this.resultArray[0]?.images))
            this.resultArray.forEach((recipe: any) => JSON.parse(recipe?.images))
            // console.log(this.resultArray[0]?.images?.at(0))
          })
      }
  }

  goBack(){
    this.location.back();
  }

}
