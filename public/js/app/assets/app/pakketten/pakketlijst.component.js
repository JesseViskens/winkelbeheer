var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from "@angular/core";
import { PakketService } from "./pakket.service";
import { Pakket } from "./pakket.model";
import { ModalDirective } from "ngx-bootstrap/modal";
var PakketlijstComponent = (function () {
    function PakketlijstComponent(pakketService) {
        this.pakketService = pakketService;
    }
    PakketlijstComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pakketService.pakketIsEdit.subscribe(function (pakket) { return _this.pakket = pakket; });
        this.pakketService.getPakketten().subscribe(function (pakketten) { return _this.pakketten = pakketten; });
        this.pakketService.getPakketItems().subscribe(function (pakketItems) {
            _this.pakketitems = pakketItems;
            _this.pakketItemsFilter = _this.pakketitems.filter(function (pakketItem) { return pakketItem.pakketid === _this.pakketId; });
        });
    };
    PakketlijstComponent.prototype.showEditModal = function (pakket) {
        this.pakketService.pakketIsEdit.subscribe(this.pakket = pakket);
        this.editModal.show();
    };
    PakketlijstComponent.prototype.hideEditModal = function () {
        this.editModal.hide();
    };
    PakketlijstComponent.prototype.showDetailModal = function (pakket) {
        var _this = this;
        this.pakketService.pakketDetail.subscribe(this.pakket = pakket);
        console.log("component " + pakket.pakketid);
        this.pakketService.getPakketItems().subscribe(function (pakketItems) {
            _this.pakketitems = pakketItems;
            _this.pakketItemsFilter = _this.pakketitems.filter(function (pakketItem) { return pakketItem.pakketid === pakket.pakketid; });
        });
        console.log(this.pakketitems.length + "pakketitems");
        this.detailModal.show();
        this.ngOnInit();
    };
    PakketlijstComponent.prototype.hideDetailModal = function () {
        this.detailModal.hide();
    };
    PakketlijstComponent.prototype.onDelete = function (pakket) {
        console.log(pakket);
        this.pakketService.deletePakket(pakket)
            .subscribe(function (result) { return console.log(result); });
        this.ngOnInit();
    };
    PakketlijstComponent.prototype.onDeletePakketItem = function (pakketItem) {
        console.log(pakketItem);
        this.pakketService.deletePakketItem(pakketItem).subscribe(function (result) { return console.log(result); });
        this.ngOnInit();
    };
    PakketlijstComponent.prototype.onEdit = function (form) {
        this.pakketEdit = new Pakket(form.value.naam, form.value.totaalprijs, form.value.korting, form.value.pakketid, form.value.id);
        console.log(this.pakketEdit);
        this.pakketService.updatePakket(this.pakketEdit).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.ngOnInit();
        this.hideEditModal();
    };
    return PakketlijstComponent;
}());
__decorate([
    ViewChild('editModal'),
    __metadata("design:type", ModalDirective)
], PakketlijstComponent.prototype, "editModal", void 0);
__decorate([
    ViewChild('detailModal'),
    __metadata("design:type", ModalDirective)
], PakketlijstComponent.prototype, "detailModal", void 0);
PakketlijstComponent = __decorate([
    Component({
        selector: 'app-pakketlijst',
        templateUrl: './pakketlijst.component.html',
    }),
    __metadata("design:paramtypes", [PakketService])
], PakketlijstComponent);
export { PakketlijstComponent };
