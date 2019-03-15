SingUp
Method: POST
URL:http://localhost:3000/users/register
key       value
name:     User 1
email:    user1@gmail.com
password: 12345678


Login
Method: POST
URL: http://localhost:3000/users/authenticate
key       value
email:    user1@gmail.com
password: 12345678


Users
Method: GET
URL: http://localhost:3000/users


User
Method: GET
URL: http://localhost:3000/users/:userId


Update User
Method: PUT
URL: http://localhost:3000/users/:userId
key       value
email:    user1@gmail.com

Delete User
Method: DELETE
URL: http://localhost:3000/users/:userId

========================================================================
Add Category
Method: POST
URL:http://localhost:3000/category
token: 
key       	value
name:     	Category 1
description:    This is category 1

Category
Method: GET
token:
URL: http://localhost:3000/category/:categoryId

Category List
Method: GET
token:
URL: http://localhost:3000/category

Update Category
Method: PUT
URL: http://localhost:3000/category/:categoryId
key       	value
name:    	Category 1
description:	This is category 1

Delete Catogery
Method: DELETE
URL: http://localhost:3000/category/:categoryId
========================================================================
Add Post
Method: POST
URL:http://localhost:3000/post
token: 
key       	value
name:     	Post 1
description:    This is post 1

Post
Method: GET
token:
URL: http://localhost:3000/post/:postId

Posts List
Method: GET
token:
URL: http://localhost:3000/post

Update Post
Method: PUT
URL: http://localhost:3000/post/:postId
key       	value
name:    	Category 1
description:	This is category 1

Delete Post
Method: DELETE
URL: http://localhost:3000/post/:postId







