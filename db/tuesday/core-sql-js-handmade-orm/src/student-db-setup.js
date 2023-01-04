const pool = require('./the-pool-of-client');

class StudentDbSetup {
    static async createStudentTable() {
        try {
            await pool.query("DROP TABLE IF EXISTS students");

            await pool.query(`
                CREATE TABLE students (
                    id SERIAL PRIMARY KEY,
                    first_name VARCHAR(64) NOT NULL,
                    last_name VARCHAR(64) NOT NULL,
                    birthday DATE NOT NULL,
                    gender VARCHAR(32),
                    phone VARCHAR(32),
                    email VARCHAR(64),
                    created_at TIMESTAMP NOT NULL,
                    updated_at TIMESTAMP NOT NULL
                );
            `)
        } catch(e) {
            console.log(e);
        }
    };

    static async seed() {
        try {
            await pool.query("DELETE FROM students");

            const r = await pool.query(`
            INSERT INTO students
                (first_name, last_name, birthday, created_at, updated_at)
            VALUES
                ('Brick','Thornton', DATE('1971-07-04'), NOW(), NOW()),
                ('Alyssa','Diaz', DATE('1977-07-04'), NOW(), NOW()),
                ('Matt','Jones', DATE('1978-07-04'), NOW(), NOW()),
                ('Matt','Baker', DATE('1984-07-04'), NOW(), NOW()),
                ('Lauren','Scott', DATE('1990-05-04'), NOW(), NOW()),
                ('Dave','Hoover', DATE('1974-07-04'), NOW(), NOW());
            `)

        } catch(e) {
            console.log(e);
        }
    };
}

module.exports = StudentDbSetup;