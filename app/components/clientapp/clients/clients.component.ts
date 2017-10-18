import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clientsapp/client.service';
import { Client } from '../../../models/clientsapp/Client'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})


export class ClientsComponent implements OnInit {
	clients:any[];
	totalOwed:number;

	constructor( public clientService:ClientService ){ 

	}

	ngOnInit() {
		this.clientService.getClients().subscribe(clients =>{
 			this.clients = clients;
 			// console.log(this.clients[0].id);
 			this.getTotalOwed();
 		});
	}

	getTotalOwed(){
		let total = 0;
		for (let i = 0; i < this.clients.length; i++) {
			total += parseFloat(this.clients[i].data.balance);
		}
		this.totalOwed = total;
	}
}
