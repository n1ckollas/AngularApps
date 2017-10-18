import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FirebaseListObservable, FirebaseObjectObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Client } from '../../models/clientsapp/Client';



@Injectable()
export class ClientService {

	clsCollection:AngularFirestoreCollection<Client>;
	cls:any;
	clientDoc: AngularFirestoreDocument<any>;
	client:any;



	constructor( public af:AngularFirestore ) { 
		this.clsCollection =  this.af.collection('clients')
		// this.cls = this.clsCollection.valueChanges();
		this.cls = this.clsCollection.snapshotChanges().map(actions=>{
			return actions.map(a => {
				const data = a.payload.doc.data() as Client;
				const id = a.payload.doc.id
				// console.log(data, id);
				return {data, id}; 
			})
		})
	}

	getClients(){
		return this.cls;
	}

	newClient(client:Client){
		//to add a custom id
		//this.af.collection('clients').doc('mycustom-id').add(client)
		//to makechanges
		////this.af.collection('clients').doc('mycustom-id').set(client)
		this.af.collection('clients').add(client)
	}

	getClient(id:string){
		this.clientDoc = this.af.doc<any>('clients/'+id);
    this.client = this.clientDoc.valueChanges();
		return this.client;
	}
	updateBalance(id, client){
		this.af.collection('clients').doc(id).set(client);
	}

}
