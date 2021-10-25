# Expense Tracker

This is an expense and income tracker, users are able to add and remove expenses and income. Expense totals will be calculated and displayed.

## Description

Project was made using the MERN stack. Users will be able to register and login. Authentication is setup using bcrypt to hash passwords for added security. Each user will have access to their own expenses and income.

## Getting Started

### Installing/Setup
#### Server 
* Inside of server folder .env file must be created with contents as follows: DB_CONNECTION="Your database connection"
* to install all server dependencies run:
```
cd server
npm install
```
#### Client
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
- [ ] Login page functionality
- [ ] Protected route to dashboard
- [ ] Dashboard functionality
- [ ] Style register page
- [ ] Style login page
- [ ] Style dashboard page
