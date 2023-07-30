import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  faBookmark = faBookmark

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router){}

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['/recipe', this.recipe.recipeId]);
    
  }
}
