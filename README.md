Simplified Twitter-Like Backend System

Assignment Overview:

This assignment involves designing and implementing a scalable backend system similar to Twitter. It focuses on creating RESTful APIs for user registration, tweet posting, and fetching timelines. The system utilizes Node.js as the runtime environment and MongoDB as the database, following Domain-Driven Design (DDD) principles.

How to Run the Application:

1. Clone the repository: git clone <repository-url>
2. Navigate to the project directory: cd <project-directory>
3. Install dependencies: npm install
4.Set up environment variables by creating a .env file based on .env.example.
5. Start the server: npm start

Dependencies:

Express.js: For handling HTTP requests.
Mongoose: MongoDB object modeling tool.
bcryptjs: For hashing passwords.
jsonwebtoken: For creating and verifying JWT tokens.
dotenv: For loading environment variables from a .env file.

Installation Instructions:

Ensure Node.js and npm are installed on your machine.
Clone the repository using Git.
Navigate to the project directory in your terminal.
Run npm install to install project dependencies.
Create a .env file based on the provided .env.example and fill in the required environment variables.

Configuration:

The application requires a MongoDB instance. Update the MONGODB_URI environment variable in the .env file with the connection string to your MongoDB database.

Issues and Troubleshooting:

If you encounter any issues connecting to MongoDB, ensure that the MongoDB server is running and accessible. Check the connection string and network configurations.