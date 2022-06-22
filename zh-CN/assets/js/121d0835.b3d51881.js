"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[3234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"\u67b6\u6784\u4ecb\u7ecd"},l="\u7b80\u4ecb",a={unversionedId:"modules/sort/introduction",id:"version-0.11.0/modules/sort/introduction",title:"\u67b6\u6784\u4ecb\u7ecd",description:"inlong-sort\u662f\u4e00\u4e2a\u57fa\u4e8eflink\u7684ETL\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\uff0c\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/sort/introduction.md",sourceDirName:"modules/sort",slug:"/modules/sort/introduction",permalink:"/zh-CN/docs/0.11.0/modules/sort/introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/sort/introduction.md",tags:[],version:"0.11.0",frontMatter:{title:"\u67b6\u6784\u4ecb\u7ecd"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"TubeMQ VS Kafka\u6027\u80fd\u5bf9\u6bd4\u6d4b\u8bd5\u603b\u7ed3",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/tubemq_perf_test_vs_Kafka_cn"},next:{title:"Zookeeper\u914d\u7f6e\u4ecb\u7ecd",permalink:"/zh-CN/docs/0.11.0/modules/sort/protocol_introduction"}},u={},c=[{value:"\u591a\u79df\u6237\u7cfb\u7edf",id:"\u591a\u79df\u6237\u7cfb\u7edf",level:2},{value:"\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e",id:"\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e",level:2},{value:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90",id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90",level:2},{value:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8",id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8",level:2},{value:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f",id:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f",level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"inlong-sort\u662f\u4e00\u4e2a\u57fa\u4e8eflink\u7684ETL\u7cfb\u7edf\uff0c\u652f\u6301\u591a\u79cd\u6570\u636e\u6e90\uff0c\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\uff0c\u652f\u6301\u591a\u79cd\u5b58\u50a8\u7cfb\u7edf\u3002\ninlong-sort\u4f9d\u8d56inlong-manager\u8fdb\u884c\u7cfb\u7edf\u5143\u6570\u636e\u7684\u7ba1\u7406\uff0c\u5143\u6570\u636e\u4f9d\u8d56zk\u8fdb\u884c\u5b58\u50a8\u53ca\u540c\u6b65\u3002"),(0,o.kt)("h1",{id:"\u7279\u6027"},"\u7279\u6027"),(0,o.kt)("h2",{id:"\u591a\u79df\u6237\u7cfb\u7edf"},"\u591a\u79df\u6237\u7cfb\u7edf"),(0,o.kt)("p",null,"inlong-sort\u652f\u6301\u591a\u79df\u6237\uff0c\u4e00\u4e2ainlong-sort\u7684\u4f5c\u4e1a\u4e2d\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u540c\u6784\u7684\u6570\u636e\u6e90\uff0c\u4ee5\u53ca\u591a\u4e2a\u540c\u6784\u7684\u5b58\u50a8\u7cfb\u7edf\u3002\n\u5e76\u4e14\u9488\u5bf9\u4e0d\u540c\u7684\u6570\u636e\u6e90\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u540c\u7684\u6570\u636e\u683c\u5f0f\u4ee5\u53ca\u5b57\u6bb5\u62bd\u53d6\u65b9\u5f0f\u3002\n\u591a\u79df\u6237\u7cfb\u7edf\u4f9d\u8d56inlong-manager\u7684\u5143\u6570\u636e\u7ba1\u7406\uff0c\u7528\u6237\u53ea\u9700\u8981\u5728inlong-manager\u7684\u524d\u7aef\u9875\u9762\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\uff0c\u5373\u53ef\u5b9e\u73b0\u3002\n\u4e3e\u4f8b\uff1a\u4ee5tubemq\u4e3asource\uff0chive\u4e3a\u5b58\u50a8\u4e3a\u4f8b\uff0c\u540c\u4e00\u4e2ainlong-sort\u7684\u4f5c\u4e1a\u53ef\u4ee5\u8ba2\u9605\u591a\u4e2atopic\u7684tubemq\u6570\u636e\uff0c\u5e76\u4e14\u6bcf\u4e2atopic\u7684\u6570\u636e\u53ef\u4ee5\u5199\u5165\u4e0d\u540c\u7684hive\u96c6\u7fa4\u3002"),(0,o.kt)("h2",{id:"\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e"},"\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e"),(0,o.kt)("p",null,"inlong-sort\u652f\u6301\u70ed\u66f4\u65b0\u5143\u6570\u636e\uff0c\u6bd4\u5982\u66f4\u65b0\u6570\u636e\u6e90\u7684\u4fe1\u606f\uff0c\u6570\u636eschema\uff0c\u6216\u8005\u5199\u5165\u5b58\u50a8\u7cfb\u7edf\u7684\u4fe1\u606f\u3002\n\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5f53\u524d\u4fee\u6539\u6570\u636e\u6e90\u4fe1\u606f\u65f6\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u6570\u636e\u4e22\u5931\uff0c\u56e0\u4e3a\u4fee\u6539\u6570\u636e\u6e90\u4fe1\u606f\u540e\uff0c\u7cfb\u7edf\u4f1a\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4e2a\u5168\u65b0\u7684subscribe\uff0c\u4f1a\u9ed8\u8ba4\u4ece\u6d88\u606f\u961f\u5217\u7684\u6700\u65b0\u4f4d\u7f6e\u5f00\u59cb\u6d88\u8d39\u3002\n\u4fee\u6539\u6570\u636eschema\uff0c\u62bd\u53d6\u5b57\u6bb5\u89c4\u5219\u4ee5\u53ca\u5199\u5165\u5b58\u50a8\u7684\u4fe1\u606f\uff0c\u4e0d\u4f1a\u9020\u6210\u4efb\u4f55\u6570\u636e\u4e22\u5931\uff0c\u4fdd\u8bc1exactly-once"),(0,o.kt)("h1",{id:"\u652f\u6301\u7684\u6570\u636e\u6e90"},"\u652f\u6301\u7684\u6570\u636e\u6e90"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"inlong-tubemq"),(0,o.kt)("li",{parentName:"ul"},"pulsar")),(0,o.kt)("h1",{id:"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"},"\u652f\u6301\u7684\u5b58\u50a8\u7cfb\u7edf"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"hive\uff08\u5f53\u524d\u53ea\u652f\u6301parquet\u6587\u4ef6\u683c\u5f0f\uff09"),(0,o.kt)("li",{parentName:"ul"},"clickhouse")),(0,o.kt)("h1",{id:"\u4e00\u4e9b\u5c40\u9650"},"\u4e00\u4e9b\u5c40\u9650"),(0,o.kt)("p",null,"\u5f53\u524dinlong-sort\u5728ETL\u7684transform\u9636\u6bb5\uff0c\u53ea\u652f\u6301\u7b80\u5355\u7684\u5b57\u6bb5\u62bd\u53d6\u529f\u80fd\uff0c\u4e00\u4e9b\u590d\u6742\u529f\u80fd\u6682\u4e0d\u652f\u6301\u3002"),(0,o.kt)("h1",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,o.kt)("h2",{id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90"},"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u6570\u636e\u6e90"),(0,o.kt)("p",null,"kafka\u7b49"),(0,o.kt)("h2",{id:"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8"},"\u652f\u6301\u66f4\u591a\u79cd\u7c7b\u7684\u5b58\u50a8"),(0,o.kt)("p",null,"Hbase\uff0cElastic Search\u7b49"),(0,o.kt)("h2",{id:"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f"},"\u652f\u6301\u66f4\u591a\u79cd\u5199\u5165hive\u7684\u6587\u4ef6\u683c\u5f0f"),(0,o.kt)("p",null,"sequece file\uff0corc"))}p.isMDXComponent=!0}}]);