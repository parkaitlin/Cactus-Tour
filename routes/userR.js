const express = require('express');
const router = express.Router();
const controller = require('../controllers/userC');

router.get('/:id', controller.singleUser);
router.put('/:id', controller.update);
router.get('/:id/upcoming', controller.upcoming);
// router.put('deactivate/:id', controller.delete);


module.exports = router;