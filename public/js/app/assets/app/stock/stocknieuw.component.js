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
import { Component, Input } from "@angular/core";
import { StockService } from "./stock.service";
var StocknieuwComponent = (function () {
    function StocknieuwComponent(stockService) {
        this.stockService = stockService;
    }
    StocknieuwComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockService.productIsEdit.subscribe(function (product) { return _this.product = product; });
        this.stockService.getProducten().subscribe(function (producten) { return _this.producten = producten; });
    };
    StocknieuwComponent.prototype.onAdd = function (form) {
        var _this = this;
        console.log("onAdd");
        this.productAdd = new Product(form.value.naam, form.value.stuks, form.value.individueleprijs);
        console.log(this.productAdd);
        this.stockService.addProduct(this.productAdd).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.stockService.getProducten().subscribe(function (producten) {
            _this.producten = producten;
        });
        this.ngOnInit();
    };
    return StocknieuwComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Product)
], StocknieuwComponent.prototype, "product", void 0);
StocknieuwComponent = __decorate([
    Component({
        selector: 'app-stocknieuw',
        templateUrl: './stocknieuw.component.html'
    }),
    __metadata("design:paramtypes", [StockService])
], StocknieuwComponent);
export { StocknieuwComponent };
