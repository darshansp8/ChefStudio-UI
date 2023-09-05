import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faBookmark, faClock, faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
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
  faStarRegular = faStarRegular
  faStarSolid = faStarSolid


  selectedRecipe: Recipe | null;
  recipeId: any;
  recipeKeyword: any;
  allReviews: any[] = [];
  averageRating: number;
  reviewsLength = 0;
  saveRecipe: Boolean;

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

      this.apiService.getReviews(this.recipeId)
        .subscribe(reviewsData => {
          try{
            this.allReviews = reviewsData?.reviews
            this.reviewsLength = reviewsData?.reviews?.length
            this.averageRating = reviewsData?.average_rating
          } catch(error){
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

  onCategorySelected(category:string|undefined){
    if (category){
      this.router.navigate(['recipe/category', category])
    }
  }

  onKeywordSelected(keyword:string|undefined){
    if (keyword){
      this.router.navigate(['recipe/keyword', keyword])
    }
  }
  // transformStringtoArray(){
  //   var instructionList = this.selectedRecipe?.recipeInstructions.split(".,");
  // }

  toggleSave(){
    this.saveRecipe = !this.saveRecipe;
    console.log(this.saveRecipe)
    this.apiService.saveRecipe(this.recipeId, this.saveRecipe)
    .subscribe(responseData => {
      console.log(responseData)
    })
  }
}
