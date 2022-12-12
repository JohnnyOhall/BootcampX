SELECT SUM(assignment_submissions.duration) AS total_duration
FROM assignment_submissions 
JOIN students ON students.id = student_id 
JOIN assignments ON assignments.id = assignment_id /* NOT REQUIRED */
WHERE students.name = 'Ibrahim Schimmel';