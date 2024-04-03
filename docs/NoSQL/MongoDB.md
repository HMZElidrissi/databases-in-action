---
sidebar_position: 1
---

# MongoDB

![MongoDB](./img/mongodb.svg)

MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, making it a robust choice for many modern web applications. Its ability to scale out across multiple servers and regions enables it to provide high availability and high-performance capabilities. Written in C++, MongoDB is an open-source database initially available under the GNU Affero General Public License and now under the Server Side Public License (SSPL).

## Commands

```bash title="Start MongoDB server"
mongod
```
    
```bash title="Start MongoDB shell"
mongosh
```

```bash title="Connect to a MongoDB server"
mongo --host <host> --port <port> --username <username> --password <password> --authenticationDatabase <database>
```

```bash title="Import data from a JSON file"
mongoimport --db <database> --collection <collection> --file <file>
```
- `<database>`: The name of the database.
- `<collection>`: The name of the collection.
- `<file>`: The path to the JSON file.

```bash title="Export data to a JSON file"
mongoexport --db <database> --collection <collection> --out <file>
```
- `<database>`: The name of the database.
- `<collection>`: The name of the collection.
- `<file>`: The path to the JSON file.

```bash title="Import data from a BSON file"
mongorestore --db <database> <directory>
```
- `<database>`: The name of the database.
- `<directory>`: The path to the directory containing the database dump.

```bash title="Export data to a BSON file"
mongodump --db <database> --out <directory>
```

```bash title="List all commands of databases"
db.help()
```

## Data Types

Data in MongoDB is stored in BSON (Binary JSON) format, which is a binary representation of JSON-like documents. BSON supports various data types, including:

- **String**: UTF-8 encoded string.
- **Integer**: 32-bit signed integer.
- **Boolean**: `true` or `false`.
- **Double**: 64-bit floating-point number.
- **Min/Max Keys**: A 64-bit integer used for comparisons.
- **Arrays**: A list of values.
- **Timestamp**: A 64-bit integer.
- **Object**: Embedded documents.
- **Null**: Null value.
- **Symbol**: Deprecated.
- **Date**: A 64-bit integer representing the number of milliseconds since the Unix epoch.
- **Object ID**: A 12-byte unique identifier.
- **Binary Data**: Binary data.

## Database Operations

```bash title="Create a database"
use <database>
```
- `<database>`: The name of the database.
- If the database does not exist, MongoDB creates it when you insert data.
- You can switch to the database using the `use` command.

```bash title="Check the current database"
db
```

```bash title="Drop a database"
db.dropDatabase()
```

```bash title="Show all databases"
show dbs
```

```bash title="List all collections in the current database"
show collections
```

```bash title="List all collections in all databases"
show tables
```

```bash title="Create a user"
db.createUser({
  user: "<username>",
  pwd: "<password>",
  roles: [
    { role: "readWrite", db: "<database>" }
  ]
})
```

## Collection Operations

```bash title="Create a collection (Students for example)"
db.createCollection("Students")
```

```bash title="Drop a collection"
db.Students.drop()
```

```bash title="Insert a document into a collection"
db.Students.insertOne({ name: "Alice", age: 25 })
```

```bash title="Insert multiple documents into a collection"
db.Students.insertMany([{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }])
```

```bash title="save() method"
db.Students.save({ name: "David", age: 40 })
```

> With the `save()` method If the document does not exist, it inserts a new document; otherwise, it updates the existing document. while with the `insert()` method, it always inserts a new document. if the document already exists, it will throw an error.

```bash title="Find all documents in a collection"
db.Students.find()
```

> `find()`  method returns a cursor to the documents that match the query criteria. To access the documents, you need to iterate over the cursor.

```bash title="Find documents with a specific condition"
db.Students.find({ age: 30 })
```

```bash title="Find documents with a specific condition and projection"
db.Students.find({ age: 30 }, { name: 1 })
```

## Update Operations

- `update()` method: Updates one or more documents that match the query criteria.
- `save()` method: Updates the document if it exists; otherwise, it inserts a new document.
- `updateOne()` method: Updates the first document that matches the query criteria.
- `updateMany()` method: Updates all documents that match the query criteria.
- `replaceOne()` method: Replaces the first document that matches the query criteria.

```bash title="Update a document"
db.Students.update({ name: "Alice" }, { $set: { age: 26 } })
```

```bash title="Update a document using the save() method"
db.Students.save({ _id: ObjectId("5f5b8f6b7f3b9a0b3c4d4b4d"), name: "Alice", age: 26 })
```

```bash title="Update a document using the updateOne() method"
db.Students.updateOne({ name: "Alice" }, { $set: { age: 27 } })
```

- `$set`: Updates the value of a field in a document.
- `$unset`: Removes a field from a document.
- `$inc`: Increments the value of a field in a document.
- `$push`: Adds an element to an array in a document.
- `$mul`: Multiplies the value of a field in a document.
- `$rename`: Renames a field in a document.
- `$min`: Updates the value of a field if the specified value is less than the current value.
- `$max`: Updates the value of a field if the specified value is greater than the current value.
- `$currentDate`: Sets the value of a field to the current date.

## Search Operations

```bash title="Find documents with a specific condition"
db.Students.find({ age: 30 })
```

```bash title="Skip and limit the number of documents"
db.Students.find().skip(1).limit(2)
```

```bash title="Sort documents in ascending order"
db.Students.find().sort({ age: 1 })
```

```bash title="Sort documents in descending order"
db.Students.find().sort({ age: -1 })
```

```bash title="Count the number of documents"
db.Students.find().count()
```

```bash title="Count the number of documents with a specific condition"
db.Students.find({ age: 30 }).count()
```

```bash title="Find distinct values of a field"
db.Students.distinct("age")
```

```bash title="Display the results in a formatted way (JSON)"
db.Students.find().pretty()
```

## Loops and Functions

```bash title="Loop through documents"
db.Students.find().forEach(function(doc) {
    print("Name: " + doc.name + ", Age: " + doc.age);
})
```

> for each document in the `Students` collection, the function prints the name and age of the document.

```bash title="Create a function"
function printStudents() {
    db.Students.find().forEach(function(doc) {
        print("Name: " + doc.name + ", Age: " + doc.age);
    })
}
```

```bash title="Call a function"
printStudents()
```

## Regular Expressions

```bash title="Find documents with a specific pattern"
db.Students.find({ name: /^A/ })
# or
db.Students.find({ name: { $regex: "^A" } })
```

> The regular expression `/^A/` matches all documents where the `name` field starts with the letter `A`.

```bash title="Find documents with a specific pattern and case-insensitive"
db.Students.find({ name: /^a/i })
# or
db.Students.find({ name: { $regex: "^a", $options: "i" } })
```

> The regular expression `/^a/i` matches all documents where the `name` field starts with the letter `a` in a case-insensitive manner.

:::tip Regular Expression Operators
- `$regex`: Matches documents that satisfy a regular expression.
- `$options`: Specifies the options for the regular expression.
- `$regex` and `$options` are used together to define a regular expression.
- The `$regex` operator is case-sensitive by default.
- To perform a case-insensitive search, use the `$options` operator with the value `i`.
```bash
db.Students.find({ name: { $regex: "^a", $options: "i" } })
```
- MongoDB supports Perl-compatible regular expressions (PCRE).
:::

## Array Operations

- `$push`: Adds an element to an array.
- `$pop`: Removes the first or last element of an array.
- `$pull`: Removes all elements that match a specified condition from an array.
- `$pushAll`: Adds multiple elements to an array.
- `$pullAll`: Removes multiple elements from an array.
- `$position`: Used with `$push` to specify the position to insert an element in an array.
- `$slice`: Used with `$push` to limit the number of elements in an array.
- `$sort`: Used with `$push` to sort the elements in an array.

```bash title="Add an element to an array"
db.Students.update({ name: "Alice" }, { $push: { subjects: "Math" } })
```

```bash title="Add multiple elements to an array"
db.Students.update({ name: "Alice" }, { $pushAll: { subjects: ["Physics", "Chemistry"] } })
```

```bash title="Remove the first element of an array"
db.Students.update({ name: "Alice" }, { $pop: { subjects: -1 } })
```

## Operators

- **Comparison Operators**: `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`.
- **Logical Operators**: `$and`, `$or`, `$not`, `$nor`.
- **Element Operators**: `$exists`, `$type`.
- **Evaluation Operators**: `$mod`, `$regex`, `$text`, `$where`.
- **Array Operators**: `$all`, `$elemMatch`, `$size`.

## Indexing

```bash title="Create an index"
db.Students.createIndex({ name: 1 })
```

```bash title="List all indexes"
db.Students.getIndexes()
```

```bash title="Drop an index"
db.Students.dropIndex("name_1")
```

```bash title="Drop all indexes"
db.Students.dropIndexes()
```

## Aggregation

The method `aggregate()` is used to perform aggregation operations on the documents in a collection. It takes an array of aggregation stages that process the input documents and output the results.

- `$project`: Reshapes each document by including, excluding, or adding fields.
- `$match`: Filters the documents to pass only those that match the specified condition.
- `$limit`: Limits the number of documents to pass to the next
- `$skip`: Skips a specified number of documents.
- `$unwind`: Deconstructs an array field from the input documents to output a document for each element.
- `$group`: Groups the documents by a specified expression and outputs the total number of documents in each group.
- `$sort`: Sorts the documents.
- `$lookup`: Performs a left outer join to another collection in the same database.
- `$sum`: Calculates the sum of numeric values.
- `$avg`: Calculates the average of numeric values.
- `$max`: Calculates the maximum value.
- `$min`: Calculates the minimum value.

```bash title="Aggregate documents"
db.Students.aggregate([
    { $match: { age: { $gte: 30 } } },
    { $group: { _id: "$name", total: { $sum: 1 } } }
])
```

