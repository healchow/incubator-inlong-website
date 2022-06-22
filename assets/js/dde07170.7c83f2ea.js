"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6314],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const i={title:"Parse InLongMsg",sidebar_position:1},a=void 0,s={unversionedId:"development/inlong_msg",id:"version-1.0.0/development/inlong_msg",title:"Parse InLongMsg",description:"Overview",source:"@site/versioned_docs/version-1.0.0/development/inlong_msg.md",sourceDirName:"development",slug:"/development/inlong_msg",permalink:"/docs/1.0.0/development/inlong_msg",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/versioned_docs/version-1.0.0/development/inlong_msg.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{title:"Parse InLongMsg",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Usage Manual",permalink:"/docs/1.0.0/user_guide/user_manual"},next:{title:"User Management",permalink:"/docs/1.0.0/administration/user_management"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Dependency",id:"dependency",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"If you consume data directly from a message queue (InLong TubeMQ or Pulsar), you need to parse ",(0,o.kt)("inlineCode",{parentName:"p"},"InLongMsg")," first. Origin data can be parsed in the following ways."),(0,o.kt)("h2",{id:"dependency"},"Dependency"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Maven Dependency")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"<dependency>\n        <groupId>org.apache.inlong</groupId>\n        <artifactId>inlong-common</artifactId>\n        <version>inlong_version</version>\n</dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add Parse Method")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public static List<byte[]> parserInLongMsg(byte[] bytes) {\n    List<byte[]> originalContentByteList = new ArrayList<>();\n    InLongMsg inLongMsg = InLongMsg.parseFrom(bytes);\n    Set<String> attrs = inLongMsg.getAttrs();\n    if (CollectionUtils.isEmpty(attrs)) {\n        return originalContentByteList;\n    }\n    for (String attr : attrs) {\n        if (attr == null) {\n            continue;\n        }\n        Iterator<byte[]> iterator = inLongMsg.getIterator(attr);\n        if (iterator == null) {\n            continue;\n        }\n        while (iterator.hasNext()) {\n            byte[] bodyBytes = iterator.next();\n            if (bodyBytes == null || bodyBytes.length == 0) {\n                continue;\n            }\n            // Origin data sended by InLong agent\n            originalContentByteList.add(bodyBytes);\n        }\n    }\n    return originalContentByteList;\n}\n")))}d.isMDXComponent=!0}}]);