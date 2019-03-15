const userModel = require('../models/users');
const bcrypt = require('bcrypt');	
const jwt = require('jsonwebtoken');				

module.exports = {
	create: function(req, res, next) {
		
		userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password, category: req.body.category }, function (err, result) {
				  if (err) 
				  	next(err);
				  else
				  	res.json({status: "success", message: "User added successfully!!!", data: null});
				  
				});
	},

	authenticate: function(req, res, next) {
		userModel.findOne({email:req.body.email}, function(err, userInfo){
					if (err) {
						next(err);
					} else {

						if(userInfo != null && bcrypt.compareSync(req.body.password, userInfo.password)) {

						 const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' }); 

						 res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});	

						}else{

							res.json({status:"error", message: "Invalid email/password!!!", data:null});

						}
					}
				});
	},

	getById: function(req, res, next) {
		console.log(req.body);
		userModel.findById(req.params.userId, function(err, userInfo){
			if (err) {
				next(err);
			} else {
				res.json({status:"success", message: "User found!!!", data:{users: userInfo}});
			}
		});
	},


	updateById: function(req, res, next) {
		userModel.findByIdAndUpdate(req.params.userId,{name:req.body.name, category: req.body.category}, function(err, userInfo){

			if(err)
				next(err);
			else {
				res.json({status:"success", message: "User updated successfully!!!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		userModel.findByIdAndRemove(req.params.userId, function(err, userInfo){
			if(err)
				next(err);
			else {
				res.json({status:"success", message: "User deleted successfully!!!", data:null});
			}
		});
	},

}					
