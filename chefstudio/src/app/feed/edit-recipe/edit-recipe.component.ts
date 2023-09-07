import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faArrowLeft, faUpload } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent {
  faUpload = faUpload
  faBack1 = faArrowLeft
  faClock = faClock

  recipeId: any;
  selectedRecipe: Recipe | null;
  // recipeInstructions: string[] = [""];
  // recipeIngredients: string[] = [""];
  // recipeKeywords: string[] = [""];

  editRecipeForm: FormGroup;

  constructor(
    private _formbuilder: FormBuilder,
    private router: Router,
    private apiService: ApiServiceService,
    private route: ActivatedRoute) { }
  

  ngOnInit(){
    this.editRecipeForm = this._formbuilder.group({
      'Name': ['', [Validators.required]],
      'RecipeCategory': ['', [Validators.required]],
      'Description': ['', [Validators.required]],
      'CookTime': '',
      'PrepTime': '',
      'TotalTime': '',
      'recipeInstructions': this._formbuilder.array([]),
      'recipeIngredients': this._formbuilder.array([]),
      'recipeKeywords': this._formbuilder.array([])
    })
    this.route.params.subscribe(_params => {
      this.recipeId = _params['id']
    })

    this.apiService.getRecipeByRecipeId(this.recipeId)
        .subscribe((responseData: Recipe) => {
          try{
            this.selectedRecipe = responseData
            console.log(this.selectedRecipe)
            console.log(this.selectedRecipe?.recipeIngredient)
            const _recipeInstructions = this.selectedRecipe?.recipeInstructions?this.selectedRecipe?.recipeInstructions:[]
            const _recipeIngredients = this.selectedRecipe?.recipeIngredient?this.selectedRecipe?.recipeIngredient:[]
            const _recipeKeywords = this.selectedRecipe?.keywords?this.selectedRecipe?.keywords:[]
            this.editRecipeForm = this._formbuilder.group({
              'Name': ['', [Validators.required]],
              'RecipeCategory': ['', [Validators.required]],
              'Description': ['', [Validators.required]],
              'CookTime': '',
              'PrepTime': '',
              'TotalTime': '',
              'recipeInstructions': this._formbuilder.array(_recipeInstructions?.map(_record => this.buildInstructions(_record))),
              'recipeIngredients': this._formbuilder.array(_recipeIngredients?.map((_record: string) => this.buildIngredients(_record))),
              'recipeKeywords': this._formbuilder.array(_recipeKeywords?.map((_record: string) => this.buildKeywords(_record)))
            })

            this.editRecipeForm.patchValue({
              'Name': this.selectedRecipe?.name,
              'RecipeCategory': this.selectedRecipe?.category,
              'Description': this.selectedRecipe?.description,
              'CookTime': this.selectedRecipe?.cookTime,
              'PrepTime': this.selectedRecipe?.prepTime,
              'TotalTime': this.selectedRecipe?.totalTime,
            })
          } catch (error){
            console.error(error)
          }
        })


    console.log(this.editRecipeForm.value)

  }

  buildInstructions(instruction: any): FormGroup{
    return new FormGroup({
      instruction: new FormControl(instruction)
    })
  }

  buildIngredients(ingredient: any): FormGroup{
    return new FormGroup({
      ingredient: new FormControl(ingredient)
    })
  }

  buildKeywords(keyword: any): FormGroup{
    return new FormGroup({
      keyword: new FormControl(keyword)
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
    const {Name, Description, RecipeCategory, CookTime, PrepTime, TotalTime} = this.editRecipeForm.value
    const data = {
      Name, Description, RecipeCategory, CookTime, PrepTime, TotalTime, RecipeIngredientParts: '', RecipeInstructions: '', Keywords: '', Images: ''
    }
    // console.log(this.editRecipeForm.value)
    data.RecipeIngredientParts = JSON.stringify(this.editRecipeForm.value.recipeIngredients.map((_record: { ingredient: any; }) => `${_record.ingredient}`.trim()))
    data.RecipeInstructions = JSON.stringify(this.editRecipeForm.value.recipeInstructions.map((_record: { instruction: any; }) => `${_record.instruction}`.trim()))
    data.Keywords = JSON.stringify(this.editRecipeForm.value.recipeKeywords.map((_record: { keyword: any; }) => `${_record.keyword}`.trim()))
    data.Images = JSON.stringify([])
    console.log(data)
    // const {} =
    this.apiService.editRecipe(this.recipeId, data)
    .subscribe({next: responseData => {
      console.log(responseData)
      this.router.navigate(['/recipe/', this.recipeId])
    }, error: error => {
      console.log(error)
    }
  })

  }

  get instructions(){
    return <FormArray>this.editRecipeForm.get('recipeInstructions')
  }

  get ingredients(){
    return <FormArray>this.editRecipeForm.get('recipeIngredients') 
  }

  get keywords(){
    return <FormArray>this.editRecipeForm.get('recipeKeywords') 
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
