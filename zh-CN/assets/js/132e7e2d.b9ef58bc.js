"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5782],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,b=m["".concat(i,".").concat(k)]||m[k]||s[k]||p;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<p;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52913:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),o=["components"],l={title:"\u67b6\u6784\u4ecb\u7ecd"},i=void 0,u={unversionedId:"modules/tubemq/architecture",id:"version-0.11.0/modules/tubemq/architecture",title:"\u67b6\u6784\u4ecb\u7ecd",description:"1 Apache InLong TubeMQ\u6a21\u5757\u7684\u67b6\u6784",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.11.0/modules/tubemq/architecture.md",sourceDirName:"modules/tubemq",slug:"/modules/tubemq/architecture",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/architecture",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.11.0/modules/tubemq/architecture.md",tags:[],version:"0.11.0",frontMatter:{title:"\u67b6\u6784\u4ecb\u7ecd"},sidebar:"version-0.11.0/tutorialSidebar",previous:{title:"\u7f16\u8bd1\u90e8\u7f72",permalink:"/zh-CN/docs/0.11.0/modules/dataproxy-sdk/quick_start"},next:{title:"\u5ba2\u6237\u7aefRPC",permalink:"/zh-CN/docs/0.11.0/modules/tubemq/client_rpc"}},c={},s=[{value:"1 Apache InLong TubeMQ\u6a21\u5757\u7684\u67b6\u6784",id:"1-apache-inlong-tubemq\u6a21\u5757\u7684\u67b6\u6784",level:2},{value:"2 Apache InLong TubeMQ\u6a21\u5757\u7684\u7cfb\u7edf\u7279\u70b9",id:"2-apache-inlong-tubemq\u6a21\u5757\u7684\u7cfb\u7edf\u7279\u70b9",level:2},{value:"3 Broker\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u6539\u8fdb",id:"3-broker\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u6539\u8fdb",level:2},{value:"3.1 \u6587\u4ef6\u5b58\u50a8\u5757",id:"31-\u6587\u4ef6\u5b58\u50a8\u5757",level:3},{value:"3.2 \u5185\u5b58\u7f13\u5b58\u5757",id:"32-\u5185\u5b58\u7f13\u5b58\u5757",level:3},{value:"4 Apache InLong TubeMQ\u6a21\u5757\u7684\u5ba2\u6237\u7aef\u6f14\u8fdb\uff1a",id:"4-apache-inlong-tubemq\u6a21\u5757\u7684\u5ba2\u6237\u7aef\u6f14\u8fdb",level:2}],m={toc:s};function k(e){var t=e.components,l=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"1-apache-inlong-tubemq\u6a21\u5757\u7684\u67b6\u6784"},"1 Apache InLong TubeMQ\u6a21\u5757\u7684\u67b6\u6784"),(0,p.kt)("p",null,"\u7ecf\u8fc7\u591a\u5e74\u6f14\u53d8\uff0cTubeMQ\u96c6\u7fa4\u5206\u4e3a\u5982\u4e0b5\u4e2a\u90e8\u5206\uff1a\n",(0,p.kt)("img",{src:n(54050).Z,width:"1031",height:"507"})),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Portal"),"\uff1a \u8d1f\u8d23\u5bf9\u5916\u4ea4\u4e92\u548c\u8fd0\u7ef4\u64cd\u4f5c\u7684Portal\u90e8\u5206\uff0c\u5305\u62ecAPI\u548cWeb\u4e24\u5757\uff0cAPI\u5bf9\u63a5\u96c6\u7fa4\u4e4b\u5916\u7684\u7ba1\u7406\u7cfb\u7edf\uff0cWeb\u662f\u5728API\u57fa\u7840\u4e0a\u5bf9\u65e5\u5e38\u8fd0\u7ef4\u529f\u80fd\u505a\u7684\u9875\u9762\u5c01\u88c5\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Master"),"\uff1a \u8d1f\u8d23\u96c6\u7fa4\u63a7\u5236\u7684Control\u90e8\u5206\uff0c\u8be5\u90e8\u5206\u75311\u4e2a\u6216\u591a\u4e2aMaster\u8282\u70b9\u7ec4\u6210\uff0cMaster HA\u901a\u8fc7Master\u8282\u70b9\u95f4\u5fc3\u8df3\u4fdd\u6d3b\u3001\u5b9e\u65f6\u70ed\u5907\u5207\u6362\u5b8c\u6210\uff08\u8fd9\u662f\u5927\u5bb6\u4f7f\u7528TubeMQ\u7684Lib\u65f6\u9700\u8981\u586b\u5199\u5bf9\u5e94\u96c6\u7fa4\u6240\u6709Master\u8282\u70b9\u5730\u5740\u7684\u539f\u56e0\uff09\uff0c\u4e3bMaster\u8d1f\u8d23\u7ba1\u7406\u6574\u4e2a\u96c6\u7fa4\u7684\u72b6\u6001\u3001\u8d44\u6e90\u8c03\u5ea6\u3001\u6743\u9650\u68c0\u67e5\u3001\u5143\u6570\u636e\u67e5\u8be2\u7b49\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Broker"),"\uff1a \u8d1f\u8d23\u5b9e\u9645\u6570\u636e\u5b58\u50a8\u7684Store\u90e8\u5206\uff0c\u8be5\u90e8\u5206\u7531\u76f8\u4e92\u4e4b\u95f4\u72ec\u7acb\u7684Broker\u8282\u70b9\u7ec4\u6210\uff0c\u6bcf\u4e2aBroker\u8282\u70b9\u5bf9\u672c\u8282\u70b9\u5185\u7684Topic\u96c6\u5408\u8fdb\u884c\u7ba1\u7406\uff0c\u5305\u62ecTopic\u7684\u589e\u3001\u5220\u3001\u6539\u3001\u67e5\uff0cTopic\u5185\u7684\u6d88\u606f\u5b58\u50a8\u3001\u6d88\u8d39\u3001\u8001\u5316\u3001\u5206\u533a\u6269\u5bb9\u3001\u6570\u636e\u6d88\u8d39\u7684offset\u8bb0\u5f55\u7b49\uff0c\u96c6\u7fa4\u5bf9\u5916\u80fd\u529b\uff0c\u5305\u62ecTopic\u6570\u76ee\u3001\u541e\u5410\u91cf\u3001\u5bb9\u91cf\u7b49\uff0c\u901a\u8fc7\u6c34\u5e73\u6269\u5c55Broker\u8282\u70b9\u6765\u5b8c\u6210\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Client"),"\uff1a \u8d1f\u8d23\u6570\u636e\u751f\u4ea7\u548c\u6d88\u8d39\u7684Client\u90e8\u5206\uff0c\u8be5\u90e8\u5206\u6211\u4eec\u4ee5Lib\u5f62\u5f0f\u5bf9\u5916\u63d0\u4f9b\uff0c\u5927\u5bb6\u7528\u5f97\u6700\u591a\u7684\u662f\u6d88\u8d39\u7aef\uff0c\u76f8\u6bd4\u4e4b\u524d\uff0c\u6d88\u8d39\u7aef\u73b0\u652f\u6301Push\u3001Pull\u4e24\u79cd\u6570\u636e\u62c9\u53d6\u6a21\u5f0f\uff0c\u6570\u636e\u6d88\u8d39\u884c\u4e3a\u652f\u6301\u987a\u5e8f\u548c\u8fc7\u6ee4\u6d88\u8d39\u4e24\u79cd\u3002\u5bf9\u4e8ePull\u6d88\u8d39\u6a21\u5f0f\uff0c\u652f\u6301\u4e1a\u52a1\u901a\u8fc7\u5ba2\u6237\u7aef\u91cd\u7f6e\u7cbe\u786eoffset\u4ee5\u652f\u6301\u4e1a\u52a1exactly-once\u6d88\u8d39\uff0c\u540c\u65f6\uff0c\u6d88\u8d39\u7aef\u65b0\u63a8\u51fa\u8de8\u96c6\u7fa4\u5207\u6362\u514d\u91cd\u542f\u7684Consumer\u5ba2\u6237\u7aef\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"ZooKeeper"),"\uff1a \u8d1f\u8d23offset\u5b58\u50a8\u7684ZooKeeper\u90e8\u5206\uff0c\u8be5\u90e8\u5206\u529f\u80fd\u5df2\u5f31\u5316\u5230\u4ec5\u505aoffset\u7684\u6301\u4e45\u5316\u5b58\u50a8\uff0c\u8003\u8651\u5230\u63a5\u4e0b\u6765\u7684\u591a\u8282\u70b9\u526f\u672c\u529f\u80fd\u8be5\u6a21\u5757\u6682\u65f6\u4fdd\u7559\u3002"))),(0,p.kt)("h2",{id:"2-apache-inlong-tubemq\u6a21\u5757\u7684\u7cfb\u7edf\u7279\u70b9"},"2 Apache InLong TubeMQ\u6a21\u5757\u7684\u7cfb\u7edf\u7279\u70b9"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u7eafJava\u5b9e\u73b0\u8bed\u8a00"),"\uff1a\nTubeMQ\u91c7\u7528\u7eafJava\u8bed\u8a00\u5f00\u53d1\uff0c\u4fbf\u4e8e\u5f00\u53d1\u4eba\u5458\u5feb\u901f\u719f\u6089\u9879\u76ee\u53ca\u95ee\u9898\u5904\u7406\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5f15\u5165\u534f\u8c03\u8282\u70b9"),"\uff1a\nTubeMQ\u7cfb\u7edf\u91c7\u7528\u81ea\u7ba1\u7406\u7684\u5143\u6570\u636e\u4ef2\u88c1\u673a\u5236\u65b9\u5f0f\u8fdb\u884c\uff0cMaster\u8282\u70b9\u901a\u8fc7\u91c7\u7528\u5185\u5d4c\u6570\u636e\u5e93BDB\u5b8c\u6210\u96c6\u7fa4\u5185\u5143\u6570\u636e\u7684\u5b58\u50a8\u3001\u66f4\u65b0\u4ee5\u53caHA\u70ed\u5207\u529f\u80fd\uff0c\u8d1f\u8d23TubeMQ\u96c6\u7fa4\u7684\u8fd0\u884c\u7ba1\u63a7\u548c\u914d\u7f6e\u7ba1\u7406\u64cd\u4f5c\uff0c\u5bf9\u5916\u63d0\u4f9b\u63a5\u53e3\u7b49\uff1b\u901a\u8fc7Master\u8282\u70b9\uff0cTubeMQ\u96c6\u7fa4\u91cc\u7684Broker\u914d\u7f6e\u8bbe\u7f6e\u3001\u53d8\u66f4\u53ca\u67e5\u8be2\u5b9e\u73b0\u4e86\u5b8c\u6574\u7684\u81ea\u52a8\u5316\u95ed\u73af\u7ba1\u7406\uff0c\u51cf\u8f7b\u4e86\u7cfb\u7edf\u7ef4\u62a4\u7684\u590d\u6742\u5ea6\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u4fa7\u6d88\u8d39\u8d1f\u8f7d\u5747\u8861"),"\uff1a\nTubeMQ\u91c7\u7528\u7684\u662f\u670d\u52a1\u4fa7\u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u6848\uff0c\u800c\u4e0d\u662f\u5ba2\u6237\u7aef\u4fa7\u64cd\u4f5c\uff0c\u63d0\u5347\u7cfb\u7edf\u7684\u7ba1\u63a7\u80fd\u529b\u540c\u65f6\u7b80\u5316\u5ba2\u6237\u7aef\u5b9e\u73b0\uff0c\u66f4\u4fbf\u4e8e\u5747\u8861\u7b97\u6cd5\u5347\u7ea7\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u884c\u7ea7\u9501\u64cd\u4f5c"),"\uff1a\n\u5bf9\u4e8eBroker\u6d88\u606f\u8bfb\u5199\u4e2d\u5b58\u5728\u4e2d\u95f4\u72b6\u6001\u7684\u5e76\u53d1\u64cd\u4f5c\u91c7\u7528\u884c\u7ea7\u9501\uff0c\u907f\u514d\u91cd\u590d\u95ee\u9898\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Offset\u7ba1\u7406\u8c03\u6574"),"\uff1a\nOffset\u7531\u5404\u4e2aBroker\u72ec\u81ea\u7ba1\u7406\uff0cZK\u53ea\u4f5c\u6570\u636e\u6301\u4e45\u5316\u5b58\u50a8\u7528\uff08\u6700\u521d\u8003\u8651\u5b8c\u5168\u53bb\u6389ZK\u4f9d\u8d56\uff0c\u8003\u8651\u5230\u540e\u7eed\u7684\u529f\u80fd\u6269\u5c55\u5c31\u6682\u65f6\u4fdd\u7559\uff09\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6d88\u606f\u8bfb\u53d6\u673a\u5236\u7684\u6539\u8fdb"),"\uff1a\nTubeMQ\u91c7\u7528\u6d88\u606f\u968f\u673a\u8bfb\u53d6\u6a21\u5f0f,\u540c\u65f6\u4e3a\u4e86\u964d\u4f4e\u6d88\u606f\u65f6\u5ef6\u53c8\u589e\u52a0\u4e86\u5185\u5b58\u7f13\u5b58\u8bfb\u5199,\u4f7f\u5176\u6ee1\u8db3\u4e1a\u52a1\u5feb\u901f\u751f\u4ea7\u6d88\u8d39\u7684\u9700\u6c42\uff08\u540e\u9762\u7ae0\u8282\u8be6\u7ec6\u4ecb\u7ecd\uff09\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6d88\u8d39\u8005\u884c\u4e3a\u7ba1\u63a7"),"\uff1a\n\u652f\u6301\u901a\u8fc7\u7b56\u7565\u5b9e\u65f6\u52a8\u6001\u5730\u63a7\u5236\u7cfb\u7edf\u63a5\u5165\u7684\u6d88\u8d39\u8005\u884c\u4e3a\uff0c\u5305\u62ec\u7cfb\u7edf\u8d1f\u8f7d\u9ad8\u65f6\u5bf9\u7279\u5b9a\u4e1a\u52a1\u7684\u9650\u6d41\u3001\u6682\u505c\u6d88\u8d39\uff0c\u52a8\u6001\u8c03\u6574\u6570\u636e\u62c9\u53d6\u7684\u9891\u7387\u7b49\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5206\u7ea7\u7ba1\u63a7"),"\uff1a\n\u9488\u5bf9\u7cfb\u7edf\u8fd0\u7ef4\u3001\u4e1a\u52a1\u7279\u70b9\u3001\u673a\u5668\u8d1f\u8f7d\u72b6\u6001\u7684\u4e0d\u540c\u9700\u6c42\uff0c\u7cfb\u7edf\u652f\u6301\u8fd0\u7ef4\u901a\u8fc7\u7b56\u7565\u6765\u52a8\u6001\u63a7\u5236\u4e0d\u540c\u6d88\u8d39\u8005\u7684\u6d88\u8d39\u884c\u4e3a\uff0c\u6bd4\u5982\u662f\u5426\u6709\u6743\u9650\u6d88\u8d39\u3001\u6d88\u8d39\u65f6\u5ef6\u5206\u7ea7\u4fdd\u8bc1\u3001\u6d88\u8d39\u9650\u6d41\u63a7\u5236\uff0c\u4ee5\u53ca\u6570\u636e\u62c9\u53d6\u9891\u7387\u63a7\u5236\u7b49\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u7cfb\u7edf\u5b89\u5168\u7ba1\u63a7"),"\uff1a\n\u6839\u636e\u4e1a\u52a1\u4e0d\u540c\u7684\u6570\u636e\u670d\u52a1\u9700\u8981\uff0c\u4ee5\u53ca\u7cfb\u7edf\u8fd0\u7ef4\u5b89\u5168\u7684\u8003\u8651\uff0cTubeMQ\u7cfb\u7edf\u589e\u52a0\u4e86TLS\u4f20\u8f93\u5c42\u52a0\u5bc6\u7ba1\u9053\uff0c\u751f\u4ea7\u548c\u6d88\u8d39\u670d\u52a1\u7684\u8ba4\u8bc1\u3001\u6388\u6743\uff0c\u4ee5\u53ca\u9488\u5bf9\u5206\u5e03\u5f0f\u8bbf\u95ee\u63a7\u5236\u7684\u8bbf\u95ee\u4ee4\u724c\u7ba1\u7406\uff0c\u6ee1\u8db3\u4e1a\u52a1\u548c\u7cfb\u7edf\u8fd0\u7ef4\u5728\u7cfb\u7edf\u5b89\u5168\u65b9\u9762\u7684\u9700\u6c42\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u8d44\u6e90\u5229\u7528\u7387\u63d0\u5347\u6539\u8fdb"),"\uff1a\nTubeMQ\u91c7\u7528\u8fde\u63a5\u590d\u7528\u6a21\u5f0f\uff0c\u51cf\u5c11\u8fde\u63a5\u8d44\u6e90\u6d88\u8017\uff1b\u901a\u8fc7\u903b\u8f91\u5206\u533a\u6784\u9020\uff0c\u51cf\u5c11\u7cfb\u7edf\u5bf9\u6587\u4ef6\u53e5\u67c4\u6570\u7684\u5360\u7528\uff0c\u901a\u8fc7\u670d\u52a1\u5668\u7aef\u8fc7\u6ee4\u6a21\u5f0f\uff0c\u51cf\u5c11\u7f51\u7edc\u5e26\u5bbd\u8d44\u6e90\u4f7f\u7528\u7387\uff1b\u901a\u8fc7\u5265\u79bb\u5bf9Zookeeper\u7684\u4f7f\u7528\uff0c\u51cf\u5c11Zookeeper\u7684\u5f3a\u4f9d\u8d56\u53ca\u74f6\u9888\u9650\u5236\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aef\u6539\u8fdb"),"\uff1a\n\u57fa\u4e8e\u4e1a\u52a1\u4f7f\u7528\u4e0a\u7684\u4fbf\u5229\u6027\u4ee5\uff0c\u6211\u4eec\u7b80\u5316\u4e86\u5ba2\u6237\u7aef\u903b\u8f91\uff0c\u4f7f\u5176\u505a\u5230\u6700\u5c0f\u7684\u529f\u80fd\u96c6\u5408\uff0c\u6211\u4eec\u91c7\u7528\u57fa\u4e8e\u54cd\u5e94\u6d88\u606f\u7684\u63a5\u6536\u8d28\u91cf\u7edf\u8ba1\u7b97\u6cd5\u6765\u81ea\u52a8\u5254\u51fa\u574f\u7684Broker\u8282\u70b9\uff0c\u57fa\u4e8e\u9996\u6b21\u4f7f\u7528\u65f6\u4f5c\u8fde\u63a5\u5c1d\u8bd5\u6765\u907f\u514d\u5927\u6570\u636e\u91cf\u53d1\u9001\u65f6\u53d1\u9001\u53d7\u963b\uff08\u5177\u4f53\u5185\u5bb9\u89c1\u540e\u9762\u7ae0\u8282\u4ecb\u7ecd\uff09\u3002"))),(0,p.kt)("h2",{id:"3-broker\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u6539\u8fdb"},"3 Broker\u6587\u4ef6\u5b58\u50a8\u65b9\u6848\u6539\u8fdb"),(0,p.kt)("p",null,"\u4ee5\u78c1\u76d8\u4e3a\u6570\u636e\u6301\u4e45\u5316\u5a92\u4ecb\u7684\u7cfb\u7edf\u90fd\u9762\u4e34\u5404\u79cd\u56e0\u78c1\u76d8\u95ee\u9898\u5bfc\u81f4\u7684\u7cfb\u7edf\u6027\u80fd\u95ee\u9898\uff0cTubeMQ\u7cfb\u7edf\u4e5f\u4e0d\u4f8b\u5916\uff0c\u6027\u80fd\u63d0\u5347\u5f88\u5927\u7a0b\u5ea6\u4e0a\u662f\u5728\u89e3\u51b3\u6d88\u606f\u6570\u636e\u5982\u4f55\u8bfb\u5199\u53ca\u5b58\u50a8\u7684\u95ee\u9898\u3002\u5728\u8fd9\u4e2a\u65b9\u9762TubeMQ\u8fdb\u884c\u4e86\u6bd4\u8f83\u591a\u7684\u6539\u8fdb\uff0c\u6211\u4eec\u91c7\u7528\u5b58\u50a8\u5b9e\u4f8b\u6765\u4f5c\u4e3a\u6700\u5c0f\u7684Topic\u6570\u636e\u7ba1\u7406\u5355\u5143\uff0c\u6bcf\u4e2a\u5b58\u50a8\u5b9e\u4f8b\u5305\u62ec\u4e00\u4e2a\u6587\u4ef6\u5b58\u50a8\u5757\u548c\u4e00\u4e2a\u5185\u5b58\u7f13\u5b58\u5757\uff0c\u6bcf\u4e2aTopic\u53ef\u4ee5\u5206\u914d\u591a\u4e2a\u5b58\u50a8\u5b9e\u4f8b\uff1a"),(0,p.kt)("h3",{id:"31-\u6587\u4ef6\u5b58\u50a8\u5757"},"3.1 \u6587\u4ef6\u5b58\u50a8\u5757"),(0,p.kt)("p",null," TubeMQ\u7684\u78c1\u76d8\u5b58\u50a8\u65b9\u6848\u7c7b\u4f3cKafka\uff0c\u4f46\u53c8\u4e0d\u5c3d\u76f8\u540c\uff0c\u5982\u4e0b\u56fe\u793a\uff0c\u6bcf\u4e2a\u6587\u4ef6\u5b58\u50a8\u5757\u7531\u4e00\u4e2a\u7d22\u5f15\u6587\u4ef6\u548c\u4e00\u4e2a\u6570\u636e\u6587\u4ef6\u7ec4\u6210\uff0cpartiton\u4e3a\u6570\u636e\u6587\u4ef6\u91cc\u7684\u903b\u8f91\u5206\u533a\uff0c\u6bcf\u4e2aTopic\u5355\u72ec\u7ef4\u62a4\u7ba1\u7406\u6587\u4ef6\u5b58\u50a8\u5757\u7684\u76f8\u5173\u673a\u5236\uff0c\u5305\u62ec\u8001\u5316\u5468\u671f\uff0cpartition\u4e2a\u6570\uff0c\u662f\u5426\u53ef\u8bfb\u53ef\u5199\u7b49\u3002\n",(0,p.kt)("img",{src:n(6219).Z,width:"1211",height:"700"})),(0,p.kt)("h3",{id:"32-\u5185\u5b58\u7f13\u5b58\u5757"},"3.2 \u5185\u5b58\u7f13\u5b58\u5757"),(0,p.kt)("p",null," \u5728\u6587\u4ef6\u5b58\u50a8\u5757\u57fa\u7840\u4e0a\uff0c\u6211\u4eec\u989d\u5916\u589e\u52a0\u4e86\u4e00\u4e2a\u5355\u72ec\u7684\u5185\u5b58\u7f13\u5b58\u5757\uff0c\u5373\u5728\u539f\u6709\u5199\u78c1\u76d8\u57fa\u7840\u4e0a\u589e\u52a0\u4e00\u5757\u5185\u5b58\uff0c\u9694\u79bb\u786c\u76d8\u7684\u6162\u901f\u5f71\u54cd\uff0c\u6570\u636e\u5148\u5237\u5230\u5185\u5b58\u7f13\u5b58\u5757\uff0c\u7136\u540e\u7531\u5185\u5b58\u7f13\u5b58\u5757\u6279\u91cf\u5730\u5c06\u6570\u636e\u5237\u5230\u78c1\u76d8\u6587\u4ef6\u3002\n",(0,p.kt)("img",{src:n(18733).Z,width:"794",height:"604"})),(0,p.kt)("h2",{id:"4-apache-inlong-tubemq\u6a21\u5757\u7684\u5ba2\u6237\u7aef\u6f14\u8fdb"},"4 Apache InLong TubeMQ\u6a21\u5757\u7684\u5ba2\u6237\u7aef\u6f14\u8fdb\uff1a"),(0,p.kt)("p",null,"\u4e1a\u52a1\u4e0eTubeMQ\u63a5\u89e6\u5f97\u6700\u591a\u7684\u662f\u6d88\u8d39\u4fa7\uff0c\u600e\u6837\u66f4\u9002\u5e94\u4e1a\u52a1\u7279\u70b9\u3001\u66f4\u65b9\u4fbf\u4e1a\u52a1\u4f7f\u7528\u6211\u4eec\u5728\u8fd9\u5757\u505a\u4e86\u6bd4\u8f83\u591a\u7684\u6539\u8fdb\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6570\u636e\u62c9\u53d6\u6a21\u5f0f\u652f\u6301Push\u3001Pull\uff1a")),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Push\u5ba2\u6237\u7aef\uff1a")," TubeMQ\u6700\u521d\u6d88\u8d39\u7aef\u7248\u672c\u53ea\u63d0\u4f9bPush\u6a21\u5f0f\u7684\u6d88\u8d39\uff0c\u8fd9\u79cd\u6a21\u5f0f\u80fd\u6bd4\u8f83\u5feb\u901f\u5730\u6d88\u8d39\u6570\u636e\uff0c\u51cf\u8f7b\u670d\u52a1\u7aef\u538b\u529b\uff0c\u4f46\u540c\u65f6\u4e5f\u5e26\u6765\u4e00\u4e2a\u95ee\u9898\uff0c\u4e1a\u52a1\u4f7f\u7528\u7684\u65f6\u5019\u56e0\u4e3a\u65e0\u6cd5\u63a7\u5236\u62c9\u53d6\u9891\u7387\uff0c\u4ece\u800c\u5bb9\u6613\u5f62\u6210\u6570\u636e\u79ef\u538b\u6570\u636e\u5904\u7406\u4e0d\u8fc7\u6765\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u5e26\u6d88\u8d39\u4e2d\u6b62/\u7ee7\u7eed\u7684Push\u5ba2\u6237\u7aef\uff1a")," \u5728\u6536\u5230\u4e1a\u52a1\u53cd\u9988\u80fd\u5426\u63a7\u5236Push\u62c9\u53d6\u52a8\u4f5c\u7684\u9700\u6c42\u540e\uff0c\u6211\u4eec\u589e\u52a0\u4e86resumeConsume()/pauseConsume()\u51fd\u6570\u5bf9\uff0c\u8ba9\u4e1a\u52a1\u53ef\u4ee5\u6a21\u62df\u6c34\u4f4d\u7ebf\u63a7\u5236\u673a\u5236\uff0c\u72b6\u6001\u6bd4\u8f83\u7e41\u5fd9\u65f6\u8c03\u7528pauseConsume()\u51fd\u6570\u6765\u4e2d\u6b62Lib\u540e\u53f0\u7684\u6570\u636e\u62c9\u53d6\uff0c\u5728\u72b6\u6001\u6062\u590d\u540e\uff0c\u518d\u8c03\u7528resumeConsume()\u901a\u77e5Lib\u540e\u53f0\u7ee7\u7eed\u62c9\u53d6\u6570\u636e\uff1b")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"Pull\u5ba2\u6237\u7aef\uff1a")," \u6211\u4eec\u540e\u6765\u7248\u672c\u91cc\u589e\u52a0\u4e86Pull\u5ba2\u6237\u7aef\uff0c\u8be5\u5ba2\u6237\u7aef\u6709\u522b\u4e8ePush\u5ba2\u6237\u7aef\uff0c\u662f\u7531\u4e1a\u52a1\u800c\u975eLib\u4e3b\u52a8\u7684\u62c9\u53d6\u6d88\u606f\u5e76\u5bf9\u6570\u636e\u5904\u7406\u7684\u7ed3\u679c\u8fdb\u884c\u6210\u529f\u4e0e\u5426\u7684\u786e\u8ba4\uff0c\u5c06\u6570\u636e\u5904\u7406\u7684\u4e3b\u52a8\u6743\u7559\u7ed9\u4e1a\u52a1\u3002\u8fd9\u6837\u5904\u7406\u540e\uff0c\u867d\u7136\u670d\u52a1\u7aef\u538b\u529b\u6709\u6240\u63d0\u5347\uff0c\u4f46\u4e1a\u52a1\u6d88\u8d39\u65f6\u79ef\u538b\u60c5\u51b5\u53ef\u5927\u5927\u7f13\u89e3\u3002")))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u6570\u636e\u6d88\u8d39\u884c\u4e3a\u652f\u6301\u987a\u5e8f\u548c\u8fc7\u6ee4\u6d88\u8d39\uff1a")," \u5728TubeMQ\u8bbe\u8ba1\u521d\u6211\u4eec\u8003\u8651\u662f\u4e0d\u540c\u4e1a\u52a1\u4f7f\u7528\u4e0d\u540c\u7684Topic\uff0c\u5b9e\u9645\u8fd0\u8425\u4e2d\u6211\u4eec\u53d1\u73b0\u4e0d\u5c11\u4e1a\u52a1\u5b9e\u9645\u4e0a\u662f\u901a\u8fc7\u4ee3\u7406\u6a21\u5f0f\u4e0a\u62a5\u7684\u6570\u636e\uff0c\u6570\u636e\u901a\u8fc7Topic\u4e0b\u7684\u6587\u4ef6ID\u6216\u8005\u8868ID\u5c5e\u6027\u6765\u533a\u5206\uff0c\u4e1a\u52a1\u4e3a\u4e86\u6d88\u8d39\u81ea\u5df1\u7684\u4e00\u4efd\u6570\u636e\u662f\u9700\u8981\u5168\u91cf\u6d88\u8d39\u8be5Topic\u4e0b\u7684\u6240\u6709\u6570\u636e\u3002\u6211\u4eec\u901a\u8fc7tid\u5b57\u6bb5\u652f\u6301\u6307\u5b9a\u5c5e\u6027\u7684\u8fc7\u6ee4\u6d88\u8d39\u6a21\u5f0f\uff0c\u5c06\u6570\u636e\u8fc7\u6ee4\u653e\u5230\u670d\u52a1\u7aef\u6765\u505a\uff0c\u51cf\u5c11\u51fa\u6d41\u91cf\u4ee5\u53ca\u5ba2\u6237\u7aef\u7684\u6570\u636e\u5904\u7406\u538b\u529b\u3002")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},(0,p.kt)("strong",{parentName:"p"},"\u652f\u6301\u4e1a\u52a1exactly-once\u6d88\u8d39\uff1a")," \u4e3a\u4e86\u89e3\u51b3\u4e1a\u52a1\u5904\u7406\u6570\u636e\u65f6\u9700\u8981\u7cbe\u786e\u56de\u6863\u7684\u9700\u6c42\uff0c\u5728\u5ba2\u6237\u7aef\u7248\u672c\u91cc\u63d0\u4f9b\u4e86\u901a\u8fc7\u5ba2\u6237\u7aef\u91cd\u7f6e\u7cbe\u786eoffset\u529f\u80fd\uff0c\u4e1a\u52a1\u91cd\u542f\u7cfb\u7edf\u65f6\uff0c\u53ea\u9700\u901a\u8fc7\u5ba2\u6237\u7aef\u63d0\u4f9b\u5f85\u56de\u62e8\u65f6\u95f4\u70b9\u7684\u6d88\u8d39\u4e0a\u4e0b\u6587\uff0cTubeMQ\u5373\u53ef\u6309\u7167\u6307\u5b9a\u7684\u7cbe\u786e\u4f4d\u7f6e\u63a5\u7eed\u6d88\u8d39\u3002\u8be5\u7279\u6027\u76ee\u524d\u5df2\u5728Flink\u8fd9\u7c7b\u5b9e\u65f6\u8ba1\u7b97\u6846\u67b6\u4f7f\u7528\uff0c\u4f9d\u6258Flink\u57fa\u4e8echeckpoint\u673a\u5236\u8fdb\u884cexactly-once\u6570\u636e\u5904\u7406\u3002"))),(0,p.kt)("hr",null),(0,p.kt)("a",{href:"#top"},"Back to top"))}k.isMDXComponent=!0},6219:function(e,t,n){t.Z=n.p+"assets/images/store_file-afacb93118082ca4afc7f0ee3176af70.png"},18733:function(e,t,n){t.Z=n.p+"assets/images/store_mem-05a41b24e2b5e68a769c9236d1e063d4.png"},54050:function(e,t,n){t.Z=n.p+"assets/images/sys_structure-8696e2c7dfebcbe30e47b2d99e185485.png"}}]);