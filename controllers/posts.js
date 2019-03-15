const postModel = require('../models/post');
const userModel = require('../models/users');
const categoryModel = require('../models/category');



module.exports = {
	create: function(req, res, next) {

		postModel.create({ name: req.body.name, description: req.body.description, userId: req.body.userId, categoryId: req.body.categoryId}, function (err, result) {

				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "Post added successfully!!!", data: null});
				  
				});
	},

	getById: function(req, res, next) {
		// console.log(req.body);
		let postList = [];

		var	user = {}
		userModel.findById(req.body.userId, function(err, userInfo){
			if (err) {
				next(err);
			} else { 

				user= userInfo
			
			}
		});

		var category = {}
		categoryModel.find({userId: req.body.userId}, function(err, categoryInfo){
			// console.log('category='+categoryInfo)
			if (err) {
				next(err);
			} else {

				category= categoryInfo
			}
			// console.log(category)
		});





		postModel.findById(req.params.postId, function(err, postInfo){
			if (err) {
				next(err);
			} else {
				var obj = postInfo
				for (let post of Object.keys(obj))
					var v = obj[postInfo]
				console.log('post='+postInfo, v)
				 {
					postList.push({id: postInfo._id, name: postInfo.name, description: postInfo.description, category: {name:category[0].name, description:category[0].description, user: {name:user.name, email:user.email} } });
				}
				res.json({status:"success", message: "Post found!!!", data:{post: postList}});
			}
		});
	},

	

	updateById: function(req, res, next) {
		postModel.findByIdAndUpdate(req.params.postId,{name:req.body.name, description:req.body.description}, function(err, postInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Post updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		postModel.findByIdAndRemove(req.params.postId, function(err, postInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "Post deleted successfully!!!", data:null});
			}
		});
	},

	getAll: function(req, res, next) {
		let postsList = [];

		var	user = {}
		userModel.findById(req.body.userId, function(err, userInfo){
			if (err) {
				next(err);
			} else { 

				user= userInfo
			
			}
		});

		var category = {}

		categoryModel.find({userId: req.body.userId}, function(err, categoryInfo){
			// console.log('category='+categoryInfo)
			if (err) {
				next(err);
			} else {
				category= categoryInfo

					for(let i = 0; i < category.length; i++){
					console.log('categories='+category[i]);
					
				}
			}
			
		});


		postModel.find({}, function(err, posts){
			if (err){
				next(err);
			} else{
				for (let post of posts) {
					post.userId == user.id ? postsList.push({id: post._id, name: post.name, description: post.description, category: category,  user: {name:user.name, email:user.email}  }) : null
				}
				res.json({status:"success", message: "post found!!!", data:{posts: postsList}});
							
			}

		});
	},

}			



	


