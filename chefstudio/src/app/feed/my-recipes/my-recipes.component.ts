import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent {
  // faBookmark = faBookmark

  resultArray: Recipe[] = []

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    this.apiService.getRecipesByUserId()
    .subscribe((responseData)=> {
      console.log(responseData)
      this.resultArray = responseData
    })
  }
}
