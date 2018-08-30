var Order = (function () {
    function Order(orderid, besteller, betaalstatus, datum, vorderstatus, id) {
        this.orderid = orderid;
        this.besteller = besteller;
        this.betaalstatus = betaalstatus;
        this.datum = datum;
        this.vorderstatus = vorderstatus;
        this.id = id;
    }
    return Order;
}());
export { Order };
