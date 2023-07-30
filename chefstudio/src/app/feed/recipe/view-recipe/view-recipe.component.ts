import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  selectedRecipe: Recipe | null;
  recipeId: any;

  faBookmark = faBookmark

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private apiService: ApiServiceService) { }

  ngOnInit() {
    // this.recipeService.recipeSelected
    // .subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    //   console.log("Inside view recipe")
    //   console.log(this.selectedRecipe)
    // })
    this.route.params.subscribe(_params => {
      this.recipeId = _params['id']
    })
    console.log(typeof (this.recipeId), this.recipeId)

    if (this.recipeId) {

      this.apiService.getRecipeById(this.recipeId)
        .subscribe((response: any) => {
          try {
            this.selectedRecipe = response['recipe'][0]
          } catch (error) {
            console.error(error)
          }

        })
    }
  }


}