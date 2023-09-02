import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
export class AddRecipeComponent implements OnInit{

  faUpload = faUpload
  faBack1 = faArrowLeft
  faClock = faClock

  selectedRecipe: Recipe|null;
  recipeInstructions: string[] = [""];
  recipeIngredients: string[] = [""];
  recipeKeywords: string[] = [""];

  addRecipeForm: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private router: Router) { }
  

  ngOnInit(){
    this.addRecipeForm = this._formbuilder.group({
      'Name': "",
      'RecipeCategory': "",
      'Description': "",
      'CookTime': "",
      'PrepTime': "",
      'TotalTime': "",
      'recipeInstructions': this._formbuilder.array([
        this.getInstructionsControl()
      ])
    })
  }

  getInstructionsControl(): FormGroup{
    return this._formbuilder.group({
      instruction: ''
    })
  }

  onSubmit(){
    // const form = document.querySelector("#add_recipe_form")
    console.log(this.addRecipeForm.value)
    // const {} =
  }

  public get instructions(){
    return <FormArray>this.addRecipeForm.get('recipeInstructions')
  }
  addNewInstruction(){
    this.recipeInstructions.push("");
  }

  addNewIngredient(){
    this.recipeIngredients.push("");
  }

  addNewKeyword(){
    this.recipeKeywords.push("");
  }

  backToFeed() {
    this.router.navigate(['feed'])
  }



}
