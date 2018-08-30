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
import { ModalDirective } from "ngx-bootstrap/modal";
import { Leverancier } from "./leveranciers.model";
import { LeveranciersService } from "./leveranciers.service";
var LeverancierslijstComponent = (function () {
    function LeverancierslijstComponent(leverancierService) {
        this.leverancierService = leverancierService;
    }
    LeverancierslijstComponent.prototype.showverwijderModal = function (leverancier) {
        this.leverancierService.leverancierIsEdit.subscribe(this.leverancier = leverancier);
        console.log(this.leverancier);
        this.verwijderModal.show();
    };
    LeverancierslijstComponent.prototype.hideverwijderModal = function () {
        this.verwijderModal.hide();
    };
    LeverancierslijstComponent.prototype.showbewerkModal = function (leverancier) {
        this.leverancierService.leverancierIsEdit.subscribe(this.leverancier = leverancier);
        this.bewerkModal.show();
    };
    LeverancierslijstComponent.prototype.hidebewerkModal = function () {
        this.bewerkModal.hide();
    };
    LeverancierslijstComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leverancierService.leverancierIsEdit.subscribe(function (leverancier) { return _this.leverancier = leverancier; });
        this.leverancierService.getLeverancier().subscribe(function (leveranciers) { return _this.leveranciers = leveranciers; });
        console.log(this.leveranciers);
    };
    LeverancierslijstComponent.prototype.onEdit = function (form) {
        console.log(form.value.id);
        this.leverancierEdit = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving, form.value.id);
        console.log(this.leverancierEdit);
        this.leverancierService.updateLeverancier(this.leverancierEdit).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.hidebewerkModal();
        this.ngOnInit();
    };
    LeverancierslijstComponent.prototype.onDelete = function (leverancier) {
        console.log(leverancier);
        console.log(leverancier.naam);
        this.leverancierService.deleteLeverancier(leverancier)
            .subscribe(function (result) { return console.log(result); });
        this.hideverwijderModal();
        this.ngOnInit();
    };
    LeverancierslijstComponent.prototype.onSubmit = function (form) {
        var leverancier = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving);
        this.leverancierService.addLeverancier(leverancier).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        form.resetForm();
    };
    return LeverancierslijstComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Leverancier)
], LeverancierslijstComponent.prototype, "leverancier", void 0);
__decorate([
    ViewChild('verwijderModal'),
    __metadata("design:type", ModalDirective)
], LeverancierslijstComponent.prototype, "verwijderModal", void 0);
__decorate([
    ViewChild('bewerkModal'),
    __metadata("design:type", ModalDirective)
], LeverancierslijstComponent.prototype, "bewerkModal", void 0);
LeverancierslijstComponent = __decorate([
    Component({
        selector: 'app-leverancierslijst',
        templateUrl: './leverancierslijst.component.html'
    }),
    __metadata("design:paramtypes", [LeveranciersService])
], LeverancierslijstComponent);
export { LeverancierslijstComponent };
