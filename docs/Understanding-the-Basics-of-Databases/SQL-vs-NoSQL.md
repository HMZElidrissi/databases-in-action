---
sidebar_position: 2
---

# SQL vs NoSQL

SQL and NoSQL are two different database technologies, with SQL databases emphasizing structured, relational models, and NoSQL databases adopting a flexible, schemaless approach for handling diverse and dynamic data with more emphasis on scalability and speed.

## SQL Databases

### Characteristics of SQL Databases

In SQL databases, the relational model serves as the conceptual foundation, organizing data into structured and interconnected tables. SQL databases are made up of schemas and tables, with each table containing rows and columns that define the data structure.
- **Schema**: defines the structure of the database, including tables, columns, and relationships.
- **Tables**: The foundational units of the database, representing entities (e.g., information about customers, products, orders), with rows containing individual records and columns representing attributes of the entity.

The relational model enforces consistency through two types of keys: (1) primary keys uniquely identifying each record and (2) foreign keys establishing relationships between tables. 

### Advantages of SQL

SQL provides a standard set of commands for defining, querying, updating, and administering data in a relational database management system (RDBMS). Key SQL operations include SELECT (querying data), INSERT (adding new records), UPDATE (modifying existing records), and DELETE (removing records).

When using these commands, SQL ensures that ACID (Atomicity, Consistency, Isolation, and Durability) properties are maintained. This ensures the reliability and consistency of database changes.

1. **Atomicity**: This property ensures that each attempted set of changes to a database is treated as a single, indivisible unit of work. Either the whole unit is committed to the database, or none of them are if any part of the transaction fails.
2. **Consistency**: Ensures that a transaction ends with the database in a valid state. The database must satisfy a set of integrity constraints both before and after the transaction.
3. **Isolation**: Ensures that simultaneous transactions do not lead to inconsistencies in the database. Each transaction appears to execute in isolation, unaware of other transactions running. Isolation prevents interference between transactions and maintains their integrity.
4. **Durability**: Durability guarantees that once a transaction is committed, its effects persist even in the event of a system failure. The changes made by the transaction are permanently stored in the database, and they survive system crashes or power outages.

These fundamental properties of SQL databases ensure that database systems are reliable and consistent, even in the case of unexpected events or system failures.

### Common SQL Databases Systems

There are three commonly used RDMS systems:
- **MySQL**: An open-source relational database management system that uses SQL.
- **PostgreSQL**: An advanced open-source relational database system known for its extensibility and compliance with SQL standards.
- **Oracle Database**: A proprietary multimodel database management system that supports SQL.

## NoSQL Databases

NoSQL (Not Only SQL) databases were created as a response to the challenges posed by the expansion of big data and the increasing need for scalability in database systems. Traditional relational databases struggle to efficiently manage vast amounts of unstructured and semi-structured data commonly seen in modern big data. NoSQL databases represent a more flexible and scalable alternative to relational databases.

They effectively handle diverse data types, accommodate rapid data growth, and distribute data across multiple servers efficiently.

NoSQL solutions like MongoDB, Cassandra, and Couchbase don’t use the same rigid structures that the relational model supports. These systems favor schema flexibility and horizontal scaling, allowing organizations to adapt to the dynamic nature of big data while maintaining performance and reliability. The correlation between NoSQL, big data, and scalability underscores a pivotal evolution in database management, empowering businesses to tackle the challenges presented by the recent exponential growth of data.

### Characteristics of NoSQL Databases

NoSQL databases are characterized by their schemaless design, which allows for the storage and retrieval of data without a predefined schema. This flexibility enables developers to work with diverse and dynamic data types, making NoSQL databases well-suited for applications that require rapid development and frequent changes to data structures.

NoSQL databases are typically categorized into four main types:
- **Document Stores**: Store data in flexible, JSON-like documents (e.g., MongoDB).
- **Key-Value Stores**: Store data as key-value pairs (e.g., Redis, DynamoDB).
- **Column-Family Stores**: Store data in columns grouped into families (e.g., Cassandra).
- **Graph Databases**: Store data in nodes and edges to represent relationships (e.g., Neo4j).

### Advantages of NoSQL

![Advantages of NoSQL databases include:](./img/image.png)

### Common NoSQL Databases Systems

A few of the most commonly used NoSQL database systems are:

1. MongoDB: popular document-oriented NoSQL database that stores data in flexible, JSON-like BSON documents, providing scalability and high performance for diverse data types.
2. Cassandra: A distributed and highly scalable NoSQL database designed for handling large amounts of data across multiple servers with a decentralized architecture, making it suitable for high-speed and high-volume applications.
3. Redis: An in-memory data structure store known for its speed and versatility, serving as a caching mechanism, message broker, and key-value store, with support for various data structures like strings, hashes, and sets.

# Use Cases Scenarios

SQL databases work best in scenarios when data is structured and predictable, complex relationships need to be accurately captured, and immediate data integrity is important.

SQL’s rigid structures and ACID properties make it well-suited for these types of applications.

Some common use cases where SQL databases work well are:

- Financial applications where strict consistency is very important, and data are typically well structured and representable tabularly
- Customer relationship management (CRM) systems where data are typically well-structured, and there may be many relationships that must be accurately represented.

NoSQL databases work best in cases when it's useful to have flexible data structures which can dynamically adapt to new information and schemas, when scalability and performance are important, and for unstructured data. NoSQL’s dynamic schemas and horizontal scaling make it great for these types of use cases, which present in scenarios like:

- Real-time big data analytics where quick and scalable performance is important
- Social media databases where much of the incoming data are unstructured and unpredictable.

