# Gym-Membership-Management-System
Gym Membership Management System using Node js

# Instruction to run Node js application

Packages used in this application  => express, nodemon, uuid

step 1 : if not able to clone the repository,
         using token to get the access,

         git clone https://<--paste_the_token_here-->@github.com/duddupudihareesh/Gym-Membership-Management-System.git

step 2 : Install the dependencies using
         npm install

step 3 : Run the application using
         npm start



API call ==============> Register Membership API
-----------------------------------------------------------------------------------

To register for gym membership , use the below format to test the api  👇

URL => http://localhost:7005/api/register-membership
method => POST

{
  "name": "example",
  "email": "example@example.com",
  "phone": "1234567890",
  "startDate": "2025-04-01"
}

-----------------------------------------------------------------------------------




API call ==============> View Membership Details API
----------------------------------------------------------------------------------
To get the gym membership details, use the below formt to test the api 👇

URL => http://localhost:7005/api/membership-details
method => GET

{
  "email": "example@example.com"
}

----------------------------------------------------------------------------------





API call ==============> View All Active Members API
---------------------------------------------------------------------------------------
To get all the members with active membership, use the below format to test the api 👇

URL => http://localhost:7005/api/active-members
method => GET

No data JSON is needed to request the data

---------------------------------------------------------------------------------------





API call ==============> Cancel Membership API
---------------------------------------------------------------------------------------
To cancel the gym membership, use the below format to test the api 👇

URL => http://localhost:7005/api/cancel-membership
method => PUT

{
    "email" : "hareesh@example.com"
}

---------------------------------------------------------------------------------------





API call ==============> Modify Membership Start Date API
---------------------------------------------------------------------------------------
To modify the start date of the membership, use the below format to test the api 👇

URL => http://localhost:7005/api/modify-membership
method => PUT

{
   "email" : "hareesh@example.com",
   "startDate" : "2025-04-10"
}

---------------------------------------------------------------------------------------



