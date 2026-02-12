---
sidebar_position: -4
---

# 配置

config base 部分允许更改使用的平台类型、文档显示大小（宽度和高度）和打开文档的类型。

## documentType

`类型: string`

定义要打开的文档类型：

- **word** - 文本文档 (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .htm, .html, .mht, .mhtml, .odt, .ott, .pages, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*);
- **cell** - 电子表格 (*.csv, .et, .ett, .fods, .numbers, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*);
- **slide** - 演示文稿 (*.dps, .dpt, .fodp, .key, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*);
- **pdf** - 可移植文档格式 (*.djvu, .docxf, .oform, .oxps, .pdf, .xps*).
- **diagram** - 图表文档（*.vsdm, .vsdx, .vssm, .vssx, .vstm, .vstx*).

:::请注意
自 6.1 版起，**text**、**spreadsheet** 和 **presentation**值已被弃用。请使用新值。
:::

**示例**: `"cell"`

## 高度

`类型: string`

定义浏览器窗口中的文档高度（默认为**100%**）。

**示例**: `"100%"`

## 令牌 {#token}

`类型: string`

以[令牌](../../additional-api/signature/browser.md)的形式定义添加到 **ONLYOFFICE 文档**配置的加密签名。

**示例**: `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU"`

## 类型 {#type}

`类型: string`

定义用于访问文档的平台类型。可以是：

- **desktop** - 为从台式机或笔记本电脑访问文档而优化;
- **mobile** - 为从平板电脑或智能手机访问文档而优化;
- **embedded** - 为易于嵌入网页而特别设计。

默认值为 **desktop**。

**示例**: `"desktop"`

## width

`类型: string`

定义浏览器窗口中的文档宽度（默认为**100%**）

**示例**: `"100%"`

## 示例

``` ts
const config = {
  documentType: "word",
  type: "desktop",
  height: "550px",
  width: "100%",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
