import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clientsapp/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Client } from '../../../models/clientsapp/Client';
import { SettingsService } from '../../../services/clientsapp/settings.service';


@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
	id:string;
	client:Client={
		firstName:'',
		lastName:'',
		email:'',
		phone:'',
		balance:0,
	}

	disableBalanceOnEdit:boolean = false;

  constructor(
	  	public clientService:ClientService,
	  	public router:Router,
	  	public route:ActivatedRoute,
	  	public flashMessagesService:FlashMessagesService,
      public settingsService:SettingsService,
  	) { }

  ngOnInit() {
  	this.id = this.route.snapshot.params['id'];

  	//get Client
  	this.clientService.getClient(this.id).subscribe(client => {
  		this.client = client;
  	});

    this.disableBalanceOnEdit = this.settingsService.getSettings().disableBalanceOnEdit;

  }

   onSubmit({value, valid}:{value:Client, valid:boolean}){
  	if(!valid){
  		this.flashMessagesService.show('Please fill in all the opthions', {cssClass:'alert-danger ', timeout:4000});
      this.router.navigate(['/clients/edit-client/'+ this.id]);
  	}else{
  		//add a new client
      this.clientService.updateClient(this.id, value);
      this.flashMessagesService.show('Client Updated', {cssClass:'alert-success', timeout:4000});
      this.router.navigate(['/clients/client/'+ this.id]);
  	}
  }

}
