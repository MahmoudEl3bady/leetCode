# Write your MySQL query statement below

SELECT 
    project_id,
    ROUND(AVG(emp.experience_years),2) AS average_years
FROM 
    Project p
JOIN 
    Employee emp
ON 
    p.employee_id = emp.employee_id
GROUP BY
    p.project_id;
