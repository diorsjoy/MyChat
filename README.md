# Real-Time Chat Application with Node.js and Express.js

Creating a real-time chat application with Node.js, Express.js, and Socket.io is an excellent project to delve into the world of real-time communication and websockets. This step-by-step tutorial will guide you through building a feature-rich chat application.

## Prerequisites

Before you dive into the project, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com/) (Node Package Manager, typically installed with Node.js)
- A code editor of your choice (e.g., Visual Studio Code, Sublime Text)

## Step 1: Set Up the Project

Begin by setting up the project. Follow these steps:

1. Create a new folder for your project and navigate to it in your terminal or command prompt.

2. Initialize a new Node.js project by running the following command:

   ```bash
   npm init -y
   ```

3. Install the required dependencies (Express.js and Socket.io) using npm:

   ```bash
   npm install express socket.io nodemon
   ```

## Step 2: Run the Application

To run the application, execute the following command in your terminal or command prompt:

```bash
node index.js
```

Using Nodemon
```bash
nodemon server.js
```

Now, open your web browser and navigate to http://localhost:3000. You should see the chat application with a message input box and a "Send" button. Open another browser window or a new tab and navigate to the same URL to simulate another user. Now you can exchange messages between these two browser instances in real-time!


