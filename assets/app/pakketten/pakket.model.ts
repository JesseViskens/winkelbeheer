export class Pakket{
    pakketid: number;
    naam:string;
    totaalprijs: number;
    korting: number;
    id?: string;


    constructor(naam:string, totaalprijs:number, korting:number,pakketid:number, id?: string){
        this.pakketid = pakketid;
        this.naam = naam;
        this.totaalprijs = totaalprijs;
        this.korting = korting;
        this.id = id;
    }
}