import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {NgForm} from "@angular/forms";
import {Leverancier} from "./leveranciers.model";
import {LeveranciersService} from "./leveranciers.service";
import {Product} from "../stock/stock.model";

@Component({
    selector: 'app-leverancierslijst',
    templateUrl: './leverancierslijst.component.html'
})
export class LeverancierslijstComponent implements OnInit{
    constructor(private leverancierService: LeveranciersService) {}
    @Input() leverancier: Leverancier;
    leveranciers: Leverancier[];
    leverancierEdit: Leverancier;

    @ViewChild('verwijderModal') verwijderModal: ModalDirective;
    showverwijderModal(leverancier: Leverancier){
        this.leverancierService.leverancierIsEdit.subscribe(
            this.leverancier = leverancier
        );
        console.log(this.leverancier);
        this.verwijderModal.show();
    }
    hideverwijderModal() {
        this.verwijderModal.hide();
    }

    @ViewChild('bewerkModal') bewerkModal: ModalDirective;
    showbewerkModal(leverancier: Leverancier): void{
        this.leverancierService.leverancierIsEdit.subscribe(
            this.leverancier = leverancier
        );
        this.bewerkModal.show();
    }
    hidebewerkModal() {
        this.bewerkModal.hide();
    }


    ngOnInit(){
        this.leverancierService.leverancierIsEdit.subscribe(
            (leverancier: Leverancier) => this.leverancier = leverancier
        );

        this.leverancierService.getLeverancier().subscribe(
            (leveranciers:Leverancier[] ) => this.leveranciers = leveranciers
        )
        console.log(this.leveranciers);

    }

    onEdit(form: NgForm) {
        console.log(form.value.id);
        this.leverancierEdit = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving, form.value.id);
        console.log(this.leverancierEdit);
        this.leverancierService.updateLeverancier(this.leverancierEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.hidebewerkModal();
        this.ngOnInit();
    }
    onDelete(leverancier : Leverancier) {
        console.log(leverancier);
        console.log(leverancier.naam);
        this.leverancierService.deleteLeverancier(leverancier)
            .subscribe(
                result => console.log(result)
            );
        this.hideverwijderModal();
        this.ngOnInit();
    }


    onSubmit(form: NgForm) {
        const leverancier = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving);
        this.leverancierService.addLeverancier(leverancier).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
    }
}