---
sidebar_position: -4
---

# 配置

config base 部分允许更改使用的平台类型、文档显示大小（宽度和高度）、打开文档的类型和加密签名令牌。

## documentType

**类型：** `"word" | "cell" | "slide" | "pdf" | "diagram"`

定义要打开的文档类型：

- `word` - 文本文档 (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .hml, .htm, .html, .hwp, .hwpx, .md, .mht, .mhtml, .odt, .ott, .pages, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*);
- `cell` - 电子表格 (*.csv, .et, .ett, .fods, .numbers, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*);
- `slide` - 演示文稿 (*.dps, .dpt, .fodp, .key, .odg, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*);
- `pdf` - 可移植文档格式 (*.djvu, .oxps, .pdf, .xps*);
- `diagram` - 图表文档 (*.vsdm, .vsdx, .vssm, .vssx, .vstm, .vstx*).

:::note
自 6.1 版起，`text`、`spreadsheet` 和 `presentation` 值已被弃用。请使用新值。
:::

**示例**: `"cell"`

## height

**类型：** `string` | **默认值：** `"100%"`

定义浏览器窗口中的文档高度。可以设置为任何与 CSS 兼容的尺寸值，例如 `100%`、`550px`、`calc(100vh - 48px)` 等。

**示例**: `"550px"`

## token

**类型：** `string`

以[令牌](../../additional-api/signature/browser.md)的形式定义添加到 **ONLYOFFICE 文档**配置的加密签名。

**示例**: `"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU"`

## type

**类型：** `"desktop" | "mobile" | "embedded"` | **默认值：** `"desktop"`

定义用于访问文档的平台类型。可以是：

- `desktop` - 为从台式机或笔记本电脑访问文档而优化;
- `mobile` - 为从平板电脑或智能手机访问文档而优化;
- `embedded` - 为易于嵌入网页而特别设计。

**示例**: `"mobile"`

## width

**类型：** `string` | **默认值：** `"100%"`

定义浏览器窗口中的文档宽度。可以设置为任何与 CSS 兼容的尺寸值，例如 `100%`、`800px`、`calc(100% - 240px)` 等。

**示例**: `"800px"`

## document

**类型：** `object`

文档部分。有关可用参数，请参阅 [document](document/document.md) 页面。

## editorConfig

**类型：** `object`

编辑器配置部分。有关可用参数，请参阅 [editorConfig](editor/editor.md) 页面。

## events

**类型：** `object`

事件部分。有关可用参数，请参阅 [events](events.md) 页面。

## 示例

``` ts
const config = {
  documentType: "word",
  type: "mobile",
  height: "550px",
  width: "800px",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.LwimMJA3puF3ioGeS-tfczR3370GXBZMIL-bdpu4hOU",
  document: {
    // ...
  },
  editorConfig: {
    // ...
  },
  events: {
    // ...
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
