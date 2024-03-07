SELECT 
    c.name
    , count(DISTINCT o.order_id) AS num_orders
    , sum(oli.unit_price * oli.quantity) AS total_order_value
    , sum(oli.unit_price * oli.quantity) / count(DISTINCT o.order_id) AS avg_order_value
FROM 
    customers c
    LEFT JOIN orders o ON c.customer_id = o.customer_id
    LEFT JOIN order_line_items oli ON o.order_id = oli.order_id
GROUP BY 
    c.customer_id 
    , c."name" 
ORDER BY 
    num_orders
    , total_order_value DESC
    , avg_order_value DESC 
;