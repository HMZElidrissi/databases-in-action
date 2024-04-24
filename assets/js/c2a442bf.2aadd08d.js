"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[133],{2471:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var i=a(4848),s=a(8453);const l={sidebar_position:1},t="Data Definition Language (DDL)",r={id:"Relational-Database-Management-Systems/DDL",title:"Data Definition Language (DDL)",description:"The SQL DDL allows for the creation and modification of database structures, supporting operations that are fundamental to database schema design and management. DDL operations include:",source:"@site/docs/Relational-Database-Management-Systems/DDL.md",sourceDirName:"Relational-Database-Management-Systems",slug:"/Relational-Database-Management-Systems/DDL",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/DDL",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Relational-Database-Management-Systems/DDL.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Relational Database Management Systems (RDBMS)",permalink:"/databases-in-action/docs/category/relational-database-management-systems-rdbms"},next:{title:"Data Manipulation Language (DML)",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/DML"}},d={},c=[{value:"Creating a Database",id:"creating-a-database",level:2},{value:"Dropping a Database",id:"dropping-a-database",level:2},{value:"Creating a Table",id:"creating-a-table",level:2},{value:"Dropping a Table",id:"dropping-a-table",level:2},{value:"Modifying Tables",id:"modifying-tables",level:2},{value:"Adding, Dropping, Modifying a Column",id:"adding-dropping-modifying-a-column",level:3},{value:"Adding, Dropping a Constraint",id:"adding-dropping-a-constraint",level:3},{value:"Index Management",id:"index-management",level:2},{value:"Adding, Dropping an Index",id:"adding-dropping-an-index",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Numeric Types",id:"numeric-types",level:3},{value:"Alphanumeric Types",id:"alphanumeric-types",level:3},{value:"Temporal Types",id:"temporal-types",level:3},{value:"Special Types",id:"special-types",level:3},{value:"Constraints",id:"constraints",level:2},{value:"Storage Engines",id:"storage-engines",level:2},{value:"Options on Foreign Keys",id:"options-on-foreign-keys",level:2}];function o(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"data-definition-language-ddl",children:"Data Definition Language (DDL)"}),"\n",(0,i.jsx)(n.p,{children:"The SQL DDL allows for the creation and modification of database structures, supporting operations that are fundamental to database schema design and management. DDL operations include:"}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-database",children:"Creating a Database"}),"\n",(0,i.jsx)(n.p,{children:"Standard SQL syntax, universally applicable across SQL databases:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE DATABASE database_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dropping-a-database",children:"Dropping a Database"}),"\n",(0,i.jsx)(n.p,{children:"Standard SQL syntax, universally applicable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP DATABASE database_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-table",children:"Creating a Table"}),"\n",(0,i.jsx)(n.p,{children:"Syntax mostly standard across SQL databases with specific options varying by DBMS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE [IF NOT EXISTS] table_name (\n  column_name1 datatype [constraint],\n  column_name2 datatype [constraint],\n  [PRIMARY KEY (column_name1)],\n  [FOREIGN KEY (column_name2) REFERENCES table_name(column_name)],\n  ...\n  ) [ENGINE=engine_name]; -- ENGINE option is MySQL-specific\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[IF NOT EXISTS]"})," is supported by both MySQL and PostgreSQL, preventing errors if the table already exists."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"[ENGINE=engine_name]"})," is MySQL-specific, allowing selection between different storage engines like ",(0,i.jsx)(n.code,{children:"InnoDB"})," and ",(0,i.jsx)(n.code,{children:"MyISAM"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"dropping-a-table",children:"Dropping a Table"}),"\n",(0,i.jsx)(n.p,{children:"Standard SQL syntax, universally applicable:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP TABLE table_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"modifying-tables",children:"Modifying Tables"}),"\n",(0,i.jsx)(n.h3,{id:"adding-dropping-modifying-a-column",children:"Adding, Dropping, Modifying a Column"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a column"',children:"ALTER TABLE table_name ADD column_name datatype;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Dropping a column"',children:"ALTER TABLE table_name DROP COLUMN column_name;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Modifying a column datatype (MySQL)"',children:"ALTER TABLE table_name MODIFY COLUMN column_name datatype;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Modifying a column datatype (PostgreSQL)"',children:"ALTER TABLE table_name ALTER COLUMN column_name TYPE datatype;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Renaming a column (MySQL)"',children:"ALTER TABLE table_name CHANGE COLUMN old_column_name new_column_name datatype;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Renaming a column (PostgreSQL)"',children:"ALTER TABLE table_name RENAME COLUMN old_column_name TO new_column_name;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"adding-dropping-a-constraint",children:"Adding, Dropping a Constraint"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a constraint (MySQL)"',children:"ALTER TABLE table_name ADD PRIMARY KEY (column_name);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a constraint (PostgreSQL)"',children:"ALTER TABLE table_name ADD CONSTRAINT constraint_name PRIMARY KEY (column_name);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a foreign key constraint (MySQL)"',children:"ALTER TABLE table_name ADD FOREIGN KEY (column_name) REFERENCES referenced_table (referenced_column);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a foreign key constraint (PostgreSQL)"',children:"ALTER TABLE table_name ADD CONSTRAINT constraint_name FOREIGN KEY (column_name) REFERENCES referenced_table (referenced_column);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a unique constraint (MySQL)"',children:"ALTER TABLE table_name ADD UNIQUE (column_name);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a unique constraint (PostgreSQL)"',children:"ALTER TABLE table_name ADD CONSTRAINT constraint_name UNIQUE (column_name);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a check constraint (MySQL)"',children:"ALTER TABLE table_name ADD CHECK (column_name > 0);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a check constraint (PostgreSQL)"',children:"ALTER TABLE table_name ADD CONSTRAINT constraint_name CHECK (column_name > 0);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a default constraint (MySQL)"',children:"ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT default_value;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a default constraint (PostgreSQL)"',children:"ALTER TABLE table_name ALTER COLUMN column_name SET DEFAULT default_value;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a not null constraint (MySQL)"',children:"ALTER TABLE table_name MODIFY COLUMN column_name datatype NOT NULL;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Adding a not null constraint (PostgreSQL)"',children:"ALTER TABLE table_name ALTER COLUMN column_name SET NOT NULL;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Dropping a constraint (MySQL)"',children:"ALTER TABLE table_name DROP PRIMARY KEY;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Dropping a constraint (PostgreSQL)"',children:"ALTER TABLE table_name DROP CONSTRAINT constraint_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"index-management",children:"Index Management"}),"\n",(0,i.jsx)(n.h3,{id:"adding-dropping-an-index",children:"Adding, Dropping an Index"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Creating an index"',children:"ALTER TABLE table_name ADD INDEX index_name (column_name);\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Dropping an index (MySQL)"',children:"ALTER TABLE table_name DROP INDEX index_name;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",metastring:'title="Dropping an index (PostgreSQL)"',children:"DROP INDEX index_name;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"data-types",children:"Data Types"}),"\n",(0,i.jsx)(n.h3,{id:"numeric-types",children:"Numeric Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Integer numbers"}),": Used to store whole numbers.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MySQL: ",(0,i.jsx)(n.code,{children:"TINYINT"}),", ",(0,i.jsx)(n.code,{children:"SMALLINT"}),", ",(0,i.jsx)(n.code,{children:"MEDIUMINT"}),", ",(0,i.jsx)(n.code,{children:"INT"}),", ",(0,i.jsx)(n.code,{children:"BIGINT"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name INT"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PostgreSQL: Similar, but without ",(0,i.jsx)(n.code,{children:"MEDIUMINT"}),". Uses ",(0,i.jsx)(n.code,{children:"SERIAL"})," for auto-incrementing integers.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name SERIAL"})," (for auto-incrementing ",(0,i.jsx)(n.code,{children:"INT"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Decimal numbers"}),": Used for precise arithmetic operations.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MySQL and PostgreSQL: ",(0,i.jsx)(n.code,{children:"FLOAT"}),", ",(0,i.jsx)(n.code,{children:"DOUBLE"}),", ",(0,i.jsx)(n.code,{children:"DECIMAL"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name DECIMAL(5,2)"})," (Example for a number with 5 digits in total and 2 after the decimal point)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"alphanumeric-types",children:"Alphanumeric Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Text type strings"}),": Used for storing text."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MySQL: ",(0,i.jsx)(n.code,{children:"CHAR"}),", ",(0,i.jsx)(n.code,{children:"VARCHAR"}),", ",(0,i.jsx)(n.code,{children:"TINYTEXT"}),", ",(0,i.jsx)(n.code,{children:"TEXT"}),", ",(0,i.jsx)(n.code,{children:"MEDIUMTEXT"}),", ",(0,i.jsx)(n.code,{children:"LONGTEXT"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name VARCHAR(255)"})," (for a variable string with a maximum length of 255)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PostgreSQL: Similar, but text types do not include ",(0,i.jsx)(n.code,{children:"TINYTEXT"}),", ",(0,i.jsx)(n.code,{children:"MEDIUMTEXT"}),", ",(0,i.jsx)(n.code,{children:"LONGTEXT"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name TEXT"})," (for a text string with no specific limit)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Binary type strings"}),": Used for storing binary data."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MySQL: ",(0,i.jsx)(n.code,{children:"BINARY"}),", ",(0,i.jsx)(n.code,{children:"VARBINARY"}),", ",(0,i.jsx)(n.code,{children:"TINYBLOB"}),", ",(0,i.jsx)(n.code,{children:"BLOB"}),", ",(0,i.jsx)(n.code,{children:"MEDIUMBLOB"}),", ",(0,i.jsx)(n.code,{children:"LONGBLOB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name BLOB"})," (for binary large objects)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["PostgreSQL: Uses ",(0,i.jsx)(n.code,{children:"BYTEA"})," for binary data.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name BYTEA"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"temporal-types",children:"Temporal Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Used for storing date and/or time"}),"."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MySQL and PostgreSQL: ",(0,i.jsx)(n.code,{children:"DATE"}),", ",(0,i.jsx)(n.code,{children:"TIME"}),", ",(0,i.jsx)(n.code,{children:"DATETIME"}),", ",(0,i.jsx)(n.code,{children:"TIMESTAMP"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax (MySQL): ",(0,i.jsx)(n.code,{children:"column_name DATETIME"})]}),"\n",(0,i.jsxs)(n.li,{children:["Syntax (PostgreSQL): ",(0,i.jsx)(n.code,{children:"column_name TIMESTAMP"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Year"}),": Specific to MySQL (",(0,i.jsx)(n.code,{children:"YEAR"}),"), not directly available in PostgreSQL.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name YEAR"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Default date functions"}),": Provide current date/time values."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["MySQL: ",(0,i.jsx)(n.code,{children:"CURRENT_DATE"}),", ",(0,i.jsx)(n.code,{children:"CURRENT_TIME"}),", ",(0,i.jsx)(n.code,{children:"CURRENT_TIMESTAMP"})]}),"\n",(0,i.jsxs)(n.li,{children:["PostgreSQL: Similar support, including ",(0,i.jsx)(n.code,{children:"NOW()"})," for the current date and time.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name TIMESTAMP DEFAULT CURRENT_TIMESTAMP"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"special-types",children:"Special Types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"SET"}),", ",(0,i.jsx)(n.code,{children:"ENUM"})]}),": Specific to MySQL, these types allow for the definition of columns that can only take certain predefined values.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name ENUM('value1', 'value2', 'value3')"})]}),"\n",(0,i.jsxs)(n.li,{children:["Syntax: ",(0,i.jsx)(n.code,{children:"column_name SET('value1', 'value2', 'value3')"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"constraints",children:"Constraints"}),"\n",(0,i.jsx)(n.p,{children:"Describes standard SQL constraints. It's important to note:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AUTO_INCREMENT"}),": MySQL-specific. Use ",(0,i.jsx)(n.code,{children:"SERIAL"})," or ",(0,i.jsx)(n.code,{children:"BIGSERIAL"})," in PostgreSQL."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"INDEX"}),": While indexing is a standard feature, syntax and capabilities like partial or expression indexes may vary between MySQL and PostgreSQL."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"PRIMARY KEY"}),": Uniquely identifies each record in a table"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"FOREIGN KEY"}),": Ensures referential integrity for a record in another table"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"UNIQUE"}),": Ensures that all values in a column are different"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CHECK"}),": Ensures that all values in a column satisfy a specific condition (e.g., ",(0,i.jsx)(n.code,{children:"CHECK (age > 18)"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"NOT NULL"}),": Ensures that a column cannot have a ",(0,i.jsx)(n.code,{children:"NULL"})," value"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"DEFAULT"}),": Provides a default value for a column when no value is specified (e.g., ",(0,i.jsx)(n.code,{children:"DEFAULT 0"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"storage-engines",children:"Storage Engines"}),"\n",(0,i.jsxs)(n.p,{children:["Specific to MySQL, detailing ",(0,i.jsx)(n.code,{children:"MyISAM"})," and ",(0,i.jsx)(n.code,{children:"InnoDB"}),":"]}),"\n",(0,i.jsx)(n.p,{children:"A storage engine is the underlying software component that a DBMS uses to create, read, update, and delete data from a database. The following are some of the most common storage engines:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"MyISAM"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The default storage engine for MySQL versions prior to 5.5"}),"\n",(0,i.jsx)(n.li,{children:"Insertion and selection are faster than InnoDB"}),"\n",(0,i.jsx)(n.li,{children:"No support for transactions or foreign keys"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"InnoDB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The default storage engine for MySQL versions 5.5 and later"}),"\n",(0,i.jsx)(n.li,{children:"Supports transactions, foreign keys, and row-level locking"}),"\n",(0,i.jsx)(n.li,{children:"Slower than MyISAM for insertion and selection"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"PostgreSQL does not expose engine choice in the same way, focusing instead on features like tablespace management for performance tuning."})}),"\n",(0,i.jsx)(n.h2,{id:"options-on-foreign-keys",children:"Options on Foreign Keys"}),"\n",(0,i.jsx)(n.p,{children:"The possible options are:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table_name\nADD [CONSTRAINT fk_name] FOREIGN KEY (column_name)\nREFERENCES referenced_table (referenced_column)\nON DELETE {RESTRICT | NO ACTION | SET NULL | CASCADE};\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"RESTRICT"})," or ",(0,i.jsx)(n.code,{children:"NO ACTION"}),": Prevents the deletion of the referenced value (default behavior)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SET NULL"}),": Sets the foreign key value to ",(0,i.jsx)(n.code,{children:"NULL"})," when the referenced value is deleted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"CASCADE"}),": Deletes the row with the foreign key when the referenced row is deleted."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ON UPDATE"})," option is also available, with similar behaviors to ",(0,i.jsx)(n.code,{children:"ON DELETE"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var i=a(6540);const s={},l=i.createContext(s);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);