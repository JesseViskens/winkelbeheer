export class Pakketitem {
    pakketid: number;
    naam: string;
    aantal: number;
    id?:string


    constructor(pakketid: number,naam: string, aantal:number, id?:string){
        this.pakketid = pakketid;
        this.naam = naam;
        this.aantal = aantal;
        this.id = id;
    }
}