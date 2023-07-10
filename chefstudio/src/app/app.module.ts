import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FeedNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
