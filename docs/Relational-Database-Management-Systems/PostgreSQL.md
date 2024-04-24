---
sidebar_position: 5
---

# PostgreSQL

![PostgreSQL](./img/postgresql.svg)

PostgreSQL is an open-source relational database management system (RDBMS) known for its extensibility and standards compliance. Developed and maintained by a group of volunteers known as The PostgreSQL Global Development Group, it is popular across a wide range of organizations from enterprises to government departments. It has powerful data analysis capabilities.

## Installation

To install PostgreSQL on Ubuntu, you can use the following commands:

```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
```

After installation, you can start the PostgreSQL service and enable it to start on boot:

```bash
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

To access the PostgreSQL shell, use the following command:

```bash
sudo su - postgres -c psql
```

- `su` is used to switch to the `postgres` user.

```bash title="Access the PostgreSQL shell"
sudo -i -u postgres
```

- The default PostgreSQL user is `postgres`, and you can switch to this user to access the PostgreSQL shell.
- `-i` flag is used to simulate the initial login environment of the user.
- `-u` flag is used to specify the user to switch to.
- `psql` is the PostgreSQL interactive terminal.

To access the PostgreSQL shell as a specific user, use the following command:

```bash
psql -U myuser -d mydatabase
```

## Basic Commands

Here are some basic PostgreSQL commands to get you started:

```sql
\l -- List all databases
\c mydatabase -- Connect to a specific database
\dt -- List all tables in the current database
\d mytable -- Show the structure of a table
\i file.sql -- Execute a SQL script
```

```sql title="Create a user"
CREATE USER
    myuser
WITH PASSWORD
    'mypassword';
```

```sql title="Grant privileges"
GRANT ALL PRIVILEGES ON DATABASE
    mydatabase
TO
    myuser;
```

```sql title="Revoke privileges"
REVOKE ALL PRIVILEGES ON DATABASE
    mydatabase
FROM
    myuser;
```

```sql title="Flush privileges"
FLUSH PRIVILEGES;
```

```sql title="Drop a user"
DROP USER
    myuser;
```

we have built-in tables that store information about databases, tables, columns, indexes, foreign keys, triggers, functions, views, and roles. You can query these tables to get information about your PostgreSQL database. (e.g., `information_schema.tables`, `information_schema.columns`, `pg_indexes`, `pg_constraint`, `pg_trigger`, `pg_proc`, `pg_views`, `pg_roles`)

```sql title="List built-in tables"
SELECT
    table_name
FROM
    information_schema.tables
WHERE
    table_schema = 'pg_catalog';
```

```sql title="List users"
SELECT
    usename
FROM
    pg_user;
```

```sql title="List databases"
SELECT
    datname
FROM
    pg_database;
```

```sql title="List tables"
SELECT
    table_name
FROM
    information_schema.tables
WHERE
    table_schema = 'public';
```

## PostgreSQL-Specific Syntax

PostgreSQL allows text concatenation with the || operator:

```sql title="Concatenating text"
SELECT Franchise || ' (' || inception_year || ')' AS details
FROM franchises;
-- This will concatenate the franchise name and inception year (e.g., 'Star Wars (1977)')
```

PostgreSQL uses case-sensitive matching by default. To make it case-insensitive, use the `ILIKE` operator:

```sql title="Case insensitive matching"
SELECT Franchise
FROM franchises
WHERE Franchise ILIKE 'star wars';
-- This will match 'Star Wars', 'star wars', etc.
```

Get the current date with CURRENT_DATE and the current datetime with NOW() or CURRENT_TIME.

```sql
SELECT CURRENT_DATE, NOW(), CURRENT_TIME;
```

PostgreSQL supports the `WITH` clause for common table expressions (CTEs), which allows you to define temporary result sets that can be referenced within a query:

```sql title="Common table expression"
WITH top_franchises AS (
    SELECT Franchise, total_revenue_busd
    FROM franchises
    WHERE total_revenue_busd > 50
)
SELECT *
FROM top_franchises;
```

## JSON Support

- PostgreSQL has built-in support for JSON data types and provides functions for working with JSON data. You can store JSON data, query it, and manipulate it using various functions.
- PostgreSQL provides two data types for storing JSON data: JSON and JSONB. JSONB is more efficient for storing and querying JSON data, while JSON is stored as plain text.

### Operators and Functions

- `->` and `->>` are used to extract values from JSON objects. `->` returns the value as JSON, while `->>` returns the value as text.
- `#>` and `#>>` are used to extract values from JSON arrays. `#>` returns the value as JSON, while `#>>` returns the value as text.
- `jsonb_set()` is used to set a value in a JSON object.
- `jsonb_insert()` is used to insert a value into a JSON object.
- `jsonb_delete()` is used to delete a key from a JSON object.
- `jsonb_array_elements()` is used to expand a JSON array into a set of JSON values.

### Example

```sql title="JSONB data type"
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    data JSONB
);

INSERT INTO products (data)
VALUES
    ('{"name": "Product 1", "price": 100, "tags": ["tag1", "tag2"]}'),
    ('{"name": "Product 2", "price": 200, "tags": ["tag2", "tag3"]}');
```

```sql title="JSON data type"
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    data JSON
);

INSERT INTO products (data)
VALUES
    ('{"name": "Product 1", "price": 100, "tags": ["tag1", "tag2"]}'),
    ('{"name": "Product 2", "price": 200, "tags": ["tag2", "tag3"]}');
```

```sql title="Querying JSON data"
SELECT data->>'name' AS name, data->'price' AS price
FROM products
WHERE data->>'name' = 'Product 1';
-- This will return the name and price of the product with the name 'Product 1'

SELECT data->>'name' AS name, jsonb_array_elements(data->'tags') AS tag
FROM products;
-- This will return each product name and its tags separately
```

## PostgreSQL vs. Other Databases

Given below are the key differences between PostgreSQL and other popular database systems such as MySQL, MariaDB, SQLite, and Oracle. By understanding these differences, you will be able to make a more informed decision on which database management system best suits your needs.

### PostgreSQL vs. MySQL / MariaDB

MySQL and its fork, MariaDB, are both popular open-source relational database management systems (RDBMS). Here’s how PostgreSQL compares to them:

- **Concurrency**: PostgreSQL uses multi-version concurrency control (MVCC), which allows for improved performance in situations where multiple users or applications are accessing the database simultaneously. MySQL and MariaDB use table level-locking, which can be less efficient in high concurrency scenarios.

- **Data Types**: PostgreSQL supports a larger number of custom and advanced data types, including arrays, hstore (key-value store), and JSON. MySQL and MariaDB mainly deal with basic data types like numbers, strings, and dates.

- **Query Optimization**: PostgreSQL generally has a more sophisticated query optimizer that can make better use of indexes and statistics, which can lead to better query performance.

- **Extensions**: PostgreSQL has a rich ecosystem of extensions that can be used to add functionality to the database system, such as PostGIS for spatial and geographic data. MySQL and MariaDB also have plugins, but the ecosystem may not be as extensive as Postgres.

### PostgreSQL vs. SQLite

SQLite is an embedded database system, meaning it is included within applications and does not require a separate server, like PostgreSQL does. Here are the main differences between PostgreSQL and SQLite:

- **Scalability**: SQLite is designed for small-scale applications and personal projects, while PostgreSQL is designed for enterprise-level applications and can handle large amounts of data and concurrent connections.

- **Concurrency**: As mentioned earlier, PostgreSQL uses MVCC for better concurrent access to the database. SQLite, on the other hand, uses file level-locking, which can lead to database locking issues in high concurrency scenarios.

- **Features**: PostgreSQL boasts a wide array of advanced features and data types, whereas SQLite offers a more limited feature set that has been optimized for simplicity and minimal resource usage.

### PostgreSQL vs. Oracle

Oracle is a commercial, proprietary RDBMS system that offers many high-end features aimed at large enterprises. Here’s how PostgreSQL compares to Oracle:

- **Cost**: PostgreSQL is open-source and free to use, while Oracle has a steep licensing cost that can be prohibitively expensive for smaller projects and businesses.

- **Performance**: While both databases have good performance and can handle large amounts of data, Oracle has certain optimizations and features that can make it more suitable for some specific high-performance, mission-critical applications.

- **Community**: PostgreSQL has a large, active open-source community that provides support, development, and extensions. Oracle, being a proprietary system, relies on its company’s support and development team, which might not offer the same level of openness and collaboration.

In conclusion, PostgreSQL is a versatile, powerful, and scalable database system that holds its own against other popular RDBMS options. The choice of which system to use depends on your specific requirements, budget, and familiarity with the database system, but PostgreSQL is an excellent choice for both small and large-scale applications.

