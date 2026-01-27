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
