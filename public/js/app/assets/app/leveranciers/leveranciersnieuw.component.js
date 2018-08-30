var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Leverancier } from "./leveranciers.model";
import { LeveranciersService } from "./leveranciers.service";
import { Component, Input } from "@angular/core";
var LeveranciersnieuwComponent = (function () {
    function LeveranciersnieuwComponent(leverancierService) {
        this.leverancierService = leverancierService;
    }
    LeveranciersnieuwComponent.prototype.onAdd = function (form) {
        var _this = this;
        this.leverancierAdd = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving);
        console.log(this.leverancierAdd);
        this.leverancierService.addLeverancier(this.leverancierAdd).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        this.leverancierService.getLeverancier().subscribe(function (leveranciers) {
            _this.leveranciers = leveranciers;
        });
        this.ngOnInit();
    };
    LeveranciersnieuwComponent.prototype.onSubmit = function (form) {
        var leverancier = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving);
        this.leverancierService.addLeverancier(leverancier).subscribe(function (data) { return console.log(data); }, function (result) { return console.log(result); });
        form.resetForm();
    };
    LeveranciersnieuwComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leverancierService.leverancierIsEdit.subscribe(function (leverancier) { return _this.leverancier = leverancier; });
    };
    return LeveranciersnieuwComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Leverancier)
], LeveranciersnieuwComponent.prototype, "leverancier", void 0);
LeveranciersnieuwComponent = __decorate([
    Component({
        selector: 'app-leveranciersnieuw',
        templateUrl: './leveranciersnieuw.component.html',
    }),
    __metadata("design:paramtypes", [LeveranciersService])
], LeveranciersnieuwComponent);
export { LeveranciersnieuwComponent };
