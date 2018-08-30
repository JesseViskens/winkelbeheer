export class Product{
    naam: string;
    stuks: string;
    individueleprijs: string;
    id?: string;


    constructor(naam: string, stuks: string, individueleprijs: string, id?: string){
        this.naam = naam;
        this.stuks = stuks;
        this.individueleprijs = individueleprijs;
        this.id = id;
    }
}