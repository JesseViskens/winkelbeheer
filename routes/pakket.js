var express = require('express');
var router = express.Router();
var Pakket = require('../models/pakket');

router.post('/', function (req, res, next) {
    var pakket = new Pakket(
        {
            naam:req.body.naam,
            totaalprijs:req.body.totaalprijs,
            korting:req.body.korting,
            pakketid: req.body.pakketid
        });
    console.log("routes van pakket");
    console.log(pakket);
    pakket.save(function (err, result) {
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
    Pakket.find()
        .exec(function(err, pakketten){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: pakketten
            });
        });
});


router.delete('/:id', function(req, res, next){
    Pakket.findById(req.params.id, function(err, pakket){
        console.log("route" +pakket.id)
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!pakket){
            return res.status(500).json({
                title: 'pakket niet gevonden',
                error: {message: 'pakket niet gevonden'}
            });
        }
        pakket.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'pakket verwijderd!',
                obj: result
            });
        });
    })
})

router.put('/:id', function (req, res, next) {
    console.log("routes");
    Pakket.findById(req.params.id, function (err, pakket) {
        if (err) {
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if (!pakket) {
            return res.status(500).json({
                title: 'pakket niet gevonden',
                error: {message: 'pakket niet gevonden'}
            });
        }
        pakket.naam = req.body.naam;
        pakket.totaalprijs = req.body.totaalprijs;
        pakket.korting = req.body.korting;
        pakket.pakketid = req.body.pakketid;
        console.log(pakket + "na den edit");
        pakket.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'pakket aangepast!',
                obj: result
            });
        });
    })
})


module.exports = router;
