"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8868],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return d}});var o=t(67294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},i=Object.keys(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)t=i[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),f=c(t),d=r,k=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return t?o.createElement(k,a(a({ref:e},p),{},{components:t})):o.createElement(k,a({ref:e},p))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},30725:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],s={title:"Sort \u63d2\u4ef6",sidebar_position:3},l="\u603b\u89c8",c={unversionedId:"design_and_concept/how_to_write_plugin_sort",id:"version-1.1.0/design_and_concept/how_to_write_plugin_sort",title:"Sort \u63d2\u4ef6",description:"InLong-Sort\u662f\u4e00\u4e2aETL\u7cfb\u7edf\uff0c\u5f53\u524d\u652f\u6301\u7684sink\u7c7b\u578b\u5305\u62echive\uff0ckafka\uff0cclickhouse\u4ee5\u53caiceberg\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/design_and_concept/how_to_write_plugin_sort.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_sort",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_sort",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/design_and_concept/how_to_write_plugin_sort.md",tags:[],version:"1.1.0",sidebarPosition:3,frontMatter:{title:"Sort \u63d2\u4ef6",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Agent \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_agent"},next:{title:"Manager \u63d2\u4ef6",permalink:"/zh-CN/docs/design_and_concept/how_to_write_plugin_manager"}},p={},u=[],f={toc:u};function d(n){var e=n.components,t=(0,r.Z)(n,a);return(0,i.kt)("wrapper",(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,i.kt)("p",null,"InLong-Sort\u662f\u4e00\u4e2aETL\u7cfb\u7edf\uff0c\u5f53\u524d\u652f\u6301\u7684sink\u7c7b\u578b\u5305\u62echive\uff0ckafka\uff0cclickhouse\u4ee5\u53caiceberg\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728InLong-Sort\u4e2d\u6269\u5c55\u4e00\u4e2a\u65b0\u7684sink\u7c7b\u578b\u3002"),(0,i.kt)("h1",{id:"\u6269\u5c55flink-sink"},"\u6269\u5c55flink sink"),(0,i.kt)("p",null,"InLong-Sort\u662f\u4e00\u5957\u57fa\u4e8eflink\u8ba1\u7b97\u5f15\u64ce\u7684ETL\u7cfb\u7edf\uff0c\u5728\u6269\u5c55\u65b0\u7684sink\u5230InLong-Sort\u524d\uff0c\u9996\u5148\u9700\u8981\u6269\u5c55\u4e00\u4e2a\u65b0\u7684flink connector\u3002"),(0,i.kt)("p",null,"\u5982\u4f55\u6269\u5c55flink connector\u8bf7\u53c2\u8003flink\u5b98\u65b9\u6587\u6863",(0,i.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/datastream/overview/#datastream-connectors"},"DataStream Connectors "),"."),(0,i.kt)("h1",{id:"\u6269\u5c55sink\u534f\u8bae"},"\u6269\u5c55sink\u534f\u8bae"),(0,i.kt)("p",null,"\u6269\u5c55\u5b8cflink sink\u540e\uff0c\u9700\u8981\u5728InLong-Sort\u4e2d\u6269\u5c55\u5bf9\u5e94\u7684sink\u534f\u8bae\u3002\u8be5\u534f\u8bae\u7528\u6765\u63cf\u8ff0\u8be5sink\u6240\u9700\u8981\u7684\u4e00\u4e9b\u5fc5\u8981\u4fe1\u606f\u3002"),(0,i.kt)("p",null,"\u6269\u5c55\u534f\u8bae\u9996\u5148\u9700\u8981\u5b9e\u73b0\u4e00\u4e2a\u5177\u4f53\u7684\u7c7b\uff0c\u7ee7\u627f\u7236\u7c7b\n",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-common/src/main/java/org/apache/inlong/sort/protocol/sink/SinkInfo.java")),(0,i.kt)("p",null,"\u4e3e\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class DemoSinkInfo extends SinkInfo {\n    \n    // Place necessary attributes here\n\n    @JsonCreator\n    public DemoSinkInfo(FieldInfo[] fields) {\n        super(fields);\n    }\n}\n")),(0,i.kt)("p",null,"\u6269\u5c55\u5b8c\u534f\u8bae\u540e\uff0c\u9700\u8981\u5c06\u8be5\u534f\u8bae\u6807\u8bb0\u4e3aSinkInfo\u7684\u5b50\u7c7b\u578b\uff0c\u901a\u8fc7\u5168\u5c40\u552f\u4e00\u7684name\u8fdb\u884c\u6807\u8bc6\u3002"),(0,i.kt)("p",null,"\u4e3e\u4f8b\uff1a\u6269\u5c55\u4e00\u4e2a\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Constants.SINK_TYPE_DEMO"),"\u7684\u534f\u8bae\uff0c\u8be5\u534f\u8bae\u7c7b\u4e3aDemoSinkInfo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * The base class of the data sink in the metadata.\n */\n@JsonTypeInfo(\n        use = JsonTypeInfo.Id.NAME,\n        include = JsonTypeInfo.As.PROPERTY,\n        property = "type")\n@JsonSubTypes({\n        @Type(value = ClickHouseSinkInfo.class, name = Constants.SINK_TYPE_CLICKHOUSE),\n        @Type(value = HiveSinkInfo.class, name = Constants.SINK_TYPE_HIVE),\n        @Type(value = KafkaSinkInfo.class, name = Constants.SINK_TYPE_KAFKA),\n        @Type(value = IcebergSinkInfo.class, name = Constants.SINK_TYPE_ICEBERG),\n        \n        // The new sink protocol\n        @Type(value = DemoSinkInfo.class, name = Constants.SINK_TYPE_DEMO)}\n)\npublic abstract class SinkInfo implements Serializable {\n\n    private static final long serialVersionUID = 1485856855405721745L;\n\n    @JsonProperty("fields")\n    private final FieldInfo[] fields;\n\n    public SinkInfo(@JsonProperty("fields") FieldInfo[] fields) {\n        this.fields = checkNotNull(fields);\n    }\n\n    @JsonProperty("fields")\n    public FieldInfo[] getFields() {\n        return fields;\n    }\n}\n')),(0,i.kt)("h1",{id:"\u96c6\u6210\u65b0\u7684sink\u5230inlong-sort\u7684\u4e3b\u6d41\u7a0b"},"\u96c6\u6210\u65b0\u7684Sink\u5230InLong-Sort\u7684\u4e3b\u6d41\u7a0b"),(0,i.kt)("p",null,"\u6269\u5c55\u5b8cflink sink\u5e76\u5b9e\u73b0\u4e86\u5bf9\u5e94\u7684sink\u534f\u8bae\u540e\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5c06\u8be5sink\u96c6\u6210\u5230InLong-Sort\u7684\u4e3b\u6d41\u7a0b\u4e2d\u4e86\u3002"),(0,i.kt)("p",null,"InLong-Sort\u672c\u8d28\u662f\u4e00\u4e2aflink\u7684job\uff0c\u5165\u53e3\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-sort/sort-single-tenant/src/main/java/org/apache/inlong/sort/singletenant/flink/Entrance.java")),(0,i.kt)("p",null,"\u4e3e\u4f8b \uff1a\u6269\u5c55\u4e00\u4e2a\u540d\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"Constants.SINK_TYPE_DEMO"),"\u7684sink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'private static void buildSinkStream(\n        DataStream<Row> sourceStream,\n        Configuration config,\n        SinkInfo sinkInfo,\n        Map<String, Object> properties,\n        long dataflowId) throws IOException, ClassNotFoundException {\n    final String sinkType = checkNotNull(config.getString(Constants.SINK_TYPE));\n\n    switch (sinkType) {\n        case Constants.SINK_TYPE_CLICKHOUSE:\n            break;\n        case Constants.SINK_TYPE_HIVE:\n            break;\n        case Constants.SINK_TYPE_ICEBERG:\n            break;\n        case Constants.SINK_TYPE_KAFKA:\n            break;\n        case Constants.SINK_TYPE_DEMO:\n            // Add the extended sink function here\n            break;\n        default:\n            throw new IllegalArgumentException("Unsupported sink type " + sinkType);\n    }\n\n}\n\n')))}d.isMDXComponent=!0}}]);