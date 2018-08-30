var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { OrdersService } from "./orders.service";
import { Orderitem } from "./orderitem.model";
import { Order } from "./orders.model";
var NeworderComponent = (function () {
    function NeworderComponent(orderService) {
        this.orderService = orderService;
    }
    NeworderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("oninit");
        this.orderService.getOrders().subscribe(function (orders) {
            if (orders.length == 0) {
                _this.orderid = 1;
            }
            else {
                var ordertje = orders[orders.length - 1].orderid;
                _this.orderid = ordertje + 1;
            }
            console.log(_this.orderid);
        });
        this.orderService.getOrderItems().subscribe(function (orderitems) {
            _this.orderitems = orderitems;
            _this.orderItemsFilter = _this.orderitems.filter(function (orderitem) { return orderitem.orderid === _this.orderid; });
        });
    };
    NeworderComponent.prototype.saveOrder = function (form) {
        console.log(form.value.besteller);
        console.log(form.value.datum);
        console.log(form.value.betaalstatus);
        console.log(this.orderid);
        if (form.value.betaalstatus == "Ja") {
            console.log("status is ja");
            var order = new Order(this.orderid, form.value.besteller, true, form.value.datum, false);
            console.log("save order wat er aankomt (id): " + this.orderid + "---------------------------------------------------------------");
            this.orderService.addOrder(order).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        }
        else {
            console.log("status is nee");
            var order = new Order(this.orderid, form.value.besteller, false, form.value.datum, false);
            console.log("save order wat er aankomt (id): " + order.orderid + "---------------------------------------------------------------");
            this.orderService.addOrder(order).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        }
        form.resetForm();
        this.orderid = this.orderid + 1;
        this.ngOnInit();
    };
    NeworderComponent.prototype.saveOrderItem = function (form) {
        var totaalprijs = (form.value.eenheidsprijs * form.value.aantal);
        console.log(this.orderid, form.value.naam, form.value.aantal, form.value.eenheidsprijs, totaalprijs);
        var orderItem = new Orderitem(this.orderid, form.value.naam, form.value.aantal, form.value.eenheidsprijs, totaalprijs);
        this.orderService.addOrderItem(orderItem).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        form.resetForm();
        this.ngOnInit();
    };
    return NeworderComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Order)
], NeworderComponent.prototype, "order", void 0);
NeworderComponent = __decorate([
    Component({
        selector: 'app-neworder',
        templateUrl: './neworder.component.html'
    }),
    __metadata("design:paramtypes", [OrdersService])
], NeworderComponent);
export { NeworderComponent };
