const db = require('./src/the-pool-of-client');
const DbSetup = require('./src/student-db-setup');

async function init() {
    try {
        await db.connect();

        await DbSetup.createStudentTable();

        await DbSetup.seed();

    } catch(e) {
        console.log(e)
    
    } finally {
        db.end();
        
    }
}

init();