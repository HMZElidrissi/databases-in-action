---
sidebar_position: 3
---

# Querying Data

## Sample Data

The dataset contains details of the world's highest valued media franchises by gross revenue. Each row contains one franchise, and the table is named **franchises**.

| Franchise       | inception_year | total_revenue_busd | original_medium | owner                  | n_movies |
|-----------------|----------------|--------------------|-----------------|------------------------|----------|
| Star Wars       | 1977           | 46.7               | movie           | The Walt Disney Company| 12       |
| Mickey Mouse and Friends | 1928  | 52.2               | cartoon         | The Walt Disney Company| -        |
| Anpanman        | 1973           | 38.4               | book            | Froebel-kan            | 33       |
| Winnie the Pooh  | 1924           | 48.5               | book            | The Walt Disney Company| 6        |
| Pokémon         | 1996           | 88                 | video game      | The Pokémon Company    | 24       |
| Disney Princess | 2000           | 45.4               | movie           | The Walt Disney Company| -        |

## Simple Queries

```sql title="Selecting all columns"
SELECT * FROM franchises;
```

```sql title="Selecting specific columns"
SELECT Franchise, total_revenue_busd
FROM franchises;
```

```sql title="Selecting with a condition"
SELECT Franchise, inception_year
FROM franchises
WHERE inception_year > 1990;
```

```sql title="Selecting with multiple conditions"
SELECT Franchise, inception_year
FROM franchises
WHERE inception_year > 1990
AND total_revenue_busd > 50;
```

```sql title="Selecting with a condition on a text column"
SELECT Franchise, original_medium
FROM franchises
WHERE original_medium = 'movie';
```

:::tip Operators
- `=`, `!=` or `<>`, `>`, `<`, `>=`, `<=` for comparison
- `AND`, `OR`, `NOT` for logical operations
- `LIKE` for pattern matching with `%` and `_`. (`_` matches any single character, `%` matches any sequence of characters)
- `IN`, `BETWEEN`, `IS NULL`, `IS NOT NULL` for special cases
- `<=>` for NULL-safe equality comparison (use case: `NULL <=> NULL` returns `1`)
:::

```sql title="Overriding the default column name"
SELECT Franchise AS Name, total_revenue_busd AS Revenue
FROM franchises;
```

```sql title="Arranging the output"
SELECT Franchise, inception_year
FROM franchises
ORDER BY inception_year DESC;

-- or

SELECT Franchise, inception_year
FROM franchises
ORDER BY inception_year ASC;
```

```sql title="Limiting the number of rows"
SELECT Franchise, inception_year
FROM franchises
LIMIT 3;
```

```sql title="Get unique values"
SELECT DISTINCT original_medium
FROM franchises;
```

## Aggregating Data

```sql title="Get the number of rows"
SELECT COUNT(*)
FROM franchises;
```

```sql title="Get the sum of a column"
SELECT SUM(total_revenue_busd)
FROM franchises;
```

```sql title="Get the average of a column"
SELECT AVG(total_revenue_busd)
FROM franchises;
```

```sql title="Get the minimum and maximum values"
SELECT MIN(total_revenue_busd), MAX(total_revenue_busd)
FROM franchises;
```

## Grouping Data

```sql title="Grouping by a column"
SELECT original_medium, COUNT(*)
FROM franchises
GROUP BY original_medium;
```

```sql title="Grouping by a column with a condition"
SELECT original_medium, COUNT(*)
FROM franchises
WHERE total_revenue_busd > 50
GROUP BY original_medium;
```

```sql title="Grouping by a column with a condition and ordering"
SELECT original_medium, COUNT(*)
FROM franchises
WHERE total_revenue_busd > 50
GROUP BY original_medium
ORDER BY COUNT(*) DESC;
```

```sql title="Grouping by multiple columns"
SELECT original_medium, owner, COUNT(*)
FROM franchises
GROUP BY original_medium, owner;
```

```sql title="Get the rows where values in a group meet a condition"
SELECT original_medium, owner, COUNT(*)
FROM franchises
GROUP BY original_medium, owner
HAVING COUNT(*) > 1;
```
