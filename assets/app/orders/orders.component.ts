import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ModalDirective} from "ngx-bootstrap/modal";
import {Order} from "./orders.model";
import {OrdersService} from "./orders.service";
import {Pakket} from "../pakketten/pakket.model";
import {Pakketitem} from "../pakketten/pakketitem.model";
import {Orderitem} from "./orderitem.model";
import {NgForm} from "@angular/forms";
import {NgFor} from "@angular/common/src/directives";

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html'
})
export class OrdersComponent implements OnInit{
    constructor(private orderService: OrdersService) {}
    ordersFilterTodo: Order[];
    ordersFilterDone: Order[];
    orderFilter: Orderitem[];
    orderitem: Orderitem;
    orderitems: Orderitem[];
    orderEdit: Order;
    orders: Order[];
    order: Order;
    orderid: number;
    @ViewChild('helpModal') helpModal: ModalDirective;
    @ViewChild('bewerkModal') bewerkModal: ModalDirective;

    ngOnInit(){
        this.orderService.getOrders().subscribe(
            (orders: Order[]) => {
            this.orders = orders;
            this.ordersFilterTodo = this.orders.filter(order => order.vorderstatus === false)
            this.ordersFilterDone = this.orders.filter(order => order.vorderstatus === true)
            }
        );
        console.log(this.orderid);

        this.orderService.getOrderItems().subscribe(
            (orderitems: Orderitem[]) => {
                this.orderitems = orderitems;
                this.orderFilter = this.orderitems.filter(orderitem => orderitem.orderid === this.orderid);
            }
        );
    }
    onDeletePakketItem(orderitem: Orderitem)
    {
        console.log(orderitem);
        this.orderService.deleteOrderItem(orderitem).subscribe(result => console.log(result));
    }
    changebetaalstatus(order: Order){
        order.betaalstatus = true;
        this.orderService.updateOrder(order).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.ngOnInit();
    }
    changeState(order: Order){
        order.vorderstatus = true;
        console.log("save order wat er aankomt (id): "+ order.orderid + "---------------------------------------------------------------");
        console.log("functie werkt" + order.vorderstatus);
        this.orderService.updateOrder(order).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.ngOnInit();
    }

    showHelpModal(){
        this.helpModal.show();
    }

    hideHelpModal() {
        this.helpModal.hide();
    }

    @ViewChild('detailModal') detailModal: ModalDirective;
    showdetailModal(order: Order): void{

        this.orderService.orderDetail.subscribe(
            this.order = order
        );
        console.log("component "+ order.orderid);

        this.orderService.getOrderItems().subscribe(
            (orderItems: Orderitem[]) => {
                this.orderitems = orderItems;
                this.orderFilter = this.orderitems.filter(orderItem => orderItem.orderid === order.orderid);
            }

        );
        console.log(this.orderitems.length + "pakketitems");
        this.detailModal.show();



        this.detailModal.show();
    }

    hidedetailModal() {
        this.detailModal.hide();
    }
    showbewerkModal(order){
        this.orderService.orderIsEdit.subscribe(
            this.order = order
        );

        this.bewerkModal.show();
    }
    hidebewerkModal(){
        this.bewerkModal.hide();
    }
    onUpdate(form: NgForm){
        this.orderEdit = new Order(form.value.orderid,form.value.besteller, form.value.betaalstatus, form.value.datum, form.value.vorderstatus, form.value.id);
        console.log(this.orderEdit);
        this.orderService.updateOrder(this.orderEdit).subscribe(
            data => console.log(data),
            result => console.log(result)
        );
        this.ngOnInit();
    }

}