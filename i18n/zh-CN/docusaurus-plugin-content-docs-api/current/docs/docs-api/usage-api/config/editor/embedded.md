# 嵌入式

embedded 部分定义嵌入模式参数。

:::note
此部分仅适用于 `embedded` 文档类型。请参阅[配置](../config.md#type)部分以了解如何定义 `embedded` 文档类型。
:::

## autostart

**类型：** `"document" | "player"` | **默认值：** `"player"`

嵌入式查看器的启动模式。在 `player` 模式下，幻灯片放映会自动开始。

**示例**: `"document"`

## embedUrl

**类型：** `string`

嵌入文档的源文件的绝对 URL。

**示例**: `"https://example.com/embedded?doc=exampledocument1.docx"`

## fullscreenUrl

**类型：** `string`

以全屏模式打开文档的绝对 URL。

**示例**: `"https://example.com/embedded?doc=exampledocument1.docx#fullscreen"`

## saveUrl

**类型：** `string`

将文档保存到用户本地计算机的绝对 URL。

**示例**: `"https://example.com/download?doc=exampledocument1.docx"`

## shareUrl

**类型：** `string`

与其他用户共享文档的绝对 URL。

**示例**: `"https://example.com/view?doc=exampledocument1.docx"`

## toolbarDocked

**类型：** `"top" | "bottom"` | **默认值：** `"top"`

嵌入式查看器工具栏的位置。

**示例**: `"bottom"`

![Embedded](/assets/images/editor/embedded.png)

## 示例

```ts
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
