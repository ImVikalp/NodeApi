const productModel = require('../models/products');	


module.exports = {
	create: function(req, res, next) {
		console.log(req)
		productModel.create({ name: req.body.name, price: req.body.price, userId: req.body.userId}, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Product added successfully!!!", data: null});
				  
				});
	},

	getById: function(req, res, next) {
		console.log(req.body);
		productModel.findById(req.params.productId, function(err, productInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "Product found!!!", data:{products: productInfo}});
			}
		});
	},

	

	updateById: function(req, res, next) {
		productModel.findByIdAndUpdate(req.params.productId,{name:req.body.name, price:req.body.price}, function(err, productInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Product updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		productModel.findByIdAndRemove(req.params.productId, function(err, productInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Product deleted successfully!!!", data:null});
			}
		});
	},

	getAll: function(req, res, next) {
		let productsList = [];

		productModel.find({}, function(err, products){
			if (err){
				next(err);
			} else{
				for (let product of products) {
					productsList.push({id: product._id, name: product.name, price: product.price, userId: req.body.userId});
				}
				res.json({status:"success", message: "Products list found!!!", data:{products: productsList}});
							
			}

		});
	},
	

}					