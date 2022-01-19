# Top Customers - Intermediate SQL

**Schema**

`customers` table:

| Column Name | Column Type | Details |
| --- | --- | --- |
| customer_id | integer | primary key |
| name | varchar | not null |

`orders` table:

| Column Name | Column Type | Details |
| --- | --- | --- |
| order_id | integer | primary key |
| customer_id | integer | foreign key to customers; not null |
| ordered_at | datetime | not null |

`products` table:

| Column Name | Column Type | Details |
| --- | --- | --- |
| product_id | integer | primary key |
| name | varchar | not null |

`order_line_items` table:

| Column Name | Column Type | Details |
| --- | --- | --- |
| order_line_item_id | integer | primary key |
| order_id | integer | foreign key to orders; not null |
| product_id | integer | foreign key to products; not null |
| unit_price | integer | not null |
| quantity | integer | not null |

**Task**

Write a query to get the customer with the highest total order value for each year-month.

The result should include the columns `year`, `month`, `customer_id`, `total_monthly_order_value`. The output should be ordered by year and month in ascending order.

If there are 2 customers with equal highest value, return the one with a lower id.

**Testing**

Use `test_data.sql` to set up the schema and some test data.

When run on that test data, you should get this result:

| year | month | customer_id | total_monthly_order_value
| --- | --- | --- | ---
| 1996 | 7 | 1 | 1842
| 1996 | 8 | 3 | 529
| 1996 | 9 | 5 | 1002
