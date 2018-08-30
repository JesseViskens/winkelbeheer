import {Product} from "./stock.model";
import {NgForm} from "@angular/forms";
import {Component, Input, OnInit} from "@angular/core";
import {StockService} from "./stock.service";


@Component({
    selector: 'app-stocknieuw',
    templateUrl: './stocknieuw.component.html'
})
export class StocknieuwComponent implements OnInit {

    constructor(private stockService: StockService) {
    }

    @Input() product: Product;
    productAdd: Product;
    producten: Product[];

    ngOnInit() {
        this.stockService.productIsEdit.subscribe(
            (product: Product) => this.product = product
        );

        this.stockService.getProducten().subscribe(
            (producten: Product[]) => this.producten = producten
        )
    }

    onAdd(form: NgForm) {
        console.log("onAdd");
        this.productAdd = new Product(form.value.naam, form.value.stuks, form.value.individueleprijs);
        console.log(this.productAdd);

        this.stockService.addProduct(this.productAdd).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.stockService.getProducten().subscribe(
            (producten: Product[]) => {
                this.producten = producten;
            }
        );
        this.ngOnInit();

    }
}