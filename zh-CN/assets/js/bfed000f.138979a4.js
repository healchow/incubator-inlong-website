"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8888],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),p=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(r),m=a,y=c["".concat(d,".").concat(m)]||c[m]||u[m]||o;return r?n.createElement(y,i(i({ref:e},s),{},{components:r})):n.createElement(y,i({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},10696:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u603b\u89c8"},i=void 0,l={unversionedId:"sdk/dataproxy-sdk/overview",id:"version-1.0.0/sdk/dataproxy-sdk/overview",title:"\u603b\u89c8",description:"DataProxy \u652f\u6301\u591a\u79cd\u683c\u5f0f\u7684\u6570\u636e\u7684\u8bc6\u522b\uff0c\u7528\u6237\u65e2\u53ef\u4ee5\u6309\u7167 DataProxy \u53ef\u8bc6\u522b\u7684\u683c\u5f0f\uff08\u5982\u516d\u6bb5\u534f\u8bae\u3001\u6570\u5b57\u5316\u534f\u8bae\u7b49\uff09\u81ea\u5b9a\u4e49\u7ec4\u88c5\u6570\u636e\u53d1\u9001\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.0.0/sdk/dataproxy-sdk/overview.md",sourceDirName:"sdk/dataproxy-sdk",slug:"/sdk/dataproxy-sdk/overview",permalink:"/zh-CN/docs/1.0.0/sdk/dataproxy-sdk/overview",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/sdk/dataproxy-sdk/overview.md",tags:[],version:"1.0.0",frontMatter:{title:"\u603b\u89c8"},sidebar:"tutorialSidebar",previous:{title:"\u793a\u4f8b",permalink:"/zh-CN/docs/1.0.0/sdk/dataproxy-sdk/example"},next:{title:"\u4f7f\u7528\u624b\u518c",permalink:"/zh-CN/docs/1.0.0/user_guide/user_manual"}},d={},p=[{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",level:2},{value:"\u6570\u636e\u53d1\u9001",id:"\u6570\u636e\u53d1\u9001",level:2},{value:"\u540c\u6b65\u6279\u91cf\u51fd\u6570",id:"\u540c\u6b65\u6279\u91cf\u51fd\u6570",level:3},{value:"\u540c\u6b65\u5355\u6761\u51fd\u6570",id:"\u540c\u6b65\u5355\u6761\u51fd\u6570",level:3},{value:"\u5f02\u6b65\u6279\u91cf\u51fd\u6570",id:"\u5f02\u6b65\u6279\u91cf\u51fd\u6570",level:3},{value:"\u5f02\u6b65\u5355\u6761\u51fd\u6570",id:"\u5f02\u6b65\u5355\u6761\u51fd\u6570",level:3}],s={toc:p};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DataProxy \u652f\u6301\u591a\u79cd\u683c\u5f0f\u7684\u6570\u636e\u7684\u8bc6\u522b\uff0c\u7528\u6237\u65e2\u53ef\u4ee5\u6309\u7167 DataProxy \u53ef\u8bc6\u522b\u7684\u683c\u5f0f\uff08\u5982\u516d\u6bb5\u534f\u8bae\u3001\u6570\u5b57\u5316\u534f\u8bae\u7b49\uff09\u81ea\u5b9a\u4e49\u7ec4\u88c5\u6570\u636e\u53d1\u9001\u3002\n\u4e5f\u53ef\u4ee5\uff0c\u91c7\u7528 DataProxy \u63d0\u4f9b\u7684 SDK \u8fdb\u884c\u6570\u636e\u63a5\u5165\u3002"),(0,a.kt)("p",null,"DataProxy SDK \u63d0\u4f9b\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u66f4\u65b0 proxy \u5217\u8868\u7b49\u5b89\u5168\u7279\u6027\uff0c\u80fd\u591f\u4fdd\u8bc1\u63a5\u5165\u6570\u636e\u7684\u53ef\u9760\u6027\uff0c\u7b80\u5316\u7528\u6237\u7684\u63a5\u5165\u903b\u8f91\uff0c\u964d\u4f4e\u7528\u6237\u7684\u63a5\u5165\u96be\u5ea6\uff0c\u8fd9\u91cc\u5efa\u8bae\u4f7f\u7528 SDK \u65b9\u5f0f\u63a5\u5165\u3002"),(0,a.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8be6\u7ec6\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ec4\u5305\u529f\u80fd\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u7528\u6237\u6570\u636e\u6309\u6253\u5305\u53d1\u9001\u5230 DataProxy \u53ef\u8bc6\u522b\u7684\u7ec4\u5305\u683c\u5f0f\uff08\u5982\u516d\u6bb5\u534f\u8bae\u3001\u6570\u5b57\u5316\u534f\u8bae\u7b49\uff09\u6253\u5305\u53d1\u9001\u5230 DataProxy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u538b\u7f29\u529f\u80fd"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u6253\u5305\u53d1\u9001\u5230 DataProxy \u524d\uff0c\u5c06\u7528\u6237\u6570\u636e\u8fdb\u884c\u538b\u7f29\uff0c\u51cf\u5c11\u7f51\u7edc\u5e26\u5bbd\u5360\u7528")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u7ef4\u62a4 DataProxy \u5217\u8868"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9694\u4e94\u5206\u949f\u83b7\u53d6\u6253\u5305\u53d1\u9001\u5230DataProxy\u5217\u8868 \uff0c\u4ee5\u68c0\u6d4b\u8fd0\u7ef4\u4fa7\u662f\u5426\u5b58\u5728\u4e0a\u4e0b\u7ebf DataProxy \u673a\u5668\u7684\u60c5\u51b5\uff1b\u6bcf\u969420s\u81ea\u52a8\u5254\u9664\u4e0d\u53ef\u7528\u8fde\u63a5\uff0c\u4ee5\u4fdd\u8bc1\u5df2\u8fde\u63a5\u7684 DataProxy \u80fd\u6b63\u5e38\u8fd0\u4f5c")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u7edf\u8ba1\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u589e\u52a0\u4e1a\u52a1\u5206\u949f\u7ea7\u522b\u53d1\u9001\u91cf\u7684\u6307\u6807\uff08\u63a5\u53e3\u7ea7\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8d1f\u8f7d\u5747\u8861\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u65b0\u7684\u7b56\u7565\u5c06\u53d1\u9001\u7684\u6570\u636e\u5728\u591a\u4e2a DataProxy \u95f4\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\uff0c\u4e0d\u518d\u4f9d\u9760\u7b80\u5355\u7684\u968f\u673a+\u8f6e\u8be2\u673a\u5236\u6765\u4fdd\u8bc1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DataProxy \u5217\u8868\u6301\u4e45\u5316\uff08\u65b0\uff09"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u4e1a\u52a1id\u5bf9 DataProxy \u5217\u8868\u6301\u4e45\u5316\uff0c\u9632\u6b62\u7a0b\u5e8f\u542f\u52a8\u65f6\u914d\u7f6e\u4e2d\u5fc3\u53d1\u751f\u6545\u969c\u65e0\u6cd5\u53d1\u9001\u6570\u636e")))),(0,a.kt)("h2",{id:"\u6570\u636e\u53d1\u9001"},"\u6570\u636e\u53d1\u9001"),(0,a.kt)("h3",{id:"\u540c\u6b65\u6279\u91cf\u51fd\u6570"},"\u540c\u6b65\u6279\u91cf\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    public SendResult sendMessage(List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n    \u53c2\u6570\u8bf4\u660e\n\n    bodyList \u662f\u7528\u6237\u9700\u8981\u53d1\u9001\u7684\u591a\u6761\u6570\u636e\u7684\u96c6\u5408\uff0c\u603b\u957f\u5ea6\u5efa\u8bae\u5c0f\u4e8e512k\u3002groupId \u4ee3\u8868\u4e1a\u52a1 id\uff0cstreamId \u4ee3\u8868\u63a5\u53e3id\u3002dt \u8868\u793a\u8be5\u6570\u636e\u7684\u65f6\u95f4\u6233\uff0c\u7cbe\u786e\u5230\u6beb\u79d2\u7ea7\u522b\u3002\u4e5f\u53ef\u76f4\u63a5\u8bbe\u7f6e\u4e3a0\uff0c\u6b64\u65f6api\u4f1a\u540e\u53f0\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u4f5c\u4e3a\u5176\u65f6\u95f4\u6233\u3002timeout & timeUnit:\u8fd9\u4e24\u4e2a\u53c2\u6570\u662f\u8bbe\u7f6e\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4e00\u822c\u5efa\u8bae\u8bbe\u7f6e\u621020s\u3002\n")),(0,a.kt)("h3",{id:"\u540c\u6b65\u5355\u6761\u51fd\u6570"},"\u540c\u6b65\u5355\u6761\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    public SendResult sendMessage(byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n    \u53c2\u6570\u8bf4\u660e\n\n    body\u662f\u7528\u6237\u8981\u53d1\u9001\u7684\u5355\u6761\u6570\u636e\u5185\u5bb9\uff0c\u5176\u4f59\u5404\u53c2\u6570\u6db5\u4e49\u57fa\u672c\u4e0e\u6279\u91cf\u53d1\u9001\u63a5\u53e3\u4e00\u81f4\u3002\n")),(0,a.kt)("h3",{id:"\u5f02\u6b65\u6279\u91cf\u51fd\u6570"},"\u5f02\u6b65\u6279\u91cf\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    public void asyncSendMessage(SendMessageCallback callback, List<byte[]> bodyList, String groupId, String streamId, long dt, long timeout,TimeUnit timeUnit)\n\n    \u53c2\u6570\u8bf4\u660e\n\n    SendMessageCallback\xa0\u662f\u5904\u7406\u6d88\u606f\u7684 callback\u3002bodyList \u4e3a\u7528\u6237\u9700\u8981\u53d1\u9001\u7684\u591a\u6761\u6570\u636e\u7684\u96c6\u5408\uff0c\u591a\u6761\u6570\u636e\u7684\u603b\u957f\u5ea6\u5efa\u8bae\u5c0f\u4e8e512k\u3002groupId \u662f\u4e1a\u52a1 id\uff0cstreamId \u662f\u63a5\u53e3 id\u3002dt \u8868\u793a\u8be5\u6570\u636e\u7684\u65f6\u95f4\u6233\uff0c\u7cbe\u786e\u5230\u6beb\u79d2\u7ea7\u522b\u3002\u4e5f\u53ef\u76f4\u63a5\u8bbe\u7f6e\u4e3a0\uff0c\u6b64\u65f6 api \u4f1a\u540e\u53f0\u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u4f5c\u4e3a\u5176\u65f6\u95f4\u6233\u3002timeout \u548ctimeUnit \u662f\u53d1\u9001\u6570\u636e\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4e00\u822c\u5efa\u8bae\u8bbe\u7f6e\u6210 20s\u3002\n")),(0,a.kt)("h3",{id:"\u5f02\u6b65\u5355\u6761\u51fd\u6570"},"\u5f02\u6b65\u5355\u6761\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    public void asyncSendMessage(SendMessageCallback callback, byte[] body, String groupId, String streamId, long dt, long timeout, TimeUnit timeUnit)\n\n    \u53c2\u6570\u8bf4\u660e\n\n    body \u4e3a\u5355\u6761\u6d88\u606f\u5185\u5bb9\uff0c\u5176\u4f59\u5404\u53c2\u6570\u6db5\u4e49\u57fa\u672c\u4e0e\u6279\u91cf\u53d1\u9001\u63a5\u53e3\u4e00\u81f4\n")))}u.isMDXComponent=!0}}]);