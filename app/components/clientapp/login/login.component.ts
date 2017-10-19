import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../../../services/clientsapp/auth.service';
import { SettingsService } from '../../../services/clientsapp/settings.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[AuthService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email:string;
	password:string;
  showRegister:boolean;

  constructor(private afAuth: AngularFireAuth,
  						private authService:AuthService,
  						private router: Router,
  						private flashMessagesService:FlashMessagesService,
              public settingsService:SettingsService) { }

  ngOnInit() {
    this.showRegister = this.settingsService.getSettings().allowRegistration;
  }

  onSubmit(){
  	this.authService.login(this.email, this.password).then((res)=>{
  		this.flashMessagesService.show('You are logged in', { cssClass: 'alert-success',timeout: 4000});
  		this.router.navigate(['/clients']);
  	})
  	.catch((err) => {
  		this.flashMessagesService.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
  		this.router.navigate(['/login']);

  	})
  }

}
