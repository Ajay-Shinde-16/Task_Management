# Task Management System

## Overview
The Task Management System is a full-stack web application built using React for the frontend and Spring Boot for the backend, with MySQL/PostgreSQL as the database. This system allows users to create, update, delete, and track tasks efficiently.

## Features
- User Authentication (Signup/Login)
- Create, Read, Update, and Delete (CRUD) operations for tasks
- Task prioritization and status tracking
- Search and filter tasks
- User roles and permissions

## Tech Stack
### Frontend:
- React.js (with Hooks & Context API)
- Axios (for API calls)
- React Router
- Tailwind CSS (for styling)

### Backend:
- Spring Boot
- Spring Security (for authentication & authorization)
- Spring Data JPA
- MySQL/PostgreSQL (Database)
- Lombok (for reducing boilerplate code)

## Installation & Setup

### Prerequisites:
- Node.js (for frontend)
- Java 17+ (for backend)
- MySQL/PostgreSQL (for database)
- Maven (for managing dependencies)

### Backend Setup:
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/task-management-system.git
   cd task-management-system/backend
   ```
2. Configure the database in `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```
3. Build and run the backend:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup:
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## API Endpoints
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login

### Task Management
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/{id}` - Update a task
- `DELETE /api/tasks/{id}` - Delete a task

## File Structure
### Backend:
```
backend/
│── src/main/java/com/example/taskmanagement
│   ├── controller/
│   ├── service/
│   ├── repository/
│   ├── model/
│   ├── config/
│   └── TaskManagementApplication.java
│── src/main/resources/
│   ├── application.properties
│── pom.xml
```

### Frontend:
```
frontend/
│── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── services/
│   ├── App.js
│   ├── index.js
│── package.json
```
