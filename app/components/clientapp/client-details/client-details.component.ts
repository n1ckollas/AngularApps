import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clientsapp/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Client } from '../../../models/clientsapp/Client';


@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
	id:string;
	client: Client;
	hasBalance:boolean = false;
	showBalanceUpdateInput:boolean = false;
	errorMessage:any;
	constructor(
  	public clientService:ClientService,
  	public router:Router,
  	public route:ActivatedRoute,
  	public flashMessagesService:FlashMessagesService,
  	) { }

  ngOnInit() {
  	// get id
  	this.id = this.route.snapshot.params['id'];
  	console.log(this.id);

  	//Get client
  	this.clientService.getClient(this.id).subscribe(client => {
  		this.client = client;
  		// console.log('client.details.ts');
  		// console.log(this.client);
  	},
  	error => this.errorMessage = <any>error,
  	() => this.router.navigate(['clients'])
  	);
  }

  updateBalance(id:string, client:Client){
  	this.clientService.updateBalance(id, client);
  	this.flashMessagesService.show('Balance Updated', {cssClass: 'alert-success', timeout:4000});
  	this.router.navigate(['clients/']);
  }


}
