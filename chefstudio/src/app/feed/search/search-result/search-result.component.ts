import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faBookBookmark, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {
  faBookmark = faBookmark
  faBookmarkFilled = faBookBookmark
  // faBookmarkIcon = Bookm
  faPencil = faPen
  faDelete = faTrash

  showOptions: Boolean = false;

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private apiService: ApiServiceService){}

  onSelected(){
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['/recipe', this.recipe.recipeId]);
  }

  onDelete(event: any){
    event.stopPropagation()
    this.apiService.deleteRecipe(this.recipe.recipeId)
    .subscribe(responseData => {
      console.log(responseData)
      window.location.reload()
      // this.router.navigate(['/recipe/my-recipes'])
    })
  }

  onEdit(event:any){
    event.stopPropagation()
    this.router.navigate(['/recipe/edit', this.recipe.recipeId])
  }
}
