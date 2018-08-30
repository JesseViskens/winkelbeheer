var express = require('express');
var router = express.Router();
var Leverancier = require('../models/leverancier');

router.post('/', function (req, res) {
    var leverdag = new Leverancier({
        naam: req.body.naam,
        datum: req.body.datum,
        bedrag:req.body.bedrag,
        beschrijving:req.body.beschrijving
    });
    console.log("routes");
    console.log(leverdag);
    leverdag.save(function (err, result) {
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
    Leverancier.find()
        .exec(function(err, leveranciers){
            if (err) {
                return res.status(500).json({
                    title: 'Er deed zich een fout voor',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Gelukt!',
                obj: leveranciers
            });
        });
});
router.delete('/:id', function(req, res, next){
    Leverancier.findById(req.params.id, function(err, leverdag){
        if(err){
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if(!leverdag){
            return res.status(500).json({
                title: 'Message niet gevonden',
                error: {message: 'Message niet gevonden'}
            });
        }
        leverdag.remove(function (err, result) {
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
    Leverancier.findById(req.params.id, function (err, leverancier) {
        console.log(leverancier);
        if (err) {
            return res.status(500).json({
                title: 'Er deed zich een fout voor',
                error: err
            });
        }
        if (!leverancier) {
            return res.status(500).json({
                title: 'leverancier(leverdag) niet gevonden',
                error: {message: 'leverancier(leverdag) niet gevonden'}
            });
        }
        leverancier.naam =req.body.naam;
        leverancier.datum = req.body.datum;
        leverancier.bedrag = req.body.bedrag;
        leverancier.beschrijving = req.body.beschrijving;
        console.log(leverancier + "na den edit");
        leverancier.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'leverancier(leverdag) aangepast!',
                obj: result
            });
        });
    })
})
module.exports = router;