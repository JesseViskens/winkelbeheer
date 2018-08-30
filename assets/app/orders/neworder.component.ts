import {Component, Input, OnInit} from '@angular/core';
import {OrdersService} from "./orders.service";
import {Orderitem} from "./orderitem.model";
import {Order} from "./orders.model";
import {NgForm} from "@angular/forms";
@Component({
    selector: 'app-neworder',
    templateUrl: './neworder.component.html'
})
export class NeworderComponent implements OnInit{
    constructor(private orderService: OrdersService) {}
    @Input() order: Order;
    orderitems: Orderitem[];
    orderItemsFilter: Orderitem[];
    orderitem: Orderitem;
    orderid: number;
    orders: Order[];

    ngOnInit(){

        console.log("oninit")
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
                if (orders.length == 0) {
                    this.orderid = 1;
                } else {
                    var ordertje = orders[orders.length-1].orderid;
                    this.orderid = ordertje+1;
                }

                console.log( this.orderid);

            }
        );

        this.orderService.getOrderItems().subscribe(
            (orderitems: Orderitem[]) => {
                this.orderitems = orderitems;
                this.orderItemsFilter = this.orderitems.filter(orderitem => orderitem.orderid === this.orderid);
            }
        );
    }
    saveOrder(form: NgForm) {
        console.log(form.value.besteller);
        console.log(form.value.datum);
        console.log(form.value.betaalstatus);
        console.log(this.orderid);
        if(form.value.betaalstatus == "Ja"){
            console.log("status is ja");
            const order = new Order(this.orderid,form.value.besteller,true,form.value.datum,  false);
            console.log("save order wat er aankomt (id): "+ this.orderid + "---------------------------------------------------------------");
            this.orderService.addOrder(order).subscribe(
                data => console.log(data),
                result => console.log(result)
            );
        }else{
            console.log("status is nee");
            const order = new Order(this.orderid,form.value.besteller,false,form.value.datum, false);
            console.log("save order wat er aankomt (id): "+ order.orderid + "---------------------------------------------------------------");
            this.orderService.addOrder(order).subscribe(
                data => console.log(data),
                result => console.log(result)
            );
        }

        form.resetForm();
        this.orderid = this.orderid + 1;
        this.ngOnInit();
    }

    saveOrderItem(form: NgForm){
        var totaalprijs = (form.value.eenheidsprijs * form.value.aantal);
        console.log(this.orderid, form.value.naam, form.value.aantal, form.value.eenheidsprijs, totaalprijs);
        const orderItem = new Orderitem(this.orderid, form.value.naam, form.value.aantal, form.value.eenheidsprijs, totaalprijs);

        this.orderService.addOrderItem(orderItem).subscribe(
            data=> console.log(data),
            result => console.log(result)
        );
        form.resetForm();
        this.ngOnInit();
    }
}