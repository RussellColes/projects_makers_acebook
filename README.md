# Acebook Project - Replicating some features of Facebook #

## Tech Stack ##
![JavaScript](https://img.shields.io/badge/JavaScript-EFD81B?style=for-the-badge&logo=javascript&logoColor=black) ![Jest](https://img.shields.io/badge/Jest-944058?style=for-the-badge&logo=jest&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![Express.js](https://img.shields.io/badge/Express.js-E5E5EA?style=for-the-badge&logo=express&logoColor=black) ![MongoDB](https://img.shields.io/badge/MongoDB-138D4D?style=for-the-badge&logo=mongodb&logoColor=white)

This was a team project which I have cloned to show here. We worked for 2 weeks in teams starting with a basic MERN stack template and starter code. The app had the functionality to signup and logon, but no other functionality. We were given tickets to work on to improve the functionality, including: posting both text and photos; uploading a profile picture; following friends; profile screen and feed screen. 

## Functionality of Final Product ##
The app had sign up and login functionality. You could see your own personal details and feed on a profile page, as well as a feed of all of your friends' posts. Every user could add friends, post text and images and update their own profile including a profile picture. 

I focused on image uploading during the first week and then worked in pair programming to help add the comment functionality.

## Review of the project ##
Overall we were proud of the final result of the project. We created a functioning app in JavaScript / React / node.js following only 2 weeks of learning prior to starting this project. We had also never seen a MERN stack before - this was by far the most complex app we had ever been exposed to, so much of the first two days was spent getting our heads around the data flow through the application. Time was short and ultimately ran away with us. There are lots more aspects we would have liked to have implemented, and especially we would have liked to have done more testing to improve the coverage.

# Instructions below from the cloned starter code repository #

## Acebook MERN Template

In this project, you are task with working on an existing application. A
significant part of the challenge will be to familiarise yourself with the
codebase you've inherited, as you work to **improve and extend** it.

### Structure

This repo contains two applications:

- A frontend React App
- A backend api server

These two applications will communicate through HTTP requests, and need to be
run separately.

### Documentation

[More documentation of the codebase and its architecture can be found here.](./DOCUMENTATION.md)
It's recommended you all read the suggested docs _after making sure the whole
setup below worked for everyone_. Then work together on a diagram describing how
the application works.

### Card wall

[LINK TO THE TRELLO BOARD WALL](https://trello.com/b/MbzzGYju/acebook-meta-sd-specialism)

### Quickstart

### Install Node.js

If you haven't already, make sure you have node and NVM installed.

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), (`20.5.0` at
   time of writing).
   ```
   nvm install 20
   ```

### Set up your project

1. Have one team member fork this repository
2. Rename the fork to `acebook-<team name>`
3. Every team member clone the fork to their local machine
4. Install dependencies for both the `frontend` and `api` applications:
   ```
   cd frontend
   npm install
   cd ../api
   npm install
   ```
5. Install an ESLint plugin for your editor, for example
   [ESLint for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@6.0
   ```
   _Note:_ If you see a message that says
   `If you need to have mongodb-community@6.0 first in your PATH, run:`, follow
   the instruction. Restart your terminal after this.
7. Start MongoDB

   ```
   brew services start mongodb-community@6.0
   ```

### Setting up environment variables.

We need to create two `.env` files, one in the frontend and one in the api.

#### Frontend

Create a file `frontend/.env` with the following contents:

```
VITE_BACKEND_URL="http://localhost:3000"
```

#### Backend

Create a file `api/.env` with the following contents:

```
MONGODB_URL="mongodb://0.0.0.0/acebook"
NODE_ENV="development"
JWT_SECRET="secret"
```

For an explanation of these environment variables, see the documentation.

### How to run the server and use the app

1. Start the server application (in the `api` directory) in dev mode:

```
; cd api
; npm run dev
```

2. Start the front end application (in the `frontend` directory)

In a new terminal session...

```
; cd frontend
; npm run dev
```

You should now be able to open your browser and go to
`http://localhost:5174/signup` to create a new user.

Then, after signing up, you should be able to log in by going to
`http://localhost:5174/login`.

After logging in, you won't see much but you can create posts using PostMan and
they should then show up in the browser if you refresh the page.
