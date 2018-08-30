import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Pakket} from "./pakket.model";
import {Pakketitem} from "./pakketitem.model";
import {he} from "ngx-bootstrap";


@Injectable()
export class PakketService {
    pakketten: Pakket[] = [];
    pakketitems: Pakketitem[] =[];
    pakketIsEdit = new EventEmitter<Pakket>();
    pakketDetail = new EventEmitter<Pakket>();
    pakketitemIsEdit = new EventEmitter<Pakket>();

    constructor(private http: Http) {}

    addPakket(pakket: Pakket) {
        this.pakketten.push(pakket);
        const body = JSON.stringify(pakket);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/pakket', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    addPakketItem(pakketitem: Pakketitem) {
        console.log(pakketitem);
        this.pakketitems.push(pakketitem);
        const body = JSON.stringify(pakketitem);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/pakketitems', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    getPakketten() {
        return this.http.get('http://localhost:3000/pakket')
            .map((response: Response) => {
                const pakketten = response.json().obj;
                let transformedPakketten: Pakket[] = [];
                for (let pakket of pakketten) {
                    transformedPakketten.push(new Pakket(pakket.naam,pakket.totaalprijs,pakket.korting,pakket.pakketid, pakket._id));
                }
                this.pakketten = transformedPakketten;
                return transformedPakketten;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getPakketItems() {
        return this.http.get('http://localhost:3000/pakketitems')
            .map((response: Response) => {
                const pakketitems = response.json().obj;
                let transformedpakketItems: Pakketitem[] = [];
                for (let pakketitem of pakketitems) {
                    transformedpakketItems.push(new Pakketitem(pakketitem.pakketid,pakketitem.naam, pakketitem.aantal, pakketitem._id));
                }
                this.pakketitems = transformedpakketItems;
                return transformedpakketItems;
            })
            .catch((error:Response) => Observable.throw(error));
    };

    updatePakket(pakket: Pakket){
        console.log("service:");
        const body = JSON.stringify(pakket);
        console.log(pakket.id +"hieeeeer");
        console.log(pakket);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/pakket/' + pakket.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    updatePakketItem(pakketItem: Pakketitem){
        console.log(pakketItem);
        const body = JSON.stringify(pakketItem);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/pakketitems/' + pakketItem.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }

    deletePakket(pakket: Pakket){
        console.log(pakket.id + "service");
        console.log('http://localhost:3000/pakket/' + pakket.id);
        return this.http.delete('http://localhost:3000/pakket/' + pakket.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }

    deletePakketItem(pakketItem: Pakketitem){
        this.pakketitems.splice(this.pakketitems.indexOf(pakketItem),pakketItem.aantal);
        console.log(pakketItem.id);
        return this.http.delete('http://localhost:3000/pakketitems/' + pakketItem.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }
    getPakket(pakket: Pakket) {
        console.log("service : "+'http://localhost:3000/pakket/' + pakket.id);
        return this.http.get('http://localhost:3000/pakket/' + pakket.id)
            .map((response: Response) => {
                const klant = response.json().obj;
                return klant;
            })
            .catch((error:Response) => Observable.throw(error))
    };



}