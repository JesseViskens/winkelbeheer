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
import { Order } from "./orders.model";
import { Orderitem } from "./orderitem.model";
var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.orders = [];
        this.orderitems = [];
        this.orderIsEdit = new EventEmitter();
        this.orderitemIsEdit = new EventEmitter();
        this.orderDetail = new EventEmitter();
    }
    OrdersService.prototype.addOrder = function (order) {
        console.log(order.datum + "service datum");
        this.orders.push(order);
        var body = JSON.stringify(order);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://winkelbeheer.herokuapp.com/order', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    OrdersService.prototype.addOrderItem = function (orderitem) {
        console.log(orderitem);
        this.orderitems.push(orderitem);
        var body = JSON.stringify(orderitem);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('https://winkelbeheer.herokuapp.com/orderitems', body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    OrdersService.prototype.getOrders = function () {
        var _this = this;
        return this.http.get('https://winkelbeheer.herokuapp.com/order')
            .map(function (response) {
            var orders = response.json().obj;
            var transformedOrders = [];
            for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
                var order = orders_1[_i];
                transformedOrders.push(new Order(order.orderid, order.besteller, order.betaalstatus, order.datum, order.vorderstatus, order._id));
            }
            _this.orders = transformedOrders;
            return transformedOrders;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    OrdersService.prototype.getOrderItems = function () {
        var _this = this;
        return this.http.get('https://winkelbeheer.herokuapp.com/orderitems')
            .map(function (response) {
            var orderitems = response.json().obj;
            var transformedorderItems = [];
            for (var _i = 0, orderitems_1 = orderitems; _i < orderitems_1.length; _i++) {
                var orderitem = orderitems_1[_i];
                transformedorderItems.push(new Orderitem(orderitem.orderid, orderitem.naam, orderitem.aantal, orderitem.eenheidsprijs, orderitem.totaalprijs, orderitem._id));
            }
            _this.orderitems = transformedorderItems;
            return transformedorderItems;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    ;
    OrdersService.prototype.updateOrder = function (order) {
        console.log("service:");
        var body = JSON.stringify(order);
        console.log(order);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://winkelbeheer.herokuapp.com/order/' + order.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    OrdersService.prototype.updateOrderItem = function (orderitem) {
        console.log(orderitem);
        var body = JSON.stringify(orderitem);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.put('https://winkelbeheer.herokuapp.com/orderitems/' + orderitem.id, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    OrdersService.prototype.deleteOrder = function (order) {
        console.log(order.id + "service");
        console.log('https://winkelbeheer.herokuapp.com/order/' + order.id);
        return this.http.delete('https://winkelbeheer.herokuapp.com/order/' + order.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    OrdersService.prototype.deleteOrderItem = function (orderitem) {
        this.orderitems.splice(this.orderitems.indexOf(orderitem), orderitem.aantal);
        return this.http.delete('https://winkelbeheer.herokuapp.com/orderitems/' + orderitem.id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    return OrdersService;
}());
OrdersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], OrdersService);
export { OrdersService };
