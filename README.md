# Expense Tracker
![Screen Shot 2021-10-28 at 11 14 31 PM](https://user-images.githubusercontent.com/71105258/139379609-6c92f23e-dff3-403f-bcf6-11d6a2e63250.png)

### Live Site: https://wheres-my-money-at.netlify.app/


This is an expense and income tracker, users are able to add and remove expenses and income. Expense totals will be calculated and displayed.

## Description

Project was made using the MERN stack. Users will be able to register and login. Authentication is setup using bcrypt to hash passwords for added security. Each user has access to their own expenses and income.

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
- [ ] Create logo


