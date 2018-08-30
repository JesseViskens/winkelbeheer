var express = require('express');
var router = express.Router();
var Order = require('../models/order');

router.post('/', function (req, res, next) {
    var order = new Order({
        orderid: req.body.orderid,
        besteller:req.body.besteller,
        betaalstatus:req.body.betaalstatus,
        datum: req.body.datum,
        vorderstatus: req.body.vorderstatus
    });
    console.log("routes order add");
    console.log(order);
    order.save(function (err, result) {
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
    Order.find()
        .exec(function(err, orders){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: orders
            });
        });
});
router.delete('/:id', function(req, res, next){
    Order.findById(req.params.id, function(err, order){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!order){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        order.remove(function (err, result) {
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
    Order.findById(req.params.id, function (err, order) {
        console.log(order);
        if (err) {
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if (!order) {
            return res.status(500).json({
                title: 'bestelling(order) niet gevonden',
                error: {message: 'bestelling(order) niet gevonden'}
            });
        }
        order.orderid =req.body.orderid;
        order.besteller = req.body.besteller;
        order.betaalstatus = req.body.betaalstatus;
        order.datum = req.body.datum;
        order.vorderstatus = req.body.vorderstatus

        order.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'bestelling(order) aangepast!',
                obj: result
            });
        });
    })
})

module.exports = router;
