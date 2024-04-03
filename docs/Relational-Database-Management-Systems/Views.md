---
sidebar_position: 8
---

# View

- A virtual table defined by an SQL query
- The rows do not physically exist
- A table computable at execution
- Can be used as a table or to define another view

## Creating a View

```sql
CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Let's take an example of cinemas with the following schema:

- cinema(`id_cinema`,`number`, `street`,` city`)
- room(`id_cinema`, `room_number`, `capacity`, `air_conditioned`)
- schedule(`id_schedule`, `start_time`, `end_time`)
- showing(`id_movie`, `id_cinema`, `room_number`, `id_schedule`, `price`)

We want to create a view of cinemas in Rabat:

```sql
CREATE VIEW rabat_cinemas AS
SELECT *
FROM cinema
WHERE city = 'Rabat';
```

- A view allows for storing the query without storing its result
- A view is dynamic
  - Its result is re-evaluated each time the view is accessed
- It provides a faithful representation of the database at the time the query is evaluated
- One can query a view just like a stored table
- What is stored is the query and not its result
  > We do not gain performance by using a view instead of a direct query

## Updating a View

```sql
ALTER VIEW view_name AS new_query;
```

## Dropping a View

```sql
DROP VIEW view_name;
```

## Updating tables through a View

This is where things can get a bit tricky. While you can perform INSERT, UPDATE, and DELETE operations on views, there are restrictions. The rules for updatable views can vary between MySQL and PostgreSQL and depend on how the view is defined. Here are some conditions that generally need to be met for a view to be updatable:

- The view must involve only one underlying data-relation table.
- The view must not contain any of the following:
   - Aggregate functions (`SUM()`, `COUNT()`, etc.)
   - `DISTINCT` keyword
   - `GROUP BY` or HAVING clause
   - `UNION` or UNION ALL
   - Subqueries in the `SELECT` list
   - Certain joins (although simple INNER JOINs are usually okay)

If a view doesn't meet these criteria, you might not be able to perform certain data modification operations through the view.
