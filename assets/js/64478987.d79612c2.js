"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[832],{8798:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(4848),a=t(8453);const i={sidebar_position:11},o="Transactions",c={id:"Relational-Database-Management-Systems/Transactions",title:"Transactions",description:"How can we transfer money between two bank accounts without losing money or creating money out of thin air?",source:"@site/docs/Relational-Database-Management-Systems/Transactions.md",sourceDirName:"Relational-Database-Management-Systems",slug:"/Relational-Database-Management-Systems/Transactions",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Relational-Database-Management-Systems/Transactions.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Procedures",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Procedures"},next:{title:"NoSQL Databases",permalink:"/databases-in-action/docs/category/nosql-databases"}},r={},l=[{value:"What is a Transaction?",id:"what-is-a-transaction",level:2},{value:"Transactions in MySQL",id:"transactions-in-mysql",level:2},{value:"Example in MySQL",id:"example-in-mysql",level:3},{value:"Transactions in PostgreSQL",id:"transactions-in-postgresql",level:2},{value:"Example in PostgreSQL",id:"example-in-postgresql",level:3}];function d(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(e.admonition,{title:"Problem",type:"danger",children:(0,s.jsx)(e.p,{children:"How can we transfer money between two bank accounts without losing money or creating money out of thin air?"})}),"\n",(0,s.jsx)(e.admonition,{title:"Solution",type:"tip",children:(0,s.jsxs)(e.p,{children:["We use ",(0,s.jsx)(e.strong,{children:"transactions"})," to ensure that the transfer is atomic, consistent, isolated, and durable (ACID)."]})}),"\n",(0,s.jsx)(e.h2,{id:"what-is-a-transaction",children:"What is a Transaction?"}),"\n",(0,s.jsxs)(e.p,{children:["A ",(0,s.jsx)(e.strong,{children:"transaction"})," is a sequence of one or more operations that are executed as a single unit of work. Transactions are used to ensure data integrity and consistency in database systems. The properties of a transaction are defined by the ACID acronym."]}),"\n",(0,s.jsx)(e.h2,{id:"transactions-in-mysql",children:"Transactions in MySQL"}),"\n",(0,s.jsx)(e.p,{children:"In MySQL, transactions are used to group multiple SQL statements into a single unit of work. MySQL supports the following transaction control statements:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"START TRANSACTION"}),": Begins a new transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"COMMIT"}),": Saves the changes made during the transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ROLLBACK"}),": Discards the changes made during the transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"BEGIN"}),": Begins a new transaction (equivalent to ",(0,s.jsx)(e.code,{children:"START TRANSACTION"}),")."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET autocommit = 0"}),": Disables autocommit mode, allowing you to start a transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET autocommit = 1"}),": Enables autocommit mode, committing each statement as it is executed."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SAVEPOINT"}),": Sets a named transaction savepoint within the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ROLLBACK TO SAVEPOINT"}),": Rolls back to a specific savepoint within the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"RELEASE SAVEPOINT"}),": Removes a savepoint from the current transaction."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"example-in-mysql",children:"Example in MySQL"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- Start a new transaction\nSTART TRANSACTION;\n\n-- Transfer $100 from account 1 to account 2\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Commit the transaction\nCOMMIT;\n"})}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["MySQL by default operates in autocommit mode, where each statement is treated as a separate transaction. To group multiple statements into a single transaction, you need to disable autocommit using ",(0,s.jsx)(e.code,{children:"SET autocommit = 0"})," or ",(0,s.jsx)(e.code,{children:"START TRANSACTION"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"transactions-in-postgresql",children:"Transactions in PostgreSQL"}),"\n",(0,s.jsx)(e.p,{children:"In PostgreSQL, transactions are used to group multiple SQL statements into a single unit of work. PostgreSQL supports the following transaction control statements:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"BEGIN"}),": Begins a new transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"COMMIT"}),": Saves the changes made during the transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ROLLBACK"}),": Discards the changes made during the transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SAVEPOINT"}),": Sets a named transaction savepoint within the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"ROLLBACK TO SAVEPOINT"}),": Rolls back to a specific savepoint within the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"RELEASE SAVEPOINT"}),": Removes a savepoint from the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION"}),": Sets transaction characteristics like isolation level and read-only mode."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION ISOLATION LEVEL"}),": Sets the transaction isolation level (e.g., ",(0,s.jsx)(e.code,{children:"READ COMMITTED"}),", ",(0,s.jsx)(e.code,{children:"REPEATABLE READ"}),", ",(0,s.jsx)(e.code,{children:"SERIALIZABLE"}),")."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION READ WRITE"}),": Sets the transaction access mode to read-write."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION READ ONLY"}),": Sets the transaction access mode to read-only."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET LOCAL"}),": Sets a local transaction parameter that applies only to the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET CONSTRAINTS"}),": Sets the behavior of constraint checks within the current transaction."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION SNAPSHOT"}),": Sets the transaction snapshot to a specific point in time."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION DEFERRABLE"}),": Sets the transaction deferrable property."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"SET TRANSACTION NOT DEFERRABLE"}),": Sets the transaction not deferrable property."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"example-in-postgresql",children:"Example in PostgreSQL"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"-- Start a new transaction\nBEGIN;\n\n-- Transfer $100 from account 1 to account 2\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\n\n-- Commit the transaction\nCOMMIT;\n"})})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>o,x:()=>c});var s=t(6540);const a={},i=s.createContext(a);function o(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);