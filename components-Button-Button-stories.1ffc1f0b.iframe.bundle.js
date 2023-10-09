"use strict";(self.webpackChunkvegi_space=self.webpackChunkvegi_space||[]).push([[747],{"./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectSpread2}})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:function(){return _objectWithoutProperties}})},"./src/components/Button/Button.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mini:function(){return Button_stories_Mini},Primary:function(){return Primary},Secondary:function(){return Button_stories_Secondary},Text:function(){return Button_stories_Text},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Button_stories}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,_templateObject13,_templateObject14,_templateObject15,_templateObject16,_templateObject17,_templateObject18,_templateObject19,_templateObject20,_templateObject21,_templateObject22,_templateObject23,_templateObject24,_templateObject25,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3,_Mini$parameters,_Mini$parameters2,_Mini$parameters2$doc,_Text$parameters,_Text$parameters2,_Text$parameters2$doc,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js")),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),options=__webpack_require__("./src/styles/options/index.tsx"),DefaultStyles=(0,styled_components_browser_esm.iv)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  border: none;\n  justify-content: center;\n  align-items: center;\n"]))),ColorStyles=(0,styled_components_browser_esm.iv)(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  ","\n\n  ","\n\n      ","\n\n\n              ","\n"])),(function(_ref){return"green"===_ref.color&&(0,styled_components_browser_esm.iv)(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),options.O.neutral[0],options.O.primary[300])}),(function(_ref2){return"black"===_ref2.color&&(0,styled_components_browser_esm.iv)(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),options.O.primary[300],options.O.neutral[1e3])}),(function(_ref3){return"white"===_ref3.color&&(0,styled_components_browser_esm.iv)(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),options.O.neutral[1e3],options.O.neutral[0])}),(function(_ref4){return"yellow"===_ref4.color&&(0,styled_components_browser_esm.iv)(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),options.O.neutral[1e3],options.O.teritary[25])})),DisabledStyles=(0,styled_components_browser_esm.iv)(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n  ","\n\n  ","\n\n\n              ","\n"])),(function(_ref5){var color=_ref5.color,disabled=_ref5.disabled;return"green"===color&&disabled&&(0,styled_components_browser_esm.iv)(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),options.O.primary[25],options.O.primary[100])}),(function(_ref6){var color=_ref6.color,disabled=_ref6.disabled;return"black"===color&&disabled&&(0,styled_components_browser_esm.iv)(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n      background-color: ",";\n    "])),options.O.primary[25],options.O.grey[500])}),(function(_ref7){return"yellow"===_ref7.color&&(0,styled_components_browser_esm.iv)(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n      color: black;\n      background-color: ",";\n    "])),options.O.teritary[25])})),BorderStyles=(0,styled_components_browser_esm.iv)(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n  ","\n\n  ","\n"])),(function(_ref8){return"square"===_ref8.border&&(0,styled_components_browser_esm.iv)(_templateObject12||(_templateObject12=(0,taggedTemplateLiteral.Z)(["\n      border-radius: ",";\n    "])),options.E.square)}),(function(_ref9){return"round"===_ref9.border&&(0,styled_components_browser_esm.iv)(_templateObject13||(_templateObject13=(0,taggedTemplateLiteral.Z)(["\n      border-radius: ",";\n    "])),options.E.round)})),HeightStyles=(0,styled_components_browser_esm.iv)(_templateObject14||(_templateObject14=(0,taggedTemplateLiteral.Z)(["\n  ","\n\n  ","\n"])),(function(_ref10){return 36===_ref10.height&&(0,styled_components_browser_esm.iv)(_templateObject15||(_templateObject15=(0,taggedTemplateLiteral.Z)(["\n      height: 36px;\n    "])))}),(function(_ref11){return 48===_ref11.height&&(0,styled_components_browser_esm.iv)(_templateObject16||(_templateObject16=(0,taggedTemplateLiteral.Z)(["\n      height: 48px;\n    "])))})),TextColorStyles=(0,styled_components_browser_esm.iv)(_templateObject17||(_templateObject17=(0,taggedTemplateLiteral.Z)(["\n  ","\n\n  ","\n\n      ","\n\n\n              ",";\n"])),(function(_ref12){return"green"===_ref12.color&&(0,styled_components_browser_esm.iv)(_templateObject18||(_templateObject18=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n    "])),options.O.primary[300])}),(function(_ref13){return"black"===_ref13.color&&(0,styled_components_browser_esm.iv)(_templateObject19||(_templateObject19=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n    "])),options.O.neutral[1e3])}),(function(_ref14){return"white"===_ref14.color&&(0,styled_components_browser_esm.iv)(_templateObject20||(_templateObject20=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n    "])),options.O.neutral[0])}),(function(_ref15){return"yellow"===_ref15.color&&(0,styled_components_browser_esm.iv)(_templateObject21||(_templateObject21=(0,taggedTemplateLiteral.Z)(["\n      color: ",";\n    "])),options.O.teritary[25])})),Default=styled_components_browser_esm.ZP.button(_templateObject22||(_templateObject22=(0,taggedTemplateLiteral.Z)(["\n  /*공통 스타일*/\n  border-radius: ",";\n  width: 32.4rem;\n  height: 4.8rem;\n  ","\n  ","\n  ","\n"])),(function(_ref16){return _ref16.theme.borderRadius.normal}),DefaultStyles,ColorStyles,DisabledStyles),Secondary=styled_components_browser_esm.ZP.button(_templateObject23||(_templateObject23=(0,taggedTemplateLiteral.Z)(["\n  /*공통 스타일*/\n\n  width: 324px;\n  height: 48px;\n  ","\n  ","\n  ","\n"])),DefaultStyles,ColorStyles,BorderStyles),Mini=styled_components_browser_esm.ZP.button(_templateObject24||(_templateObject24=(0,taggedTemplateLiteral.Z)(["\n  width: 140px;\n  ","\n  ","\n  ","\n  ","\n"])),DefaultStyles,ColorStyles,HeightStyles,BorderStyles),Text=styled_components_browser_esm.ZP.button(_templateObject25||(_templateObject25=(0,taggedTemplateLiteral.Z)(["\n  text-decoration: underline;\n  ","\n  ","\n"])),DefaultStyles,TextColorStyles),Typo=__webpack_require__("./src/components/Typo/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["color","disabled","children"],_excluded2=["border","color","children"],_excluded3=["color","border","height","children"],_excluded4=["color","children"],ButtonDefault=function ButtonDefault(_ref){var color=_ref.color,disabled=_ref.disabled,children=_ref.children;(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(Default,{disabled:disabled,color:color,children:(0,jsx_runtime.jsx)(Typo.J.SubTitle2,{children:children})})},ButtonSecondary=function ButtonSecondary(_ref2){var border=_ref2.border,color=_ref2.color,children=_ref2.children;(0,objectWithoutProperties.Z)(_ref2,_excluded2);return(0,jsx_runtime.jsx)(Secondary,{border:border,color:color,children:(0,jsx_runtime.jsx)(Typo.J.Body3,{children:children})})},ButtonMini=function ButtonMini(_ref3){var color=_ref3.color,border=_ref3.border,height=_ref3.height,children=_ref3.children;(0,objectWithoutProperties.Z)(_ref3,_excluded3);return(0,jsx_runtime.jsx)(Mini,{height:height,color:color,border:border,children:children})},ButtonText=function ButtonText(_ref4){var color=_ref4.color,children=_ref4.children;(0,objectWithoutProperties.Z)(_ref4,_excluded4);return(0,jsx_runtime.jsx)(Text,{color:color,children:(0,jsx_runtime.jsx)(Typo.J.Body1,{children:children})})},Button_Default=ButtonDefault,Button_Secondary=ButtonSecondary,Button_Mini=ButtonMini,Button_Text=ButtonText;try{ButtonDefault.displayName="ButtonDefault",ButtonDefault.__docgenInfo={description:"",displayName:"ButtonDefault",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonDefault"]={docgenInfo:ButtonDefault.__docgenInfo,name:"ButtonDefault",path:"src/components/Button/Button.tsx#ButtonDefault"})}catch(__react_docgen_typescript_loader_error){}try{ButtonSecondary.displayName="ButtonSecondary",ButtonSecondary.__docgenInfo={description:"",displayName:"ButtonSecondary",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"black"'},{value:'"white"'},{value:'"yellow"'}]}},border:{defaultValue:null,description:"",name:"border",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"round"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonSecondary"]={docgenInfo:ButtonSecondary.__docgenInfo,name:"ButtonSecondary",path:"src/components/Button/Button.tsx#ButtonSecondary"})}catch(__react_docgen_typescript_loader_error){}try{ButtonMini.displayName="ButtonMini",ButtonMini.__docgenInfo={description:"",displayName:"ButtonMini",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"black"'},{value:'"white"'},{value:'"yellow"'}]}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"enum",value:[{value:"48"},{value:"36"}]}},border:{defaultValue:null,description:"",name:"border",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"round"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonMini"]={docgenInfo:ButtonMini.__docgenInfo,name:"ButtonMini",path:"src/components/Button/Button.tsx#ButtonMini"})}catch(__react_docgen_typescript_loader_error){}try{ButtonText.displayName="ButtonText",ButtonText.__docgenInfo={description:"",displayName:"ButtonText",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"green"'},{value:'"black"'},{value:'"white"'},{value:'"yellow"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonText"]={docgenInfo:ButtonText.__docgenInfo,name:"ButtonText",path:"src/components/Button/Button.tsx#ButtonText"})}catch(__react_docgen_typescript_loader_error){}var Button_stories={title:"Button",tags:["autodocs"],args:{children:"Click Me!",color:"green"},argTypes:{children:{description:"부모인 버튼 태그 내부의 하위컴포넌트",table:{category:"Button",type:{summary:"string"}}},disabled:{description:"버튼 기능 비활성화 상태 지정",table:{category:"Button.Default",type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},color:{description:"버튼 색상 지정",table:{category:"Button",type:{summary:"green | black | white | yellow"}},options:["white","yellow","green"],control:{type:"select"}},border:{description:"버튼 둥금 여부 지정",table:{category:["Button.Secondary","Button.Mini"],type:{summary:"square | round"}},options:["square","round"],control:{type:"select"}},height:{description:"버튼 높이 지정",table:{category:"Button.Mini",type:{summary:"36 | 48"}},options:[36,48],control:{type:"select"}}}},Primary={render:function render(args){return(0,jsx_runtime.jsx)(Button_Default,(0,objectSpread2.Z)({},args))},args:{color:"green",disabled:!1},argTypes:{color:{control:"select",options:["green","black"]},disabled:{control:{type:"boolean"}}}},Button_stories_Secondary={render:function render(args){return(0,jsx_runtime.jsx)(Button_Secondary,(0,objectSpread2.Z)({},args))},args:{border:"square",color:"green"},argTypes:{border:{control:"select",options:["square","round"]},color:{control:"select",options:["white","yellow","green"]}}},Button_stories_Mini={render:function render(args){return(0,jsx_runtime.jsx)(Button_Mini,(0,objectSpread2.Z)({},args))},args:{color:"green",height:48,border:"round"},argTypes:{color:{control:"select",options:["white","green"]},height:{control:"select",options:[36,48]},border:{control:"select",options:["square","round"]}}},Button_stories_Text={render:function render(args){return(0,jsx_runtime.jsx)(Button_Text,(0,objectSpread2.Z)({},args))},args:{color:"green"},argTypes:{color:{control:"select",options:["white","green","yellow","black"]}}};Primary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Primary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: (args: DefaultProps) => <Button.Default {...args} />,\n  args: {\n    color: "green",\n    disabled: false\n  },\n  argTypes: {\n    color: {\n      control: "select",\n      options: ["green", "black"]\n    },\n    disabled: {\n      control: {\n        type: "boolean"\n      }\n    }\n  }\n}'},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Button_stories_Secondary.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Button_stories_Secondary.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Secondary$parameters=Button_stories_Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: (args: SecondaryProps) => <Button.Secondary {...args} />,\n  args: {\n    border: "square",\n    color: "green"\n  },\n  argTypes: {\n    border: {\n      control: "select",\n      options: ["square", "round"]\n    },\n    color: {\n      control: "select",\n      options: ["white", "yellow", "green"]\n    }\n  }\n}'},null===(_Secondary$parameters2=Button_stories_Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})}),Button_stories_Mini.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Button_stories_Mini.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Mini$parameters=Button_stories_Mini.parameters)||void 0===_Mini$parameters?void 0:_Mini$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: (args: MiniProps) => <Button.Mini {...args} />,\n  args: {\n    color: "green",\n    height: 48,\n    border: "round"\n  },\n  argTypes: {\n    color: {\n      control: "select",\n      options: ["white", "green"]\n    },\n    height: {\n      control: "select",\n      options: [36, 48]\n    },\n    border: {\n      control: "select",\n      options: ["square", "round"]\n    }\n  }\n}'},null===(_Mini$parameters2=Button_stories_Mini.parameters)||void 0===_Mini$parameters2||null===(_Mini$parameters2$doc=_Mini$parameters2.docs)||void 0===_Mini$parameters2$doc?void 0:_Mini$parameters2$doc.source)})}),Button_stories_Text.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Button_stories_Text.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Text$parameters=Button_stories_Text.parameters)||void 0===_Text$parameters?void 0:_Text$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:'{\n  render: (args: TextProps) => <Button.Text {...args} />,\n  args: {\n    color: "green"\n  },\n  argTypes: {\n    color: {\n      control: "select",\n      options: ["white", "green", "yellow", "black"]\n    }\n  }\n}'},null===(_Text$parameters2=Button_stories_Text.parameters)||void 0===_Text$parameters2||null===(_Text$parameters2$doc=_Text$parameters2.docs)||void 0===_Text$parameters2$doc?void 0:_Text$parameters2$doc.source)})});var __namedExportsOrder=["Primary","Secondary","Mini","Text"]},"./src/components/Typo/Typo.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return Typo}});var _templateObject,_templateObject2,_templateObject3,_templateObject4,SubTitle_templateObject,SubTitle_templateObject2,react=__webpack_require__("./node_modules/react/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Title1=(0,react.memo)((function(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(StyledTitle1,{children:children})})),StyledTitle1=styled_components_browser_esm.zo.h1(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: 3.2rem;\n  font-weight: bold;\n"]))),Title2=(0,react.memo)((function(_ref2){var children=_ref2.children;return(0,jsx_runtime.jsx)(StyledTitle2,{children:children})})),StyledTitle2=styled_components_browser_esm.zo.h2(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  font-size: 3rem;\n  font-weight: bold;\n"]))),Title3=(0,react.memo)((function(_ref3){var children=_ref3.children;return(0,jsx_runtime.jsx)(StyledTitle3,{children:children})})),StyledTitle3=styled_components_browser_esm.zo.h3(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: 2.8rem;\n  font-weight: bold;\n"]))),Title4=(0,react.memo)((function(_ref4){var children=_ref4.children;return(0,jsx_runtime.jsx)(StyledTitle4,{children:children})})),StyledTitle4=styled_components_browser_esm.zo.h4(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  font-size: 2.4rem;\n  font-weight: bold;\n"])));try{Title1.displayName="Title1",Title1.__docgenInfo={description:"",displayName:"Title1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title1"]={docgenInfo:Title1.__docgenInfo,name:"Title1",path:"src/components/Typo/Title.tsx#Title1"})}catch(__react_docgen_typescript_loader_error){}try{Title2.displayName="Title2",Title2.__docgenInfo={description:"",displayName:"Title2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title2"]={docgenInfo:Title2.__docgenInfo,name:"Title2",path:"src/components/Typo/Title.tsx#Title2"})}catch(__react_docgen_typescript_loader_error){}try{Title3.displayName="Title3",Title3.__docgenInfo={description:"",displayName:"Title3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title3"]={docgenInfo:Title3.__docgenInfo,name:"Title3",path:"src/components/Typo/Title.tsx#Title3"})}catch(__react_docgen_typescript_loader_error){}try{Title4.displayName="Title4",Title4.__docgenInfo={description:"",displayName:"Title4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title4"]={docgenInfo:Title4.__docgenInfo,name:"Title4",path:"src/components/Typo/Title.tsx#Title4"})}catch(__react_docgen_typescript_loader_error){}var Body_templateObject,Body_templateObject2,Body_templateObject3,Body_templateObject4,_templateObject5,SubTitle1=(0,react.memo)((function(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(StyledSubTitle1,{children:children})})),StyledSubTitle1=styled_components_browser_esm.zo.h4(SubTitle_templateObject||(SubTitle_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: 2rem;\n  font-weight: bold;\n"]))),SubTitle2=(0,react.memo)((function(_ref2){var children=_ref2.children;return(0,jsx_runtime.jsx)(StyledSubTitle2,{children:children})})),StyledSubTitle2=styled_components_browser_esm.zo.h5(SubTitle_templateObject2||(SubTitle_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.8rem;\n  font-weight: bold;\n"])));try{SubTitle1.displayName="SubTitle1",SubTitle1.__docgenInfo={description:"",displayName:"SubTitle1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/SubTitle.tsx#SubTitle1"]={docgenInfo:SubTitle1.__docgenInfo,name:"SubTitle1",path:"src/components/Typo/SubTitle.tsx#SubTitle1"})}catch(__react_docgen_typescript_loader_error){}try{SubTitle2.displayName="SubTitle2",SubTitle2.__docgenInfo={description:"",displayName:"SubTitle2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/SubTitle.tsx#SubTitle2"]={docgenInfo:SubTitle2.__docgenInfo,name:"SubTitle2",path:"src/components/Typo/SubTitle.tsx#SubTitle2"})}catch(__react_docgen_typescript_loader_error){}var Caption_templateObject,Caption_templateObject2,Caption_templateObject3,Caption_templateObject4,Body1=(0,react.memo)((function(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(StyledBody1,{children:children})})),StyledBody1=styled_components_browser_esm.zo.span(Body_templateObject||(Body_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: 2rem;\n  font-weight: normal;\n"]))),Body2=(0,react.memo)((function(_ref2){var children=_ref2.children;return(0,jsx_runtime.jsx)(StyledBody2,{children:children})})),StyledBody2=styled_components_browser_esm.zo.span(Body_templateObject2||(Body_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.8rem;\n  font-weight: normal;\n"]))),Body3=(0,react.memo)((function(_ref3){var children=_ref3.children;return(0,jsx_runtime.jsx)(StyledBody3,{children:children})})),StyledBody3=styled_components_browser_esm.zo.span(Body_templateObject3||(Body_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.6rem;\n  font-weight: normal;\n"]))),Body4=(0,react.memo)((function(_ref4){var children=_ref4.children;return(0,jsx_runtime.jsx)(StyledBody4,{children:children})})),StyledBody4=styled_components_browser_esm.zo.span(Body_templateObject4||(Body_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.4rem;\n  font-weight: normal;\n"]))),Body5=(0,react.memo)((function(_ref5){var children=_ref5.children;return(0,jsx_runtime.jsx)(StyledBody5,{children:children})})),StyledBody5=styled_components_browser_esm.zo.span(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.3rem;\n  font-weight: normal;\n"])));try{Body1.displayName="Body1",Body1.__docgenInfo={description:"",displayName:"Body1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body1"]={docgenInfo:Body1.__docgenInfo,name:"Body1",path:"src/components/Typo/Body.tsx#Body1"})}catch(__react_docgen_typescript_loader_error){}try{Body2.displayName="Body2",Body2.__docgenInfo={description:"",displayName:"Body2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body2"]={docgenInfo:Body2.__docgenInfo,name:"Body2",path:"src/components/Typo/Body.tsx#Body2"})}catch(__react_docgen_typescript_loader_error){}try{Body3.displayName="Body3",Body3.__docgenInfo={description:"",displayName:"Body3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body3"]={docgenInfo:Body3.__docgenInfo,name:"Body3",path:"src/components/Typo/Body.tsx#Body3"})}catch(__react_docgen_typescript_loader_error){}try{Body4.displayName="Body4",Body4.__docgenInfo={description:"",displayName:"Body4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body4"]={docgenInfo:Body4.__docgenInfo,name:"Body4",path:"src/components/Typo/Body.tsx#Body4"})}catch(__react_docgen_typescript_loader_error){}try{Body5.displayName="Body5",Body5.__docgenInfo={description:"",displayName:"Body5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body5"]={docgenInfo:Body5.__docgenInfo,name:"Body5",path:"src/components/Typo/Body.tsx#Body5"})}catch(__react_docgen_typescript_loader_error){}var Caption1=(0,react.memo)((function(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(StyledCaption1,{children:children})})),StyledCaption1=styled_components_browser_esm.zo.span(Caption_templateObject||(Caption_templateObject=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.2rem;\n  font-weight: normal;\n"]))),Caption2=(0,react.memo)((function(_ref2){var children=_ref2.children;return(0,jsx_runtime.jsx)(StyledCaption2,{children:children})})),StyledCaption2=styled_components_browser_esm.zo.span(Caption_templateObject2||(Caption_templateObject2=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1.1rem;\n  font-weight: normal;\n"]))),Caption3=(0,react.memo)((function(_ref3){var children=_ref3.children;return(0,jsx_runtime.jsx)(StyledCaption3,{children:children})})),StyledCaption3=styled_components_browser_esm.zo.span(Caption_templateObject3||(Caption_templateObject3=(0,taggedTemplateLiteral.Z)(["\n  font-size: 1rem;\n  font-weight: normal;\n"]))),Caption4=(0,react.memo)((function(_ref4){var children=_ref4.children;return(0,jsx_runtime.jsx)(StyledCaption4,{children:children})})),StyledCaption4=styled_components_browser_esm.zo.span(Caption_templateObject4||(Caption_templateObject4=(0,taggedTemplateLiteral.Z)(["\n  font-size: 0.8rem;\n  font-weight: normal;\n"])));try{Caption1.displayName="Caption1",Caption1.__docgenInfo={description:"",displayName:"Caption1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption1"]={docgenInfo:Caption1.__docgenInfo,name:"Caption1",path:"src/components/Typo/Caption.tsx#Caption1"})}catch(__react_docgen_typescript_loader_error){}try{Caption2.displayName="Caption2",Caption2.__docgenInfo={description:"",displayName:"Caption2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption2"]={docgenInfo:Caption2.__docgenInfo,name:"Caption2",path:"src/components/Typo/Caption.tsx#Caption2"})}catch(__react_docgen_typescript_loader_error){}try{Caption3.displayName="Caption3",Caption3.__docgenInfo={description:"",displayName:"Caption3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption3"]={docgenInfo:Caption3.__docgenInfo,name:"Caption3",path:"src/components/Typo/Caption.tsx#Caption3"})}catch(__react_docgen_typescript_loader_error){}try{Caption4.displayName="Caption4",Caption4.__docgenInfo={description:"",displayName:"Caption4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption4"]={docgenInfo:Caption4.__docgenInfo,name:"Caption4",path:"src/components/Typo/Caption.tsx#Caption4"})}catch(__react_docgen_typescript_loader_error){}var Typo=function Typo(_ref){var children=_ref.children;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:children})};Typo.Title1=Title1,Typo.Title2=Title2,Typo.Title3=Title3,Typo.Title4=Title4,Typo.SubTitle1=SubTitle1,Typo.SubTitle2=SubTitle2,Typo.Body1=Body1,Typo.Body2=Body2,Typo.Body3=Body3,Typo.Body4=Body4,Typo.Body5=Body5,Typo.Caption1=Caption1,Typo.Caption2=Caption2,Typo.Caption3=Caption3,Typo.Caption4=Caption4;try{Typo.displayName="Typo",Typo.__docgenInfo={description:"",displayName:"Typo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Typo.tsx#Typo"]={docgenInfo:Typo.__docgenInfo,name:"Typo",path:"src/components/Typo/Typo.tsx#Typo"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Typo/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return _Typo__WEBPACK_IMPORTED_MODULE_0__.J}});var _Typo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Typo/Typo.tsx");try{Typo.displayName="Typo",Typo.__docgenInfo={description:"",displayName:"Typo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/index.tsx#Typo"]={docgenInfo:Typo.__docgenInfo,name:"Typo",path:"src/components/Typo/index.tsx#Typo"})}catch(__react_docgen_typescript_loader_error){}}}]);