var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Product } from "./stock.model";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { EventEmitter, Injectable } from "@angular/core";
import 'rxjs/Rx';
var StockService = (function () {
    function StockService(http) {
        this.http = http;
        this.producten = [];
        this.productIsEdit = new EventEmitter();
    }
    StockService.prototype.addProduct = function (product) {
        this.producten.push(product);
        var body = JSON.stringify(product);
        console.log(product + "service");
        console.log("jippie hopelijk---------------------------" + product.naam);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://winkelbeheer.herokuapp.com/stock', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    StockService.prototype.getProducten = function () {
        var _this = this;
        console.log("service");
        return this.http.get('https://winkelbeheer.herokuapp.com/stock/')
            .map(function (response) {
            var producten = response.json().obj;
            var transformedStock = [];
            for (var _i = 0, producten_1 = producten; _i < producten_1.length; _i++) {
                var product = producten_1[_i];
                transformedStock.push(new Product(product.naam, product.stuks, product.individueleprijs, product._id));
            }
            _this.producten = transformedStock;
            return transformedStock;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    StockService.prototype.deleteProduct = function (product) {
        this.producten.splice(this.producten.indexOf(product), 1);
        return this.http.delete('https://winkelbeheer.herokuapp.com/stocks/' + product.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    StockService.prototype.updateProduct = function (product) {
        console.log("service");
        var body = JSON.stringify(product);
        console.log(product.id);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://winkelbeheer.herokuapp.com/stocks/' + product.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return StockService;
}());
StockService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], StockService);
export { StockService };
