export class Leverancier{
    naam: string;
    datum: string;
    bedrag: string;
    beschrijving: string;
    id?: string;


    constructor(naam: string, datum: string, bedrag: string, beschrijving:string ,id?: string){
        this.naam = naam;
        this.datum = datum;
        this.bedrag = bedrag;
        this.beschrijving = beschrijving;
        this.id = id;
    }
}