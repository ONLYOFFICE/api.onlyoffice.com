"use strict";(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[3823],{"./components/combobox/combobox.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("../../node_modules/react/index.js");var _ComboBox__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/combobox/ComboBox.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/ComboBox",component:_ComboBox__WEBPACK_IMPORTED_MODULE_1__.a,parameters:{docs:{}}},Wrapper=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{height:"220px"},children});Wrapper.displayName="Wrapper";const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Wrapper,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ComboBox__WEBPACK_IMPORTED_MODULE_1__.a,{...args,isDefaultMode:!1,fixedDirection:!0,directionY:"both",options:[{key:1,label:"Option 1"},{key:2,label:"Option 2"}],selectedOption:{key:0,label:"Select"}})});Template.displayName="Template";const Default={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Template,{...args}),args:{scaled:!1,options:[{key:1,label:"Open",backgroundColor:"#4781D1",color:"#FFFFFF"},{key:2,label:"Done",backgroundColor:"#444",color:"#FFFFFF"},{key:3,label:"2nd turn",backgroundColor:"#FFFFFF",color:"#555F65",border:"#4781D1"},{key:4,label:"3rd turn",backgroundColor:"#FFFFFF",color:"#555F65",border:"#4781D1"}],selectedOption:{key:0,label:"Select"},dropDownMaxHeight:1500}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Template {...args} />,\n  args: {\n    scaled: false,\n    options: [{\n      key: 1,\n      label: "Open",\n      backgroundColor: "#4781D1",\n      color: "#FFFFFF"\n    }, {\n      key: 2,\n      label: "Done",\n      backgroundColor: "#444",\n      color: "#FFFFFF"\n    }, {\n      key: 3,\n      label: "2nd turn",\n      backgroundColor: "#FFFFFF",\n      color: "#555F65",\n      border: "#4781D1"\n    }, {\n      key: 4,\n      label: "3rd turn",\n      backgroundColor: "#FFFFFF",\n      color: "#555F65",\n      border: "#4781D1"\n    }],\n    selectedOption: {\n      key: 0,\n      label: "Select"\n    },\n    dropDownMaxHeight: 1500\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../node_modules/fast-deep-equal/react.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}}}]);