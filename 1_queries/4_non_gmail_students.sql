SELECT name, email, id, cohort_id
FROM students
WHERE email <> '%@gmail.com' /* Can also use NOT LIKE */
AND phone IS NULL;