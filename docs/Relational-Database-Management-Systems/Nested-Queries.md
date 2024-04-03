---
sidebar_position: 7
---

# Nested Queries

## Subqueries

- A **subquery** (or **inner query** or **nested query**) is a query nested within another query.
- Subqueries can be constructed on multiple levels, allowing for complex querying patterns.
- A subquery can be nested within various SQL statements, including `SELECT`, `INSERT`, `UPDATE`, `DELETE`, or within another subquery.
- Many queries that utilize nesting can also be achieved using joins. The choice between a subquery and a join can depend on readability and performance considerations.
- The readability of subqueries versus joins can be subjective and varies depending on the specific use case and complexity.
- Often, but not always, a query with a join can be faster than a comparable query with nesting due to the way databases optimize joins. However, this is not a strict rule, and performance should be assessed on a case-by-case basis.
- Subqueries can be placed in various parts of a query, such as:
  - The `FROM` clause
  - The `SELECT` clause
  - The `WHERE` clause

### Subquery in the `WHERE` Clause

```sql
SELECT *
FROM table_name
WHERE column_name OPERATOR (subquery);
```

- OPERATOR can be:
  - `+`, `-`, `*`, `/`, `=`, `>`, `<`, `>=`, `<=`, `<>`, `!=`
  - `IN`, `NOT IN`, `EXISTS`, `NOT EXISTS`
  - `ALL`, `ANY`, `SOME`

:::tip Operators
- `IN`/`NOT IN` can be used to compare a column to a list of values.
  ```sql
  SELECT *
  FROM table_name
  WHERE column_name IN (value1, value2, ...);
  ```
  
  ```sql
  SELECT *
  FROM table_name
  WHERE column_name NOT IN (SELECT column_name FROM table_name);
  ```

- `EXISTS`/`NOT EXISTS` can be used to check for the existence of rows in a subquery.
  ```sql
  SELECT * FROM table_name
  WHERE EXISTS (SELECT column_name FROM table_name WHERE condition);
  -- this is true if the subquery returns at least one row
  ```
  
- `ALL`/`ANY`/`SOME` can be used to compare a column to all, any, or some values returned by a subquery.
  ```sql
  SELECT *
  FROM table_name
  WHERE column_name OPERATOR ALL (subquery);
  ```
  - `ALL` returns `TRUE` if the comparison is `TRUE` for all values in the subquery.
  - `ANY` and `SOME` return `TRUE` if the comparison is `TRUE` for at least one value in the subquery.
:::

### Subquery in the `FROM` Clause

```sql
SELECT *
FROM (subquery) AS alias;
```

- The subquery is executed first, and the result is used as a temporary table.
- It is necessary to provide an alias for the subquery to reference the temporary table.
- This technique is useful when the subquery returns a small result set that is used multiple times in the main query.

### Subquery in the `SELECT` Clause

```sql
SELECT column_name, (subquery) AS alias
FROM table_name;
```

- The subquery is executed for each row in the result set.
- The alias is used to reference the result of the subquery in the main query.
- This technique is useful when the subquery returns a single value that is used in the main query.

```sql
SELECT id, (SELECT COUNT(*)
            FROM client c2, reservation
            WHERE client_id = c2.id AND c1.id = c2.id) AS reservation_count
FROM client c1;
```
