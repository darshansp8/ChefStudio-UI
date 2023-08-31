import { Component, OnInit } from '@angular/core';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss']
})
export class SavedComponent implements OnInit{
  faBookmark = faBookmark

  resultArray: Recipe[] = []

  constructor(private apiService: ApiServiceService){}

  ngOnInit(): void {
    this.apiService.getSavedRecipe()
    .subscribe((responseData)=> {
      console.log(responseData.response)
      this.resultArray = responseData.response
    })
  }
}
