import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

	constructor(private http: HttpClient) { }

	searchRecipeUrl = "http://127.0.0.1:5000/api/v1/search/recipes"
	searchRecipeById = "http://127.0.0.1:5000/api/v1/search/recipeById"

	getRecipes(query: string){
		const queryParams = new HttpParams().append('query', query.trim())
		return this.http.get<any>(this.searchRecipeUrl, {params: queryParams})
	}

	getRecipeById(id: number){
		const queryParams = new HttpParams().append('id', id)
		return this.http.get<Recipe>(this.searchRecipeById, {params: queryParams})
	}
}
