import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './onboarding/authentication/login/login.component';
import { RegisterComponent } from './onboarding/authentication/register/register.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  {path: '', component: OnboardingComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
