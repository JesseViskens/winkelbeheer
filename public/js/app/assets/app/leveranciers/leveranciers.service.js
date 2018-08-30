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
import { Leverancier } from "./leveranciers.model";
var LeveranciersService = (function () {
    function LeveranciersService(http) {
        this.http = http;
        this.leveranciers = [];
        this.leverancierIsEdit = new EventEmitter();
    }
    LeveranciersService.prototype.addLeverancier = function (leverancier) {
        this.leveranciers.push(leverancier);
        var body = JSON.stringify(leverancier);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        console.log("jeej" + leverancier.naam + "---------------------------------------------------------");
        return this.http.post('https://winkelbeheer.herokuapp.com/leveranciers', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    LeveranciersService.prototype.getLeverancier = function () {
        var _this = this;
        return this.http.get('https://winkelbeheer.herokuapp.com/leveranciers')
            .map(function (response) {
            var leveranciers = response.json().obj;
            var transformedLeveranciers = [];
            for (var _i = 0, leveranciers_1 = leveranciers; _i < leveranciers_1.length; _i++) {
                var leverancier = leveranciers_1[_i];
                transformedLeveranciers.push(new Leverancier(leverancier.naam, leverancier.datum, leverancier.bedrag, leverancier.beschrijving, leverancier._id));
            }
            _this.leveranciers = transformedLeveranciers;
            return transformedLeveranciers;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    LeveranciersService.prototype.deleteLeverancier = function (leverancier) {
        console.log(leverancier.id + "---- service");
        return this.http.delete('https://winkelbeheer.herokuapp.com/leveranciers/' + leverancier.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    LeveranciersService.prototype.updateLeverancier = function (leverancier) {
        console.log("service");
        var body = JSON.stringify(leverancier);
        console.log(leverancier);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://winkelbeheer.herokuapp.com/leveranciers/' + leverancier.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return LeveranciersService;
}());
LeveranciersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], LeveranciersService);
export { LeveranciersService };
