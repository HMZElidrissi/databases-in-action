"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[322],{8553:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var s=n(4848),t=n(8453);const i={sidebar_position:4},l="MySQL",r={id:"Relational-Database-Management-Systems/MySQL",title:"MySQL",description:"MySQL",source:"@site/docs/Relational-Database-Management-Systems/MySQL.md",sourceDirName:"Relational-Database-Management-Systems",slug:"/Relational-Database-Management-Systems/MySQL",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/MySQL",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Relational-Database-Management-Systems/MySQL.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Querying Data",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Querying-Data"},next:{title:"PostgreSQL",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/PostgreSQL"}},c={},o=[{value:"Installation",id:"installation",level:2},{value:"Basic Commands",id:"basic-commands",level:2},{value:"MySQL-Specific Syntax",id:"mysql-specific-syntax",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"mysql",children:"MySQL"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"MySQL",src:n(5222).A+"",width:"48",height:"48"})}),"\n",(0,s.jsx)(a.p,{children:"MySQL is an open-source relational database management system (RDBMS) known for its fast performance and reliability. Developed by Oracle Corporation, it's widely used for web applications and online publishing."}),"\n",(0,s.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(a.p,{children:"To install MySQL on Ubuntu, you can use the following commands:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo apt update\nsudo apt install mysql-server\n"})}),"\n",(0,s.jsx)(a.p,{children:"After installation, you can start the MySQL service and enable it to start on boot:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"sudo systemctl start mysql\nsudo systemctl enable mysql\n"})}),"\n",(0,s.jsx)(a.p,{children:"To access the MySQL shell, use the following command:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"mysql -u root -p\n"})}),"\n",(0,s.jsx)(a.h2,{id:"basic-commands",children:"Basic Commands"}),"\n",(0,s.jsx)(a.p,{children:"Here are some basic MySQL commands to get you started:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SHOW DATABASES; -- List all databases\nUSE mydatabase; -- Switch to a specific database\nSHOW TABLES; -- List all tables in the current database\nDESCRIBE mytable; -- Show the structure of a table\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Create a user"',children:"CREATE USER 'myuser'@'localhost' IDENTIFIED BY 'mypassword';\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Grant privileges"',children:"GRANT ALL PRIVILEGES ON mydatabase.*\nTO 'myuser'@'localhost';\n-- Grant all privileges on a specific database to a user\n-- meaning the user can perform any action on the database\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Flush privileges"',children:"FLUSH PRIVILEGES;\n-- This command reloads the grant tables in the MySQL database, \n-- ensuring that any changes to user privileges are applied immediately.\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Revoke privileges"',children:"REVOKE ALL PRIVILEGES ON mydatabase.*\nFROM 'myuser'@'localhost';\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Drop a user"',children:"DROP USER 'myuser'@'localhost';\n"})}),"\n",(0,s.jsx)(a.h2,{id:"mysql-specific-syntax",children:"MySQL-Specific Syntax"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Using the IFNULL function"',children:"SELECT Franchise, IFNULL(n_movies, 0) AS n_movies\nFROM franchises;\n-- This will replace NULL values in the n_movies column with 0\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Using the IF function"',children:"SELECT Franchise, IF(total_revenue_busd > 50, 'High', 'Low') AS revenue_category\nFROM franchises;\n-- This will categorize franchises based on their total revenue\n"})}),"\n",(0,s.jsxs)(a.p,{children:["By default, MySQL uses case-insensitive matching in WHERE clauses. To make it case sensitive, use the ",(0,s.jsx)(a.code,{children:"BINARY"})," keyword:"]}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Case sensitive matching"',children:"SELECT Franchise\nFROM franchises\nWHERE BINARY Franchise = 'Star Wars';\n-- This will only match 'Star Wars' and not 'star wars'\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Concatenating text"',children:"SELECT CONCAT(Franchise, ' (', inception_year, ')') AS details\nFROM franchises;\n-- This will concatenate the franchise name and inception year (e.g., 'Star Wars (1977)')\n"})}),"\n",(0,s.jsx)(a.p,{children:"Get the current date with CURDATE() and the current datetime with NOW() or CURTIME()."}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"SELECT CURDATE(), NOW(), CURTIME();\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="List available tables with show tables"',children:"SHOW TABLES;\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Show table structure with describe"',children:"DESCRIBE franchises;\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Arithmetic functions"',children:"SELECT\n    COUNT(*),\n    AVG(total_revenue_busd),\n    SUM(total_revenue_busd),\n    MIN(total_revenue_busd),\n    MAX(total_revenue_busd)\nFROM franchises;\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="MySQL Version"',children:"SELECT VERSION();\n"})}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",metastring:'title="Last inserted ID"',children:"SELECT LAST_INSERT_ID();\n"})})]})}function h(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},5222:(e,a,n)=>{n.d(a,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>r});var s=n(6540);const t={},i=s.createContext(t);function l(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);