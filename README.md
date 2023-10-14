# User Authentication
This API provides user authentication features, allowing users to register, login, logout, forgot password, reset password, change password reset password, and manage their account securely. It follows RESTful conventions
## Base URL 
### The base URL for this API is  http://localhost:3000/api/v1/

###### for user : http://localhost:3000/api/v1/user

###### for contact : http://localhost:3000/api/v1/contact


## Authentication 
Authentication is required for certain endpoints. It's based on JSON Web Tokens (JWT). You can obtain a JWT by logging. Include the token in the `Authorization` header as `Bearer {token}` for authenticated requests.

# User API's 

## Registration 

##### Endpoint : POST ->  `/register` 
Register a new user account. 

###### Response : 
###### `409 Conflict` if the username is already taken.
###### `201 Created` if successful.


## Get All Users 

##### Endpoint : GET ->  `/users` 
Get All users from database. 

###### Response : 
###### `200 Success` if successful.


## Login 

##### Endpoint : POST ->  `/login` 
Log in to an existing user account.

###### Response : 
###### `409 Conflict` if any credential is invalid.
###### `200 Created` if successful login.


## Logout 

##### Endpoint : POST ->  `/logout` 
Log out from the current session by revoking the JWT.

###### Response : 
###### `200 success` if successfully logout.


## Forgot password 

##### Endpoint : POST ->  `/forgot-password` 
Initiate the process to reset a forgotten password. This sends a reset link to the user's email.

###### Response : 
###### `404 Not found` if the email is not found in the system
###### `200 success` if successful .


## Reset password 

##### Endpoint : POST ->  `/reset-password/:token` 
Initiate the process to reset a forgotten password. This sends a reset link to the user's email.

###### Response : 
###### `400 Bad Request ` if the token is invalid or expired.
###### `200 success` if successful .
###### `500 Internal server error ` .


## Change password 

##### Endpoint : POST ->  `/:id/change-password` 
Change the user's password after authentication.

###### Response : 
###### `401 Bad Request ` old password is incorrect.
###### `200 success` if successful .
###### `500 Internal server error ` Error while comparing old or updating new password .



# Contact API's

## Create an API to Add Contacts

##### Endpoint : POST ->  `/user-details` 
This endpoint allows you to add a new contact to the system.

###### Response : 
###### `401 Bad Request ` if the request is invalid.
###### `200 success` if successful .


## Contact Details API with User Details

##### Endpoint : GET ->  `/user-details` 
This endpoint retrieves the details of a specific contact, including the user who added the contact.

###### Response : 
###### `409 Conflict ` if the contact doesn't exist.
###### `200 success` if successful .


## Get User Details by User ID Along with All Contacts

##### Endpoint : GET ->  `/user/:user_id` 
This endpoint retrieves user details along with all contacts added by that user in a single array

###### Response : 
###### `404 Not Found ` if the user and their contacts are found.
###### `200 success` if successful .
