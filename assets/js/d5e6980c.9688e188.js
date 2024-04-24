"use strict";(self.webpackChunkdatabases_in_action=self.webpackChunkdatabases_in_action||[]).push([[331],{5033:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>o});var a=i(4848),s=i(8453);const t={sidebar_position:8},l="View",r={id:"Relational-Database-Management-Systems/Views",title:"View",description:"- A virtual table defined by an SQL query",source:"@site/docs/Relational-Database-Management-Systems/Views.md",sourceDirName:"Relational-Database-Management-Systems",slug:"/Relational-Database-Management-Systems/Views",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Views",draft:!1,unlisted:!1,editUrl:"https://github.com/HMZElidrissi/databases-in-action/blob/main/docs/Relational-Database-Management-Systems/Views.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Nested Queries",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Nested-Queries"},next:{title:"Cursors and Triggers",permalink:"/databases-in-action/docs/Relational-Database-Management-Systems/Triggers-and-Cursors"}},d={},o=[{value:"Creating a View",id:"creating-a-view",level:2},{value:"Updating a View",id:"updating-a-view",level:2},{value:"Dropping a View",id:"dropping-a-view",level:2},{value:"Updating tables through a View",id:"updating-tables-through-a-view",level:2}];function c(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"view",children:"View"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A virtual table defined by an SQL query"}),"\n",(0,a.jsx)(n.li,{children:"The rows do not physically exist"}),"\n",(0,a.jsx)(n.li,{children:"A table computable at execution"}),"\n",(0,a.jsx)(n.li,{children:"Can be used as a table or to define another view"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-view",children:"Creating a View"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW view_name AS\nSELECT column1, column2, ...\nFROM table_name\nWHERE condition;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Let's take an example of cinemas with the following schema:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["cinema(",(0,a.jsx)(n.code,{children:"id_cinema"}),",",(0,a.jsx)(n.code,{children:"number"}),", ",(0,a.jsx)(n.code,{children:"street"}),",",(0,a.jsx)(n.code,{children:" city"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["room(",(0,a.jsx)(n.code,{children:"id_cinema"}),", ",(0,a.jsx)(n.code,{children:"room_number"}),", ",(0,a.jsx)(n.code,{children:"capacity"}),", ",(0,a.jsx)(n.code,{children:"air_conditioned"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["schedule(",(0,a.jsx)(n.code,{children:"id_schedule"}),", ",(0,a.jsx)(n.code,{children:"start_time"}),", ",(0,a.jsx)(n.code,{children:"end_time"}),")"]}),"\n",(0,a.jsxs)(n.li,{children:["showing(",(0,a.jsx)(n.code,{children:"id_movie"}),", ",(0,a.jsx)(n.code,{children:"id_cinema"}),", ",(0,a.jsx)(n.code,{children:"room_number"}),", ",(0,a.jsx)(n.code,{children:"id_schedule"}),", ",(0,a.jsx)(n.code,{children:"price"}),")"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"We want to create a view of cinemas in Rabat:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW rabat_cinemas AS\nSELECT *\nFROM cinema\nWHERE city = 'Rabat';\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"A view allows for storing the query without storing its result"}),"\n",(0,a.jsxs)(n.li,{children:["A view is dynamic","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Its result is re-evaluated each time the view is accessed"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:"It provides a faithful representation of the database at the time the query is evaluated"}),"\n",(0,a.jsx)(n.li,{children:"One can query a view just like a stored table"}),"\n",(0,a.jsxs)(n.li,{children:["What is stored is the query and not its result","\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"We do not gain performance by using a view instead of a direct query"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"updating-a-view",children:"Updating a View"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER VIEW view_name AS new_query;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"dropping-a-view",children:"Dropping a View"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP VIEW view_name;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-tables-through-a-view",children:"Updating tables through a View"}),"\n",(0,a.jsx)(n.p,{children:"This is where things can get a bit tricky. While you can perform INSERT, UPDATE, and DELETE operations on views, there are restrictions. The rules for updatable views can vary between MySQL and PostgreSQL and depend on how the view is defined. Here are some conditions that generally need to be met for a view to be updatable:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The view must involve only one underlying data-relation table."}),"\n",(0,a.jsxs)(n.li,{children:["The view must not contain any of the following:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Aggregate functions (",(0,a.jsx)(n.code,{children:"SUM()"}),", ",(0,a.jsx)(n.code,{children:"COUNT()"}),", etc.)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"DISTINCT"})," keyword"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"GROUP BY"})," or HAVING clause"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"UNION"})," or UNION ALL"]}),"\n",(0,a.jsxs)(n.li,{children:["Subqueries in the ",(0,a.jsx)(n.code,{children:"SELECT"})," list"]}),"\n",(0,a.jsx)(n.li,{children:"Certain joins (although simple INNER JOINs are usually okay)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"If a view doesn't meet these criteria, you might not be able to perform certain data modification operations through the view."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var a=i(6540);const s={},t=a.createContext(s);function l(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);