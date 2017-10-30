import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Route inmports
import { RouterModule, Routes} from '@angular/router';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// Flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';

//AngularFire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// for auth    
import { AngularFireAuthModule } from 'angularfire2/auth';
// for database
import { AngularFireDatabaseModule } from 'angularfire2/database';
// for auth
import { AngularFireAuth } from 'angularfire2/auth';
// for Observables
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

//component imports
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuestionListComponent } from './components/faq/question-list/question-list.component';
import { QuestionComponent } from './components/faq/question/question.component';
import { AddQuestionComponent } from './components/faq/add-question/add-question.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/clientapp/dashboard/dashboard.component';
import { ClientsComponent } from './components/clientapp/clients/clients.component';
import { ClientDetailsComponent } from './components/clientapp/client-details/client-details.component';
import { AddClientComponent } from './components/clientapp/add-client/add-client.component';
import { EditClientComponent } from './components/clientapp/edit-client/edit-client.component';
import { SidebarComponent } from './components/clientapp/sidebar/sidebar.component';
import { LoginComponent } from './components/clientapp/login/login.component';
import { RegisterComponent } from './components/clientapp/register/register.component';
import { SettingsComponent } from './components/clientapp/settings/settings.component';
import { PageNotFoundComponent } from './components/clientapp/page-not-found/page-not-found.component';
import { GitComponent } from './components/gitpros/git/git.component';
import { WorkoutComponent } from './components/workouts/workout/workout.component';
import { WeatherComponent } from './components/weather-app/weather/weather.component';

// Service imports
import { DataService } from './services/faq/data.service';
import { ClientService } from './services/clientsapp/client.service';
import { AuthService } from './services/clientsapp/auth.service';
import { SettingsService } from './services/clientsapp/settings.service';
import { GitService } from "./services/gitpros/git.service";
import { WorkoutService } from "./services/workouts/workout.service";
import { WeatherService } from "./services/weather-app/weather.service";

// Guards
import { AuthGuard } from './guards/auth.guard';
import { RegisterGuard } from './guards/register.guard';

const appRoutes: Routes = [
  {path:'', component:HomeComponent,  data:{title: 'Home', depth : 1} },
  {path:'faq', component:QuestionListComponent, data:{title: 'FAQ', depth : 2}},
// GitLookup App routes
  {path:'gitusers', component:GitComponent },
// Workouts app
  {path:'workouts', component:WorkoutComponent},
 // Weather app 
  {path:'weather', component:WeatherComponent },
// Client App Routes
  {path:'clients', component:ClientsComponent, canActivate:[AuthGuard]},
  {path:'register', component:RegisterComponent, canActivate:[RegisterGuard]},
  {path:'login', component:LoginComponent},
  {path:'clients/add-client', component:AddClientComponent, canActivate:[AuthGuard]},
  {path:'clients/client/:id', component:ClientDetailsComponent, canActivate:[AuthGuard]},
  {path:'clients/edit-client/:id', component:EditClientComponent, canActivate:[AuthGuard]},
  {path:'clients/settings', component:SettingsComponent, canActivate:[AuthGuard]},

  

];

export const firebaseConfig = {
  apiKey: "AIzaSyDQ1dVrq8Mvm4s4dLqMhY1SuiJWRu9BuMQ",
  authDomain: "clientapp-1fafd.firebaseapp.com",
  databaseURL: "https://clientapp-1fafd.firebaseio.com",
  projectId: "clientapp-1fafd",
  storageBucket: "clientapp-1fafd.appspot.com",
  messagingSenderId: "19518547539"
};


@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    QuestionListComponent,
    QuestionComponent,
    AddQuestionComponent,
    HomeComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    GitComponent,
    WorkoutComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    AngularFireModule.initializeApp(firebaseConfig, 'clientapp-1fafd'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    FlashMessagesModule,
    HttpModule,
    HttpClientModule
   
 
  ],
  providers: [
              DataService,     
              ClientService,
              AngularFireAuth,
              AuthService,
              AuthGuard,
              SettingsService,
              RegisterGuard,
              GitService,
              WorkoutService,
              WeatherService,
              {provide: LocationStrategy, useClass:  HashLocationStrategy},
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
