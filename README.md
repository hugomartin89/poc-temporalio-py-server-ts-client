# Temporal Demo Project

This project demonstrates the usage of Temporal for workflow orchestration. It consists of a Python server and a TypeScript client.

## Prerequisites

- Python 3.9 or higher
- Node.js 20 or higher
- Temporal Server running locally (or access to a Temporal Cloud instance)
- Poetry (Python package manager)

## Project Structure

```
.
├── client/     # TypeScript client application
└── server/     # Python server application
```

## Setup Instructions

### Server Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies using Poetry:
   ```bash
   poetry install
   ```

3. Run the server:
   ```bash
   poetry run python main.py
   ```

### Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the client:
   ```bash
   npm start
   ```

## Running the Application

1. Make sure you have a Temporal server running locally or have access to a Temporal Cloud instance
2. Start the server first (follow the Server Setup instructions)
3. In a new terminal, start the client (follow the Client Setup instructions)

## Dependencies

### Server Dependencies
- Python 3.9+
- Poetry for dependency management
- Temporal Python SDK

### Client Dependencies
- Node.js 20+
- TypeScript
- Temporal TypeScript SDK
- UUID package

## Notes

- Make sure your Temporal server is running and accessible before starting the applications
- The server and client should be running simultaneously for the application to work properly
- Check the respective directories for more specific configuration options
