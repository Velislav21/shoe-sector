# SoftUni React Project Defense
### The application is hosted [here](https://ss-server-455514.web.app) using Docker, MongoDB atlas, Firebase and GCP.
This is a **SoftUni React project defense** application. The project is a **Full Stack Application** using the following technologies:

## Built with the tools and technologies:
- **Frontend:** React 19  
<!-- Frontend -->
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=flat-square)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square)
![CSS](https://img.shields.io/badge/CSS-563D7C?logo=css3&logoColor=white&style=flat-square)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter&logoColor=white&style=flat-square)
- **Backend:** Node.js, Express.js, MongoDB
<!-- Backend / DevOps -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white&style=flat-square)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=flat-square)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?logo=githubactions&logoColor=white&style=flat-square)
![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white&style=flat-square)
![JSON](https://img.shields.io/badge/JSON-333333?logo=json&logoColor=white&style=flat-square)
![MongoDB](https://img.shields.io/badge/Mongodb-76D04B?logo=mongodb&logoColor=white&style=flat-square)
![Mongoose](https://img.shields.io/badge/Mongoose-76D04B?logo=mongoose&logoColor=white&style=flat-square)
![Nodemon](https://img.shields.io/badge/Nodemon-880000?logo=nodemon&logoColor=white&style=flat-square)
![.ENV](https://img.shields.io/badge/.ENV-FFD500?logo=dotenv&logoColor=black&style=flat-square)

---
**Currently the application has mobile styles only for 360x800 dimensions**. <br>
**You need to create an account in to check out all functionalities.**
## Project Structure

The project contains two main subfolders:

- `client` — contains the React frontend
- `server` — contains the Node.js backend
  
To run the application, open the main project folder (containing both `client` and `server`) in **Visual Studio Code**.

---

## Running the React Application

**Prerequisites:**  
- [Node.js](https://nodejs.org/) and npm installed

### Steps

1. Open your terminal.
2. Navigate to the `client` folder:
    ```sh
    cd client
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm run dev
    ```
    The app should now be running at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Running the Express Application

**Prerequisites:**  
- [Node.js](https://nodejs.org/) and npm installed

### Steps

1. Open your terminal.
2. Navigate to the `server` folder:
    ```sh
    cd server
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the backend server:
    ```sh
    npm run dev
    ```
    or
    ```sh
    npm run start
    ```
    The server should now be running at [http://localhost:3000](http://localhost:3000) (default Express port).

---

## Troubleshooting

- If you get an error about missing dependencies, make sure you ran `npm install` in the correct folder.
- If the port is already in use, stop other running servers or change the port in your config.

