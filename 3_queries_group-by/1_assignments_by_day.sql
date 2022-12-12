/* SELECT assignments.day AS day, COUNT(assignment_id) AS total_assignments
FROM assignment_submissions
JOIN assignments ON assignments.id = assignment_id
GROUP BY assignments.day; */


SELECT day, count(*) as total_assignments 
FROM assignments
GROUP BY day
ORDER BY day;