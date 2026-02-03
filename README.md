# Student Attendance System

This is a simple student attendance system built with Node.js, Express, and Sequelize.

## Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Database Configuration:**
    *   Create a MySQL database named `student_attendents_db`.
    *   The database connection details are configured in `config/db.js` and `config/config.json`. By default, it connects to `mysql://root:@localhost/student_attendents_db`.

3.  **Database Migration:**
    *   To create the database tables, run the following command:
        ```bash
        npx sequelize-cli db:migrate
        ```

4.  **Start the Application:**
    ```bash
    npm start
    ```
    The application will be running at `http://localhost:3000`.

## Migrations

*   **Create a new migration:**
    ```bash
    npx sequelize-cli migration:generate --name <migration-name>
    ```

*   **Run migrations:**
    ```bash
    npx sequelize-cli db:migrate
    ```

*   **Rollback a migration:**
    ```bash
    npx sequelize-cli db:migrate:undo
    ```

## API Endpoints

The base URL for the API is `http://localhost:3000`.

### Index

*   `GET /`: Welcome message.

### Users

*   `GET /users`: Responds with a resource.

### Students

*   `POST /api/students`: Create a new student.
*   `GET /api/students`: Retrieve all students.
*   `GET /api/students/:id`: Retrieve a single student with id.
*   `PUT /api/students/:id`: Update a student with id.
*   `DELETE /api/students/:id`: Delete a student with id.

### Teachers

*   `POST /api/teachers`: Create a new teacher.
*   `GET /api/teachers`: Retrieve all teachers.
*   `GET /api/teachers/:id`: Retrieve a single teacher with id.
*   `PUT /api/teachers/:id`: Update a teacher with id.
*   `DELETE /api/teachers/:id`: Delete a teacher with id.

### Classes

*   `POST /api/classes`: Create a new class.
*   `GET /api/classes`: Retrieve all classes.
*   `GET /api/classes/:id`: Retrieve a single class with id.
*   `PUT /api/classes/:id`: Update a class with id.
*   `DELETE /api/classes/:id`: Delete a class with id.

### Subjects

*   `POST /api/subjects`: Create a new subject.
*   `GET /api/subjects`: Retrieve all subjects.
*   `GET /api/subjects/:id`: Retrieve a single subject with id.
*   `PUT /api/subjects/:id`: Update a subject with id.
*   `DELETE /api/subjects/:id`: Delete a subject with id.

### Attendances

*   `POST /api/attendances`: Create a new attendance record.
*   `GET /api/attendances`: Retrieve all attendance records.
*   `GET /api/attendances/:id`: Retrieve a single attendance record with id.
*   `PUT /api/attendances/:id`: Update an attendance record with id.
*   `DELETE /api/attendances/:id`: Delete an attendance record with id.