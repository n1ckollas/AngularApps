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
  		console.log('client.details.ts');
  		console.log(this.client);
  	});
  }

}
