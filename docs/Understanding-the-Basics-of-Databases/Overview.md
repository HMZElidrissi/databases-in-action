---
sidebar_position: 1
---

# Overview

## What is a Database?

A database is a collection of data that is:
- Organized
- Structured
- independent
- Stored without redundancy in a computer system
- Accessible
    - independently of the application
    - by multiple users
    - by multiple applications
    - in a timely manner
- Managed by a Database Management System (DBMS)

## Lifecycle of a Database

- **Design**
  - The analysis phase that leads to determining the future content of the database

- **Implementation**
  - The phase that allows the content of the database to be transmitted to the chosen DBMS (Database Management System) software
  - Description of data via the DDL (Data Definition Language)
  - Constitution of the first version of the database

- **Utilization**
  - Querying the database, adding/removing new information, modification... through the use of DML (Data Manipulation Language)


## What is a Database Management System (DBMS)?

A DBMS is a software system that enables users to store, search, and manage data in a database, ensuring that data is consistently organized and remains easily accessible and secure.

## Database Management System (DBMS) Components

A DBMS typically consists of the following components:

1. **Database Engine**: The core component of a DBMS that manages data storage, retrieval, and updating. (e.g., MySQL, PostgreSQL, Oracle Database)
2. **Query Processor**: A component that interprets and executes queries written in a query language (e.g., SQL).
3. **Database Schema**: A description of the structure of the database, including tables, columns, and relationships.
4. **Database Administrator (DBA) Tools**: Tools that help database administrators manage and monitor the database. (e.g., backup and recovery tools, performance monitoring tools)
5. **Database Application Development Tools**: Tools that help developers build applications that interact with the database. (e.g., ORMs, database connectors)
6. **Database Security**: Mechanisms that control access to the database and ensure data privacy and integrity. (e.g., user authentication, encryption)

## Data Models

A data model is a conceptual representation of the data structures that are required by a database. There are several types of data models, including:

1. **Relational Data Model**: Represents data as tables with rows and columns. The relationships between tables are defined by keys. (e.g., SQL databases)
2. **Hierarchical Data Model**: Represents data as a tree-like structure with parent-child relationships. (e.g., XML)
3. **Network Data Model**: Represents data as a graph with nodes and edges. (e.g., IMS)
4. **Object-Oriented Data Model**: Represents data as objects with attributes and methods. (e.g., OODBMS)
5. **Document Data Model**: Represents data as documents (e.g., JSON, BSON)
6. **Key-Value Data Model**: Represents data as key-value pairs. (e.g., Redis)
7. **Graph Data Model**: Represents data as nodes and edges. (e.g., Neo4j)

