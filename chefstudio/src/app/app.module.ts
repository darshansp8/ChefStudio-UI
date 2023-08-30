import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { LoginComponent } from './onboarding/authentication/login/login.component';
import { RegisterComponent } from './onboarding/authentication/register/register.component';
import { UserDetailsComponent } from './onboarding/user-details/user-details.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './feed/home/home.component';
import { SearchComponent } from './feed/search/search.component';
import { UserProfileComponent } from './feed/user-profile/user-profile.component';
import { FeedNavigationComponent } from './feed/feed-navigation/feed-navigation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './feed/search/search-result/search-result.component';
import { ViewRecipeComponent } from './feed/recipe/view-recipe/view-recipe.component';
import { ToStringArrayPipe } from './pipes/to-string-array.pipe';
import { RecipeListComponent } from './feed/recipe/recipe-list/recipe-list.component';
import { CategoryListComponent } from './feed/category-list/category-list.component';
import { KeywordListComponent } from './feed/keyword-list/keyword-list.component';
import { AddRecipeComponent } from './feed/add-recipe/add-recipe.component';
import { EditRecipeComponent } from './feed/edit-recipe/edit-recipe.component';
import { MyRecipesComponent } from './feed/my-recipes/my-recipes.component';
import { SavedComponent } from './feed/saved/saved.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OnboardingComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    FeedComponent,
    HomeComponent,
    SearchComponent,
    UserProfileComponent,
    FeedNavigationComponent,
    SearchResultComponent,
    ViewRecipeComponent,
    ToStringArrayPipe,
    RecipeListComponent,
    CategoryListComponent,
    KeywordListComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    MyRecipesComponent,
    SavedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
