import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ApiServiceService } from 'src/app/api-service.service';
import { Recipe } from 'src/app/recipe.model';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.scss']
})
export class MyRecipesComponent {
  // faBookmark = faBookmark

  faBack1 = faArrowLeft

  resultArray: Recipe[] = []

  constructor(private apiService: ApiServiceService, private router: Router){}

  ngOnInit(): void {
    this.apiService.getCreatedRecipe()
    .subscribe((responseData)=> {
      console.log(responseData)
      this.resultArray = responseData.response
    })
  }

  backToFeed() {
    this.router.navigate(['feed/user-profile'])
  }

}
