import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  recipeCategory: string;
  resultArray: Recipe[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private apiService: ApiServiceService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(_params => {
      this.recipeCategory = _params['category']
    })
    console.log(this.recipeCategory)
  }
}
