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
import { Pakket } from "./pakket.model";
import { PakketService } from "./pakket.service";
import { Pakketitem } from "./pakketitem.model";
import { StockService } from "../stock/stock.service";
var PakketnieuwComponent = (function () {
    function PakketnieuwComponent(pakketService, stockService) {
        this.pakketService = pakketService;
        this.stockService = stockService;
    }
    PakketnieuwComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stockService.getProducten().subscribe(function (stockItems) {
            _this.stock = stockItems;
        });
        this.pakketService.getPakketten().subscribe(function (pakketten) {
            if (pakketten.length == 0) {
                _this.pakketId = 1;
            }
            else {
                var pakketje = pakketten[pakketten.length - 1].pakketid;
                _this.pakketId = pakketje + 1;
            }
            console.log(pakketje);
            console.log(_this.pakketId);
        });
        this.pakketService.getPakketItems().subscribe(function (pakketItems) {
            _this.pakketitems = pakketItems;
            _this.pakketItemsFilter = _this.pakketitems.filter(function (pakketItem) { return pakketItem.pakketid === _this.pakketId; });
        });
    };
    PakketnieuwComponent.prototype.savePakket = function (form) {
        var pakket = new Pakket(form.value.naam, form.value.totaalprijs, form.value.korting, this.pakketId);
        console.log("savePakket wat er aankomt (id): " + pakket.pakketid + "---------------------------------------------------------------");
        this.pakketService.addPakket(pakket).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        form.resetForm();
        this.pakketId = this.pakketId + 1;
        this.ngOnInit();
    };
    PakketnieuwComponent.prototype.savePakketItem = function (form) {
        var pakketItem = new Pakketitem(this.pakketId, form.value.pakketItem, form.value.aantal);
        this.pakketService.addPakketItem(pakketItem).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        form.resetForm();
        this.ngOnInit();
    };
    return PakketnieuwComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Pakket)
], PakketnieuwComponent.prototype, "pakket", void 0);
PakketnieuwComponent = __decorate([
    Component({
        selector: 'app-pakketnieuw',
        templateUrl: './pakketnieuw.component.html',
    }),
    __metadata("design:paramtypes", [PakketService, StockService])
], PakketnieuwComponent);
export { PakketnieuwComponent };
