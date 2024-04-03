---
sidebar_position: 9
---

# Cursors and Triggers

## Cursor

Cursors are a feature used in database management systems to process individual rows returned by database system queries. Cursors enable manipulation of the row data in a manner that allows for more complex logic than a set-based operation like a standard SELECT query.

### Use Cases for Cursors

Cursors are typically used when you need to read, update, or compute on data row by row. Common use cases include:

- Complex calculations that require row-by-row logic.
- Sequential processing where the action taken on row `n` might depend on the data from row `n-1`.
- Iterative processes within stored procedures where procedural logic is required for each row of a result set.

### How Cursors Work

1. **Declaration**: Before you can use a cursor, you need to declare it. The declaration binds the cursor to a specific `SELECT` statement which defines the result set.

2. **Opening**: After declaring a cursor, you open it to establish the result set from the `SELECT` statement. This is when the cursor starts to work with the data.

3. **Fetching**: Once the cursor is open, you can fetch rows from the result set one at a time. Fetching a row retrieves the current row's data and moves the cursor to the next row in the result set.

4. **Processing**: After fetching a row, you can process the data just as you would in a normal variable context within your SQL code. This often involves applying business logic, updating values, or making decisions based on the data.

5. **Closing**: When you've finished processing the rows, you should close the cursor to release the associated resources. This is an important step to prevent resource leaks.

6. **Deallocating**: In some systems, you might also need to deallocate the cursor to remove it completely and free up system resources.

### Example in SQL

Here's a simplified example of how you might use a cursor in a SQL stored procedure:

```sql
BEGIN
    -- Declare the cursor
    DECLARE cursor_name CURSOR FOR 
    SELECT column1 FROM table_name;

    -- Declare variables
    DECLARE fetched_value datatype_of_column1;

    -- Open the cursor
    OPEN cursor_name;

    -- Fetch the first row
    FETCH FROM cursor_name INTO fetched_value;

    -- Loop through all rows
    WHILE ... -- condition to continue
    DO
        -- Process the data row by row
        ...

        -- Fetch the next row
        FETCH FROM cursor_name INTO fetched_value;
    END WHILE;

    -- Close the cursor
    CLOSE cursor_name;
END;
```

This is a very general pattern; the specific syntax and features can vary between databases like MySQL, PostgreSQL, Oracle, SQL Server, etc. Some databases may have additional functionality related to cursors, like scrollability (the ability to move the cursor in both directions) and holdability (the cursor stays open after a transaction is committed).

## Triggers

Triggers are stored procedures that are automatically executed (fired) in response to specific events on a particular table or view in a database. These events can include `INSERT`, `UPDATE`, or `DELETE` operations. Triggers are useful for enforcing business rules, validating data, and maintaining data integrity.

### Creating a Trigger

```sql
CREATE TRIGGER trigger_name trigger_time trigger_event
ON table_name FOR EACH ROW
BEGIN
    -- Trigger logic here
END;
```

```sql
CREATE TRIGGER trigger_name BEFORE|AFTER INSERT|UPDATE|DELETE
ON table_name FOR EACH ROW
BEGIN
    -- Trigger logic here
END;
```

- `trigger_name`: The name of the trigger. as a convention, `tr_moment_event_table` is used.
- `trigger_time`: The time when the trigger should be executed (`BEFORE` or `AFTER`).
- `trigger_event`: The event that triggers the execution of the trigger (`INSERT`, `UPDATE`, or `DELETE`).
- `table_name`: The name of the table on which the trigger is defined.
- `FOR EACH ROW`: Specifies that the trigger should be fired for each row inserted, updated, or deleted.

### Dropping a Trigger

```sql
DROP TRIGGER trigger_name;
```

### OLD and NEW Pseudo-Rows

Within a trigger, you can access two special pseudo-rows: `OLD` and `NEW`. These pseudo-rows represent the state of the row before and after the triggering event, respectively.

- `OLD`: Represents the state of the row before an `UPDATE` or `DELETE` operation.
- `NEW`: Represents the state of the row after an `INSERT` or `UPDATE` operation.

### Example in SQL

Here's an example of a trigger that automatically updates a timestamp column when a row is inserted or updated:

```sql
CREATE TRIGGER tr_update_timestamp
BEFORE INSERT OR UPDATE
ON table_name FOR EACH ROW
BEGIN
    SET NEW.updated_at = NOW();
END;
```