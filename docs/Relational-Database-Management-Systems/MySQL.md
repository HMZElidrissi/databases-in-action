---
sidebar_position: 4
---

# MySQL

![MySQL](./img/mysql-48.png)

MySQL is an open-source relational database management system (RDBMS) known for its fast performance and reliability. Developed by Oracle Corporation, it's widely used for web applications and online publishing.


## Installation

To install MySQL on Ubuntu, you can use the following commands:

```bash
sudo apt update
sudo apt install mysql-server
```

After installation, you can start the MySQL service and enable it to start on boot:

```bash
sudo systemctl start mysql
sudo systemctl enable mysql
```

To access the MySQL shell, use the following command:

```bash
mysql -u root -p
```

## Basic Commands

Here are some basic MySQL commands to get you started:

```sql
SHOW DATABASES; -- List all databases
USE mydatabase; -- Switch to a specific database
SHOW TABLES; -- List all tables in the current database
DESCRIBE mytable; -- Show the structure of a table
```

```sql title="Create a user"
CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';
```

```sql title="Grant privileges"
GRANT ALL PRIVILEGES ON mydatabase.*
TO 'myuser'@'localhost';
-- Grant all privileges on a specific database to a user
-- meaning the user can perform any action on the database
```

```sql title="Flush privileges"
FLUSH PRIVILEGES;
-- This command reloads the grant tables in the MySQL database, 
-- ensuring that any changes to user privileges are applied immediately.
```

```sql title="Revoke privileges"
REVOKE ALL PRIVILEGES ON mydatabase.*
FROM 'myuser'@'localhost';
```

```sql title="Drop a user"
DROP USER 'myuser'@'localhost';
```

## MySQL-Specific Syntax

```sql title="Using the IFNULL function"
SELECT Franchise, IFNULL(n_movies, 0) AS n_movies
FROM franchises;
-- This will replace NULL values in the n_movies column with 0
```

```sql title="Using the IF function"
SELECT Franchise, IF(total_revenue_busd > 50, 'High', 'Low') AS revenue_category
FROM franchises;
-- This will categorize franchises based on their total revenue
```

By default, MySQL uses case-insensitive matching in WHERE clauses. To make it case sensitive, use the `BINARY` keyword:

```sql title="Case sensitive matching"
SELECT Franchise
FROM franchises
WHERE BINARY Franchise = 'Star Wars';
-- This will only match 'Star Wars' and not 'star wars'
```

```sql title="Concatenating text"
SELECT CONCAT(Franchise, ' (', inception_year, ')') AS details
FROM franchises;
-- This will concatenate the franchise name and inception year (e.g., 'Star Wars (1977)')
```

Get the current date with CURDATE() and the current datetime with NOW() or CURTIME().

```sql
SELECT CURDATE(), NOW(), CURTIME();
```

```sql title="List available tables with show tables"
SHOW TABLES;
```

```sql title="Show table structure with describe"
DESCRIBE franchises;
```

```sql title="Arithmetic functions"
SELECT
    COUNT(*),
    AVG(total_revenue_busd),
    SUM(total_revenue_busd),
    MIN(total_revenue_busd),
    MAX(total_revenue_busd)
FROM franchises;
```

```sql title="MySQL Version"
SELECT VERSION();
```

```sql title="Last inserted ID"
SELECT LAST_INSERT_ID();
```

