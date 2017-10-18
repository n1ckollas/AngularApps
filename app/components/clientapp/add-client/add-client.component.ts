import { Component, OnInit } from '@angular/core';
import { Client } from '../../../models/clientsapp/Client';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router';
import { ClientService } from '../../../services/clientsapp/client.service';



@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
	client:Client={
		   	firstName:'',
		   	lastName:'',
		   	email:'',
		   	phone:'',
		   	balance:0
		}
	disableBalanceOnAdd:boolean = false;

  constructor( public falshMessagesService:FlashMessagesService,
               public router:Router,
               public clientService:ClientService ) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value:Client, valid:boolean}){
    if(this.disableBalanceOnAdd){
      value.balance = 0;
    }
  	if(!valid){
  		this.falshMessagesService.show('Please fill in all the opthions', {cssClass:'alert-danger ', timeout:4000});
      this.router.navigate(['clients/add-client']);
  	}else{
  		//add a new client
      this.clientService.newClient(value);
      this.falshMessagesService.show('New Client Added', {cssClass:'alert-success', timeout:4000});
      this.router.navigate(['clients']);
  	}
  }

}
