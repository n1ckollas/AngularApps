import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Route inmports
import { RouterModule, Routes} from '@angular/router';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

// Flash messages
import { FlashMessagesModule } from 'angular2-flash-messages';



//AngularFire Imports
import {AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// for auth    
import {AngularFireAuthModule} from 'angularfire2/auth';
// for database
import {AngularFireDatabaseModule} from 'angularfire2/database';
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

// Service imports
import { DataService } from './services/faq/data.service';
import { ClientService } from './services/clientsapp/client.service';


const appRoutes: Routes = [
  {path:'', component:HomeComponent, data:{title: 'Home', depth : 1}},
  {path:'faq', component:QuestionListComponent, data:{title: 'FAQ', depth : 2}},

  {path:'clients', component:ClientsComponent},
  {path:'clients/register', component:RegisterComponent},
  {path:'clients/login', component:LoginComponent},
  {path:'clients/add-client', component:AddClientComponent},
  {path:'clients/client/:id', component:ClientDetailsComponent},

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig, 'clientapp-1fafd'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    FlashMessagesModule,

  ],
  providers: [DataService,     
              // AngularFireDatabase,
              // AngularFireAuth,
              ClientService,
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
