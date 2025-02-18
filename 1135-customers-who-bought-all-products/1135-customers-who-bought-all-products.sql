
SELECT 
    c.customer_id
FROM 
    Customer c
JOIN 
    Product p

ON p.product_key = c.product_key
GROUP BY customer_id
Having COUNT(DISTINCT c.product_key) = (SELECT COUNT(product_key) FROM Product);
