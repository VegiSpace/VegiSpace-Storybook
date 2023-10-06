"use strict";(self.webpackChunkvegan_space=self.webpackChunkvegan_space||[]).push([[195],{"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const widthStyles=styled_components_browser_esm.iv`
  ${_ref=>{let{width}=_ref;return"full"===width&&styled_components_browser_esm.iv`
      width: 328px;
    `}}
  ${_ref2=>{let{width}=_ref2;return"half"===width&&styled_components_browser_esm.iv`
      width: 149px;
    `}}
      ${_ref3=>{let{width}=_ref3;return"mini"===width&&styled_components_browser_esm.iv`
      width: 104px;
    `}}
`,errorStyles=styled_components_browser_esm.iv`
  ${_ref4=>{let{error}=_ref4;return error&&styled_components_browser_esm.iv`
      border-color: red;
      color: red;
      &::placeholder {
        color: red;
      }
    `}}

  ${_ref5=>{let{error}=_ref5;return!error&&styled_components_browser_esm.iv`
      border-color: #717171;
    `}}
`,StyledWrapper=styled_components_browser_esm.ZP.div``,StyledContainer=styled_components_browser_esm.ZP.div`
  /*공통 스타일*/
  height: 34px;
  border: 0.5px solid;

  padding: 8px 12px;
  ${errorStyles}
  ${widthStyles}
`,StyledLabel=styled_components_browser_esm.ZP.label`
  color: black;
  font-size: 10px;
  margin-bottom: 5px;
`,StyledInput=styled_components_browser_esm.ZP.input`
  /*공통 스타일*/
  box-sizing: border-box;
  color: black;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  ${errorStyles}
`,InputWrapper=_ref6=>{let{error,width,label,...props}=_ref6;return(0,jsx_runtime.jsxs)(StyledWrapper,{children:[(0,jsx_runtime.jsxs)(StyledLabel,{children:["* ",label]}),(0,jsx_runtime.jsx)(StyledContainer,{error,width,children:(0,jsx_runtime.jsx)(Input,{error,...props})})]})};InputWrapper.displayName="InputWrapper";const Input=_ref7=>{let{placeholder,type,value,error,name,id}=_ref7;return(0,jsx_runtime.jsx)(StyledInput,{error,placeholder,type,value,name,id})};Input.displayName="Input";try{InputWrapper.displayName="InputWrapper",InputWrapper.__docgenInfo={description:"",displayName:"InputWrapper",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | number"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Input/Input.tsx#InputWrapper"]={docgenInfo:InputWrapper.__docgenInfo,name:"InputWrapper",path:"src/components/Input/Input.tsx#InputWrapper"})}catch(__react_docgen_typescript_loader_error){}const Input_stories={title:"Input",args:{label:"항목 이름",placeholder:"배경 글자"}},Primary={render:args=>(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(InputWrapper,{...args})}),args:{error:!0,width:"full",type:"password",value:"입력값"},argTypes:{error:{control:"boolean"},width:{control:"inline-radio",options:["full","half","mini"]},type:{control:"inline-radio",options:["password","text"]}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: (args: InputWrapperProps) => <>\n      <InputWrapper {...args} />\n    </>,\n  args: {\n    error: true,\n    width: "full",\n    type: "password",\n    value: "입력값"\n  },\n  argTypes: {\n    error: {\n      control: "boolean"\n    },\n    width: {\n      control: "inline-radio",\n      options: ["full", "half", "mini"]\n    },\n    type: {\n      control: "inline-radio",\n      options: ["password", "text"]\n    }\n  }\n}',...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);
//# sourceMappingURL=components-Input-Input-stories.1c7b2e27.iframe.bundle.js.map