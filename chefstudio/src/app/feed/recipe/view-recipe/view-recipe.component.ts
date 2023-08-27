import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBookmark, faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

  faBack1 = faArrowLeft
  faClock = faClock


  selectedRecipe: Recipe | null;
  recipeId: any;
  recipeKeyword: any;

  faBookmark = faBookmark

  constructor(
    private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute, 
    private apiService: ApiServiceService) { }

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
    console.log(typeof (this.recipeKeyword), this.recipeKeyword)

    if (this.recipeId) {

      // this.apiService.getRecipeById(this.recipeId)
      //   .subscribe((response: any) => {
      //     try {
      //       this.selectedRecipe = response['recipe'][0]
      //       console.log(this.selectedRecipe)
      //     } catch (error) {
      //       console.error(error)
      //     }
      //   })

      this.apiService.getRecipeByRecipeId(this.recipeId)
        .subscribe((responseData: Recipe) => {
          try{
            this.selectedRecipe = responseData
            console.log(this.selectedRecipe)
            console.log(this.selectedRecipe?.recipeIngredient)
          } catch (error){
            console.error(error)
          }
        })
    }

    // console.log(this.selectedRecipe?.recipeIngredients)
    // console.log("Ingredients",this.selectedRecipe?.recipeIngredients)
    // console.log("Outside If")
    // if( this.selectedRecipe?.recipeIngredientsArray){
    //   console.log("Inside If")
    //   this.selectedRecipe.recipeInstructionsArray = this.selectedRecipe?.recipeInstructions?.split(".,");
    //   console.log(this.selectedRecipe?.recipeIngredientsArray)
    // }

  }

  backToFeed() {
    this.router.navigate(['feed'])
  }

  // transformStringtoArray(){
  //   var instructionList = this.selectedRecipe?.recipeInstructions.split(".,");
  // }

}
