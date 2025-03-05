# Write your MySQL query statement below

SELECT 
    employee_id
FROM 
    Employees
WHERE 
    salary < 30000
AND 
manager_id NOt IN (
    SELECT employee_id 
    FROM Employees 
) 
ORDER BY employee_id;