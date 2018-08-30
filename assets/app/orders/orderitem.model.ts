export class Orderitem {
    orderid: number;
    naam: string;
    aantal: number;
    eenheidsprijs: number;
    totaalprijs:number;
    id?:string


    constructor(orderid: number,naam: string, aantal:number,eenheidsprijs:number,totaalprijs:number, id?:string){
        this.orderid = orderid;
        this.naam = naam;
        this.aantal = aantal;
        this.eenheidsprijs = eenheidsprijs;
        this.totaalprijs = totaalprijs;
        this.id = id;
    }
}