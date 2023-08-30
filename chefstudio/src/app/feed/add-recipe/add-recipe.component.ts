import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {

  faUpload = faUpload
  faBack1 = faArrowLeft
  faClock = faClock

  selectedRecipe: Recipe|null;

  constructor(
    private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute, 
    private apiService: ApiServiceService) { }

  backToFeed() {
    this.router.navigate(['feed'])
  }

}
