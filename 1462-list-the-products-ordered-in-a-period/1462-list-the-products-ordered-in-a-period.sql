-- SELECT 
--     p.product_name,
--     (
--         SELECT 
--             SUM(unit) 
--         FROM 
--             Orders 
--         WHERE 
--         BETWEEN CAST('2020-02-01' AS DATE) AND CAST('2020-02-29' AS DATE)
--         Group BY product_id
--     ) AS unit

-- FROM Products p;

SELECT 
    p.product_name,
    SUM(o.unit) AS unit 
FROM Products p
JOIN Orders o
ON o.product_id = p.product_id
WHERE  
  o.order_date  BETWEEN CAST('2020-02-01' AS DATE) AND CAST('2020-02-29' AS DATE)

GROUP BY o.product_id
Having SUM(o.unit) >=100;