
SELECT 
    sell_date,
    COUNT(distinct product) As num_sold,
    GROUP_CONCAT(DISTinct product order by product ASC separator ',' )
        AS products
FROM    
    Activities 
GROUP BY sell_date Order By sell_date ASC;