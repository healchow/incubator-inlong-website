"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[4727],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19857:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={title:"Docker \u90e8\u7f72",sidebar_position:2},p=void 0,c={unversionedId:"deployment/docker",id:"version-1.1.0/deployment/docker",title:"Docker \u90e8\u7f72",description:"\u901a\u8fc7Docker Compose\u90e8\u7f72InLong, \u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.1.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/zh-CN/docs/deployment/docker",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.1.0/deployment/docker.md",tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{title:"Docker \u90e8\u7f72",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/deployment/standalone"},next:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/k8s"}},u={},s=[{value:"\u7f16\u8bd1",id:"\u7f16\u8bd1",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u6ce8\u518c\u7ec4\u4ef6",id:"\u6ce8\u518c\u7ec4\u4ef6",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",level:2}],d={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7Docker Compose\u90e8\u7f72InLong, \u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u6ce8\u610f\uff1aDocker \u90e8\u7f72\u9ed8\u8ba4\u6d88\u606f\u961f\u5217\u670d\u52a1\u4f7f\u7528\u7684\u662f Apache Pulsar")),(0,a.kt)("p",null,"\u51c6\u5907\u6761\u4ef6:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,a.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,a.kt)("h2",{id:"\u7f16\u8bd1"},"\u7f16\u8bd1"),(0,a.kt)("p",null,"\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/quick_start/how_to_build"},"\u5982\u4f55\u7f16\u8bd1"),"."),(0,a.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,a.kt)("p",null,"\u542f\u52a8\u6240\u6709\u7ec4\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd docker/docker-compose\ndocker-compose up -d\n")),(0,a.kt)("h2",{id:"\u6ce8\u518c\u7ec4\u4ef6"},"\u6ce8\u518c\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DataProxy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n   "name": "default_dataproxy",\n   "type": "DATA_PROXY",\n   "ip": "dataproxy",\n   "port": 46801,\n   "mqSetName": "default_set_name",\n   "inCharges": "admin",\n   "creator": "admin"\n}\n\'\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pulsar")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl --header "Content-Type: application/json" --request POST http://localhost:8083/api/inlong/manager/openapi/cluster/save --data \'\n{\n        "name": "pulsar_cluster",\n        "type": "PULSAR",\n        "url": "pulsar://pulsar:6650",\n        "token": "null",\n        "mqSetName": "default_set_name",\n        "extParams": "{\\"pulsar_adminUrl\\": \\"http://pulsar:8080\\"}",\n        "inCharges": "admin",\n        "creator": "admin"\n}\'\n')),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,a.kt)("h2",{id:"\u9500\u6bc1"},"\u9500\u6bc1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose down\n")))}m.isMDXComponent=!0}}]);