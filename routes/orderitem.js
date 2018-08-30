var express = require('express');
var router = express.Router();
var Orderitem = require('../models/orderitem');

router.post('/', function (req, res, next) {
    var orderitem = new Orderitem({
        orderid: req.body.orderid,
        naam: req.body.naam,
        aantal:req.body.aantal,
        eenheidsprijs:req.body.eenheidsprijs,
        totaalprijs: req.body.totaalprijs,
    });
    console.log("routes orderitem add");
    console.log(orderitem);
    orderitem.save(function (err, result) {
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
    Orderitem.find()
        .exec(function(err, orderitems){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: orderitems
            });
        });
});
router.delete('/:id', function(req, res, next){
    Orderitem.findById(req.params.id, function(err, orderitem){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!orderitem){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        orderitem.remove(function (err, result) {
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
    Orderitem.findById(req.params.id, function (err, orderitem) {
        console.log(orderitem);
        if (err) {
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if (!orderitem) {
            return res.status(500).json({
                title: 'bestellingitem(orderitem) niet gevonden',
                error: {message: 'bestellingitem(orderitem) niet gevonden'}
            });
        }

        orderitem.orderid =req.body.orderid;
        orderitem.naam = req.body.naam;
        orderitem.aantal = req.body.aantal;
        orderitem.eenheidsprijs = req.body.eenheidsprijs;
        orderitem.totaalprijs = req.body.totaalprijs;
        console.log(product + "na den edit");
        Orderitem.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'orderitem aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
