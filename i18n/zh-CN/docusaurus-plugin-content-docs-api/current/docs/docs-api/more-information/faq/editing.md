---
sidebar_position: -5
---

# 编辑问题

## 什么是'回调处理程序'，我为什么需要它？ {#what-is-the-callback-handler-and-why-do-i-need-it}

**文档编辑服务**通知**文档存储服务**有关文档编辑的状态，并通过 *callbackUrl* 发送包含所有必要数据的响应，在配置文件中指定如下：

  ``` ts
  const config = {
    editorConfig: {
      callbackUrl: "https://example.com/url-to-callback.ashx",
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

这里的 `https://example.com/url-to-callback.ashx` 是特殊处理程序的地址，它可以处理来自**文档编辑服务**的响应和带有*错误的响应：0* 状态代码。此处理程序可以用您选择的编程语言编写。

所有可以发送到回调处理程序的参数及其描述都可以在[这个页面](../../usage-api/callback-handler.md)找到。

关于如何实现此处理程序，下列编程语言有示例：[.Net (C#)](../../usage-api/callback-handler.md#net-c-document-save-example), [Java](../../usage-api/callback-handler.md#java-document-save-example), [Node.js](../../usage-api/callback-handler.md#nodejs-document-save-example), [PHP](../../usage-api/callback-handler.md#php-document-save-example), [Ruby](../../usage-api/callback-handler.md#ruby-document-save-example)。

## 什么是 document.key 参数？ {#what-is-the-documentkey-parameter}

*Document.key* 参数是一个唯一的文档标识符，它有助于将文档与其他文档区分开来，并由编辑服务明确地识别它。

每次更改文档时，还必须重新生成 *document.key* 参数，因为具有已知键的文档是从缓存中获取的。

有关此参数的更多信息，请参见[此处](../../usage-api/config/document/document.md#key)。

## 如何定义打开文件的模式（查看或编辑）？ {#how-to-define-the-mode-that-the-file-should-be-opened-in-viewing-or-editing}

要定义文档打开模式，请使用 *editorConfig.mode* 参数。它可以获取两个值：

- **edit**默认使用，允许打开文档文件进行编辑（如果相应的 [document.permissions](../../usage-api/config/document/permissions.md) 参数也设置为 *true*）;
- **view**允许在主工具栏和禁用编辑的情况下打开文档进行查看。

使用配置文件的 *editorConfig* 部分设置模式：

  ``` ts
  const config = {
    editorConfig: {
      mode: "edit",
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

有关此参数的更多信息，请参见[此处](../../usage-api/config/editor/editor.md#mode)。
