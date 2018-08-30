import {Product} from "./stock.model";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Leverancier} from "../leveranciers/leveranciers.model";


@Injectable()
export class StockService {
    producten: Product[] = [];
    productIsEdit = new EventEmitter<Product>();
    constructor(private http: Http) {}

    addProduct(product: Product) {
        this.producten.push(product);
        const body = JSON.stringify(product);
        console.log( product + "service");
        console.log("jippie hopelijk---------------------------" + product.naam);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/stock', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    getProducten() {
        console.log("service");
        return this.http.get('http://localhost:3000/stock/')
            .map((response: Response) => {
                const producten = response.json().obj;
                let transformedStock: Product[] = [];
                for (let product of producten) {
                    transformedStock.push(new Product(product.naam, product.stuks, product.individueleprijs, product._id));
                }
                this.producten = transformedStock;
                return transformedStock;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    deleteProduct(product: Product){
            this.producten.splice(this.producten.indexOf(product),1);
            return this.http.delete('http://localhost:3000/stocks/' + product.id)
                .map((response: Response) => response.json())
                .catch((error:Response) => Observable.throw(error.json()))
    }
    updateProduct(product: Product){
        console.log("service");
        const body = JSON.stringify(product);
        console.log(product.id);
        const headers = new Headers({'Content-Type' : 'application/json'})
        return this.http.put('http://localhost:3000/stocks/' + product.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }




}