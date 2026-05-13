# 嵌入式

embedded 部分定义嵌入模式参数。

:::note
此部分仅适用于 `embedded` 文档类型。请参阅[配置](../config.md#type)部分以了解如何定义 `embedded` 文档类型。
:::

## autostart

**类型：** `"document" | "player"` | **默认值：** `"player"`

定义嵌入式演示文稿是否自动开始幻灯片放映。

**示例**: `"document"`

## embedUrl

**类型：** `string`

定义文档的绝对 URL，作为嵌入网页的文档的源文件。

**示例**: `"https://example.com/embedded?doc=exampledocument1.docx"`

## fullscreenUrl

**类型：** `string`

定义将以全屏模式打开的文档的绝对 URL。

**示例**: `"https://example.com/embedded?doc=exampledocument1.docx#fullscreen"`

## saveUrl

**类型：** `string`

定义允许将文档保存到用户个人计算机上的绝对 URL。

**示例**: `"https://example.com/download?doc=exampledocument1.docx"`

## shareUrl

**类型：** `string`

定义允许其他用户共享此文档的绝对 URL。

**示例**: `"https://example.com/view?doc=exampledocument1.docx"`

## toolbarDocked

**类型：** `string`

定义嵌入式查看器工具栏的位置。如果设置为 `top`，工具栏在顶部。如果设置为 `bottom`，工具栏在底部。

**示例**: `"top"`

![Embedded](/assets/images/editor/embedded.png)

## 示例

``` ts
const config = {
  // ...
  editorConfig: {
    // ...
    embedded: {
      autostart: "document",
      embedUrl: "https://example.com/embedded?doc=exampledocument1.docx",
      fullscreenUrl: "https://example.com/embedded?doc=exampledocument1.docx#fullscreen",
      saveUrl: "https://example.com/download?doc=exampledocument1.docx",
      shareUrl: "https://example.com/view?doc=exampledocument1.docx",
      toolbarDocked: "top",
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```
