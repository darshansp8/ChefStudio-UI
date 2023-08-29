import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-keyword-list',
  templateUrl: './keyword-list.component.html',
  styleUrls: ['./keyword-list.component.scss']
})
export class KeywordListComponent implements OnInit{
  recipeKeyword: string;
  resultArray: Recipe[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private apiService: ApiServiceService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(_params => {
      this.recipeKeyword = _params['keyword']
    })
    console.log(this.recipeKeyword)
  }
}
