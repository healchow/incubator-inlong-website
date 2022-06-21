"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4223],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=a,k=d["".concat(l,".").concat(c)]||d[c]||m[c]||o;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},14470:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={title:"\u547d\u4ee4\u884c\u5de5\u5177",sidebar_position:2},l=void 0,p={unversionedId:"user_guide/command_line_tools",id:"version-1.1.0/user_guide/command_line_tools",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/user_guide/command_line_tools.md",sourceDirName:"user_guide",slug:"/user_guide/command_line_tools",permalink:"/zh-CN/docs/user_guide/command_line_tools",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/user_guide/command_line_tools.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"\u547d\u4ee4\u884c\u5de5\u5177",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Dashboard \u6307\u5f15",permalink:"/zh-CN/docs/user_guide/dashboard_usage"},next:{title:"\u89e3\u6790 InLongMsg",permalink:"/zh-CN/docs/development/inlong_msg"}},u={},m=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"List",id:"list",level:2},{value:"Describe",id:"describe",level:2},{value:"Create",id:"create",level:2},{value:"Json\u6587\u4ef6",id:"json\u6587\u4ef6",level:3},{value:"streamSource",id:"streamsource",level:4},{value:"streamSink",id:"streamsink",level:4}],d={toc:m};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,o.kt)("p",null,"\u9664\u4e86 ",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_guide/dashboard_usage"},"InLong Dashboard"),"\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u5de5\u5177\u6765\u67e5\u770b\u548c\u521b\u5efa\u6570\u636e Group \u548c Stream\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl [options] [command] [command options]\n  Options:\n    -h, --help\n      Get all command about managerctl.\n  Commands:\n    create      Create resource by json file\n      Usage: create [options]\n\n    describe      Display details of one or more resources\n      Usage: describe [options]\n\n    list      Displays main information for one or more resources\n      Usage: list [options]\n")),(0,o.kt)("p",null,"\u76ee\u524d\u547d\u4ee4\u884c\u5de5\u5177\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"list"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"describe")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"create")," \u4e09\u4e2a\u547d\u4ee4\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u524d\u5f80 ",(0,o.kt)("inlineCode",{parentName:"p"},"inlong-manager")," \u76ee\u5f55\uff0c\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/application.properties")," \u6587\u4ef6\u7684\u4ee5\u4e0b\u914d\u7f6e\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"server.host=127.0.0.1\nserver.port=8080\ndefault.admin.user=admin\ndefault.admin.password=inlong\n")),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl list [command] [command options]\n  Commands:\n    stream      Get stream main information\n      Usage: stream [options]\n        Options:\n        * -g, --group\n            inlong group id\n\n    group      Get group details\n      Usage: group [options]\n        Options:\n          -g, --group\n            inlong group id\n          -n, --num\n            the number displayed\n            Default: 10\n          -s, --status\n            ( CREATE | REJECTED | INITIALIZING | OPERATING | \n             STARTED | FAILED | STOPPED | FINISHED | DELETED )\n            \n    sink      Get sink details\n      Usage: sink [options]\n        Options:\n        * -g, --group\n            group id\n        * -s, --stream\n            stream id\n\n    source      Get source details\n      Usage: source [options]\n        Options:\n        * -g, --group\n            inlong group id\n        * -s, --stream\n            inlong stream id\n          -t, --type\n            sink type\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*"," \u53f7\u4e3a\u5fc5\u9009\u9879")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"list")," \u7528\u4e8e\u5c55\u793ainlong group / stream / sink / source \u7684\u6838\u5fc3\u4fe1\u606f\u3002"),(0,o.kt)("h2",{id:"describe"},"Describe"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl describe [command] [command options]\n  Commands:\n    stream      Get stream details\n      Usage: stream [options]\n        Options:\n        * -g, --group\n            inlong group id\n\n    group      Get group details\n      Usage: group [options]\n        Options:\n          -g, --group\n            inlong group id\n          -n, --num\n            the number displayed\n            Default: 10\n          -s, --status\n            Default: 0\n\n    sink      Get sink details\n      Usage: sink [options]\n        Options:\n        * -g, --group\n            inlong group id\n        * -s, --stream\n            inlong stream id\n\n    source      Get source details\n      Usage: source [options]\n        Options:\n        * -g, --group\n            inlong group id\n        * -s, --stream\n            inlong stream id\n        * -t, --type\n            sink type\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"describe")," \u7528\u4e8e\u5c55\u793ainlong group / stream / sink / source \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u5e76\u4ee5Json\u683c\u5f0f\u8f93\u51fa\u3002"),(0,o.kt)("h2",{id:"create"},"Create"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage: managerctl create [command] [command options]\n  Commands:\n    group      Create group by json file\n      Usage: group [options]\n        Options:\n        * -f, --file\n            json file\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"create")," \u4e0d\u9700\u8981\u7533\u8bf7\u5ba1\u6838\u7b49\u6b65\u9aa4\uff0c\u53ea\u9700\u5c06\u6240\u914d\u7f6e\u4fe1\u606f\u51c6\u5907\u5728Json\u6587\u4ef6\u4e2d\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"json\u6587\u4ef6"},"Json\u6587\u4ef6"),(0,o.kt)("p",null,"Json \u6587\u4ef6\u4e3b\u8981\u6709\u4e94\u4e2a\u90e8\u5206\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"groupConf")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"streamConf")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"streamSource")," \u3001",(0,o.kt)("inlineCode",{parentName:"p"},"streamSink")," \u4ee5\u53ca ",(0,o.kt)("inlineCode",{parentName:"p"},"streamFieldList")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "groupConf": {\n    "groupName": "test_group",\n    "description": "",\n    "proxyClusterId": "1",\n    "mqBaseConf": {\n      "type": "PULSAR",\n      "pulsarServiceUrl": "pulsar://127.0.0.1:6650",\n      "pulsarAdminUrl": "http://127.0.0.1:8080",\n      "tenant": "tenant",\n      "namespace": "namespace",\n      "enableCreateResource": false\n    },\n    "sortBaseConf": {\n      "type": "FLINK",\n      "serviceUrl": "127.0.0.1:8081"\n    },\n    "zookeeperEnabled": false,\n    "dailyRecords": 10000000,\n    "peakRecords": 100000,\n    "maxLength": 10000\n  },\n  "streamConf": {\n    "name": "test_stream",\n    "description": "",\n    "dataSeparator": "|",\n    "strictlyOrdered": true,\n    "topic": "topic"\n  },\n  "streamSource": {\n    "sourceType": "KAFKA",\n    "bootstrapServers": "127.0.0.1:9092",\n    "topic": "kafka_topic",\n    "sourceName": "kafka_sourceName",\n    "dataFormat": "json",\n    "autoOffsetReset": "EARLIEST"\n  },\n  "streamSink": {\n    "sinkType": "HIVE",\n    "dbName": "test_db",\n    "jdbcUrl": "jdbc:hive2://127.0.0.1:10000",\n    "authentication": {\n      "userName": "hive",\n      "password": "hive"\n    },\n    "fileFormat": "TextFile",\n    "dataSeparator": "|",\n    "dataPath": "hdfs://127.0.0.1:9000/user/hive/warehouse/test_db",\n    "sinkFields": [\n      {\n        "id": 0,\n        "fieldType": "STRING",\n        "fieldName": "name",\n        "sourceFieldType": "STRING",\n        "sourceFieldName": "name"\n      }\n    ],\n    "tableName": "test_table",\n    "sinkName": "test",\n    "dataFormat": "json"\n  },\n  "streamFieldList": [\n    {\n      "id": 0,\n      "fieldType": "STRING",\n      "fieldName": "name",\n      "fieldComment": null,\n      "fieldValue": null\n    }\n  ]\n}\n')),(0,o.kt)("h4",{id:"streamsource"},"streamSource"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kafka"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"streamSource": {\n  "sourceType": "KAFKA",\n  "sourceName": "sourceName",\n  "bootstrapServers": "127.0.0.1:9092",\n  "topic": "kafka_topic",\n  "dataFormat": "json",\n  "autoOffsetReset": "EARLIEST"\n },\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"MySQL Binlog"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "BINLOG",\n  "sourceName": "sourceName",\n  "hostname": "127.0.0.1",\n  "port" : "3306",\n  "authentication": {\n    "userName": "root",\n    "password": "root"\n  },\n  "includeSchema": false,\n  "serverTimezone": "UTC",\n  "monitoredDdl": false,\n  "allMigration": false,\n  "dbNames": ["db1", "test_db*"],\n  "tableNames": ["tb1", "user"*],\n}\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"File"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "FILE",\n  "sourceName": "sourceName",\n  "ip": "127.0.0.1",\n  "pattern" : "/a/b/*.txt",\n  "timeOffset": "-1d"\n}\n'))))),(0,o.kt)("h4",{id:"streamsink"},"streamSink"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Hive"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"streamSink": {\n  "sinkType": "HIVE",\n  "dbName": "test_db",\n  "jdbcUrl": "jdbc:hive2://127.0.0.1:10000",\n  "authentication": {\n    "userName": "hive",\n    "password": "hive"\n  },\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Kafka"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "KAFKA",\n  "bootstrapServers": "pulsar://127.0.0.1:6650",\n  "topicName": "http://100.76.43.216:8080",\n  "dataFormat": "JSON",\n  "boolean": false,\n}\n')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ClickHouse"),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'"mqBaseConf": {\n  "type": "CLICKHOUSE",\n  "sinkName": "sinkName",\n  "dbName": "db_test",\n  "tableName": "table_test",\n  "jdbcUrl": "jdbc:clickhouse://127.0.0.1:8123/db",\n  "authentication": {\n    "userName": "default",\n    "password": "default"\n  },\n  "isDistributed": 1,\n  "flushInterval": 1,\n  "flushRecord": 10,\n  "keyFieldNames": "keyField",\n  "partitionFields": "partition",\n  "partitionStrategy": "BALANCE",\n  "retryTimes": 3,\n  "needCreated": false\n}\n'))))))}c.isMDXComponent=!0}}]);