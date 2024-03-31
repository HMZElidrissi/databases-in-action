---
sidebar_position: 2
---

# Data Manipulation Language (DML)

## INSERT

### with `INSERT INTO`

```sql title="With specification of column names"
INSERT INTO Client (ClientNumber, ClientName, birth_date, city)
VALUES (1, 'Ahmed Ali', '1991-08-03 05:12:00', 'Rabat');
```

```sql title="Without specification of column names"
INSERT INTO Client
VALUES (2, 'Khalid Fathi', '1990-11-13 15:24:00', 'Kenitra');
```

```sql title="Inserting multiple rows"
INSERT INTO Client (ClientNumber, ClientName, birth_date, city)
VALUES (3, 'Karim Othman', '1992-05-23 10:45:00', 'Casablanca'),
       (4, 'Hassan Jamal', '1993-02-15 20:36:00', 'Tangier');
```

```sql title="Inserting a row with a default value (MySQL-specific)"
INSERT INTO Client
SET ClientNumber = 5, ClientName = 'Omar Youssef', birth_date = '1994-07-30 08:18:00', city = 'Marrakech';
``` 

```sql title="Inserting a row that may already exist (MySQL)"
INSERT IGNORE INTO Client (ClientNumber, ClientName, birth_date, city)
VALUES (1, 'Ahmed Ali', '1991-08-03 05:12:00', 'Rabat');
```

```sql title="Inserting a row that may already exist (PostgreSQL)"
INSERT INTO Client (ClientNumber, ClientName, birth_date, city)
VALUES (1, 'Ahmed Ali', '1991-08-03 05:12:00', 'Rabat')
ON CONFLICT (ClientNumber) DO NOTHING;
```

```sql title="Inserting a row from another table"
INSERT INTO Client (ClientNumber, ClientName, birth_date, city)
SELECT ClientNumber, ClientName, birth_date, city
FROM Client
WHERE ClientNumber = 1;
```

### by Executing a SQL script

```sql title="Inserting data from a script (MySQL)"
source /path/to/script.sql;

-- or
       
\. /path/to/script.sql;
```

```sql title="Inserting data from a script (PostgreSQL)"
\i /path/to/script.sql;
```

### by Importing a CSV file

```sql title="Importing data from a CSV file (MySQL)"
LOAD DATA [LOCAL] INFILE '/path/to/file.csv'
INTO TABLE Client
[FIELDS TERMINATED BY ',' ENCLOSED BY '"' ESCAPED BY '\\']
[LINES STARTING BY 'line_starting_by' TERMINATED BY '\n'];
[IGNORE number LINES]
[(column1, column2, ...)];
```

- `LOCAL`: Optional keyword to specify that the file is on the client-side.
- `FIELDS TERMINATED BY`, `ENCLOSED BY`, `ESCAPED BY`: Optional keywords to specify the field, enclosure, and escape characters.
- `LINES STARTING BY`, `TERMINATED BY`: Optional keywords to specify the line starting and terminating characters.
- `IGNORE number LINES`: Optional keyword to specify the number of lines to ignore at the beginning of the file.
- `column1, column2, ...`: Optional list of columns to import.
    
```sql title="Importing data from a CSV file (PostgreSQL)"
COPY table_name (column1, column2, column3, ...)
    FROM '/path/to/your/file.csv'
    WITH (FORMAT csv, HEADER true, DELIMITER ',', QUOTE '"', ESCAPE '\\');
```

- `table_name`: The name of the table you're importing data into.
- `(column1, column2, column3, ...)`: The columns in the table that correspond to the columns in your CSV file. This part is optional; if omitted, the CSV file must have the same column order as the table.
- `'/path/to/your/file.csv'`: The full path to the CSV file you want to import.
- `WITH (FORMAT csv, HEADER true, DELIMITER ',', QUOTE '"', ESCAPE '\\')`: Specifies the format of the file and its nuances. Adjust these options according to your CSV file format:
    - `FORMAT csv`: Specifies that the file is in CSV format.
    - `HEADER true`: Indicates that the first row contains column headers and should be ignored during import.
    - `DELIMITER ','`: Specifies the character that separates columns in the file (`,` is the standard CSV delimiter).
    - `QUOTE '"'`: Indicates the character used to quote data in the file.
    - `ESCAPE '\\'`: Specifies the escape character.

```sql title="Importing data from a CSV using \copy command (PostgreSQL)"
\copy table_name (column1, column2, column3, ...)
    FROM '/path/to/your/file.csv'
    WITH (FORMAT csv, HEADER true, DELIMITER ',', QUOTE '"', ESCAPE '\\');
```

## DELETE

```sql title="Deleting all rows"
DELETE FROM Client;
```

```sql title="Deleting specific rows"
DELETE FROM Client
WHERE ClientNumber = 1;
```

```sql title="Deleting rows from another table"
DELETE Client
FROM Client
JOIN Orders ON Client.ClientNumber = Orders.ClientNumber
WHERE Orders.OrderNumber = 1;
```

## UPDATE

```sql title="Updating all rows"
UPDATE Client
SET city = 'Rabat';
```

```sql title="Updating specific rows"
UPDATE Client
SET city = 'Rabat'
WHERE ClientNumber = 1;
```

```sql title="Updating rows from another table"
UPDATE Client
JOIN Orders ON Client.ClientNumber = Orders.ClientNumber
SET Client.city = 'Rabat'
WHERE Orders.OrderNumber = 1;
```

