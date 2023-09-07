import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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

  // recipeInstructions: string[] = [""];
  // recipeIngredients: string[] = [""];
  // recipeKeywords: string[] = [""];

  addRecipeForm: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceService) { }
  

  ngOnInit(){
    this.addRecipeForm = this._formbuilder.group({
      'Name': ["", [Validators.required]],
      'RecipeCategory': ["", [Validators.required]],
      'Description': ["", [Validators.required]],
      'CookTime': "",
      'PrepTime': "",
      'TotalTime': "",
      'recipeInstructions': this._formbuilder.array([]),
      'recipeIngredients': this._formbuilder.array([]),
      'recipeKeywords': this._formbuilder.array([])
    })
  }

  newInstruction(): FormGroup{
    return this._formbuilder.group({
      instruction: ''
    })
  }

  newIngredient(): FormGroup{
    return this._formbuilder.group({
      ingredient: ''
    })
  }

  newKeyword(): FormGroup{
    return this._formbuilder.group({
      keyword: ''
    })
  }

  onSubmit(){
    // const form = document.querySelector("#add_recipe_form")
    const {Name, Description, RecipeCategory, CookTime, PrepTime, TotalTime} = this.addRecipeForm.value
    const data = {
      Name, Description, RecipeCategory, CookTime, PrepTime, TotalTime, RecipeIngredientParts: '', RecipeInstructions: '', Keywords: '', Images: ''
    }
    // console.log(this.addRecipeForm.value)
    data.RecipeIngredientParts = JSON.stringify(this.addRecipeForm.value.recipeIngredients.map((_record: { ingredient: any; }) => `${_record.ingredient}`.trim()))
    data.RecipeInstructions = JSON.stringify(this.addRecipeForm.value.recipeInstructions.map((_record: { instruction: any; }) => `${_record.instruction}`.trim()))
    data.Keywords = JSON.stringify(this.addRecipeForm.value.recipeKeywords.map((_record: { keyword: any; }) => `${_record.keyword}`.trim()))
    data.Images = JSON.stringify([])
    console.log(data)
    // const {} =
    this.apiService.addRecipe(data)
    .subscribe({next: responseData => {
      console.log(responseData)
      this.router.navigate(['/recipe/my-recipes'])
    }, error: error => {
      console.log(error)
    }
  })

  }

  get instructions(){
    return <FormArray>this.addRecipeForm.get('recipeInstructions')
  }

  get ingredients(){
    return <FormArray>this.addRecipeForm.get('recipeIngredients') 
  }

  get keywords(){
    return <FormArray>this.addRecipeForm.get('recipeKeywords') 
  }

  addNewInstruction(){
    this.instructions.push(this.newInstruction());
  }

  addInstructionAfter(i: number){
    this.instructions.insert(i+1, this.newInstruction());
  }

  removeInstruction(i:number){
    this.instructions.removeAt(i)
  }

  addNewIngredient(){
    this.ingredients.push(this.newIngredient());
  }

  addIngredientAfter(i: number){
    this.ingredients.insert(i+1, this.newIngredient());
  }

  removeIngredient(i:number){
    this.ingredients.removeAt(i)
  }

  addNewKeyword(){
    this.keywords.push(this.newKeyword());
  }

  addKeywordAfter(i: number){
    this.keywords.insert(i+1, this.newKeyword());
  }

  removeKeyword(i:number){
    this.keywords.removeAt(i)
  }



  backToFeed() {
    this.router.navigate(['feed'])
  }



}
