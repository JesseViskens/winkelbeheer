import {Component, OnInit, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {PakketService} from "./pakket.service";
import {Pakket} from "./pakket.model";
import {Pakketitem} from "./pakketitem.model";
import {Leverancier} from "../leveranciers/leveranciers.model";
import {Product} from "../stock/stock.model";
import {ModalDirective} from "ngx-bootstrap/modal";


@Component({
    selector: 'app-pakketlijst',
    templateUrl: './pakketlijst.component.html',
})
export class PakketlijstComponent implements OnInit{
    constructor(private pakketService: PakketService) {}
    pakket:Pakket;
    pakketitems: Pakketitem[];
    pakketItemsFilter: Pakketitem[];
    pakketitem: Pakketitem;
    pakketId: number;
    pakketten: Pakket[];
    pakketEdit: Pakket;

    ngOnInit(){
        this.pakketService.pakketIsEdit.subscribe(
            (pakket: Pakket) => this.pakket = pakket
        );
        this.pakketService.getPakketten().subscribe(
            (pakketten:Pakket[] ) => this.pakketten = pakketten
        )

        this.pakketService.getPakketItems().subscribe(
            (pakketItems: Pakketitem[]) => {
                this.pakketitems = pakketItems;
                this.pakketItemsFilter = this.pakketitems.filter(pakketItem => pakketItem.pakketid === this.pakketId);
            }
        );

    }

    @ViewChild('editModal') editModal: ModalDirective;
    showEditModal(pakket: Pakket): void {
        this.pakketService.pakketIsEdit.subscribe(
            this.pakket = pakket
        );
        this.editModal.show();
    }
    hideEditModal(): void {
        this.editModal.hide();
    }

    @ViewChild('detailModal') detailModal: ModalDirective;
    showDetailModal(pakket: Pakket): void {

        this.pakketService.pakketDetail.subscribe(
            this.pakket = pakket
        );
        console.log("component "+ pakket.pakketid);

        this.pakketService.getPakketItems().subscribe(
            (pakketItems: Pakketitem[]) => {
                this.pakketitems = pakketItems;
                this.pakketItemsFilter = this.pakketitems.filter(pakketItem => pakketItem.pakketid === pakket.pakketid);
            }

        );
        console.log(this.pakketitems.length + "pakketitems");
        this.detailModal.show();
        this.ngOnInit();

    }
    hideDetailModal(): void {
        this.detailModal.hide();
    }

    onDelete(pakket: Pakket) {
        console.log(pakket);
        this.pakketService.deletePakket(pakket)
            .subscribe(
                result => console.log(result)
            );
        this.ngOnInit();
    }
    onDeletePakketItem(pakketItem: Pakketitem){
        console.log(pakketItem);
        this.pakketService.deletePakketItem(pakketItem).subscribe(result => console.log(result));
        this.ngOnInit();
    }

    onEdit(form: NgForm) {
        this.pakketEdit = new Pakket(form.value.naam, form.value.totaalprijs, form.value.korting, form.value.pakketid, form.value.id);
        console.log(this.pakketEdit);

        this.pakketService.updatePakket(this.pakketEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.ngOnInit();
        this.hideEditModal();

    }
}