# AI Chatbot with Authentication

This is an AI chatbot application with a complete authentication system including login and signup functionality.

## Features

- User authentication (login/signup) with JWT tokens
- Protected chat interface that requires authentication
- Responsive design that works on desktop and mobile
- Real-time chat with AI assistant
- Chat history management
- Code syntax highlighting in AI responses
- Markdown support for rich text formatting

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ai-chatbot
   ```

3. Install dependencies:
   ```
   npm install
   ```

## Running the Application

### Development Mode

To run both the frontend and backend servers concurrently:

```
npm run dev:full
```

This will start:
- Frontend development server on http://localhost:5173
- Backend API server on http://localhost:5000

### Running Servers Separately

To run only the frontend development server:
```
npm run dev
```

To run only the backend server:
```
npm run server
```

## Usage

1. Open your browser and go to http://localhost:5173
2. You'll be presented with a login screen
3. If you don't have an account, click "Sign up" to create one
4. After logging in, you'll have access to the chat interface
5. Start chatting with the AI assistant!

## API Endpoints

The backend provides the following API endpoints:

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/protected` - Example protected route

## Authentication

The application uses JWT (JSON Web Tokens) for authentication:

1. When a user logs in or signs up, they receive a JWT token
2. This token is stored in localStorage
3. The token is automatically included in the Authorization header for API requests
4. The token is verified by the backend for protected routes

## Project Structure

```
ai-chatbot/
├── src/
│   ├── auth/           # Authentication components
│   ├── contexts/       # React context providers
│   ├── hooks/          # Custom React hooks
│   └── ...             # Other frontend components
├── server.js           # Backend server
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies and scripts
```

## Technologies Used

### Frontend
- React 19
- Vite
- React Markdown
- React Syntax Highlighter
- CSS3 with modern styling techniques

### Backend
- Node.js
- Express.js
- bcryptjs (for password hashing)
- jsonwebtoken (for JWT tokens)
- CORS (for cross-origin resource sharing)

## Security Notes

- Passwords are hashed using bcrypt before being stored
- JWT tokens are used for session management
- In production, you should use a proper database instead of in-memory storage
- The SECRET_KEY in server.js should be changed for production

## Development

To lint the code:
```
npm run lint
```

To build for production:
```
npm run build
```

To preview the production build:
```
npm run preview
```