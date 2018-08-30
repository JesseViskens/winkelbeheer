var express = require('express');
var router = express.Router();
var Product = require('../models/stock');

router.post('/', function (req, res, next) {
    var product = new Product({
        naam: req.body.naam,
        stuks:req.body.stuks,
        individueleprijs:req.body.individueleprijs
    });
    console.log("routes stock add");
    console.log(product);
    product.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});
router.get('/', function (req, res) {
    console.log("route get");
    Product.find()
        .exec(function(err, producten){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: producten
            });
        });
});
router.delete('/:id', function(req, res, next){
    Product.findById(req.params.id, function(err, product){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!product){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        product.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'message verwijderd!',
                obj: result
            });
        });
    })
})
router.put('/:id', function (req, res, next) {
    console.log("routes");
    Product.findById(req.params.id, function (err, product) {
        console.log(product);
        if (err) {
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if (!product) {
            return res.status(500).json({
                title: 'product(stock) niet gevonden',
                error: {message: 'product(stock) niet gevonden'}
            });
        }
        product.naam =req.body.naam;
        product.stuks = req.body.stuks;
        product.individueleprijs = req.body.individueleprijs;
        console.log(product + "na den edit");
        product.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'product(stock) aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
