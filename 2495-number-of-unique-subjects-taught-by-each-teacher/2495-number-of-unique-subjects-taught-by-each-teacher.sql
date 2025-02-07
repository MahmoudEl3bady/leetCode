# Write your MySQL query statement below
SELECT 
    teacher_id, 
    COUNT(distinct subject_id) As cnt
FROM 
    Teacher a
GROUP BY 
    teacher_id;