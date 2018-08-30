var Orderitem = (function () {
    function Orderitem(orderid, naam, aantal, eenheidsprijs, totaalprijs, id) {
        this.orderid = orderid;
        this.naam = naam;
        this.aantal = aantal;
        this.eenheidsprijs = eenheidsprijs;
        this.totaalprijs = totaalprijs;
        this.id = id;
    }
    return Orderitem;
}());
export { Orderitem };
