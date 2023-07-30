import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit{

  selectedRecipe: Recipe;

  faBookmark = faBookmark

  constructor(private recipeService: RecipeService){}

  ngOnInit(){
    this.recipeService.recipeSelected
    .subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
      console.log(this.selectedRecipe)
    })
  }
}
