---
sidebar_position: 11
---

# Transactions

:::danger Problem
How can we transfer money between two bank accounts without losing money or creating money out of thin air?
:::

:::tip Solution
We use **transactions** to ensure that the transfer is atomic, consistent, isolated, and durable (ACID).
:::

## What is a Transaction?

A **transaction** is a sequence of one or more operations that are executed as a single unit of work. Transactions are used to ensure data integrity and consistency in database systems. The properties of a transaction are defined by the ACID acronym.

## Transactions in MySQL

In MySQL, transactions are used to group multiple SQL statements into a single unit of work. MySQL supports the following transaction control statements:

- `START TRANSACTION`: Begins a new transaction.
- `COMMIT`: Saves the changes made during the transaction.
- `ROLLBACK`: Discards the changes made during the transaction.
- `BEGIN`: Begins a new transaction (equivalent to `START TRANSACTION`).
- `SET autocommit = 0`: Disables autocommit mode, allowing you to start a transaction.
- `SET autocommit = 1`: Enables autocommit mode, committing each statement as it is executed.
- `SAVEPOINT`: Sets a named transaction savepoint within the current transaction.
- `ROLLBACK TO SAVEPOINT`: Rolls back to a specific savepoint within the current transaction.
- `RELEASE SAVEPOINT`: Removes a savepoint from the current transaction.

### Example in MySQL

```sql
-- Start a new transaction
START TRANSACTION;

-- Transfer $100 from account 1 to account 2
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit the transaction
COMMIT;
```

- MySQL by default operates in autocommit mode, where each statement is treated as a separate transaction. To group multiple statements into a single transaction, you need to disable autocommit using `SET autocommit = 0` or `START TRANSACTION`.

## Transactions in PostgreSQL

In PostgreSQL, transactions are used to group multiple SQL statements into a single unit of work. PostgreSQL supports the following transaction control statements:

- `BEGIN`: Begins a new transaction.
- `COMMIT`: Saves the changes made during the transaction.
- `ROLLBACK`: Discards the changes made during the transaction.
- `SAVEPOINT`: Sets a named transaction savepoint within the current transaction.
- `ROLLBACK TO SAVEPOINT`: Rolls back to a specific savepoint within the current transaction.
- `RELEASE SAVEPOINT`: Removes a savepoint from the current transaction.
- `SET TRANSACTION`: Sets transaction characteristics like isolation level and read-only mode.
- `SET TRANSACTION ISOLATION LEVEL`: Sets the transaction isolation level (e.g., `READ COMMITTED`, `REPEATABLE READ`, `SERIALIZABLE`).
- `SET TRANSACTION READ WRITE`: Sets the transaction access mode to read-write.
- `SET TRANSACTION READ ONLY`: Sets the transaction access mode to read-only.
- `SET LOCAL`: Sets a local transaction parameter that applies only to the current transaction.
- `SET CONSTRAINTS`: Sets the behavior of constraint checks within the current transaction.
- `SET TRANSACTION SNAPSHOT`: Sets the transaction snapshot to a specific point in time.
- `SET TRANSACTION DEFERRABLE`: Sets the transaction deferrable property.
- `SET TRANSACTION NOT DEFERRABLE`: Sets the transaction not deferrable property.

### Example in PostgreSQL

```sql
-- Start a new transaction
BEGIN;

-- Transfer $100 from account 1 to account 2
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- Commit the transaction
COMMIT;
```



