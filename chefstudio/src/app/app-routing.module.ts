import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './feed/add-recipe/add-recipe.component';
import { CategoryListComponent } from './feed/category-list/category-list.component';
import { EditRecipeComponent } from './feed/edit-recipe/edit-recipe.component';
import { FeedComponent } from './feed/feed.component';
import { KeywordListComponent } from './feed/keyword-list/keyword-list.component';
import { MyRecipesComponent } from './feed/my-recipes/my-recipes.component';
import { ViewRecipeComponent } from './feed/recipe/view-recipe/view-recipe.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './onboarding/authentication/login/login.component';
import { RegisterComponent } from './onboarding/authentication/register/register.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { UserDetailsComponent } from './onboarding/user-details/user-details.component';

const routes: Routes = [
  {path: '', component: OnboardingComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user-details', component: UserDetailsComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'recipe', component: ViewRecipeComponent},
  {path: 'recipe/category/:category', component: CategoryListComponent},
  {path: 'recipe/keyword/:keyword', component: KeywordListComponent},
  {path: 'recipe/add', component: AddRecipeComponent},
  {path: 'recipe/edit/:id', component: EditRecipeComponent},
  {path: 'recipe/my-recipes', component: MyRecipesComponent}, // Show edit and delete option for recipe card for this route
  {path: 'recipe/:id', component: ViewRecipeComponent},
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
