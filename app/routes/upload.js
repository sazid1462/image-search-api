'use strict';
const express = require('express');
const router = express.Router();
router.post('/upload', (req, res, next) => {
    console.log(req.files);
    res.send(req.files);
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
//# sourceMappingURL=upload.js.map