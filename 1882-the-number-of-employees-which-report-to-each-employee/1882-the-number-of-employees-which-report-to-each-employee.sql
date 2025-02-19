
SELECT 
    m.employee_id,
    m.name,
    COUNT(e.reports_to) AS reports_count,
    ROUND(SUM(e.age) / COUNT(e.reports_to)) AS average_age
FROM Employees m 
JOIN EMployees e
ON e.reports_to = m.employee_id
GROUP BY e.reports_to
ORDER BY employee_id;