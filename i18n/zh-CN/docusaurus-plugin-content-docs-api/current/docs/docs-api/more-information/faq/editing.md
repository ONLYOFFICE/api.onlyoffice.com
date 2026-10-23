---
sidebar_position: -5
---

# 编辑问题

## 什么是'回调处理程序'，我为什么需要它？ {#what-is-the-callback-handler-and-why-do-i-need-it}

**文档编辑服务**通知**文档存储服务**有关文档编辑的状态，并通过 `callbackUrl` 发送包含所有必要数据的响应，在配置文件中指定如下：

  ``` ts
  const config = {
    // ...
    editorConfig: {
      // ...
      callbackUrl: "https://example.com/url-to-callback",
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

这里的 `https://example.com/url-to-callback` 是特殊处理程序的地址，它可以处理来自**文档编辑服务**的响应和带有 `"error": 0` 状态代码。此处理程序可以用您选择的编程语言编写。

所有可以发送到回调处理程序的参数及其描述都可以在[这个页面](../../usage-api/callback-handler.md)找到。

关于如何实现此处理程序，下列编程语言有示例 [examples](../../usage-api/callback-handler.md#document-save-examples)：.Net (C#), Java, Node.js, PHP, Ruby。

## 什么是 document.key 参数？ {#what-is-the-documentkey-parameter}

`Document.key` 参数是一个唯一的文档标识符，它有助于将文档与其他文档区分开来，并由编辑服务明确地识别它。

每次更改文档时，还必须重新生成 `document.key` 参数，因为具有已知键的文档是从缓存中获取的。

有关此参数的更多信息，请参见[此处](../../usage-api/config/document/document.md#key)。

## 如何定义打开文件的模式（查看或编辑）？ {#how-to-define-the-mode-that-the-file-should-be-opened-in-viewing-or-editing}

要定义文档打开模式，请使用 `editorConfig.mode` 参数。它可以获取两个值：

- **edit** 默认使用，允许打开文档文件进行编辑（如果相应的 [document.permissions](../../usage-api/config/document/permissions.md) 参数也设置为 `true`）;
- **view** 允许在主工具栏和禁用编辑的情况下打开文档进行查看。

使用配置文件的 `editorConfig` 部分设置模式：

  ``` ts
  const config = {
    // ...
    editorConfig: {
      // ...
      mode: "edit",
    },
  };

  const docEditor = new DocsAPI.DocEditor("placeholder", config);
  ```

有关此参数的更多信息，请参见[此处](../../usage-api/config/editor/editor.md#mode)。

## 如何获取编辑器中已打开文档的表单字段值？ {#how-to-get-the-form-field-values-from-a-document-that-is-open-in-the-editor}

要读取编辑器中已打开文档的字段（包括未保存的更改），请使用[自动化 API](../../usage-api/automation-api/automation-api.md)。在 [onDocumentReady](../../usage-api/config/events.md#ondocumentready) 事件之后创建连接器。此后，您可以随时读取字段，例如在 [onRequestStartFilling](../../usage-api/config/events.md#onrequeststartfilling) 中，在调用 [startFilling](../../usage-api/methods.md#startfilling) 方法之前检查表单。使用哪种方法取决于打开表单的编辑器：

- ONLYOFFICE 表单（[document.isForm](../../usage-api/config/document/document.md#isform) 为 `true`）在文档编辑器中打开。请调用 [GetAllForms](../../../plugins/interacting-with-editors/form-api/Methods/GetAllForms.md) 方法。返回的每个对象都在 `FormKey` 中包含字段键，在 `FormValue` 中包含其当前值：

  ``` ts
  function onRequestStartFilling() {
    connector.executeMethod("GetAllForms", null, (forms) => {
      for (const form of forms) {
        console.log(form.FormKey, form.FormValue);
      }
      docEditor.startFilling();
    });
  }
  ```

- 其他 PDF 文件在 PDF 编辑器中打开。请通过 [callCommand](../../usage-api/automation-api/connector-class.md#callcommand) 运行 PDF API 的 [GetAllFields](../../../office-api/usage-api/pdf-api/ApiDocument/Methods/GetAllFields.md) 方法，并返回每个字段的名称和值：

  ``` ts
  connector.callCommand(() => {
    return Api.GetDocument().GetAllFields().map((field) => ({
      name: field.GetFullName(),
      value: field.GetValue(),
    }));
  }, (fields) => {
    console.log(fields);
  });
  ```

:::info
自动化 API 仅适用于 **ONLYOFFICE 文档开发者版**。
:::

如果只需要已提交表单的值，则无需使用自动化 API。用户点击*完成并提交*后，[回调处理程序](../../usage-api/callback-handler.md#formsdataurl)会在 `formsdataurl` 参数中收到指向这些值的链接。
