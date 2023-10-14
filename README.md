# User Authentication
This API provides user authentication features, allowing users to register, login, logout, forgot password, reset password, change password reset password, and manage their account securely. It follows RESTful conventions
## Base URL 
#### The base URL for this API is https:  
#### http://localhost:3000/api/v1/

###### for user : http://localhost:3000/api/v1/user

###### for contact : http://localhost:3000/api/v1/contact


## Authentication 
Authentication is required for certain endpoints. It's based on JSON Web Tokens (JWT). You can obtain a JWT by logging. Include the token in the `Authorization` header as `Bearer {token}` for authenticated requests.

# User's API 

## Registration 

##### Endpoint : POST ->  `/register` 
Register a new user account. 

###### Response : 
###### `409 Conflict` if the username is already taken.
###### `201 Created` if successful.
