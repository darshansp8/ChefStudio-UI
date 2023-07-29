import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

	constructor(private http: HttpClient) { }

	searchRecipeUrl = "http://127.0.0.1:5000/api/v1/search/recipe"

	getRecipes(query: string){
		let queryParams = new HttpParams().append('query', query)
		return this.http.get<any>(this.searchRecipeUrl, {params: queryParams})
	}

}
