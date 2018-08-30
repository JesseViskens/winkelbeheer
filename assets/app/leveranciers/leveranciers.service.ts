import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Leverancier} from "./leveranciers.model";
import {Product} from "../stock/stock.model";


@Injectable()
export class LeveranciersService {
    leveranciers: Leverancier[] = [];
    leverancierIsEdit = new EventEmitter<Leverancier>();


    constructor(private http: Http) {
    }

    addLeverancier(leverancier: Leverancier) {
        this.leveranciers.push(leverancier);
        const body = JSON.stringify(leverancier);
        const headers = new Headers({'Content-Type': 'application/json'});
        console.log("jeej"+ leverancier.naam+ "---------------------------------------------------------");
        return this.http.post('https://winkelbeheer.herokuapp.com/leveranciers', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error))

    };
    getLeverancier() {
        return this.http.get('https://winkelbeheer.herokuapp.com/leveranciers')
            .map((response: Response) => {
                const leveranciers = response.json().obj;
                let transformedLeveranciers: Leverancier[] = [];
                for (let leverancier of leveranciers) {
                    transformedLeveranciers.push(new Leverancier(leverancier.naam,leverancier.datum,leverancier.bedrag,leverancier.beschrijving,leverancier._id));
                }
                this.leveranciers = transformedLeveranciers;
                return transformedLeveranciers;
            })
            .catch((error: Response) => Observable.throw(error))
    };
    deleteLeverancier(leverancier: Leverancier){
        console.log(leverancier.id + "---- service");
        return this.http.delete('https://winkelbeheer.herokuapp.com/leveranciers/' + leverancier.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()));


    }
    updateLeverancier(leverancier: Leverancier){
        console.log("service");
        const body = JSON.stringify(leverancier);
        console.log(leverancier);
        const headers = new Headers({'Content-Type' : 'application/json'})
        return this.http.put('https://winkelbeheer.herokuapp.com/leveranciers/' + leverancier.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
}