var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap/modal";
import { Order } from "./orders.model";
import { OrdersService } from "./orders.service";
var OrdersComponent = (function () {
    function OrdersComponent(orderService) {
        this.orderService = orderService;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (orders) {
            _this.orders = orders;
            _this.ordersFilterTodo = _this.orders.filter(function (order) { return order.vorderstatus === false; });
            _this.ordersFilterDone = _this.orders.filter(function (order) { return order.vorderstatus === true; });
        });
        console.log(this.orderid);
        this.orderService.getOrderItems().subscribe(function (orderitems) {
            _this.orderitems = orderitems;
            _this.orderFilter = _this.orderitems.filter(function (orderitem) { return orderitem.orderid === _this.orderid; });
        });
    };
    OrdersComponent.prototype.onDeletePakketItem = function (orderitem) {
        console.log(orderitem);
        this.orderService.deleteOrderItem(orderitem).subscribe(function (result) { return console.log(result); });
    };
    OrdersComponent.prototype.changebetaalstatus = function (order) {
        order.betaalstatus = true;
        this.orderService.updateOrder(order).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.ngOnInit();
    };
    OrdersComponent.prototype.changeState = function (order) {
        order.vorderstatus = true;
        console.log("save order wat er aankomt (id): " + order.orderid + "---------------------------------------------------------------");
        console.log("functie werkt" + order.vorderstatus);
        this.orderService.updateOrder(order).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.ngOnInit();
    };
    OrdersComponent.prototype.showHelpModal = function () {
        this.helpModal.show();
    };
    OrdersComponent.prototype.hideHelpModal = function () {
        this.helpModal.hide();
    };
    OrdersComponent.prototype.showdetailModal = function (order) {
        var _this = this;
        this.orderService.orderDetail.subscribe(this.order = order);
        console.log("component " + order.orderid);
        this.orderService.getOrderItems().subscribe(function (orderItems) {
            _this.orderitems = orderItems;
            _this.orderFilter = _this.orderitems.filter(function (orderItem) { return orderItem.orderid === order.orderid; });
        });
        console.log(this.orderitems.length + "pakketitems");
        this.detailModal.show();
        this.detailModal.show();
    };
    OrdersComponent.prototype.hidedetailModal = function () {
        this.detailModal.hide();
    };
    OrdersComponent.prototype.showbewerkModal = function (order) {
        this.orderService.orderIsEdit.subscribe(this.order = order);
        this.bewerkModal.show();
    };
    OrdersComponent.prototype.hidebewerkModal = function () {
        this.bewerkModal.hide();
    };
    OrdersComponent.prototype.onUpdate = function (form) {
        this.orderEdit = new Order(form.value.orderid, form.value.besteller, form.value.betaalstatus, form.value.datum, form.value.vorderstatus, form.value.id);
        console.log(this.orderEdit);
        this.orderService.updateOrder(this.orderEdit).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.ngOnInit();
    };
    return OrdersComponent;
}());
__decorate([
    ViewChild('helpModal'),
    __metadata("design:type", ModalDirective)
], OrdersComponent.prototype, "helpModal", void 0);
__decorate([
    ViewChild('bewerkModal'),
    __metadata("design:type", ModalDirective)
], OrdersComponent.prototype, "bewerkModal", void 0);
__decorate([
    ViewChild('detailModal'),
    __metadata("design:type", ModalDirective)
], OrdersComponent.prototype, "detailModal", void 0);
OrdersComponent = __decorate([
    Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html'
    }),
    __metadata("design:paramtypes", [OrdersService])
], OrdersComponent);
export { OrdersComponent };
