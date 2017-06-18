/**
 * Created by sazedul.islam on 6/13/2017.
 */
'use strict';

import * as express from 'express';
const router = express.Router();

/* POST image or file to upload. */
router.post('/upload',(req,res,next) => {
    console.log(req.files); // the uploaded file object
    // res.render('index', {title: 'Express'});
    res.send(req.files);
});

export default router;