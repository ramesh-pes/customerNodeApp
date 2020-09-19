var express = require('express');
var model = require('../service/customer');
var router = express.Router();

// end point is  /api/customer
// method get ==>  get records
router.get('/', function(req, res, next) {
  res.send(model.getCustomer());
});

router.get('/:id', function(req, res, next) {
  res.send(model.getCustomerById(req.params.id));
});
// method post ==>  add record
router.post('/', function(req, res, next) {
    req.body.id = parseInt(Math.random() * 100000);
    model.addCustomer(req.body);
    res.send({result:'success', msg:"customer added successfully"});
  });

// method delete ==>  delete record
router.delete('/', function(req, res, next) {
    model.deleteCustomer(req.body);
    res.send({result:'success', msg:"customer deleted successfully"});
  });

// method put ==>  update record
router.put('/', function(req, res, next) {
    model.updateCustomer(req.body);
    res.send({result:'success', msg:"customer updated successfully"});
  });
  
module.exports = router;
