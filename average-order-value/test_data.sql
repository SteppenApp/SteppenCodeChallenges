create table customers (customer_id integer primary key, name varchar not null) ;

create table orders (order_id integer primary key, customer_id integer not null references customers(customer_id), ordered_at timestamptz not null) ;

create table products (product_id integer primary key, name varchar not null) ;

create table order_line_items (order_line_item_id integer primary key, order_id integer not null references orders(order_id), product_id integer not null references products(product_id), unit_price integer not null, quantity integer not null) ;

insert into customers (customer_id,name) values (1,'Acme Corp'),(2,'Globex'),(3,'Initech'),(4,'Hooli'),(5,'Soylent Corp') ;

insert into orders (order_id,customer_id,ordered_at) values (10248,3,'1996-07-04'),(10249,1,'1996-07-05'),(10253,2,'1996-07-10'),(10274,3,'1996-08-06'),(10275,4,'1996-08-07'),(10296,5,'1996-09-03') ;

insert into products (product_id,name) values (11,'Rambutan'),(42,'The Matrix Reloaded'),(72,'Milk (2 litres)'),(14,'QZ-183'),(51,'Oak Plank (2m x 4m)'),(31,'Loot Crate'),(39,'F-111 Aardvark'),(49,'Fresh Air'),(71,'Bowler Hat'),(24,'12 month subscription'),(59,'Bunch of Roses') ;

insert into order_line_items (order_line_item_id,order_id,product_id,unit_price,quantity) values (24601,10248,11,14,12),(24602,10248,42,9,10),(24603,10248,72,34,5),(24604,10249,14,18,9),(24605,10249,51,42,40),(24606,10253,31,10,20),(24607,10253,39,14,42),(24608,10253,49,16,40),(24609,10274,71,17,20),(24610,10274,72,27,7),(24611,10275,24,3,12),(24612,10275,59,44,6),(24613,10296,11,16,12),(24614,10296,51,13,30),(24615,10296,39,28,15),(24616,10275,72,3,3),(24617,10275,39,50,4),(24618,10275,11,4,5) ;
