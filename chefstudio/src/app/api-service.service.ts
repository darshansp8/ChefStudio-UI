import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

	constructor(private http: HttpClient) { }

	searchRecipeUrl = "http://127.0.0.1:5000/api/v1/search/recipes"
	searchRecipeById = "http://127.0.0.1:5000/api/v1/search/recipeById"
	getRecipesByUserIdUrl = "http://127.0.0.1:3000/recommend"

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
}
