import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Order} from "./orders.model";
import {Orderitem} from "./orderitem.model";
import {he} from "ngx-bootstrap";


@Injectable()
export class OrdersService {
    orders: Order[] = [];
    orderitems: Orderitem[] =[];
    orderIsEdit = new EventEmitter<Order>();
    orderitemIsEdit = new EventEmitter<Order>();
    orderDetail = new EventEmitter<Order>();

    constructor(private http: Http) {}

    addOrder(order: Order) {
        console.log(order.datum + "service datum");


        this.orders.push(order);
        const body = JSON.stringify(order);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/order', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    addOrderItem(orderitem: Orderitem) {
        console.log(orderitem);
        this.orderitems.push(orderitem);
        const body = JSON.stringify(orderitem);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/orderitems', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error))
    };

    getOrders() {
        return this.http.get('http://localhost:3000/order')
            .map((response: Response) => {
                const orders = response.json().obj;
                let transformedOrders: Order[] = [];
                for (let order of orders) {
                    transformedOrders.push(
                        new Order(
                            order.orderid,
                            order.besteller,
                            order.betaalstatus,
                            order.datum,
                            order.vorderstatus,
                            order._id)
                    );
                }
                this.orders = transformedOrders;
                return transformedOrders;
            })
            .catch((error:Response) => Observable.throw(error))
    };

    getOrderItems() {
        return this.http.get('http://localhost:3000/orderitems')
            .map((response: Response) => {
                const orderitems = response.json().obj;
                let transformedorderItems: Orderitem[] = [];
                for (let orderitem of orderitems) {
                    transformedorderItems.push(
                        new Orderitem(
                            orderitem.orderid,
                            orderitem.naam,
                            orderitem.aantal,
                            orderitem.eenheidsprijs,
                            orderitem.totaalprijs,
                            orderitem._id)
                    );
                }
                this.orderitems = transformedorderItems;
                return transformedorderItems;
            })
            .catch((error:Response) => Observable.throw(error))
    };
    updateOrder(order: Order){
        console.log("service:");
        const body = JSON.stringify(order);
        console.log(order);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/order/' + order.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
    updateOrderItem(orderitem: Orderitem){
        console.log(orderitem);
        const body = JSON.stringify(orderitem);
        const headers = new Headers({'Content-Type' : 'application/json'});
        return this.http.put('http://localhost:3000/orderitems/' + orderitem.id, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()))
    }
    deleteOrder(order: Order){
        console.log(order.id + "service");
        console.log('http://localhost:3000/order/' + order.id);
        return this.http.delete('http://localhost:3000/order/' + order.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }
    deleteOrderItem(orderitem: Orderitem){
        this.orderitems.splice(this.orderitems.indexOf(orderitem),orderitem.aantal);
        return this.http.delete('http://localhost:3000/orderitems/' + orderitem.id)
            .map((response: Response) => response.json())
            .catch((error:Response) => Observable.throw(error.json()))
    }
}