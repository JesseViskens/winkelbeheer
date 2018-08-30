import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Pakket} from "./pakket.model";
import {Product} from "../stock/stock.model";
import {PakketService} from "./pakket.service";
import {Pakketitem} from "./pakketitem.model";
import {StockService} from "../stock/stock.service";

@Component({
    selector: 'app-pakketnieuw',
    templateUrl: './pakketnieuw.component.html',
})
export class PakketnieuwComponent implements OnInit{
    constructor(private pakketService: PakketService, private stockService: StockService) {}
    @Input() pakket: Pakket;
    pakketitems: Pakketitem[];
    pakketItemsFilter: Pakketitem[];
    pakketitem: Pakketitem;
    pakketId: number;
    pakketten: Pakket[];
    stock: Product[];

    ngOnInit(){

        this.stockService.getProducten().subscribe(
            (stockItems: Product[]) => {
                this.stock = stockItems;
            }
        );
        this.pakketService.getPakketten().subscribe(
            (pakketten: Pakket[]) => {
                if (pakketten.length == 0) {
                    this.pakketId = 1;
                } else {
                    var pakketje = pakketten[pakketten.length-1].pakketid;
                    this.pakketId = pakketje+1;
                }
                console.log(pakketje);
                console.log( this.pakketId);
            }
        );
        this.pakketService.getPakketItems().subscribe(
            (pakketItems: Pakketitem[]) => {
                this.pakketitems = pakketItems;
                this.pakketItemsFilter = this.pakketitems.filter(pakketItem => pakketItem.pakketid === this.pakketId);
            }
        );
    }
    savePakket(form: NgForm) {

        const pakket = new Pakket(form.value.naam,form.value.totaalprijs, form.value.korting,this.pakketId);
        console.log("savePakket wat er aankomt (id): "+ pakket.pakketid + "---------------------------------------------------------------");
        this.pakketService.addPakket(pakket).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        form.resetForm();
        this.pakketId = this.pakketId + 1;
        this.ngOnInit();
    }

    savePakketItem(form: NgForm){
        const pakketItem = new Pakketitem(this.pakketId, form.value.pakketItem, form.value.aantal);
        this.pakketService.addPakketItem(pakketItem).subscribe(
            data=> console.log(data),
            result => console.log(result)
        );
        form.resetForm();
        this.ngOnInit();

    }
}