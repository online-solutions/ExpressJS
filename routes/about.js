/**
 * Created by SUCCESS\phungdinh on 4/21/15.
 */
var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: 'About',
        name: 'Lite'
    });
});

module.exports = router;
