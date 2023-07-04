import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  {path: '', component: OnboardingComponent},
  {path: 'header', component: HeaderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
