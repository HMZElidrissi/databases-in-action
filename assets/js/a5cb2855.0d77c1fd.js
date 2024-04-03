"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[14],{7486:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var t=s(4848),i=s(8453);const a={sidebar_position:6},r="Joins",l={id:"Relational-Database-Management-Systems/Joins",title:"Joins",description:"In relational databases, a join is an operation that combines rows from two or more tables based on a related column between them. Joins are fundamental to relational databases, allowing users to retrieve data from multiple tables in a single query. By linking tables together, joins enable the database to present a unified view of the data, facilitating complex queries and data analysis.",source:"@site/docs/Relational-Database-Management-Systems/Joins.md",sourceDirName:"Relational-Database-Management-Systems",slug:"/Relational-Database-Management-Systems/Joins",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Joins",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Relational-Database-Management-Systems/Joins.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/PostgreSQL"},next:{title:"Nested Queries",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Nested-Queries"}},o={},d=[{value:"Definitions",id:"definitions",level:2},{value:"Sample Data",id:"sample-data",level:2},{value:"Inner Join",id:"inner-join",level:2},{value:"Self Join",id:"self-join",level:2},{value:"Left Join",id:"left-join",level:2},{value:"Right Join",id:"right-join",level:2},{value:"Full Join",id:"full-join",level:2},{value:"Cross Join",id:"cross-join",level:2},{value:"Set Theory Operators",id:"set-theory-operators",level:2}];function c(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"joins",children:"Joins"}),"\n",(0,t.jsxs)(n.p,{children:["In relational databases, a ",(0,t.jsx)(n.strong,{children:"join"})," is an operation that combines rows from two or more tables based on a related column between them. Joins are fundamental to relational databases, allowing users to retrieve data from multiple tables in a single query. By linking tables together, joins enable the database to present a unified view of the data, facilitating complex queries and data analysis."]}),"\n",(0,t.jsx)(n.p,{children:"There are six main types of joins:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"INNER JOIN"}),"\n",(0,t.jsx)(n.li,{children:"LEFT JOIN (or LEFT OUTER JOIN)"}),"\n",(0,t.jsx)(n.li,{children:"RIGHT JOIN (or RIGHT OUTER JOIN)"}),"\n",(0,t.jsx)(n.li,{children:"FULL JOIN (or FULL OUTER JOIN)"}),"\n",(0,t.jsx)(n.li,{children:"CROSS JOIN"}),"\n",(0,t.jsx)(n.li,{children:"SELF JOIN"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Primary key"}),": A primary key is a field in a table that uniquely identifies each record in the table. In relational databases, primary keys can be used as fields to join tables on."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Foreign key"}),": A foreign key is a field in a table which references the primary key of another table. In a relational database, one way to join two tables is by connecting the foreign key from one table to the primary key of another."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"One-to-one relationship"}),": Database relationships describe the relationships between records in different tables. When a one-to-one relationship exists between two tables, a given record in one table is uniquely related to exactly one record in the other table."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This is typically implemented by adding a foreign key in one of the tables. (e.g., a ",(0,t.jsx)(n.code,{children:"user_id"})," in a ",(0,t.jsx)(n.code,{children:"profile"})," table)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"One-to-many relationship"}),": In a one-to-many relationship, a record in one table can be related to one or more records in a second table. However, a given record in the second table will only be related to one record in the first table."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:['This is typically implemented by adding a foreign key in the table with the "many" side of the relationship. (e.g., a ',(0,t.jsx)(n.code,{children:"user_id"})," in a ",(0,t.jsx)(n.code,{children:"post"})," table)"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Many-to-many relationship"}),": In a many-to-many relationship, records in a given table \u2018A\u2019 can be related to one or more records in another table \u2018B\u2019, and records in table B can also be related to many records in table A."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This is typically implemented using a join table. (e.g., a ",(0,t.jsx)(n.code,{children:"user_id"})," and ",(0,t.jsx)(n.code,{children:"group_id"})," in a ",(0,t.jsx)(n.code,{children:"user_group"})," table)"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"sample-data",children:"Sample Data"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"artists"})," tables"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"id"}),(0,t.jsx)(n.th,{children:"name"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"AC/DC"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Accept"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Aerosmith"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Alanis Morissette"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"Alice In Chains"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"albums"})," tables"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"id"}),(0,t.jsx)(n.th,{children:"title"}),(0,t.jsx)(n.th,{children:"artist_id"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"For Those About To Rock"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Balls to the Wall"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Restless and Wild"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Let There Be Rock"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"Big Ones"}),(0,t.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"inner-join",children:"Inner Join"}),"\n",(0,t.jsxs)(n.p,{children:["An ",(0,t.jsx)(n.strong,{children:"inner join"})," between two tables will return only records where a joining field, such as a key, finds a match in both tables."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="Explicit Inner Join"',children:"SELECT artists.name, albums.title\nFROM artists\nINNER JOIN albums\nON artists.id = albums.artist_id;\n\n-- Inner Join with Using\nSELECT artists.name, albums.title\nFROM artists\nINNER JOIN albums\nUSING (artist_id);\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="Implicit Inner Join"',children:"SELECT artists.name, albums.title\nFROM artists, albums\nWHERE artists.id = albums.artist_id;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"self-join",children:"Self Join"}),"\n",(0,t.jsx)(n.p,{children:"Self-joins are used to compare values in a table to other values of the same table by joining different parts of a table together."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="Explicit Self Join"',children:"SELECT a1.name AS artist, a2.name AS collaborator\nFROM artists a1\nINNER JOIN artists a2\nON a1.id != a2.id;\n-- this will return all possible pairs of artists that are not the same\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="Implicit Self Join"',children:"SELECT a1.name AS artist, a2.name AS collaborator\nFROM artists a1, artists a2\nWHERE a1.id != a2.id;\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"Implicit vs Explicit Joins",type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In the implicit join, the join condition is specified in the WHERE clause, whereas in the explicit join, the join condition is specified in the JOIN clause."}),"\n",(0,t.jsxs)(n.li,{children:["Implicit joins are limited to creating inner joins because they do not support outer joins (",(0,t.jsx)(n.code,{children:"LEFT JOIN"}),", ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"}),", ",(0,t.jsx)(n.code,{children:"FULL JOIN"}),")."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"left-join",children:"Left Join"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"left join"})," returns all records from the left table and the matched records from the right table. If there is no match, the result is ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT artists.name, albums.title\nFROM artists\nLEFT JOIN albums\nON artists.id = albums.artist_id;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"right-join",children:"Right Join"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"right join"})," returns all records from the right table and the matched records from the left table. If there is no match, the result is ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT artists.name, albums.title\nFROM artists\nRIGHT JOIN albums\nON artists.id = albums.artist_id;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LEFT JOIN"})," and ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"})," are equivalent and can be used interchangeably by swapping the order of the tables."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"LEFT JOIN"})," is more commonly used than ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FULL JOIN"})," is not supported in all SQL databases (e.g., MySQL), so ",(0,t.jsx)(n.code,{children:"LEFT JOIN"})," and ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"})," are used instead."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"FULL JOIN"})," can be emulated by combining a ",(0,t.jsx)(n.code,{children:"LEFT JOIN"})," and a ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"})," with a ",(0,t.jsx)(n.code,{children:"UNION"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.code,{children:"LEFT JOIN"}),", the left table is the table that appears before the ",(0,t.jsx)(n.code,{children:"LEFT JOIN"})," keyword, and the right table is the table that appears after the ",(0,t.jsx)(n.code,{children:"LEFT JOIN"})," keyword."]}),"\n",(0,t.jsxs)(n.li,{children:["In ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"}),", the left table is the table that appears before the ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"})," keyword, and the right table is the table that appears after the ",(0,t.jsx)(n.code,{children:"RIGHT JOIN"})," keyword."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"full-join",children:"Full Join"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"full join"})," returns all records when there is a match in either the left or right table. If there is no match, the result is ",(0,t.jsx)(n.code,{children:"NULL"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT artists.name, albums.title\nFROM artists\nFULL JOIN albums\nON artists.id = albums.artist_id;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cross-join",children:"Cross Join"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.strong,{children:"cross join"})," returns the Cartesian product of two tables, i.e., all possible combinations of rows from the two tables."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="Explicit Cross Join"',children:"SELECT artists.name, albums.title\nFROM artists\nCROSS JOIN albums;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",metastring:'title="Implicit Cross Join"',children:"SELECT artists.name, albums.title\nFROM artists, albums;\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cross joins can be computationally expensive because they generate a large number of rows."}),"\n",(0,t.jsx)(n.li,{children:"Cross joins are used when you want to combine every row from one table with every row from another table."}),"\n",(0,t.jsx)(n.li,{children:"Cross joins are not commonly used in practice because they can lead to performance issues."}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"set-theory-operators",children:"Set Theory Operators"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Set Theory Operators",src:s(4083).A+"",width:"518",height:"152"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"UNION"}),": Combines the results of two or more SELECT statements into a single result set."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id from artists\nUNION\nSELECT artist_id from albums;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"UNION ALL"}),": Combines the results of two or more SELECT statements into a single result set, including duplicate rows."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id from artists\nUNION ALL\nSELECT artist_id from albums;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"INTERSECT"}),": Returns all distinct rows that are in both the result sets of two SELECT statements."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id from artists\nINTERSECT\nSELECT artist_id from albums;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"EXCEPT"}),": Returns all distinct rows that are in the result set of the first SELECT statement but not in the result set of the second SELECT statement."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT id from artists\nEXCEPT\nSELECT artist_id from albums;\n"})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4083:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/set-theory-operators-e1eda5197a14456a69fe8381297ddb8c.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(6540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);