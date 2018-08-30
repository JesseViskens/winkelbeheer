var Leverancier = (function () {
    function Leverancier(naam, datum, bedrag, beschrijving, id) {
        this.naam = naam;
        this.datum = datum;
        this.bedrag = bedrag;
        this.beschrijving = beschrijving;
        this.id = id;
    }
    return Leverancier;
}());
export { Leverancier };
