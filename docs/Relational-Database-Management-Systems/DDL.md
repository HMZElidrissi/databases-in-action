---
sidebar_position: 1
---

# Data Definition Language (DDL)

The SQL DDL allows for the creation and modification of database structures, supporting operations that are fundamental to database schema design and management. DDL operations include:

## Creating a Database

Standard SQL syntax, universally applicable across SQL databases:

```sql
CREATE DATABASE database_name;
```

## Dropping a Database

Standard SQL syntax, universally applicable:

```sql
DROP DATABASE database_name;
```

## Creating a Table

Syntax mostly standard across SQL databases with specific options varying by DBMS:

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
  column_name1 datatype [constraint],
  column_name2 datatype [constraint],
  [PRIMARY KEY (column_name1)],
  [FOREIGN KEY (column_name2) REFERENCES table_name(column_name)],
  ...
  ) [ENGINE=engine_name]; -- ENGINE option is MySQL-specific
```

:::tip
- `[IF NOT EXISTS]` is supported by both MySQL and PostgreSQL, preventing errors if the table already exists.
- `[ENGINE=engine_name]` is MySQL-specific, allowing selection between different storage engines like `InnoDB` and `MyISAM`.
:::

## Dropping a Table

Standard SQL syntax, universally applicable:

```sql
DROP TABLE table_name;
```

## Modifying Tables

### Adding, Dropping, Modifying a Column

```sql title="Adding a column"
ALTER TABLE table_name ADD column_name datatype;
```

```sql title="Dropping a column"
ALTER TABLE table_name DROP COLUMN column_name;
```

```sql title="Modifying a column datatype (MySQL)"
ALTER TABLE table_name MODIFY COLUMN column_name datatype;
```

```sql title="Modifying a column datatype (PostgreSQL)"
ALTER TABLE table_name ALTER COLUMN column_name TYPE datatype;
```

```sql title="Renaming a column (MySQL)"
ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name datatype;
```

```sql title="Renaming a column (PostgreSQL)"
ALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;
```

### Adding, Dropping a Constraint

```sql title="Adding a constraint (MySQL)"
ALTER TABLE table_name ADD PRIMARY KEY (column_name);
```

```sql title="Adding a constraint (PostgreSQL)"
ALTER TABLE table_name ADD CONSTRAINT constraint_name PRIMARY KEY (column_name);
```

```sql title="Adding a foreign key constraint (MySQL)"
ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES referenced_table (referenced_column);
```

```sql title="Adding a foreign key constraint (PostgreSQL)"
ALTER TABLE table_name ADD CONSTRAINT constraint_name FOREIGN KEY (column_name) REFERENCES referenced_table (referenced_column);
```

```sql title="Adding a unique constraint (MySQL)"
ALTER TABLE table_name ADD UNIQUE (column_name);
```

```sql title="Adding a unique constraint (PostgreSQL)"
ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);
```

```sql title="Adding a check constraint (MySQL)"
ALTER TABLE table_name ADD CHECK (column_name > 0);
```

```sql title="Adding a check constraint (PostgreSQL)"
ALTER TABLE table_name ADD CONSTRAINT constraint_name CHECK (column_name > 0);
```

```sql title="Adding a default constraint (MySQL)"
ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT default_value;
```

```sql title="Adding a default constraint (PostgreSQL)"
ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT default_value;
```

```sql title="Adding a not null constraint (MySQL)"
ALTER TABLE table_name MODIFY COLUMN column_name datatype NOT NULL;
```

```sql title="Adding a not null constraint (PostgreSQL)"
ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;
```

```sql title="Dropping a constraint (MySQL)"
ALTER TABLE table_name DROP PRIMARY KEY;
```

```sql title="Dropping a constraint (PostgreSQL)"
ALTER TABLE table_name DROP CONSTRAINT constraint_name;
```

## Index Management

### Adding, Dropping an Index

```sql title="Creating an index"
ALTER TABLE table_name ADD INDEX index_name (column_name);
```

```sql title="Dropping an index (MySQL)"
ALTER TABLE table_name DROP INDEX index_name;
```

```sql title="Dropping an index (PostgreSQL)"
DROP INDEX index_name;
```

## Data Types

### Numeric Types

- **Integer numbers**: Used to store whole numbers.
    - MySQL: `TINYINT`, `SMALLINT`, `MEDIUMINT`, `INT`, `BIGINT`
        - Syntax: `column_name INT`
    - PostgreSQL: Similar, but without `MEDIUMINT`. Uses `SERIAL` for auto-incrementing integers.
        - Syntax: `column_name SERIAL` (for auto-incrementing `INT`)
- **Decimal numbers**: Used for precise arithmetic operations.
    - MySQL and PostgreSQL: `FLOAT`, `DOUBLE`, `DECIMAL`
        - Syntax: `column_name DECIMAL(5,2)` (Example for a number with 5 digits in total and 2 after the decimal point)

### Alphanumeric Types

- **Text type strings**: Used for storing text.
    - MySQL: `CHAR`, `VARCHAR`, `TINYTEXT`, `TEXT`, `MEDIUMTEXT`, `LONGTEXT`
        - Syntax: `column_name VARCHAR(255)` (for a variable string with a maximum length of 255)
    - PostgreSQL: Similar, but text types do not include `TINYTEXT`, `MEDIUMTEXT`, `LONGTEXT`.
        - Syntax: `column_name TEXT` (for a text string with no specific limit)

- **Binary type strings**: Used for storing binary data.
    - MySQL: `BINARY`, `VARBINARY`, `TINYBLOB`, `BLOB`, `MEDIUMBLOB`, `LONGBLOB`
        - Syntax: `column_name BLOB` (for binary large objects)
    - PostgreSQL: Uses `BYTEA` for binary data.
        - Syntax: `column_name BYTEA`

### Temporal Types

- **Used for storing date and/or time**.
    - MySQL and PostgreSQL: `DATE`, `TIME`, `DATETIME`, `TIMESTAMP`
        - Syntax (MySQL): `column_name DATETIME`
        - Syntax (PostgreSQL): `column_name TIMESTAMP`
    - **Year**: Specific to MySQL (`YEAR`), not directly available in PostgreSQL.
        - Syntax: `column_name YEAR`

- **Default date functions**: Provide current date/time values.
    - MySQL: `CURRENT_DATE`, `CURRENT_TIME`, `CURRENT_TIMESTAMP`
    - PostgreSQL: Similar support, including `NOW()` for the current date and time.
        - Syntax: `column_name TIMESTAMP DEFAULT CURRENT_TIMESTAMP`

### Special Types

- **`SET`, `ENUM`**: Specific to MySQL, these types allow for the definition of columns that can only take certain predefined values.
    - Syntax: `column_name ENUM('value1', 'value2', 'value3')`
    - Syntax: `column_name SET('value1', 'value2', 'value3')`

## Constraints

Describes standard SQL constraints. It's important to note:

- `AUTO_INCREMENT`: MySQL-specific. Use `SERIAL` or `BIGSERIAL` in PostgreSQL.
- `INDEX`: While indexing is a standard feature, syntax and capabilities like partial or expression indexes may vary between MySQL and PostgreSQL.
- `PRIMARY KEY`: Uniquely identifies each record in a table
- `FOREIGN KEY`: Ensures referential integrity for a record in another table
- `UNIQUE`: Ensures that all values in a column are different
- `CHECK`: Ensures that all values in a column satisfy a specific condition (e.g., `CHECK (age > 18)`)
- `NOT NULL`: Ensures that a column cannot have a `NULL` value
- `DEFAULT`: Provides a default value for a column when no value is specified (e.g., `DEFAULT 0`)

## Storage Engines

Specific to MySQL, detailing `MyISAM` and `InnoDB`:

A storage engine is the underlying software component that a DBMS uses to create, read, update, and delete data from a database. The following are some of the most common storage engines:

- `MyISAM`
    - The default storage engine for MySQL versions prior to 5.5
    - Insertion and selection are faster than InnoDB
    - No support for transactions or foreign keys
- `InnoDB`
    - The default storage engine for MySQL versions 5.5 and later
    - Supports transactions, foreign keys, and row-level locking
    - Slower than MyISAM for insertion and selection

:::note
PostgreSQL does not expose engine choice in the same way, focusing instead on features like tablespace management for performance tuning.
:::

## Options on Foreign Keys

The possible options are:

```sql
ALTER TABLE table_name
ADD [CONSTRAINT fk_name] FOREIGN KEY (column_name)
REFERENCES referenced_table (referenced_column)
ON DELETE {RESTRICT | NO ACTION | SET NULL | CASCADE};
```

- `RESTRICT` or `NO ACTION`: Prevents the deletion of the referenced value (default behavior).
- `SET NULL`: Sets the foreign key value to `NULL` when the referenced value is deleted.
- `CASCADE`: Deletes the row with the foreign key when the referenced row is deleted.

:::tip
The `ON UPDATE` option is also available, with similar behaviors to `ON DELETE`.
:::
