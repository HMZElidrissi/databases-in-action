---
sidebar_position: 10
---

# Procedures

## Prepared Statements

Prepared statements are a feature of database management systems that allow you to define a query template with placeholders for parameters. The database system then compiles the query template and executes it with the provided parameters. This process can improve performance by reducing the overhead of repeatedly parsing and planning the same query with different parameter values.

```sql title="Prepared Statement Example (PostgreSQL)"
-- Create a prepared statement
PREPARE statement_name AS
SELECT column1, column2
FROM table_name
WHERE column3 = $1;

-- Execute the prepared statement with parameters
EXECUTE statement_name('parameter_value');

-- Deallocate the prepared statement
DEALLOCATE statement_name;
```

```sql title="Prepared Statement Example (MySQL)"
-- Create a prepared statement
PREPARE statement_name FROM
'SELECT column1, column2
FROM table_name
WHERE column3 = ?';

-- Execute the prepared statement with parameters
EXECUTE statement_name USING @parameter_value;

-- Deallocate the prepared statement
DEALLOCATE PREPARE statement_name;
```

## Stored Procedures

Stored procedures are a set of SQL statements that are stored in the database and can be executed on demand. They are typically used to encapsulate complex logic and business rules, making it easier to manage and maintain the database code. Stored procedures can accept input parameters, return output values, and perform a wide range of operations within the database.

```sql title="Stored Procedure Example (PostgreSQL)"
-- Create a stored procedure
CREATE OR REPLACE PROCEDURE procedure_name(parameter1 datatype, parameter2 datatype)
LANGUAGE SQL
AS $$
    SELECT column1, column2
    FROM table_name
    WHERE column3 = parameter1
    AND column4 = parameter2;
$$;

-- Execute the stored procedure
CALL procedure_name('parameter_value1', 'parameter_value2');
```

- `CREATE OR REPLACE PROCEDURE`: Creates a new stored procedure or replaces an existing one with the same name.
- `LANGUAGE SQL`: Specifies the language used to define the stored procedure. In this case, it's SQL. Other languages like PL/pgSQL can also be used in PostgreSQL.
- `AS $$ ... $$`: Defines the body of the stored procedure using the SQL code enclosed within the `$$` delimiters.
- `CALL procedure_name(...)`: Executes the stored procedure with the specified input parameters.

```sql title="Stored Procedure Example (MySQL)"
-- Create a stored procedure
DELIMITER //
CREATE PROCEDURE procedure_name(IN parameter1 datatype, IN parameter2 datatype)
BEGIN
    SELECT column1, column2
    FROM table_name
    WHERE column3 = parameter1
    AND column4 = parameter2;
END //
DELIMITER ;

-- Execute the stored procedure
CALL procedure_name('parameter_value1', 'parameter_value2');
```

- `DELIMITER //`: Changes the statement delimiter to `//` to allow defining the stored procedure body.
- `CREATE PROCEDURE`: Creates a new stored procedure.
- `IN parameter1 datatype`: Declares input parameters for the stored procedure.
- `BEGIN ... END`: Defines the body of the stored procedure.
- `CALL procedure_name(...)`: Executes the stored procedure with the specified input parameters.
- `DELIMITER ;`: Resets the statement delimiter back to `;`.

## Loops, Conditional Statements and Case Statements

```sql title="Loop Example (PostgreSQL)"
-- Loop using a FOR loop
FOR i IN 1..5 LOOP
    -- Loop body
END LOOP;

-- Loop using a WHILE loop
WHILE condition LOOP
    -- Loop body
END LOOP;
```

```sql title="Loop Example (MySQL)"
-- Loop using a WHILE loop
WHILE condition DO
    -- Loop body
END WHILE;

-- Loop using a REPEAT loop
REPEAT
    -- Loop body
UNTIL condition END REPEAT;
```

```sql title="Conditional Statement Example (PostgreSQL)"
IF condition THEN
    -- Code block
ELSIF condition THEN
    -- Code block
ELSE
    -- Code block
END IF;
```

```sql title="Conditional Statement Example (MySQL)"
IF condition THEN
    -- Code block
ELSEIF condition THEN
    -- Code block
ELSE
    -- Code block
END IF;
```

```sql title="Case Statement Example"
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE result3
END;
```

:::info LEAVE and ITERATE Statements
- `LEAVE`: Exits the current loop.
- `ITERATE`: Skips the remaining code in the current loop iteration and continues with the next iteration.
- These statements are commonly used in loops to control the flow of execution.
- `LEAVE` and `ITERATE` are supported in both PostgreSQL and MySQL.
:::

## PL/SQL

PL/SQL (Procedural Language/Structured Query Language) is Oracle Corporation's procedural extension for SQL. It allows you to write procedural code that can be executed in the Oracle database. PL/SQL supports variables, loops, conditional statements, error handling, and other programming constructs, making it a powerful tool for developing complex database applications.

```sql title="PL/SQL Example"
-- Create a PL/SQL block
DECLARE
    variable1 datatype;
    variable2 datatype;
BEGIN
    SELECT column1 INTO variable1
    FROM table_name
    WHERE column2 = 'value';

    variable2 := variable1 * 2;

    DBMS_OUTPUT.PUT_LINE('Result: ' || variable2);
END;
```

- `DECLARE ... BEGIN ... END;`: Defines a PL/SQL block that declares variables and contains the procedural code.
- `SELECT ... INTO ...`: Retrieves a single value from the database and assigns it to a variable.
- `variable2 := variable1 * 2;`: Performs a calculation and assigns the result to a variable.
- `DBMS_OUTPUT.PUT_LINE(...)`: Outputs a message to the console.
- PL/SQL blocks can be executed using tools like SQL*Plus, SQL Developer, or within stored procedures and functions.
- PL/SQL also supports exception handling, cursors, triggers, and other advanced features for developing complex database applications.

