"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7206],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=l.createContext({}),u=function(t){var e=l.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,h=p["".concat(d,".").concat(k)]||p[k]||c[k]||o;return n?l.createElement(h,a(a({ref:e},s),{},{components:n})):l.createElement(h,a({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},64012:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var l=n(87462),r=n(63366),o=(n(67294),n(3905)),a=["components"],i={title:"Hive",sidebar_position:8},d=void 0,u={unversionedId:"data_node/load_node/hive",id:"data_node/load_node/hive",title:"Hive",description:"Overview",source:"@site/docs/data_node/load_node/hive.md",sourceDirName:"data_node/load_node",slug:"/data_node/load_node/hive",permalink:"/docs/next/data_node/load_node/hive",draft:!1,editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/docs/data_node/load_node/hive.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Hive",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"HDFS",permalink:"/docs/next/data_node/load_node/hdfs"},next:{title:"Iceberg",permalink:"/docs/next/data_node/load_node/iceberg"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Supported Version",id:"supported-version",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Maven dependency",id:"maven-dependency",level:3},{value:"How to create a Hive Load Node",id:"how-to-create-a-hive-load-node",level:2},{value:"Usage for SQL API",id:"usage-for-sql-api",level:3},{value:"Usage for InLong Dashboard",id:"usage-for-inlong-dashboard",level:3},{value:"Configuration",id:"configuration",level:4},{value:"Usage for InLong Manager Client",id:"usage-for-inlong-manager-client",level:3},{value:"Hive Load Node Options",id:"hive-load-node-options",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2}],p={toc:c};function k(t){var e=t.components,i=(0,r.Z)(t,a);return(0,o.kt)("wrapper",(0,l.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Hive Load Node can write data to hive. Using the flink dialect, the insert operation is currently supported, and the data in the upsert mode will be converted into insert.\nManipulating hive tables using the hive dialect is currently not supported."),(0,o.kt)("h2",{id:"supported-version"},"Supported Version"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Load Node"),(0,o.kt)("th",{parentName:"tr",align:null},"Version"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/docs/next/data_node/load_node/hive"},"Hive")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/hive/overview/#supported-hive-versions"},"Hive"),": 1.x, 2.x, 3.x")))),(0,o.kt)("h3",{id:"dependencies"},"Dependencies"),(0,o.kt)("p",null,"Using Hive load requires the introduction of dependencies.\nOf course, you can also use INLONG to provide jar packages.(",(0,o.kt)("a",{parentName:"p",href:"https://inlong.apache.org/download/main/"},"sort-connector-hive"),")"),(0,o.kt)("h3",{id:"maven-dependency"},"Maven dependency"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<dependency>\n    <groupId>org.apache.inlong</groupId>\n    <artifactId>sort-connector-hive</artifactId>\n \x3c!-- Choose the version that suits your application --\x3e\n    <version>inlong_version</version>\n</dependency>\n")),(0,o.kt)("h2",{id:"how-to-create-a-hive-load-node"},"How to create a Hive Load Node"),(0,o.kt)("h3",{id:"usage-for-sql-api"},"Usage for SQL API"),(0,o.kt)("p",null,"The example below shows how to create a Hive Load Node with ",(0,o.kt)("inlineCode",{parentName:"p"},"Flink SQL Cli")," :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE hiveTableName (\n  id STRING,\n  name STRING,\n  uv BIGINT,\n  pv BIGINT\n) WITH (\n  'connector' = 'hive',\n  'default-database' = 'default',\n  'hive-version' = '3.1.2',\n  'hive-conf-dir' = 'hdfs://localhost:9000/user/hive/hive-site.xml'\n);\n")),(0,o.kt)("h3",{id:"usage-for-inlong-dashboard"},"Usage for InLong Dashboard"),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"When creating a data stream, select ",(0,o.kt)("inlineCode",{parentName:"p"},"Hive"),' for the data stream direction, and click "Add" to configure it.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Hive Configuration",src:n(25952).Z,width:"1480",height:"1155"})),(0,o.kt)("h3",{id:"usage-for-inlong-manager-client"},"Usage for InLong Manager Client"),(0,o.kt)("p",null,"TODO: It will be supported in the future."),(0,o.kt)("h2",{id:"hive-load-node-options"},"Hive Load Node Options"),(0,o.kt)("table",{class:"table table-bordered"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"text-left",style:{width:"25%"}},"Option"),(0,o.kt)("th",{class:"text-center",style:{width:"8%"}},"Required"),(0,o.kt)("th",{class:"text-center",style:{width:"7%"}},"Default"),(0,o.kt)("th",{class:"text-center",style:{width:"10%"}},"Type"),(0,o.kt)("th",{class:"text-center",style:{width:"50%"}},"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"connector")),(0,o.kt)("td",null,"required"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"Specify what connector to use, here should be 'hive'.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"default-database")),(0,o.kt)("td",null,"required"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null)),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"hive-conf-dir")),(0,o.kt)("td",null,"required"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"If you don't want to upload hive-site.xml to HDFS, you can put this configuration into the classpath of the project, and then this place only needs to be not empty, otherwise you must fill in the complete HDFS URL.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"sink.partition-commit.trigger")),(0,o.kt)("td",null,"optional"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"If hive exists partition you can set trigger mode.(process-time)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"partition.time-extractor.timestamp-pattern")),(0,o.kt)("td",null,"optional"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"If hive exists partition you can set timestamp-pattern mode.(yyyy-MM-dd...)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"sink.partition-commit.delay")),(0,o.kt)("td",null,"optional"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"If hive exists partition you can set delay  mode.(10s,20s,1m...)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)("h5",null,"sink.partition-commit.policy.kind")),(0,o.kt)("td",null,"optional"),(0,o.kt)("td",{style:{wordWrap:"break-word"}},"(none)"),(0,o.kt)("td",null,"String"),(0,o.kt)("td",null,"Policy to commit a partition is to notify the downstream application that the partition has finished writing, the partition is ready to be read. metastore: add partition to metastore. Only hive table supports metastore policy, file system manages partitions through directory structure. success-file: add '_success' file to directory. Both can be configured at the same time: 'metastore,success-file'. custom: use policy class to create a commit policy. Support to configure multiple policies: 'metastore,success-file'.")))),(0,o.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,o.kt)("div",{class:"wy-table-responsive"},(0,o.kt)("table",{class:"colwidths-auto docutils"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"text-left"},"Hive type"),(0,o.kt)("th",{class:"text-left"},"Flink SQL type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"char(p)"),(0,o.kt)("td",null,"CHAR(p)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"varchar(p)"),(0,o.kt)("td",null,"VARCHAR(p)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"string"),(0,o.kt)("td",null,"STRING")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"boolean"),(0,o.kt)("td",null,"BOOLEAN")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"tinyint"),(0,o.kt)("td",null,"TINYINT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"smallint"),(0,o.kt)("td",null,"SMALLINT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"int"),(0,o.kt)("td",null,"INT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"bigint"),(0,o.kt)("td",null,"BIGINT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"float"),(0,o.kt)("td",null,"FLOAT")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"double"),(0,o.kt)("td",null,"DOUBLE")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"decimal(p, s)"),(0,o.kt)("td",null,"DECIMAL(p, s)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"date"),(0,o.kt)("td",null,"DATE")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"timestamp(9)"),(0,o.kt)("td",null,"TIMESTAMP")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"bytes"),(0,o.kt)("td",null,"BINARY")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"array"),(0,o.kt)("td",null,"LIST")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"map"),(0,o.kt)("td",null,"MAP")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"row"),(0,o.kt)("td",null,"STRUCT"))))))}k.isMDXComponent=!0},25952:function(t,e,n){e.Z=n.p+"assets/images/hive-36990009c592f8f732b0752c777621bf.png"}}]);