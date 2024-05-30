"use strict";(self.webpackChunk_docspace_components=self.webpackChunk_docspace_components||[]).push([[7051],{"./catalog-item/catalog-item.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconWithBadge:()=>IconWithBadge,IconWithInitialText:()=>IconWithInitialText,IconWithoutBadge:()=>IconWithoutBadge,ItemIsEndOfBlock:()=>ItemIsEndOfBlock,ItemWithBadgeIcon:()=>ItemWithBadgeIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>catalog_item_stories});var react=__webpack_require__("../../node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("../../node_modules/styled-components/dist/styled-components.browser.esm.js"),prop_types=__webpack_require__("../../node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),react_svg_esm=__webpack_require__("../../node_modules/react-svg/dist/react-svg.esm.js"),text_0=__webpack_require__("./text/index.js"),badge=__webpack_require__("./badge/index.js"),styled_catalog_item=__webpack_require__("./catalog-item/styled-catalog-item.js"),ColorTheme=__webpack_require__("./ColorTheme/index.js"),jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js");const getInitial=text=>text.substring(0,1).toUpperCase(),CatalogItem=props=>{const{className,id,style,icon,text,showText,onClick,onDrop,isEndOfBlock,isActive,isDragging,isDragActive,showInitial,showBadge,labelBadge,iconBadge,onClickBadge,isHeader,isFirstHeader,folderId,badgeTitle}=props,onClickAction=()=>{onClick&&onClick(id)},onClickBadgeAction=e=>{e.stopPropagation(),onClickBadge&&onClickBadge(id)},onMouseUpAction=()=>{onDrop&&isDragging&&onDrop(id,text)};return isHeader?(0,jsx_runtime.jsx)(styled_catalog_item.Yx,{showText,isFirstHeader,children:(0,jsx_runtime.jsx)(text_0.Z,{className:"catalog-item__header-text",truncate:!0,noSelect:!0,children:showText?text:""})}):(0,jsx_runtime.jsxs)(ColorTheme.U,{className,style,showText,isEndOfBlock,isActive,themeId:ColorTheme.f.CatalogItem,children:[(0,jsx_runtime.jsx)(styled_catalog_item.nI,{id:folderId,isActive,isDragging,isDragActive,onClick:onClickAction,onMouseUp:onMouseUpAction}),(0,jsx_runtime.jsxs)(styled_catalog_item.dF,{isActive,children:[(0,jsx_runtime.jsx)(react_svg_esm.Q,{className:"icon",src:icon}),!showText&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[showInitial&&(0,jsx_runtime.jsx)(styled_catalog_item.MD,{children:getInitial(text)}),showBadge&&!iconBadge&&(0,jsx_runtime.jsx)(styled_catalog_item.jM,{onClick:onClickBadgeAction,showText})]})]}),showText&&(0,jsx_runtime.jsx)(styled_catalog_item.lS,{isActive,noSelect:!0,children:text}),showBadge&&showText&&(0,jsx_runtime.jsx)(styled_catalog_item.jM,{showText,onClick:onClickBadgeAction,title:badgeTitle,children:iconBadge?(0,jsx_runtime.jsx)(react_svg_esm.Q,{className:"catalog-item__icon",src:iconBadge}):(0,jsx_runtime.jsx)(badge.Z,{className:"catalog-item__badge",label:labelBadge})})]})};CatalogItem.propTypes={className:prop_types_default().string,id:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),style:prop_types_default().oneOfType([prop_types_default().object,prop_types_default().array]),icon:prop_types_default().string,text:prop_types_default().string,showText:prop_types_default().bool,onClick:prop_types_default().func,onDrop:prop_types_default().func,showInitial:prop_types_default().bool,isEndOfBlock:prop_types_default().bool,isActive:prop_types_default().bool,isDragging:prop_types_default().bool,isDragActive:prop_types_default().bool,showBadge:prop_types_default().bool,labelBadge:prop_types_default().oneOfType([prop_types_default().string,prop_types_default().number]),iconBadge:prop_types_default().string,onClickBadge:prop_types_default().func,isHeader:prop_types_default().bool,isFirstHeader:prop_types_default().bool,folderId:prop_types_default().string},CatalogItem.defaultProps={showText:!1,showBadge:!1,isActive:!1,showInitial:!1,isEndOfBlock:!1,isDragging:!1,isDragActive:!1,isHeader:!1,isFirstHeader:!1},CatalogItem.__docgenInfo={description:"",methods:[],displayName:"CatalogItem",props:{showText:{defaultValue:{value:"false",computed:!1},description:"Sets the catalog item to display text",type:{name:"bool"},required:!1},showBadge:{defaultValue:{value:"false",computed:!1},description:"Sets the catalog item to display badge",type:{name:"bool"},required:!1},isActive:{defaultValue:{value:"false",computed:!1},description:"Sets catalog item active",type:{name:"bool"},required:!1},showInitial:{defaultValue:{value:"false",computed:!1},description:"Tells when the catalog item should display initial on icon, text should be hidden",type:{name:"bool"},required:!1},isEndOfBlock:{defaultValue:{value:"false",computed:!1},description:"Sets the catalog item as end of block",type:{name:"bool"},required:!1},isDragging:{defaultValue:{value:"false",computed:!1},description:"Sets the catalog item available for drag`n`drop",type:{name:"bool"},required:!1},isDragActive:{defaultValue:{value:"false",computed:!1},description:"Sets the catalog item active for drag`n`drop",type:{name:"bool"},required:!1},isHeader:{defaultValue:{value:"false",computed:!1},description:"Sets the catalog item to be displayed as a header",type:{name:"bool"},required:!1},isFirstHeader:{defaultValue:{value:"false",computed:!1},description:"Disables margin top for catalog item header",type:{name:"bool"},required:!1},className:{description:"Accepts className",type:{name:"string"},required:!1},id:{description:"Accepts id",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},style:{description:"Accepts css style",type:{name:"union",value:[{name:"object"},{name:"array"}]},required:!1},icon:{description:"Catalog item icon",type:{name:"string"},required:!1},text:{description:"Catalog item text",type:{name:"string"},required:!1},onClick:{description:"Invokes a function upon clicking on a catalog item",type:{name:"func"},required:!1},onDrop:{description:"Invokes a function upon dragging and dropping a catalog item",type:{name:"func"},required:!1},labelBadge:{description:"Label in catalog item badge",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},iconBadge:{description:"Sets custom badge icon",type:{name:"string"},required:!1},onClickBadge:{description:"Invokes a function upon clicking on the catalog item badge",type:{name:"func"},required:!1},folderId:{description:"Accepts folder id",type:{name:"string"},required:!1}}};const catalog_item=react.memo(CatalogItem);var catalog_folder_reacturl=__webpack_require__("../../public/images/catalog.folder.react.svg?url"),catalog_guest_reacturl=__webpack_require__("../../public/images/catalog.guest.react.svg?url"),catalog_trash_reacturl=__webpack_require__("../../public/images/catalog.trash.react.svg?url");const catalog_item_stories={title:"Components/CatalogItem",component:catalog_item,parameters:{docs:{description:{component:"Display catalog item. Can show only icon. If is it end of block - adding margin bottom."}},design:{type:"figma",url:"https://www.figma.com/file/ZiW5KSwb4t7Tj6Nz5TducC/UI-Kit-DocSpace-1.0.0?type=design&node-id=474-2027&mode=design&t=TBNCKMQKQMxr44IZ-0"}}},CatalogWrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"catalog-itemstories__CatalogWrapper",componentId:"sc-6jx6r-0"})(["background-color:",";padding:15px;"],(props=>props.theme.catalogItem.container.background)),Template=args=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"250px"},children:(0,jsx_runtime.jsx)(catalog_item,{...args,icon:args.icon,text:args.text,showText:args.showText,showBadge:args.showBadge,onClick:()=>{},isEndOfBlock:args.isEndOfBlock,labelBadge:args.labelBadge,onClickBadge:()=>{}})});Template.displayName="Template";const Default=Template.bind({});Default.args={icon:catalog_folder_reacturl,text:"Documents",showText:!0,showBadge:!0,isEndOfBlock:!1,labelBadge:"2"};const OnlyIcon=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"52px"},children:(0,jsx_runtime.jsx)(catalog_item,{icon:catalog_folder_reacturl,text:"My documents",showText:!1,showBadge:!1})});OnlyIcon.displayName="OnlyIcon";const IconWithoutBadge=OnlyIcon.bind({}),OnlyIconWithBadge=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"52px"},children:(0,jsx_runtime.jsx)(catalog_item,{icon:catalog_guest_reacturl,text:"My documents",showText:!1,showBadge:!0})});OnlyIconWithBadge.displayName="OnlyIconWithBadge";const IconWithBadge=OnlyIconWithBadge.bind({}),InitialIcon=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"52px"},children:(0,jsx_runtime.jsx)(catalog_item,{icon:catalog_folder_reacturl,text:"Documents",showText:!1,showBadge:!1,showInitial:!0,onClick:()=>{}})});InitialIcon.displayName="InitialIcon";const IconWithInitialText=InitialIcon.bind({}),WithBadgeIcon=()=>(0,jsx_runtime.jsx)(CatalogWrapper,{style:{width:"250px"},children:(0,jsx_runtime.jsx)(catalog_item,{icon:catalog_folder_reacturl,text:"My documents",showText:!0,showBadge:!0,iconBadge:catalog_trash_reacturl})});WithBadgeIcon.displayName="WithBadgeIcon";const ItemWithBadgeIcon=WithBadgeIcon.bind({}),TwoItem=()=>(0,jsx_runtime.jsxs)(CatalogWrapper,{style:{width:"250px"},children:[(0,jsx_runtime.jsx)(catalog_item,{icon:catalog_folder_reacturl,text:"My documents",showText:!0,showBadge:!0,onClick:()=>{},isEndOfBlock:!0,labelBadge:3,onClickBadge:()=>{}}),(0,jsx_runtime.jsx)(catalog_item,{icon:catalog_folder_reacturl,text:"Some text",showText:!0,showBadge:!0,onClick:()=>{},iconBadge:catalog_trash_reacturl,onClickBadge:()=>{}})]});TwoItem.displayName="TwoItem";const ItemIsEndOfBlock=TwoItem.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  return <CatalogWrapper style={{\n    width: "250px"\n  }}>\r\n      <CatalogItem {...args} icon={args.icon} text={args.text} showText={args.showText} showBadge={args.showBadge} onClick={() => {}} isEndOfBlock={args.isEndOfBlock} labelBadge={args.labelBadge} onClickBadge={() => {}} />\r\n    </CatalogWrapper>;\n}',...Default.parameters?.docs?.source}}},IconWithoutBadge.parameters={...IconWithoutBadge.parameters,docs:{...IconWithoutBadge.parameters?.docs,source:{originalSource:'() => {\n  return <CatalogWrapper style={{\n    width: "52px"\n  }}>\r\n      <CatalogItem icon={CatalogFolderReactSvgUrl} text={"My documents"} showText={false} showBadge={false} />\r\n    </CatalogWrapper>;\n}',...IconWithoutBadge.parameters?.docs?.source}}},IconWithBadge.parameters={...IconWithBadge.parameters,docs:{...IconWithBadge.parameters?.docs,source:{originalSource:'() => {\n  return <CatalogWrapper style={{\n    width: "52px"\n  }}>\r\n      <CatalogItem icon={CatalogGuestReactSvgUrl} text={"My documents"} showText={false} showBadge={true} />\r\n    </CatalogWrapper>;\n}',...IconWithBadge.parameters?.docs?.source}}},IconWithInitialText.parameters={...IconWithInitialText.parameters,docs:{...IconWithInitialText.parameters?.docs,source:{originalSource:'() => {\n  return <CatalogWrapper style={{\n    width: "52px"\n  }}>\r\n      <CatalogItem icon={CatalogFolderReactSvgUrl} text={"Documents"} showText={false} showBadge={false} showInitial={true} onClick={() => {}} />\r\n    </CatalogWrapper>;\n}',...IconWithInitialText.parameters?.docs?.source}}},ItemWithBadgeIcon.parameters={...ItemWithBadgeIcon.parameters,docs:{...ItemWithBadgeIcon.parameters?.docs,source:{originalSource:'() => {\n  return <CatalogWrapper style={{\n    width: "250px"\n  }}>\r\n      <CatalogItem icon={CatalogFolderReactSvgUrl} text={"My documents"} showText={true} showBadge={true} iconBadge={CatalogTrashReactSvgUrl} />\r\n    </CatalogWrapper>;\n}',...ItemWithBadgeIcon.parameters?.docs?.source}}},ItemIsEndOfBlock.parameters={...ItemIsEndOfBlock.parameters,docs:{...ItemIsEndOfBlock.parameters?.docs,source:{originalSource:'() => {\n  return <CatalogWrapper style={{\n    width: "250px"\n  }}>\r\n      <CatalogItem icon={CatalogFolderReactSvgUrl} text={"My documents"} showText={true} showBadge={true} onClick={() => {}} isEndOfBlock={true} labelBadge={3} onClickBadge={() => {}} />\r\n      <CatalogItem icon={CatalogFolderReactSvgUrl} text={"Some text"} showText={true} showBadge={true} onClick={() => {}} iconBadge={CatalogTrashReactSvgUrl} onClickBadge={() => {}} />\r\n    </CatalogWrapper>;\n}',...ItemIsEndOfBlock.parameters?.docs?.source}}};const __namedExportsOrder=["Default","IconWithoutBadge","IconWithBadge","IconWithInitialText","ItemWithBadgeIcon","ItemIsEndOfBlock"]},"../../public/images/catalog.guest.react.svg?url":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"images/catalog.guest.react.svg?hash=c1c8964f1be27a6d7b20"}}]);