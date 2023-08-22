import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  faBookmark = faBookmark
  faBookmarkFilled = faBookBookmark

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router){}

  onSelected(){
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['/recipe', this.recipe.recipeId]);
  }

}
