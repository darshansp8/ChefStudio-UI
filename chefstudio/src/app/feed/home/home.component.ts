import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  faBookmark = faBookmark

  resultArray: Recipe[] = []

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    this.apiService.getRecipesByUserId()
    .subscribe((responseData)=> {
      console.log(responseData)
      this.resultArray = responseData
    })
  }
}
