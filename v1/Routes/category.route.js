const express = require('express');
const { getcategoryController, postcategoryController, deletecategoryController, updatecategoryController } = require('../Controllers/category.controller');

const router = express.Router();

router.route('/')
    .get(getcategoryController)
    .post(postcategoryController)
    .delete(deletecategoryController)
    .patch(updatecategoryController)



module.exports = router;