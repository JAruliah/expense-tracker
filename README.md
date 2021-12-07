# Expense Tracker
![expense-tracker](https://user-images.githubusercontent.com/71105258/144943964-b5331125-6165-4b28-8ac2-7e2e3504c8c0.gif)

### Live Site: https://expensetracker.jaruliah.me/

This is an expense and income tracker

## Description

In this project users will be able to register and login. Authentication is setup using bcrypt to hash passwords for added security. Each user has access to their own expenses and income. Income and expenses can be added through the user as well as edited anytime.

## Built With
- React
- Nodejs
- Express
- MongoDB
- SCSS
- Hosted on NGINX VPS

## Getting Started

### Installing/Setup
#### Server 
* Inside of server folder .env file must be created with contents as follows: DB_CONNECTION="your database connection"
* to install all server dependencies run:
```
cd server
npm install
```
#### Client
* .env file must be created in the client folder with REACT_APP_BASE_URL = "your base api route"
* SCSS files need to be compiled, you can run:
```
cd /client
npm run scss
```
* to install all client dependencies run:
```
cd ../client
npm install
```


### Executing program
#### Server

* To start the server run:

```
cd ../server
npm run start
```

#### Client
* To start react run:

```
cd ../client
npm start
```

## Things to do

- [x] ~Initialize project, setup database~
- [x] ~Add register and login API routes~
- [x] ~Implement password hashing~
- [x] ~Add POST and DELETE for expenses~
- [x] ~API testing, all routes working correctly~
- [x] ~Design Front End Wireframe~ (Modified Template, created by: https://dribbble.com/Pragathesh)
- [x] ~Setup react app~
- [x] ~Register page functionality~
- [x] ~Login page functionality~
- [x] ~Protected route to dashboard~
- [x] ~Dashboard calculate expenses~
- [x] ~Dashboard add expenses~
- [x] ~Dashboard delete expenses~
- [x] ~Dashboard display expenses~
- [x] ~Adding validation~
- [x] ~Add classes for styling, clean up~
- [x] ~Testing and optimizing~
- [x] ~Style register page~
- [x] ~Style login page~
- [x] ~Style dashboard page~
- [x] ~Style 404 page~
- [x] ~Bug testing~
- [x] ~Deploy project :)~
### Upcoming Features / Updates
- [ ] Create logo
- [ ] Add budget tracking
- [ ] Choose different currency
-  ?????


