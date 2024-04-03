---
sidebar_position: 2
---

# Redis

![Redis](./img/redis.svg)

Redis is an open-source, in-memory data structure store that can be used as a database, cache, and message broker. It supports various data structures such as strings, hashes, lists, sets, and sorted sets with range queries. Redis is written in ANSI C and works in most POSIX systems like Linux, BSD, and macOS.

## Key/Value Store

- **Redis** is an open-source structured data warehouse.
- _In-memory_ key/value
- Redis has a number of simple internal data structures such as **strings**, **hashes**, **lists** as well as some other more **complex** structures optimized for write performance, access, and computation.
- **_Redis_** is a very **complete** system that natively manages replication, **failover recovery**, **data persistence** through full backups or log lines, as well as atomic transactions.
- **Redis** also has a publication/subscription (pub/sub) system that it uses internally but can also be used independently.

## Quick Start

### Installation

```bash
# Install Redis on Ubuntu
sudo apt update
sudo apt install redis-server
```

### Starting Redis

```bash
# Start Redis server
sudo systemctl start redis-server
```

### Accessing Redis

```bash
# Access Redis CLI
redis-cli
```

### Redis Commands

```bash
# Set a key
SET key value

# Get a key
GET key

# Delete a key
DEL key
```

## Redis Logical Model

Redis operates on a simple yet powerful key-value model with the following characteristics:

- **Key**: Up to 512 MB in size, consisting of printable ASCII characters.
- **Value**: Can be one of several data types:
    - **Strings**: Binary-safe, allowing up to 512 MB.
    - **Lists**: Ordered collections of strings, sorted by insertion order.
    - **Sets**: Unordered collections of unique strings.
    - **Hashes**: Collections of field-value pairs, ideal for representing objects.
    - **Sorted Sets**: Similar to Sets but each member is associated with a score, allowing them to be sorted.

### Strings

```bash
# Set a key
SET key value

# Get a key
GET key

# Increment a key
INCR key

# Decrement a key
DECR key
```

### Lists

- **Lists** are ordered collections of strings, sorted by insertion order.
- **Lists** can contain duplicate elements.

```bash
# Add elements to the beginning of a list
LPUSH key value1 value2

# Add elements to the end of a list
RPUSH key value1 value2

# Get the length of a list
LLEN key

# Get elements from a list
LRANGE key start stop

# Remove and get the first element in a list
LPOP key

# Remove and get the last element in a list
RPOP key
```

### Sets

- **Sets** are unordered collections of unique strings.
- **Sets** do not allow duplicate elements.

```bash
# Add elements to a set
SADD key member1 member2

# Get the number of elements in a set
SCARD key

# Get all members of a set
SMEMBERS key

# Check if a member exists in a set
SISMEMBER key member

# Remove a member from a set
SREM key member

# Get the intersection of multiple sets
SINTER key1 key2

# Get the union of multiple sets
SUNION key1 key2

# Get the difference between two sets
SDIFF key1 key2

# Remove and return a random member from a set
SPOP key
```

### Hashes

- **Hashes** are collections of field-value pairs, ideal for representing objects.
- **Hashes** are stored in a single key.

```bash
# Set the field in a hash
HSET key field value

# Get the value of a field in a hash
HGET key field

# Get all fields and values in a hash
HGETALL key

# Get all fields in a hash
HKEYS key

# Get all values in a hash
HVALS key

# Get the number of fields in a hash
HLEN key

# Check if a field exists in a hash
HEXISTS key field

# Delete a field in a hash
HDEL key field
```

### Sorted Sets

- **Sorted Sets** are similar to Sets but each member is associated with a score, allowing them to be sorted.
- **Sorted Sets** do not allow duplicate elements.

```bash
# Add elements to a sorted set
ZADD key score1 member1 score2 member2

# Get the number of elements in a sorted set
ZCARD key

# Get the score of a member in a sorted set
ZSCORE key member

# Get the rank of a member in a sorted set
ZRANK key member

# Get the range of elements in a sorted set by rank
ZRANGE key start stop

# Get the range of elements in a sorted set by score
ZRANGEBYSCORE key min max

# Remove a member from a sorted set
ZREM key member
```

## Transactions

- **Redis** supports transactions, allowing multiple commands to be executed as a single atomic operation.
- **Redis** transactions are initiated with the `MULTI` command and executed with the `EXEC` command.

```bash
# Begin a transaction
MULTI

# Queue commands to be executed
SET key1 value1
SET key2 value2

# Execute the transaction
EXEC
```

## Redis Use Cases

- **Caching**: Redis is often used as a cache to store frequently accessed data in memory, reducing the need to query a database.
- **Session Store**: Redis can be used to store session data, allowing for fast access and easy sharing across multiple servers.
- **Real-time Analytics**: Redis can be used to store and analyze real-time data, such as user interactions or website traffic.
- **Message Broker**: Redis can be used as a message broker to facilitate communication between different parts of an application.

