import {Leverancier} from "./leveranciers.model";
import {LeveranciersService} from "./leveranciers.service";
import {Component, Input, OnInit} from "@angular/core";
import {NgForm} from "@angular/forms/src/forms";

@Component({
    selector: 'app-leveranciersnieuw',
    templateUrl: './leveranciersnieuw.component.html',
})
export class LeveranciersnieuwComponent implements OnInit{
    constructor(private leverancierService: LeveranciersService) {}
    @Input() leverancier: Leverancier;
    leverancierAdd: Leverancier;
    leveranciers: Leverancier[];

    onAdd(form: NgForm) {
        this.leverancierAdd = new Leverancier(form.value.naam, form.value.datum, form.value.bedrag, form.value.beschrijving);
        console.log(this.leverancierAdd);

        this.leverancierService.addLeverancier(this.leverancierAdd).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.leverancierService.getLeverancier().subscribe(
            (leveranciers: Leverancier[]) => {
                this.leveranciers = leveranciers;
            }
        );
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
    ngOnInit(){
        this.leverancierService.leverancierIsEdit.subscribe(
            (leverancier: Leverancier) => this.leverancier = leverancier
        );
    }

}