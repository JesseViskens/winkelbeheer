var Pakket = (function () {
    function Pakket(naam, totaalprijs, korting, pakketid, id) {
        this.pakketid = pakketid;
        this.naam = naam;
        this.totaalprijs = totaalprijs;
        this.korting = korting;
        this.id = id;
    }
    return Pakket;
}());
export { Pakket };
