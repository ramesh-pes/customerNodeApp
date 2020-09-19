var express = require('express');
var router = express.Router();
var model = require('../service/customer');

/* GET home page. */
router.get('/', (req, res, next)  => {
  //res.render('index', { title: 'Customer App', company:"IBM"});
  res.redirect("/login");
});

// Ecma Standard + Type + few things  = TypeScript
// JavaScript = Ecma Standard 

// abc = function (req, res, next){}
// abc =(req, res, next) => {}; //arrow 
router.get('/login', (req, res, next) => {
  //res.send(""); //data
  //res.send({result:'success', msg:""}); //data
  res.render('login', { title: 'Login'});
});

router.get('/customer/add', (req, res, next) => {
  res.render('customer-add', { title: 'Add Customer'});
});

router.get('/customer/edit/:id', (req, res, next) => {
	console.log("id is "+req.params.id);
	var customer = model.getCustomerById(req.params.id);
  res.render('customer-edit', { title: 'Update Customer', customer:customer});
});

router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', { title: 'Dashboard'});
});

router.get('/customer', (req, res, next) => {
  res.render('customers', { title: 'Customers',data:model.getCustomer()});
});

router.get('/about', (req, res, next) => {
  res.render('dashboard', { title: 'About'});
});

module.exports = router;
