"use strict";(self.webpackChunkvegan_space=self.webpackChunkvegan_space||[]).push([[747],{"./src/components/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Mini:()=>Button_stories_Mini,Primary:()=>Primary,Secondary:()=>Button_stories_Secondary,Text:()=>Button_stories_Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),options=__webpack_require__("./src/styles/options/index.tsx");const DefaultStyles=styled_components_browser_esm.iv`
  border: none;
  justify-content: center;
  align-items: center;

`,ColorStyles=styled_components_browser_esm.iv`
  ${_ref=>{let{color}=_ref;return"green"===color&&styled_components_browser_esm.iv`
      color: ${options.O.neutral[0]};
      background-color: ${options.O.primary[300]};
    `}}

  ${_ref2=>{let{color}=_ref2;return"black"===color&&styled_components_browser_esm.iv`
      color: ${options.O.primary[300]};
      background-color: ${options.O.neutral[1e3]};
    `}}

      ${_ref3=>{let{color}=_ref3;return"white"===color&&styled_components_browser_esm.iv`
      color: ${options.O.neutral[1e3]};
      background-color: ${options.O.neutral[0]};
    `}}


              ${_ref4=>{let{color}=_ref4;return"yellow"===color&&styled_components_browser_esm.iv`
      color: black;
      background-color: #ffe03f;
    `}}
`,DisabledStyles=styled_components_browser_esm.iv`
  ${_ref5=>{let{color,disabled}=_ref5;return"green"===color&&disabled&&styled_components_browser_esm.iv`
      color: ${options.O.primary[25]};
      background-color: ${options.O.primary[100]};
    `}}

  ${_ref6=>{let{color,disabled}=_ref6;return"black"===color&&disabled&&styled_components_browser_esm.iv`
      color: ${options.O.primary[25]};
      background-color: ${options.O.grey[500]};
    `}}


              ${_ref7=>{let{color}=_ref7;return"yellow"===color&&styled_components_browser_esm.iv`
      color: black;
      background-color:  ${options.O.teritary[25]};
`}}`,BorderStyles=styled_components_browser_esm.iv`
  ${_ref8=>{let{border}=_ref8;return"square"===border&&styled_components_browser_esm.iv`
      border-radius:${options.E.square};
    `}}

  ${_ref9=>{let{border}=_ref9;return"round"===border&&styled_components_browser_esm.iv`
      border-radius: ${options.E.round};
    `}}
`,HeightStyles=styled_components_browser_esm.iv`
  ${_ref10=>{let{height}=_ref10;return 36===height&&styled_components_browser_esm.iv`
      height: 36px;
    `}}

  ${_ref11=>{let{height}=_ref11;return 48===height&&styled_components_browser_esm.iv`
      height: 48px;
    `}}
`,TextColorStyles=styled_components_browser_esm.iv`
  ${_ref12=>{let{color}=_ref12;return"green"===color&&styled_components_browser_esm.iv`
     
      color: ${options.O.primary[300]};
    `}}

  ${_ref13=>{let{color}=_ref13;return"black"===color&&styled_components_browser_esm.iv`
     
      color: ${options.O.neutral[1e3]};
    `}}

      ${_ref14=>{let{color}=_ref14;return"white"===color&&styled_components_browser_esm.iv`
     
      color: ${options.O.neutral[0]};
    `}}


              ${_ref15=>{let{color}=_ref15;return"yellow"===color&&styled_components_browser_esm.iv`
      
    color: ${options.O.teritary[25]}`}};
`,Default=styled_components_browser_esm.ZP.button`
  /*공통 스타일*/
  border-radius: ${_ref16=>{let{theme}=_ref16;return theme.borderRadius.normal}};
  width: 32.4rem;
  height: 4.8rem;
  ${DefaultStyles}
  ${ColorStyles}
  ${DisabledStyles}
`,Secondary=styled_components_browser_esm.ZP.button`
  /*공통 스타일*/

  width: 324px;
  height: 48px;
  ${DefaultStyles}
  ${ColorStyles}
  ${BorderStyles}
`,Mini=styled_components_browser_esm.ZP.button`
  width: 140px;
  ${DefaultStyles}
  ${ColorStyles}
  ${HeightStyles}
  ${BorderStyles}
`,Text=styled_components_browser_esm.ZP.button`
  text-decoration : underline;
  ${DefaultStyles}
  ${TextColorStyles}



`;var Typo_Typo=__webpack_require__("./src/components/Typo/Typo.tsx");try{Typo.displayName="Typo",Typo.__docgenInfo={description:"",displayName:"Typo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/index.tsx#Typo"]={docgenInfo:Typo.__docgenInfo,name:"Typo",path:"src/components/Typo/index.tsx#Typo"})}catch(__react_docgen_typescript_loader_error){}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ButtonDefault=_ref=>{let{color,disabled,children,...props}=_ref;return(0,jsx_runtime.jsx)(Default,{disabled,color,children:(0,jsx_runtime.jsx)(Typo_Typo.J.SubTitle2,{children})})};ButtonDefault.displayName="ButtonDefault";const ButtonSecondary=_ref2=>{let{border,color,children,...props}=_ref2;return(0,jsx_runtime.jsx)(Secondary,{border,color,children:(0,jsx_runtime.jsx)(Typo_Typo.J.Body3,{children})})};ButtonSecondary.displayName="ButtonSecondary";const ButtonMini=_ref3=>{let{color,border,height,children,...props}=_ref3;return(0,jsx_runtime.jsx)(Mini,{height,color,border,children})};ButtonMini.displayName="ButtonMini";const ButtonText=_ref4=>{let{color,children,...props}=_ref4;return(0,jsx_runtime.jsx)(Text,{color,children:(0,jsx_runtime.jsx)(Typo_Typo.J.Body1,{children})})};ButtonText.displayName="ButtonText";try{ButtonDefault.displayName="ButtonDefault",ButtonDefault.__docgenInfo={description:"",displayName:"ButtonDefault",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonDefault"]={docgenInfo:ButtonDefault.__docgenInfo,name:"ButtonDefault",path:"src/components/Button/Button.tsx#ButtonDefault"})}catch(__react_docgen_typescript_loader_error){}try{ButtonSecondary.displayName="ButtonSecondary",ButtonSecondary.__docgenInfo={description:"",displayName:"ButtonSecondary",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"black"'},{value:'"white"'},{value:'"yellow"'}]}},border:{defaultValue:null,description:"",name:"border",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"round"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonSecondary"]={docgenInfo:ButtonSecondary.__docgenInfo,name:"ButtonSecondary",path:"src/components/Button/Button.tsx#ButtonSecondary"})}catch(__react_docgen_typescript_loader_error){}try{ButtonMini.displayName="ButtonMini",ButtonMini.__docgenInfo={description:"",displayName:"ButtonMini",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"green"'},{value:'"black"'},{value:'"white"'},{value:'"yellow"'}]}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"enum",value:[{value:"48"},{value:"36"}]}},border:{defaultValue:null,description:"",name:"border",required:!0,type:{name:"enum",value:[{value:'"square"'},{value:'"round"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonMini"]={docgenInfo:ButtonMini.__docgenInfo,name:"ButtonMini",path:"src/components/Button/Button.tsx#ButtonMini"})}catch(__react_docgen_typescript_loader_error){}try{ButtonText.displayName="ButtonText",ButtonText.__docgenInfo={description:"",displayName:"ButtonText",props:{color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"green"'},{value:'"black"'},{value:'"white"'},{value:'"yellow"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Button/Button.tsx#ButtonText"]={docgenInfo:ButtonText.__docgenInfo,name:"ButtonText",path:"src/components/Button/Button.tsx#ButtonText"})}catch(__react_docgen_typescript_loader_error){}const Button_stories={title:"Button",args:{children:"Click Me!"}},Primary={render:args=>(0,jsx_runtime.jsx)(ButtonDefault,{...args}),args:{color:"green",disabled:!1},argTypes:{color:{control:"inline-radio",options:["green","black"]},disabled:{control:{type:"boolean"}}}},Button_stories_Secondary={render:args=>(0,jsx_runtime.jsx)(ButtonSecondary,{...args}),args:{border:"square",color:"white"},argTypes:{border:{control:"inline-radio",options:["square","round"]},color:{control:"inline-radio",options:["white","yellow","green"]}}},Button_stories_Mini={render:args=>(0,jsx_runtime.jsx)(ButtonMini,{...args}),args:{color:"green",height:48,border:"round"},argTypes:{color:{control:"inline-radio",options:["white","green"]},height:{control:"inline-radio",options:[36,48]},border:{control:"inline-radio",options:["square","round"]}}},Button_stories_Text={render:args=>(0,jsx_runtime.jsx)(ButtonText,{...args}),args:{color:"green"},argTypes:{color:{control:"inline-radio",options:["white","green","yellow","black"]}}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: (args: DefaultProps) => <ButtonDefault {...args} />,\n  args: {\n    color: "green",\n    disabled: false\n  },\n  argTypes: {\n    color: {\n      control: "inline-radio",\n      options: ["green", "black"]\n    },\n    disabled: {\n      control: {\n        type: "boolean"\n      }\n    }\n  }\n}',...Primary.parameters?.docs?.source}}},Button_stories_Secondary.parameters={...Button_stories_Secondary.parameters,docs:{...Button_stories_Secondary.parameters?.docs,source:{originalSource:'{\n  render: (args: SecondaryProps) => <ButtonSecondary {...args} />,\n  args: {\n    border: "square",\n    color: "white"\n  },\n  argTypes: {\n    border: {\n      control: "inline-radio",\n      options: ["square", "round"]\n    },\n    color: {\n      control: "inline-radio",\n      options: ["white", "yellow", "green"]\n    }\n  }\n}',...Button_stories_Secondary.parameters?.docs?.source}}},Button_stories_Mini.parameters={...Button_stories_Mini.parameters,docs:{...Button_stories_Mini.parameters?.docs,source:{originalSource:'{\n  render: (args: MiniProps) => <ButtonMini {...args} />,\n  args: {\n    color: "green",\n    height: 48,\n    border: "round"\n  },\n  argTypes: {\n    color: {\n      control: "inline-radio",\n      options: ["white", "green"]\n    },\n    height: {\n      control: "inline-radio",\n      options: [36, 48]\n    },\n    border: {\n      control: "inline-radio",\n      options: ["square", "round"]\n    }\n  }\n}',...Button_stories_Mini.parameters?.docs?.source}}},Button_stories_Text.parameters={...Button_stories_Text.parameters,docs:{...Button_stories_Text.parameters?.docs,source:{originalSource:'{\n  render: (args: TextProps) => <ButtonText {...args} />,\n  args: {\n    color: "green"\n  },\n  argTypes: {\n    color: {\n      control: "inline-radio",\n      options: ["white", "green", "yellow", "black"]\n    }\n  }\n}',...Button_stories_Text.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Mini","Text"]},"./src/components/Typo/Typo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Typo});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Title1=(0,react.memo)((_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(StyledTitle1,{children})})),StyledTitle1=styled_components_browser_esm.zo.h1`
  font-size: 3.2rem;
  font-weight: bold;
`,Title2=(0,react.memo)((_ref2=>{let{children}=_ref2;return(0,jsx_runtime.jsx)(StyledTitle2,{children})})),StyledTitle2=styled_components_browser_esm.zo.h2`
  font-size: 3rem;
  font-weight: bold;
`,Title3=(0,react.memo)((_ref3=>{let{children}=_ref3;return(0,jsx_runtime.jsx)(StyledTitle3,{children})})),StyledTitle3=styled_components_browser_esm.zo.h3`
  font-size: 2.8rem;
  font-weight: bold;
`,Title4=(0,react.memo)((_ref4=>{let{children}=_ref4;return(0,jsx_runtime.jsx)(StyledTitle4,{children})})),StyledTitle4=styled_components_browser_esm.zo.h4`
  font-size: 2.4rem;
  font-weight: bold;
`;try{Title1.displayName="Title1",Title1.__docgenInfo={description:"",displayName:"Title1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title1"]={docgenInfo:Title1.__docgenInfo,name:"Title1",path:"src/components/Typo/Title.tsx#Title1"})}catch(__react_docgen_typescript_loader_error){}try{Title2.displayName="Title2",Title2.__docgenInfo={description:"",displayName:"Title2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title2"]={docgenInfo:Title2.__docgenInfo,name:"Title2",path:"src/components/Typo/Title.tsx#Title2"})}catch(__react_docgen_typescript_loader_error){}try{Title3.displayName="Title3",Title3.__docgenInfo={description:"",displayName:"Title3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title3"]={docgenInfo:Title3.__docgenInfo,name:"Title3",path:"src/components/Typo/Title.tsx#Title3"})}catch(__react_docgen_typescript_loader_error){}try{Title4.displayName="Title4",Title4.__docgenInfo={description:"",displayName:"Title4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Title.tsx#Title4"]={docgenInfo:Title4.__docgenInfo,name:"Title4",path:"src/components/Typo/Title.tsx#Title4"})}catch(__react_docgen_typescript_loader_error){}const SubTitle1=(0,react.memo)((_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(StyledSubTitle1,{children})})),StyledSubTitle1=styled_components_browser_esm.zo.h4`
  font-size: 2rem;
  font-weight: bold;
`,SubTitle2=(0,react.memo)((_ref2=>{let{children}=_ref2;return(0,jsx_runtime.jsx)(StyledSubTitle2,{children})})),StyledSubTitle2=styled_components_browser_esm.zo.h5`
  font-size: 1.8rem;
  font-weight: bold;
`;try{SubTitle1.displayName="SubTitle1",SubTitle1.__docgenInfo={description:"",displayName:"SubTitle1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/SubTitle.tsx#SubTitle1"]={docgenInfo:SubTitle1.__docgenInfo,name:"SubTitle1",path:"src/components/Typo/SubTitle.tsx#SubTitle1"})}catch(__react_docgen_typescript_loader_error){}try{SubTitle2.displayName="SubTitle2",SubTitle2.__docgenInfo={description:"",displayName:"SubTitle2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/SubTitle.tsx#SubTitle2"]={docgenInfo:SubTitle2.__docgenInfo,name:"SubTitle2",path:"src/components/Typo/SubTitle.tsx#SubTitle2"})}catch(__react_docgen_typescript_loader_error){}const Body1=(0,react.memo)((_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(StyledBody1,{children})})),StyledBody1=styled_components_browser_esm.zo.span`
  font-size: 2rem;
  font-weight: normal;
`,Body2=(0,react.memo)((_ref2=>{let{children}=_ref2;return(0,jsx_runtime.jsx)(StyledBody2,{children})})),StyledBody2=styled_components_browser_esm.zo.span`
  font-size: 1.8rem;
  font-weight: normal;
`,Body3=(0,react.memo)((_ref3=>{let{children}=_ref3;return(0,jsx_runtime.jsx)(StyledBody3,{children})})),StyledBody3=styled_components_browser_esm.zo.span`
  font-size: 1.6rem;
  font-weight: normal;
`,Body4=(0,react.memo)((_ref4=>{let{children}=_ref4;return(0,jsx_runtime.jsx)(StyledBody4,{children})})),StyledBody4=styled_components_browser_esm.zo.span`
  font-size: 1.4rem;
  font-weight: normal;
`,Body5=(0,react.memo)((_ref5=>{let{children}=_ref5;return(0,jsx_runtime.jsx)(StyledBody5,{children})})),StyledBody5=styled_components_browser_esm.zo.span`
  font-size: 1.3rem;
  font-weight: normal;
`;try{Body1.displayName="Body1",Body1.__docgenInfo={description:"",displayName:"Body1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body1"]={docgenInfo:Body1.__docgenInfo,name:"Body1",path:"src/components/Typo/Body.tsx#Body1"})}catch(__react_docgen_typescript_loader_error){}try{Body2.displayName="Body2",Body2.__docgenInfo={description:"",displayName:"Body2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body2"]={docgenInfo:Body2.__docgenInfo,name:"Body2",path:"src/components/Typo/Body.tsx#Body2"})}catch(__react_docgen_typescript_loader_error){}try{Body3.displayName="Body3",Body3.__docgenInfo={description:"",displayName:"Body3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body3"]={docgenInfo:Body3.__docgenInfo,name:"Body3",path:"src/components/Typo/Body.tsx#Body3"})}catch(__react_docgen_typescript_loader_error){}try{Body4.displayName="Body4",Body4.__docgenInfo={description:"",displayName:"Body4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body4"]={docgenInfo:Body4.__docgenInfo,name:"Body4",path:"src/components/Typo/Body.tsx#Body4"})}catch(__react_docgen_typescript_loader_error){}try{Body5.displayName="Body5",Body5.__docgenInfo={description:"",displayName:"Body5",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Body.tsx#Body5"]={docgenInfo:Body5.__docgenInfo,name:"Body5",path:"src/components/Typo/Body.tsx#Body5"})}catch(__react_docgen_typescript_loader_error){}const Caption1=(0,react.memo)((_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(StyledCaption1,{children})})),StyledCaption1=styled_components_browser_esm.zo.span`
  font-size: 1.2rem;
  font-weight: normal;
`,Caption2=(0,react.memo)((_ref2=>{let{children}=_ref2;return(0,jsx_runtime.jsx)(StyledCaption2,{children})})),StyledCaption2=styled_components_browser_esm.zo.span`
  font-size: 1.1rem;
  font-weight: normal;
`,Caption3=(0,react.memo)((_ref3=>{let{children}=_ref3;return(0,jsx_runtime.jsx)(StyledCaption3,{children})})),StyledCaption3=styled_components_browser_esm.zo.span`
  font-size: 1rem;
  font-weight: normal;
`,Caption4=(0,react.memo)((_ref4=>{let{children}=_ref4;return(0,jsx_runtime.jsx)(StyledCaption4,{children})})),StyledCaption4=styled_components_browser_esm.zo.span`
  font-size: 0.8rem;
  font-weight: normal;
`;try{Caption1.displayName="Caption1",Caption1.__docgenInfo={description:"",displayName:"Caption1",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption1"]={docgenInfo:Caption1.__docgenInfo,name:"Caption1",path:"src/components/Typo/Caption.tsx#Caption1"})}catch(__react_docgen_typescript_loader_error){}try{Caption2.displayName="Caption2",Caption2.__docgenInfo={description:"",displayName:"Caption2",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption2"]={docgenInfo:Caption2.__docgenInfo,name:"Caption2",path:"src/components/Typo/Caption.tsx#Caption2"})}catch(__react_docgen_typescript_loader_error){}try{Caption3.displayName="Caption3",Caption3.__docgenInfo={description:"",displayName:"Caption3",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption3"]={docgenInfo:Caption3.__docgenInfo,name:"Caption3",path:"src/components/Typo/Caption.tsx#Caption3"})}catch(__react_docgen_typescript_loader_error){}try{Caption4.displayName="Caption4",Caption4.__docgenInfo={description:"",displayName:"Caption4",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Caption.tsx#Caption4"]={docgenInfo:Caption4.__docgenInfo,name:"Caption4",path:"src/components/Typo/Caption.tsx#Caption4"})}catch(__react_docgen_typescript_loader_error){}const Typo=_ref=>{let{children}=_ref;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})};Typo.Title1=Title1,Typo.Title2=Title2,Typo.Title3=Title3,Typo.Title4=Title4,Typo.SubTitle1=SubTitle1,Typo.SubTitle2=SubTitle2,Typo.Body1=Body1,Typo.Body2=Body2,Typo.Body3=Body3,Typo.Body4=Body4,Typo.Body5=Body5,Typo.Caption1=Caption1,Typo.Caption2=Caption2,Typo.Caption3=Caption3,Typo.Caption4=Caption4;try{Typo.displayName="Typo",Typo.__docgenInfo={description:"",displayName:"Typo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Typo/Typo.tsx#Typo"]={docgenInfo:Typo.__docgenInfo,name:"Typo",path:"src/components/Typo/Typo.tsx#Typo"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Button-Button-stories.035186a9.iframe.bundle.js.map