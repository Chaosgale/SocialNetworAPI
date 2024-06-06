# Social Network API

## Description

A social network API using a NoSQL database (MongoDB) to handle large amounts of unstructured data. It supports creating, updating, and deleting users, thoughts, reactions, and friends.

## Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install

## Usage

1. Ensure MongoDB is running.
2. Seed the database:
    ```bash
    npm run seed

3. Start the server:
    ```bash
    npm run dev

4. The server runs at http://localhost:3003.

## API Routes

### Users

- GET /api/users - Get all users.

- GET /api/users/:userId - Get a single user by ID.
- POST /api/users - Create a new user.
- PUT /api/users/:userId - Update a user by ID.
- DELETE /api/users/:userId - Delete a user by ID.
- POST /api/users/:userId/friends/:friendId - Add a friend to a user's friend list.
- DELETE /api/users/:userId/friends/:friendId - Remove a friend from a user's friend list.

### Thoughts

- GET /api/thoughts - Get all thoughts.

- GET /api/thoughts/:thoughtId - Get a single thought by ID.
- POST /api/thoughts - Create a new thought.
- PUT /api/thoughts/:thoughtId - Update a thought by ID.
- DELETE /api/thoughts/:thoughtId - Delete a thought by ID.
- POST /api/thoughts/:thoughtId/reactions - Add a reaction to a thought.
- DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought.

### Testing with Insomnia

- Open Insomnia and create a new request.

- Set the request method (GET, POST, PUT, DELETE) and the request URL according to the API routes.

- For POST and PUT requests, provide the required JSON data in the body.

- Send the request and check the response.

## Walkthrough video link

https://drive.google.com/file/d/1G1M1fpNEEcLJJmixRsrywEF0qd8LExZc/view