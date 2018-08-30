var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { StockService } from "./stock.service";
import { Product } from "./stock.model";
var StocklijstComponent = (function () {
    function StocklijstComponent(stockService) {
        this.stockService = stockService;
    }
    StocklijstComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('on init');
        this.stockService.productIsEdit.subscribe(function (product) { return _this.product = product; });
        this.stockService.getProducten().subscribe(function (producten) {
            _this.producten = producten;
            console.log(_this.producten);
        });
    };
    StocklijstComponent.prototype.showEditModal = function (product) {
        this.stockService.productIsEdit.subscribe(this.product = product);
        this.editModal.show();
    };
    StocklijstComponent.prototype.hideEditModal = function () {
        this.editModal.hide();
    };
    StocklijstComponent.prototype.showHelpModal = function () {
        this.helpModal.show();
    };
    StocklijstComponent.prototype.hideHelpModal = function () {
        this.helpModal.hide();
    };
    StocklijstComponent.prototype.showverwijderModal = function (product) {
        this.stockService.productIsEdit.subscribe(this.product = product);
        console.log(this.product);
        this.verwijderModal.show();
    };
    StocklijstComponent.prototype.hideverwijderModal = function () {
        this.verwijderModal.hide();
    };
    //CRUD functies
    StocklijstComponent.prototype.onEdit = function (form) {
        this.productEdit = new Product(form.value.naam, form.value.stuks, form.value.individueleprijs, form.value.id);
        console.log(this.productEdit);
        this.stockService.updateProduct(this.productEdit).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.ngOnInit();
        this.hideEditModal();
    };
    StocklijstComponent.prototype.onDelete = function (product) {
        this.stockService.deleteProduct(this.product)
            .subscribe(function (result) { return console.log(result); });
        this.hideverwijderModal();
    };
    return StocklijstComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Product)
], StocklijstComponent.prototype, "product", void 0);
__decorate([
    ViewChild('editModal'),
    __metadata("design:type", ModalDirective)
], StocklijstComponent.prototype, "editModal", void 0);
__decorate([
    ViewChild('helpModal'),
    __metadata("design:type", ModalDirective)
], StocklijstComponent.prototype, "helpModal", void 0);
__decorate([
    ViewChild('verwijderModal'),
    __metadata("design:type", ModalDirective)
], StocklijstComponent.prototype, "verwijderModal", void 0);
StocklijstComponent = __decorate([
    Component({
        selector: 'app-stocklijst',
        templateUrl: './stocklijst.component.html'
    }),
    __metadata("design:paramtypes", [StockService])
], StocklijstComponent);
export { StocklijstComponent };
