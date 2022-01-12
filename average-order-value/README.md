# Average Order Value - Basic SQL

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

Write a report query to get each customer along with their total number of orders, total order value, and average value per order.

The result should include columns for customer name, number of orders, total order value, average value per order. The output should be ordered by the average value per order descending.

**Testing**

Use `test_data.sql` to set up the schema and some test data.

When run on that test data, you should get this result:

| name | num_orders | total_order_value | avg_order_value
| --- | --- | --- | ---
| Acme Corp | 1 | 1842 | 1842
| Globex | 1 | 1428 | 1428
| Soylent Corp | 1 | 1002 | 1002
| Hooli | 1 | 529 | 529
| Initech | 2 | 957 | 478
