export class Order{
    besteller: string;
    datum: string;
    betaalstatus: boolean;
    orderid: number;
    vorderstatus:boolean;
    id?: string;

    constructor(orderid: number,besteller: string, betaalstatus: boolean, datum: string,  vorderstatus:boolean, id?: string){
        this.orderid = orderid;
        this.besteller = besteller;
        this.betaalstatus = betaalstatus;
        this.datum = datum;
        this.vorderstatus = vorderstatus;
        this.id = id;
    }
}