import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BisW84Gp.js";import{t as r}from"./jsx-runtime-Bwgqq9F4.js";import{n as i,t as a}from"./AppButton--Y5tgcgA.js";import{n as o,t as s}from"./AppModal-DLdhF8jZ.js";var c,l,u,d,f;t((()=>{c=e(n(),1),o(),i(),l=r(),u={title:`UI/AppModal`,component:s},d=()=>{let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{label:`Open Modal`,onClick:()=>t(!0)}),(0,l.jsx)(s,{open:e,title:`My Modal`,onClose:()=>t(!1),onConfirm:()=>{alert(`Confirmed`),t(!1)},children:`This is modal content`})]})},d.__docgenInfo={description:``,methods:[],displayName:`Default`},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>\r
      <AppButton label="Open Modal" onClick={() => setOpen(true)} />\r
      <AppModal open={open} title="My Modal" onClose={() => setOpen(false)} onConfirm={() => {
      alert('Confirmed');
      setOpen(false);
    }}>\r
        This is modal content\r
      </AppModal>\r
    </>;
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};