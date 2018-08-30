var Product = (function () {
    function Product(naam, stuks, individueleprijs, id) {
        this.naam = naam;
        this.stuks = stuks;
        this.individueleprijs = individueleprijs;
        this.id = id;
    }
    return Product;
}());
export { Product };
