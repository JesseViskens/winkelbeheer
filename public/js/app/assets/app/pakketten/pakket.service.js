var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { EventEmitter, Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Pakket } from "./pakket.model";
import { Pakketitem } from "./pakketitem.model";
var PakketService = (function () {
    function PakketService(http) {
        this.http = http;
        this.pakketten = [];
        this.pakketitems = [];
        this.pakketIsEdit = new EventEmitter();
        this.pakketDetail = new EventEmitter();
        this.pakketitemIsEdit = new EventEmitter();
    }
    PakketService.prototype.addPakket = function (pakket) {
        this.pakketten.push(pakket);
        var body = JSON.stringify(pakket);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://winkelbeheer.herokuapp.com/pakket', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    PakketService.prototype.addPakketItem = function (pakketitem) {
        console.log(pakketitem);
        this.pakketitems.push(pakketitem);
        var body = JSON.stringify(pakketitem);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://winkelbeheer.herokuapp.com/pakketitems', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    PakketService.prototype.getPakketten = function () {
        var _this = this;
        return this.http.get('https://winkelbeheer.herokuapp.com/pakket')
            .map(function (response) {
            var pakketten = response.json().obj;
            var transformedPakketten = [];
            for (var _i = 0, pakketten_1 = pakketten; _i < pakketten_1.length; _i++) {
                var pakket = pakketten_1[_i];
                transformedPakketten.push(new Pakket(pakket.naam, pakket.totaalprijs, pakket.korting, pakket.pakketid, pakket._id));
            }
            _this.pakketten = transformedPakketten;
            return transformedPakketten;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    PakketService.prototype.getPakketItems = function () {
        var _this = this;
        return this.http.get('https://winkelbeheer.herokuapp.com/pakketitems')
            .map(function (response) {
            var pakketitems = response.json().obj;
            var transformedpakketItems = [];
            for (var _i = 0, pakketitems_1 = pakketitems; _i < pakketitems_1.length; _i++) {
                var pakketitem = pakketitems_1[_i];
                transformedpakketItems.push(new Pakketitem(pakketitem.pakketid, pakketitem.naam, pakketitem.aantal, pakketitem._id));
            }
            _this.pakketitems = transformedpakketItems;
            return transformedpakketItems;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    PakketService.prototype.updatePakket = function (pakket) {
        console.log("service:");
        var body = JSON.stringify(pakket);
        console.log(pakket.id + "hieeeeer");
        console.log(pakket);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://winkelbeheer.herokuapp.com/pakket/' + pakket.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PakketService.prototype.updatePakketItem = function (pakketItem) {
        console.log(pakketItem);
        var body = JSON.stringify(pakketItem);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://winkelbeheer.herokuapp.com/pakketitems/' + pakketItem.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PakketService.prototype.deletePakket = function (pakket) {
        console.log(pakket.id + "service");
        console.log('http://localhost:3000/pakket/' + pakket.id);
        return this.http.delete('https://winkelbeheer.herokuapp.com/pakket/' + pakket.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PakketService.prototype.deletePakketItem = function (pakketItem) {
        this.pakketitems.splice(this.pakketitems.indexOf(pakketItem), pakketItem.aantal);
        console.log(pakketItem.id);
        return this.http.delete('https://winkelbeheer.herokuapp.com/pakketitems/' + pakketItem.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    PakketService.prototype.getPakket = function (pakket) {
        console.log("service : " + 'https://winkelbeheer.herokuapp.com/pakket/' + pakket.id);
        return this.http.get('https://winkelbeheer.herokuapp.com/pakket/' + pakket.id)
            .map(function (response) {
            var klant = response.json().obj;
            return klant;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    return PakketService;
}());
PakketService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], PakketService);
export { PakketService };
