var express = require('express');
var router = express.Router();
var PakketItem = require('../models/pakketItem');

router.post('/', function (req, res, next) {
    var pakketItem = new PakketItem({pakketid: req.body.pakketid, naam:req.body.naam, aantal:req.body.aantal});
    console.log("routes van pakketitem");
    console.log(pakketItem);
    pakketItem.save(function (err, result) {
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


router.get('/', function (req, res, next) {
    PakketItem.find()
        .exec(function(err, pakketItems){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: pakketItems
            });
        });
});


router.delete('/:id', function(req, res, next){
    PakketItem.findById(req.params.id, function(err, pakketitem){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!pakketitem){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        pakketitem.remove(function (err, result) {
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
})/*
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
*/

module.exports = router;
