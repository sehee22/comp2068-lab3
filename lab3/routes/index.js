'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Park\'s Family' });
});

router.get('/:id', function (req, res) {
    if (req.params.id == 'sehee') {
        var name;
        name = req.params.id;

        res.render('sehee', { person: name, title: 'Park\'s Family' });
    }
    else if (req.params.id == 'sunyong') {
        var name;
        name = req.params.id;

        res.render('sunyong', { person: name, title: 'Park\'s Family' });
    }
    else if (req.params.id == 'jungsim') {
        var name;
        name = req.params.id;

        res.render('jungsim', { person: name, title: 'Park\'s Family' });
    }
    else if (req.params.id == 'hyungjoong') {
        var name; var name;
        name = req.params.id;

        res.render('hyungjoong', { person: name, title: 'Park\'s Family' });
    }
    else if (req.params.id == 'index') {
        res.render('index', { title: 'Park\'s Family' });
    }
});
module.exports = router;
