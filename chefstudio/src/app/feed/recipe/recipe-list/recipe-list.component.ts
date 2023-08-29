import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBookBookmark, faDeleteLeft, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{

  faBookmark = faBookmark
  faBookmarkFilled = faBookBookmark
  faPencil = faPen
  faDelete = faTrash

  currentRoute: string;
  showOptions: Boolean = false;

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router){}

  ngOnInit(): void {
    this.currentRoute = this.router.url;

    if (this.currentRoute === '/recipe/my-recipes'){
      this.showOptions = true;
    }
  }

  onSelected(){
    // this.recipeService.recipeSelected.emit(this.recipe);
    this.router.navigate(['/recipe', this.recipe.recipeId]);
  }

}
