const pool = require('../src/the-pool-of-client');
const SetupStudentDb = require('../src/student-db-setup');
const Student = require('../src/student');

describe("Student", function () {

    beforeAll(async function () {
        await SetupStudentDb.createStudentTable();
    });

    afterAll(function () {
        pool.end();
    });

    it('таблица должна быть заполнена', async function () {
        await SetupStudentDb.seed();
        const res = await pool.query('SELECT COUNT(*) FROM students;');
        expect(res.rows[0].count).toBe('6');
    });

    describe('изменяемые аттрибуты студента', function () {
        it('has a readable and writable first name', function () {
            const student = new Student({ first_name: 'Jackalyn' });
            expect(student.first_name).toBe('Jackalyn');
            student.first_name = 'Aminah';
            expect(student.first_name).toBe('Aminah');
        });

        it('has a readable and writable last name', function () {
            const student = new Student({ last_name: 'Knaggs' });
            expect(student.last_name).toBe('Knaggs');
            student.last_name = 'Arthur';
            expect(student.last_name).toBe('Arthur');
        });

        it('has a readable and writable gender', function () {
            const student = new Student({ gender: 'male' });
            expect(student.gender).toBe('male');
            student.gender = 'female';
            expect(student.gender).toBe('female');
        });

        it('has a readable and writable  email address', function () {
            const student = new Student({ email: 'email@address.com' });
            expect(student.email).toBe('email@address.com');
            student.email = 'email1@address.com';
            expect(student.email).toBe('email1@address.com');
        });

        it('has a readable and writable  email phone number', function () {
            const student = new Student({ phone_number: '419-555-1234' });
            expect(student.phone_number).toBe('419-555-1234');
            student.phone_number = '419-555-0000';
            expect(student.phone_number).toBe('419-555-0000');
        });
    });

    describe('неизменяемые аттрибуты студента', function () {
        it('has a readable id', function () {
            const student = new Student({ id: 30 });
            expect(student.id).toBe(30);
            student.id = 0;
            expect(student.id).toBe(30);
        });

        it('has a readable update_at', function () {
            const student = new Student({ updated_at: '2015-09-30 16:46:30' });
            expect(student.updated_at).toBe('2015-09-30 16:46:30');
            student.updated_at = '2015-09-30 16:46:31';
            expect(student.updated_at).toBe('2015-09-30 16:46:30');
        });

        it('has a readable created_at', function () {
            const student = new Student({ created_at: '2015-09-30 16:46:30' });
            expect(student.created_at).toBe('2015-09-30 16:46:30');
            student.created_at = '2015-09-30 16:46:31';
            expect(student.created_at).toBe('2015-09-30 16:46:30');
        });
    });

    describe('получение данных из базы данных', function () {
        describe('Students.all', function () {
            it('when there are no students in the database', async function () {
                await pool.query('DELETE FROM students;')

                const { rows } = await Student.all();

                expect(rows.length).toBe(0);
            });

            it('when there are few students in the database', async function () {
                await SetupStudentDb.seed();

                const { rows } = await Student.all();
                const res = await pool.query('SELECT COUNT(*) FROM students;');

                expect(rows.length).toBe(Number(res.rows[0].count));
            });
        });

        describe('Students.find', function () {
            it('should return undefined if student was not found', async function () {
                await pool.query('DELETE FROM students;');

                const student = await Student.find(1);

                expect(student).toBe(undefined);
            });

            it('should return instance of Student', async function () {
                await pool.query('DELETE FROM students;');

                const res = await pool.query(`
                    INSERT INTO students
                        (first_name, last_name, birthday, created_at, updated_at)
                    VALUES
                        ('Tobin','Larue', DATE('1974-07-04'), NOW(), NOW())
                    RETURNING id;
                `);

                const id = res.rows[0].id;

                const student = await Student.find(id);

                expect(student instanceof Student).toBe(true);
            });
        });

        describe('<instance of Student>.save', function () {
            it('saved student id should be defined', async function () {
                await pool.query('DELETE FROM students;');

                const student = new Student({
                    first_name: 'Bobby',
                    last_name: 'De Niro',
                    birthday: '1960-09-15',
                });

                expect(student.id).toBe(undefined);

                await student.save();

                const res = await pool.query("SELECT id FROM students WHERE last_name = 'De Niro'");

                const id = res.rows[0].id;
                
                expect(id).toBeDefined()
            });
        });

        describe('<instance of Student>.update', function () {
            it('update user in the db', async function () {
                await pool.query('DELETE FROM students;');

                const res = await pool.query(`
                    INSERT INTO students
                        (first_name, last_name, birthday, created_at, updated_at, gender)
                    VALUES
                        ('Larry','Wachowski', DATE('1974-07-04'), NOW(), NOW(), 'male')
                    RETURNING id;
                `);

                const id = res.rows[0].id;
                const student = await Student.find(id);

                student.gender = 'female';
                student.first_name = 'Lana'

                await student.update();

                const updated = await pool.query(`SELECT * FROM students WHERE id = ${id}`);

                expect(updated.rows[0].first_name).toBe('Lana');
                expect(updated.rows[0].gender).toBe('female');
            });
        });

    });
});
