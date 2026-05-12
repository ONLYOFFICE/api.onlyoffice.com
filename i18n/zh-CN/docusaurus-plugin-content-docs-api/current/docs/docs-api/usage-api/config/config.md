---
sidebar_position: -4
---

# 配置

config base 部分定义了初始化文档编辑器的顶级参数。

## documentType

**类型：** `"word" | "cell" | "slide" | "pdf" | "diagram"`

定义要打开的文档类型：

- `word` - 文本文档 (*.doc, .docm, .docx, .dot, .dotm, .dotx, .epub, .fb2, .fodt, .hml, .htm, .html, .hwp, .hwpx, .md, .mht, .mhtml, .odt, .ott, .pages, .rtf, .stw, .sxw, .txt, .wps, .wpt, .xml*);
- `cell` - 电子表格 (*.csv, .et, .ett, .fods, .numbers, .ods, .ots, .sxc, .xls, .xlsb, .xlsm, .xlsx, .xlt, .xltm, .xltx, .xml*);
- `slide` - 演示文稿 (*.dps, .dpt, .fodp, .key, .odg, .odp, .otp, .pot, .potm, .potx, .pps, .ppsm, .ppsx, .ppt, .pptm, .pptx, .sxi*);
- `pdf` - 可移植文档格式 (*.djvu, .oxps, .pdf, .xps*);
- `diagram` - 图表文档 (*.vsdm, .vsdx, .vssm, .vssx, .vstm, .vstx*).

:::info
如果省略，文档类型将根据 [`document.fileType`](document/document.md#filetype) 值自动推断。如果同时省略 `documentType` 和 `document.fileType`，将会出现错误。
:::

:::danger[Deprecated]
自 6.1 版起，`text`、`spreadsheet` 和 `presentation` 值已被弃用。请使用 `word`、`cell`、`slide`、`pdf` 或 `diagram`。
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

[document](document/document.md) 部分定义了文档参数。

## editorConfig

**类型：** `object`

[editorConfig](editor/editor.md) 部分定义了编辑器界面参数。

## events

**类型：** `object`

[events](events.md) 部分定义了编辑器事件的回调函数。

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
