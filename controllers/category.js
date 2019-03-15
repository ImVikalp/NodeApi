const categoryModel = require('../models/category');
const userModel = require('../models/users');


module.exports = {
	create: function(req, res, next) {

		categoryModel.create({ name: req.body.name, description: req.body.description, userId: req.body.userId}, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Category added successfully!!!", data: null});
				  
				});
	},

	getById: function(req, res, next) {

		let categoryList = [];

		var	user = {}
		userModel.findById(req.body.userId, function(err, userInfo){
			if (err) {
				next(err);
			} else { 

				user= userInfo
			
			}
		});

	
		categoryModel.findById(req.params.categoryId, function(err, categoryInfo){
			if (err) {
				next(err);
			} else {
				var obj = categoryInfo
				for (let category of Object.keys(obj))
					var v = obj[categoryInfo]
				console.log('category='+categoryInfo, v)
				 {
					categoryList.push({id: categoryInfo._id, name: categoryInfo.name, description: categoryInfo.description, user: {name:user.name, email:user.email}  });
				}
				res.json({status:"success", message: "Category found!!!", data:{category: categoryList}});
			}
		});
	},

	

	updateById: function(req, res, next) {
		categoryModel.findByIdAndUpdate(req.params.categoryId,{name:req.body.name, description:req.body.description}, function(err, categoryInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Category updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		categoryModel.findByIdAndRemove(req.params.categoryId, function(err, categoryInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Category deleted successfully!!!", data:null});
			}
		});
	},

	getAll: function(req, res, next) {
		let categoriesList = [];

		var	user = {}
		userModel.findById(req.body.userId, function(err, userInfo){
			if (err) {
				next(err);
			} else { 

				user= userInfo
			
			}
		});

		categoryModel.find({}, function(err, categories){
			if (err){
				next(err);
			} else{
				for (let category of categories) {
					category.userId == user.id ? categoriesList.push({id: category._id, name: category.name, description: category.description, user: {name:user.name, email:user.email}}) : null
				}
				res.json({status:"success", message: "category list found!!!", data:{categories: categoriesList}});
							
			}

		});
	},

}					