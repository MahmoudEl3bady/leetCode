SELECT emp.name FROM Employee emp
JOIN (
    SELECT managerId 
    From Employee
    WHERE managerId is not null
    Group by managerId
    Having COUNT(managerId) >=5
) AS mangers
ON emp.id = mangers.managerId;