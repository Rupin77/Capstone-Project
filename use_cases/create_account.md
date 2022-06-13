## Customer orders groceries (done by Berhan)

### Actor (Customer)
User will successfully order groceries on the website  

### Pre-conditions
User has created an existing account on the website

### Main Flow
●	The user will click on the login button.
●	The user will enter username and password and successfully login
●	The user will select the groceries they would like to purchase and add them to cart
●	The user will add the correct shipping information to receive their groceries
●	User will have to add payment method for checkout
●	The user will successfully checkout their groceries

### Alternate Flows

●	If any connection issues arise, preventing the message to be sent before it times out:
■	The system will add an error message, warning the user that the shipping address is not valid 
■	The system will add an error message, warning the user that the payment method is not valid

●	The user enters wrong username/password
■	The system will add an error message, warning the user that the username and password was incorrect and prompts the user to add the correct information


### Postconditions
Once the customer has successfully registered and created an account, they will receive a confirmation email to validate registration.
