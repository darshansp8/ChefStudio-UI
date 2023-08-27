import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
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
  { path: 'recipe/:id', component: ViewRecipeComponent},
  {path: 'recipe/:keyword', component: ViewRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
