# Embedded

嵌入部分仅适用于 **嵌入** 文档类型（请参阅 [配置](../config.md#type) 部分以了解如何定义 **嵌入** 文档类型）。 它允许更改定义嵌入模式中按钮行为的设置。

## embedUrl

定义文档的绝对 URL，作为嵌入网页的文档的源文件。

类型: string

示例: `https://example.com/embedded?doc=exampledocument1.docx`

## fullscreenUrl

定义将以全屏模式打开的文档的绝对 URL。

类型: string

示例: `https://example.com/embedded?doc=exampledocument1.docx#fullscreen`

## saveUrl

定义允许将文档保存到用户个人计算机上的绝对 URL。

类型: string

示例: `https://example.com/download?doc=exampledocument1.docx`

## shareUrl

定义允许其他用户共享此文档的绝对 URL。

类型: string

示例: `https://example.com/view?doc=exampledocument1.docx`

## toolbarDocked

定义嵌入式查看器工具栏的位置，可以是 **top** 或 **bottom**。

类型: string

示例: "top"

![Embedded](/assets/images/editor/embedded.png)

## Example

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    embedded: {
      embedUrl: "https://example.com/embedded?doc=exampledocument1.docx",
      fullscreenUrl: "https://example.com/embedded?doc=exampledocument1.docx#fullscreen",
      saveUrl: "https://example.com/download?doc=exampledocument1.docx",
      shareUrl: "https://example.com/view?doc=exampledocument1.docx",
      toolbarDocked: "top",
    },
  },
})
```
