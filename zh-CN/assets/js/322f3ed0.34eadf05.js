"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9196],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(b,i(i({ref:n},p),{},{components:t})):o.createElement(b,i({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},65910:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const a={title:"Dashboard \u63d2\u4ef6",sidebar_position:4},i=void 0,l={unversionedId:"design_and_concept/how_to_write_plugin_dashboard",id:"design_and_concept/how_to_write_plugin_dashboard",title:"Dashboard \u63d2\u4ef6",description:"\u603b\u89c8",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/design_and_concept/how_to_write_plugin_dashboard.md",sourceDirName:"design_and_concept",slug:"/design_and_concept/how_to_write_plugin_dashboard",permalink:"/zh-CN/docs/next/design_and_concept/how_to_write_plugin_dashboard",draft:!1,editUrl:"https://github.com/apache/inlong-website/edit/master/docs/design_and_concept/how_to_write_plugin_dashboard.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Dashboard \u63d2\u4ef6",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Sort \u63d2\u4ef6",permalink:"/zh-CN/docs/next/design_and_concept/how_to_extend_data_node_for_sort"},next:{title:"Manager \u63d2\u4ef6",permalink:"/zh-CN/docs/next/design_and_concept/how_to_extend_data_node_for_manager"}},d={},s=[{value:"\u603b\u89c8",id:"\u603b\u89c8",level:2},{value:"\u96c6\u6210\u65b0\u7684 Load Node \u5230 InLong Dashboard \u7684\u4e3b\u6d41\u7a0b",id:"\u96c6\u6210\u65b0\u7684-load-node-\u5230-inlong-dashboard-\u7684\u4e3b\u6d41\u7a0b",level:2}],p={toc:s};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u603b\u89c8"},"\u603b\u89c8"),(0,r.kt)("p",null,"\u672c\u6587\u9762\u5411 InLong Dashboard \u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\uff0c\u5c1d\u8bd5\u5c3d\u53ef\u80fd\u5168\u9762\u5730\u9610\u8ff0\u5f00\u53d1\u4e00\u4e2a Dashboard \u63d2\u4ef6\u6240\u7ecf\u8fc7\u7684\u5386\u7a0b\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u5feb\u901f\u65b0\u589e\u4e00\u4e2a Load Node\uff0c\u8ba9\u63d2\u4ef6\u5f00\u53d1\u53d8\u5f97\u7b80\u5355\u3002\nInLong Dashboard \u672c\u8eab\u4f5c\u4e3a\u524d\u7aef\u63a7\u5236\u53f0\uff0c\u91c7\u7528 React \u6846\u67b6\u6784\u5efa\u3002"),(0,r.kt)("h2",{id:"\u96c6\u6210\u65b0\u7684-load-node-\u5230-inlong-dashboard-\u7684\u4e3b\u6d41\u7a0b"},"\u96c6\u6210\u65b0\u7684 Load Node \u5230 InLong Dashboard \u7684\u4e3b\u6d41\u7a0b"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"inlong-dashboard/src/components/MetaData")," \u76ee\u5f55\u4e0b\uff0c\u65b0\u5efa\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageExampleNode.tsx")," \u6587\u4ef6\uff0c\u540c\u65f6\u8bb2\u8be5\u6587\u4ef6\u5728\u5f53\u524d\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\u5185\u90e8\u8fdb\u884c\u5bfc\u51fa\uff08\u53ef\u53c2\u8003\u5df2\u6709 LoadNode \u7684\u5199\u6cd5\uff09\uff0c\u8fd9\u6837\u4fbf\u5b8c\u6210\u4e86\u65b0\u589e\u4e00\u79cd\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleNode")," \u7684 LoadNode\uff0c\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u600e\u4e48\u5b9a\u4e49\u8be5 LoadNode \u7684\u5185\u90e8\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u5728 LoadNode \u7684\u5b9a\u4e49\u4e2d\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"import type { GetStorageFormFieldsType, GetStorageColumnsType } from '@/utils/metaData';")," \u6587\u4ef6\u4e2d\u7684\u7c7b\u578b\u58f0\u660e\u67e5\u770b\u6211\u4eec\u7ea6\u5b9a\u7684\u7edf\u4e00\u89c4\u8303\uff0c\u8fd9\u91cc\u6211\u4eec\u5c55\u793a\u4e86\u4e00\u4e2a\u6700\u7b80\u5355\u7684 LoadNode \u5b9a\u4e49\uff08\u91cd\u70b9\u5728\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"--\u5173\u6ce8\u70b9--"),"\u6807\u7b7e\u5185\u90e8\uff09:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { getColsFromFields, GetStorageFormFieldsType } from '@/utils/metaData';\nimport { ColumnsType } from 'antd/es/table';\nimport { excludeObject } from '@/utils';\n\nconst getForm: GetStorageFormFieldsType = (\n  type: 'form' | 'col' = 'form',\n  { currentValues, isEdit } = {} as any,\n) => {\n  // -- \u5173\u6ce8\u70b9 Start --\n  const fileds = [\n    {\n      name: 'name',\n      type: 'input',\n      label: 'Name',\n      _inTable: true,\n    },\n    {\n      name: 'sex',\n      type: 'radio',\n      label: 'Sex',\n      initialValue: 'female',\n      props: {\n        options: [\n          {\n            label: 'female',\n            value: 'female',\n          },\n          {\n            label: 'male',\n            value: 'male',\n          },\n        ],\n        disabled: isEdit && [110, 130].includes(currentValues?.status),\n      },\n      _inTable: true,\n    },\n    {\n      name: 'age',\n      type: 'inputnumber',\n      label: 'Age',\n      props: {\n        min: 1,\n        max: 200,\n      },\n    },\n    // -- \u5173\u6ce8\u70b9 End --\n  ];\n  // \u4e0b\u9762\u4e3a\u901a\u7528\u7684 return\n  return type === 'col'\n    ? getColsFromFields(fileds)\n    : fileds.map(item => excludeObject(['_inTable'], item));\n};\n// \u4e0b\u9762\u4e3a\u901a\u7528\u7684 export\nconst tableColumns = getForm('col') as ColumnsType;\n\nexport const StorageExampleNode = {\n  getForm,\n  tableColumns,\n};\n")),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5b9a\u4e49\u4e86\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"ExampleNode")," \u7684 LoadNode\uff0c\u5b83\u7531 name, sex, age \u4e09\u4e2a\u5b57\u6bb5\u6784\u6210\uff0c\u5b57\u6bb5\u540d\u5bf9\u5e94\u4e86 name \u5c5e\u6027\uff08\u4e0e manager \u4ea4\u4e92\u7684 API \u63a5\u53e3\u5b57\u6bb5\uff09\uff0ctype \u5c5e\u6027\u8868\u793a\u524d\u7aef\u9875\u9762\u4e2d\u5c55\u793a\u7684\u8f93\u5165\u8868\u5355\uff0c\u901a\u5e38\u5305\u542b input, inputnumber, radio, select \u7b49\u591a\u79cd\u5f62\u5f0f\uff0c\u66f4\u591a\u7684\u590d\u6742\u5c55\u793a\u5f62\u5f0f\u6216\u6574\u4e2a\u5bf9\u8c61\u7684\u5b8c\u6574\u5b9a\u4e49\u90fd\u53ef\u901a\u8fc7 ts \u7c7b\u578b\u63cf\u8ff0\u83b7\u5f97\u3002"))}c.isMDXComponent=!0}}]);