const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'labber'
});

const userCohortSelect = process.argv[3]

pool.query(`
SELECT 
  teachers.name as teacher, 
  cohorts.name as cohort, 
  count(assistance_requests) as total_assistances
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${userCohortSelect || 'JUL02'}'
GROUP BY 
  teachers.name, 
  cohorts.name
ORDER BY teacher;
`)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));
