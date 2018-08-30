import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {NgForm} from "@angular/forms";

import {StockService} from "./stock.service";
import {Product} from "./stock.model";
import {toNumber} from "ngx-bootstrap/timepicker/timepicker.utils";
import {Leverancier} from "../leveranciers/leveranciers.model";

@Component({
    selector: 'app-stocklijst',
    templateUrl: './stocklijst.component.html'
})
export class StocklijstComponent implements OnInit{

    constructor(private stockService: StockService) {}
    @Input() product: Product;
    productAdd: Product;
    producten: Product[];
    productEdit: Product;

    ngOnInit(){
        console.log('on init');
        this.stockService.productIsEdit.subscribe(
            (product: Product) => this.product = product
        );

        this.stockService.getProducten().subscribe(
            (producten:Product[] ) =>  {
                this.producten = producten;
                console.log(this.producten);
            }
        )
    }

    @ViewChild('editModal') editModal: ModalDirective;
    showEditModal(product: Product): void {
        this.stockService.productIsEdit.subscribe(
            this.product = product
        );
        this.editModal.show();
    }
    hideEditModal(): void {
        this.editModal.hide();
    }

    @ViewChild('helpModal') helpModal: ModalDirective;
    showHelpModal(){

        this.helpModal.show();
    }
    hideHelpModal() {
        this.helpModal.hide();
    }
    @ViewChild('verwijderModal') verwijderModal: ModalDirective;
    showverwijderModal(product: Product){
        this.stockService.productIsEdit.subscribe(
            this.product = product
        );
        console.log(this.product);
        this.verwijderModal.show();
    }
    hideverwijderModal() {
        this.verwijderModal.hide();
    }

    //CRUD functies

    onEdit(form: NgForm) {
        this.productEdit = new Product(form.value.naam, form.value.stuks, form.value.individueleprijs, form.value.id);
        console.log(this.productEdit);

        this.stockService.updateProduct(this.productEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.ngOnInit();
        this.hideEditModal();

    }
    onDelete(product: Product) {
        this.stockService.deleteProduct(this.product)
            .subscribe(
                result => console.log(result)
            );
        this.hideverwijderModal();
    }
}