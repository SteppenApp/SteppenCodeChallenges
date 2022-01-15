SELECT
--cust.name
tempC.Year AS [year]
, tempC.Month AS [month]
, cust.customer_id
, tempC.total_monthly_order_value
FROM customers AS cust
INNER JOIN 
(
	SELECT 
		*
	FROM
	(
		SELECT
			*
			, RANK() over
				(
				PARTITION BY Year, Month
				ORDER BY total_monthly_order_value DESC, customer_id ASC) AS ranking
		FROM
		(
			SELECT
			YEAR(ord.ordered_at) AS [year]
			, MONTH(ord.ordered_at) AS [month]
			, ord.customer_id
			--, SUM(orditems.quantity) AS total_monthly_order_value
			, SUM(orditems.unit_price*orditems.quantity) AS total_monthly_order_value
			FROM orders AS ord
			LEFT JOIN order_line_items AS orditems ON ord.order_id = orditems.order_id
			GROUP BY ord.customer_id, YEAR(ord.ordered_at), MONTH(ord.ordered_at)
		) AS tempA
	) AS tempB
	WHERE ranking =1
) AS tempC ON cust.customer_id=tempC.customer_id