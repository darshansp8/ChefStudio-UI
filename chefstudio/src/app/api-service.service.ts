import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

	constructor(private http: HttpClient) { }

	searchRecipeUrl = "http://127.0.0.1:5000/api/v1/search/recipes";
	searchRecipeById = "http://127.0.0.1:5000/api/v1/search/recipeById";
	getRecipesByUserIdUrl = "http://127.0.0.1:3000/recommend";
	getRecipeByIdUrl = "http://127.0.0.1:3000/getrecipebyid";
	getSavedRecipeUrl = "http://127.0.0.1:3000/saved-recipe";
	getReviewsByRecipeIdUrl = "http://127.0.0.1:3000/get-reviews/";
	getRecipesByCategoryUrl = "http://127.0.0.1:3000/getrecipesbycategory/";
	getRecipesByKeywordUrl = "http://127.0.0.1:3000/getrecipesbykeyword/";
	saveRecipeUrl = "http://127.0.0.1:3000/save-recipe";

	getRecipes(query: string){
		const queryParams = new HttpParams().append('query', query.trim())
		return this.http.get<any>(this.searchRecipeUrl, {params: queryParams})
	}

	getRecipeById(id: number): Observable<Recipe[]>{
		const queryParams = new HttpParams().append('id', id)
		return this.http.get<Recipe[]>(this.searchRecipeById, {params: queryParams})
	}

	getRecipesByUserId(){
		return this.http.get<any>(this.getRecipesByUserIdUrl)
	}

	getRecipeByRecipeId(id: number): Observable<Recipe>{
		const queryParams = new HttpParams().append('id', id)
		return this.http.get<Recipe>(this.getRecipeByIdUrl, {params: queryParams})
	}

	getSavedRecipe(){
		return this.http.get<any>(this.getSavedRecipeUrl)
	}

	getReviews(id: number|string){
		// const queryParams = new HttpParams().append('id', id)
		return this.http.get<any>(this.getReviewsByRecipeIdUrl+id)
	}

	getRecipesByCategory(category: string){
		return this.http.get<any>(this.getRecipesByCategoryUrl+category)
	}

	getRecipesByKeyword(keyword: string){
		return this.http.get<any>(this.getRecipesByKeywordUrl+keyword)
	}

	saveRecipe(recipeId: number, saveFlag: any){
		const params = new HttpParams().set('RecipeId', recipeId).set('save', saveFlag)
		return this.http.get<any>(this.saveRecipeUrl, {params: params})
	}

}
