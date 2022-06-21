"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4248],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),g=o,d=m["".concat(p,".").concat(g)]||m[g]||s[g]||a;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},86862:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={title:"InLong \u7b80\u4ecb",sidebar_position:1},p=void 0,c={unversionedId:"introduction",id:"version-0.12.0/introduction",title:"InLong \u7b80\u4ecb",description:"InLong(\u5e94\u9f99)\uff0c\u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/zh-CN/docs/0.12.0/introduction",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-0.12.0/introduction.md",tags:[],version:"0.12.0",sidebarPosition:1,frontMatter:{title:"InLong \u7b80\u4ecb",sidebar_position:1},sidebar:"version-0.12.0/tutorialSidebar",next:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/zh-CN/docs/0.12.0/design_and_concept/basic_concept"}},u={},s=[{value:"\u5173\u4e8e InLong",id:"\u5173\u4e8e-inlong",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u67b6\u6784",id:"\u67b6\u6784",level:2},{value:"\u6a21\u5757",id:"\u6a21\u5757",level:2}],m={toc:s};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"InLong(\u5e94\u9f99)\uff0c\u4e2d\u56fd\u795e\u8bdd\u6545\u4e8b\u91cc\u7684\u795e\u517d\uff0c\u5f15\u6d41\u5165\u6d77\uff0c\u501f\u55bb InLong \u7cfb\u7edf\u63d0\u4f9b\u6570\u636e\u63a5\u5165\u80fd\u529b\u3002")),(0,a.kt)("h2",{id:"\u5173\u4e8e-inlong"},"\u5173\u4e8e InLong"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://inlong.apache.org"},"Apache InLong\uff08\u5e94\u9f99\uff09"),"\u662f\u817e\u8baf\u6350\u732e\u7ed9 Apache \u793e\u533a\u7684\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\uff0c\u63d0\u4f9b\u81ea\u52a8\u3001\u5b89\u5168\u3001\u53ef\u9760\u548c\u9ad8\u6027\u80fd\u7684\u6570\u636e\u4f20\u8f93\u80fd\u529b\uff0c\u65b9\u4fbf\u4e1a\u52a1\u6784\u5efa\u57fa\u4e8e\u6d41\u5f0f\u7684\u6570\u636e\u5206\u6790\u3001\u5efa\u6a21\u548c\u5e94\u7528\u3002\nInLong \u9879\u76ee\u539f\u540d TubeMQ \uff0c\u4e13\u6ce8\u4e8e\u9ad8\u6027\u80fd\u3001\u4f4e\u6210\u672c\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\u3002\u4e3a\u4e86\u8fdb\u4e00\u6b65\u91ca\u653e TubeMQ \u5468\u8fb9\u7684\u751f\u6001\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u9879\u76ee\u5347\u7ea7\u4e3a InLong\uff0c\u4e13\u6ce8\u6253\u9020\u4e00\u7ad9\u5f0f\u6d77\u91cf\u6570\u636e\u96c6\u6210\u6846\u67b6\u3002\nApache InLong \u4ee5\u817e\u8baf\u5185\u90e8\u4f7f\u7528\u7684 TDBank \u4e3a\u539f\u578b\uff0c\u4f9d\u6258\u4e07\u4ebf\u7ea7\u522b\u7684\u6570\u636e\u63a5\u5165\u548c\u5904\u7406\u80fd\u529b\uff0c\u6574\u5408\u4e86\u6570\u636e\u91c7\u96c6\u3001\u6c47\u805a\u3001\u5b58\u50a8\u3001\u5206\u62e3\u6570\u636e\u5904\u7406\u5168\u6d41\u7a0b\uff0c\u62e5\u6709\u7b80\u5355\u6613\u7528\u3001\u7075\u6d3b\u6269\u5c55\u3001\u7a33\u5b9a\u53ef\u9760\u7b49\u7279\u6027\u3002"),(0,a.kt)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b80\u5355\u6613\u7528"),(0,a.kt)("p",{parentName:"li"},"\u57fa\u4e8eSaaS\u6a21\u5f0f\u5bf9\u5916\u670d\u52a1\uff0c\u7528\u6237\u53ea\u9700\u8981\u6309\u4e3b\u9898\u53d1\u5e03\u548c\u8ba2\u9605\u6570\u636e\u5373\u53ef\u5b8c\u6210\u6570\u636e\u7684\u4e0a\u62a5\uff0c\u4f20\u8f93\u548c\u5206\u53d1\u5de5\u4f5c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7a33\u5b9a\u53ef\u9760"),(0,a.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u6e90\u4e8e\u5b9e\u9645\u7684\u7ebf\u4e0a\u7cfb\u7edf\uff0c\u670d\u52a1\u4e0a\u5341\u4e07\u4ebf\u7ea7\u7684\u9ad8\u6027\u80fd\u53ca\u4e0a\u5343\u4ebf\u7ea7\u7684\u9ad8\u53ef\u9760\u6570\u636e\u6570\u636e\u6d41\u91cf\uff0c\u7cfb\u7edf\u7a33\u5b9a\u53ef\u9760")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u529f\u80fd\u5b8c\u5584"),(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u5404\u79cd\u7c7b\u578b\u7684\u6570\u636e\u63a5\u5165\u65b9\u5f0f\uff0c\u591a\u79cd\u4e0d\u540c\u7c7b\u578b\u7684MQ\u96c6\u6210\uff0c\u4ee5\u53ca\u57fa\u4e8e\u914d\u7f6e\u89c4\u5219\u7684\u5b9e\u65f6\u6570\u636eETL\u548c\u6570\u636e\u5206\u62e3\u843d\u5730\uff0c\u5e76\u652f\u6301\u4ee5\u53ef\u63d2\u62d4\u65b9\u5f0f\u6269\u5c55\u7cfb\u7edf\u80fd\u529b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u96c6\u6210"),(0,a.kt)("p",{parentName:"li"},"\u652f\u6301\u7edf\u4e00\u7684\u7cfb\u7edf\u76d1\u63a7\u3001\u544a\u8b66\uff0c\u4ee5\u53ca\u7ec6\u7c92\u5ea6\u7684\u6570\u636e\u6307\u6807\u5448\u73b0\uff0c\u5bf9\u4e8e\u7ba1\u9053\u7684\u8fd0\u884c\u60c5\u51b5\uff0c\u4ee5\u6570\u636e\u4e3b\u9898\u4e3a\u6838\u5fc3\u7684\u6570\u636e\u8fd0\u8425\u60c5\u51b5\uff0c\u6c47\u603b\u5728\u7edf\u4e00\u7684\u6570\u636e\u6307\u6807\u5e73\u53f0\uff0c\u5e76\u652f\u6301\u901a\u8fc7\u4e1a\u52a1\u8bbe\u7f6e\u7684\u544a\u8b66\u4fe1\u606f\u8fdb\u884c\u5f02\u5e38\u544a\u8b66\u63d0\u9192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7075\u6d3b\u6269\u5c55"),(0,a.kt)("p",{parentName:"li"},"\u5168\u94fe\u6761\u4e0a\u7684\u5404\u4e2a\u6a21\u5757\u57fa\u4e8e\u534f\u8bae\u4ee5\u53ef\u63d2\u62d4\u65b9\u5f0f\u7ec4\u6210\u670d\u52a1\uff0c\u4e1a\u52a1\u53ef\u6839\u636e\u81ea\u8eab\u9700\u8981\u8fdb\u884c\u7ec4\u4ef6\u66ff\u6362\u548c\u529f\u80fd\u6269\u5c55"))),(0,a.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,a.kt)("img",{src:"/img/inlong-structure-zh.png",align:"center",alt:"Apache InLong"}),(0,a.kt)("h2",{id:"\u6a21\u5757"},"\u6a21\u5757"),(0,a.kt)("p",null,"Apache InLong \u670d\u52a1\u4e8e\u6570\u636e\u91c7\u96c6\u5230\u843d\u5730\u7684\u6574\u4e2a\u751f\u547d\u5468\u671f\uff0c\u6309\u6570\u636e\u7684\u4e0d\u540c\u9636\u6bb5\u63d0\u4f9b\u4e0d\u540c\u7684\u5904\u7406\u6a21\u5757\uff0c\u4e3b\u8981\u5305\u62ec\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inlong-agent"),"\uff0c\u6570\u636e\u91c7\u96c6 Agent\uff0c\u652f\u6301\u4ece\u6307\u5b9a\u76ee\u5f55\u6216\u6587\u4ef6\u8bfb\u53d6\u5e38\u89c4\u65e5\u5fd7\u3001\u9010\u6761\u4e0a\u62a5\u3002\u540e\u7eed\u4e5f\u5c06\u6269\u5c55 DB \u91c7\u96c6\u7b49\u80fd\u529b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inlong-dataproxy"),"\uff0c\u4e00\u4e2a\u57fa\u4e8e Flume-ng \u7684 Proxy \u7ec4\u4ef6\uff0c\u652f\u6301\u6570\u636e\u53d1\u9001\u963b\u585e\u548c\u843d\u76d8\u91cd\u53d1\uff0c\u62e5\u6709\u5c06\u63a5\u6536\u5230\u7684\u6570\u636e\u8f6c\u53d1\u5230\u4e0d\u540c MQ\uff08\u6d88\u606f\u961f\u5217\uff09\u7684\u80fd\u529b\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inlong-tubemq"),"\uff0c\u817e\u8baf\u81ea\u7814\u7684\u6d88\u606f\u961f\u5217\u670d\u52a1\uff0c\u4e13\u6ce8\u4e8e\u5927\u6570\u636e\u573a\u666f\u4e0b\u6d77\u91cf\u6570\u636e\u7684\u9ad8\u6027\u80fd\u5b58\u50a8\u548c\u4f20\u8f93\uff0c\u5728\u6d77\u91cf\u5b9e\u8df5\u548c\u4f4e\u6210\u672c\u65b9\u9762\u6709\u7740\u826f\u597d\u7684\u6838\u5fc3\u4f18\u52bf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inlong-sort"),"\uff0c\u5bf9\u4ece\u4e0d\u540c\u7684 MQ \u6d88\u8d39\u5230\u7684\u6570\u636e\u8fdb\u884c ETL \u5904\u7406\uff0c\u7136\u540e\u6c47\u805a\u5e76\u5199\u5165 Hive\u3001ClickHouse\u3001Hbase\u3001Iceberg \u7b49\u5b58\u50a8\u7cfb\u7edf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inlong-manager"),"\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u6570\u636e\u670d\u52a1\u7ba1\u63a7\u80fd\u529b\uff0c\u5305\u62ec\u5143\u6570\u636e\u3001\u4efb\u52a1\u6d41\u3001\u6743\u9650\uff0cOpenAPI\xa0\u7b49\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"inlong-website"),"\uff0c\u7528\u4e8e\u7ba1\u7406\u6570\u636e\u63a5\u5165\u7684\u524d\u7aef\u9875\u9762\uff0c\u7b80\u5316\u6574\u4e2a InLong \u7ba1\u63a7\u5e73\u53f0\u7684\u4f7f\u7528\u3002")))}g.isMDXComponent=!0}}]);