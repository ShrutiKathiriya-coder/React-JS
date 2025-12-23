# Gym Project Backend

This is the backend API for the Gym Project.

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Environment Variables:**
    Ensure you have a `.env` file in the `Backend` directory with the following content:
    ```env
    PORT=3000
    URI=mongodb://localhost:27017/gymdb
    ```
    (Update `URI` if using a cloud MongoDB like Atlas).

3.  **Run Server:**
    ```bash
    npm start
    ```
    The server will start on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint | Description | Body (JSON) |
| :--- | :--- | :--- | :--- |
| **POST** | `/add` | Add a new member | `{ "name": "John", "age": 25, "membershipType": "Gold", "duration": 6, "fees": 5000 }` |
| **GET** | `/` | Get all members | - |
| **GET** | `/:id` | Get member by ID | - |
| **PUT** | `/:id` | Update member | Fields to update |
| **DELETE** | `/:id` | Delete member | - |

## Project Structure

-   `config/`: Database configuration
-   `controller/`: Logic for API endpoints
-   `model/`: Mongoose schemas
-   `routes/`: API route definitions
-   `index.js`: Entry point
