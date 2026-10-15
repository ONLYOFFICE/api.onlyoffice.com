---
sidebar_position: -2
---

import APITable from '@site/src/components/APITable/APITable';

# 如何调用命令

要调用命令并将数据发送回编辑器，请使用 [Editor.RunMacro](#editorrunmacro) 方法。在 10.0 之前版本的编辑器中，请改用 [callCommand](#callcommand) 方法。这两种方法都允许插件发送结构化数据，这些数据可以插入到最终的文档中（如格式化段落、表格、文本片段或单词等）。

`RunMacro` 始终保持插件窗口打开并重新计算文档。如需在执行命令后关闭窗口或跳过重新计算，请使用 `callCommand`。

## Editor.RunMacro {#editorrunmacro}

Office JavaScript API 代码使用全局 [Editor](how-to-call-methods.md#editor-object) 对象的 `RunMacro` 方法运行。该方法将其余参数传递给函数，并返回包含函数返回值的 Promise：

```ts
const count = await Editor.RunMacro((text, bold) => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText(text).SetBold(bold);
  oDocument.InsertContent([oParagraph]);
  return oDocument.GetElementsCount();
}, "Hello world", true);
```

参数取代了 `callCommand` 用于传递数据的 [Asc.scope](#ascscope-object) 对象，因此调用前无需存储任何数据：

```ts
const text = "Hello world";

await Editor.RunMacro((text) => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText(text);
  oDocument.InsertContent([oParagraph]);
}, text);
```

`RunMacro` 与 `callCommand` 以相同的方式将函数发送给编辑器，因此适用相同的规则：

- 函数在其独立上下文中运行，无法访问插件中的变量。请将所需的一切作为参数传入。在函数内部仍可使用 `Asc.scope` 对象。
- 参数会被序列化为 JSON。字符串、数字、布尔值、`null`、数组和普通对象可以完整传递；函数、DOM 节点和类实例会丢失或变为普通对象。
- 只能返回 JavaScript 标准类型。Office JavaScript API 对象（如 `ApiParagraph`）传回插件时为 `undefined`。
- 函数运行后始终会重新计算文档，并且插件窗口保持打开，与 `callCommand(func, false, true)` 相同。

### 错误 {#errors}

与 `callCommand` 不同，`RunMacro` 会将函数抛出的错误传回插件。如果函数抛出错误，Promise 将以 `Error` 被拒绝，其消息包含原始错误的名称和消息，例如 `TypeError: Cannot read properties of null (reading 'GetRange')`。如果编辑器回滚了函数所做的更改，Promise 也会被拒绝，消息为 `The editor rolled back the changes made by the command.`。这两种情况都可以在 `await` 外使用 `try...catch` 进行处理：

```ts
try {
  await Editor.RunMacro(() => {
    Api.GetDocument().GetElement(100).GetRange().Select();
  });
} catch (e) {
  console.error(e.message);
}
```

如果最后一个参数是函数，它将用作回调，此时 `RunMacro` 不返回 Promise。函数抛出错误时，回调接收的不是结果，而是一个在 `onlyoffice_id_error_message` 属性中包含错误文本的对象：

```ts
Editor.RunMacro(() => {
  return Api.GetDocument().GetElementsCount();
}, (result) => {
  if (result && result.onlyoffice_id_error_message) {
    console.error(result.onlyoffice_id_error_message);
    return;
  }
  console.log(result);
});
```

## 调用命令 {#callcommand}

### 参数

<APITable>

| 名称     | 类型     | 描述                                                                                                                                                                                                                                     |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| func     | function | 用 JavaScript 编写的命令，其作用是构造可插入至最终文档文件中的结构化数据（如格式化段落、表格、文本片段或单词等），随后将该数据发送给编辑器。该命令必须符合 [Office JavaScript API](../../../office-api/get-started/overview.md) 的语法。 |
| isClose  | boolean  | 指定在执行完 func 参数中的代码后是否关闭插件窗口。值为 true 时将在执行后关闭插件窗口；值为 false 时将在执行后保持窗口开启，以便继续接收其他命令或操作。默认值为 false。                                                                  |
| isCalc   | boolean  | 指定在执行 func 参数中的代码后是否重新计算文档内容。值为 true 时将在执行后重新计算文档；值为 false 时不重新计算（仅当您确认所做修改不影响文档计算时使用）。默认值为 true。                                                               |
| callback | function | 方法返回的结果。仅支持 JavaScript 标准类型（如传入对象将被替换为 undefined）。                                                                                                                                                           |

</APITable>

### 返回值

此方法不返回任何值。

### 示例

```ts
Asc.plugin.callCommand(() => {
  const oDocument = Api.GetDocument()
  const oParagraph = Api.CreateParagraph()
  oParagraph.AddText("Hello world")
  oDocument.InsertContent([oParagraph])
}, true, true, (returnValue) => {})
```

## Asc.scope 对象 {#ascscope-object}

该方法在其独立上下文中执行，与其他 JavaScript 数据相互隔离。如果需要向该方法传递某些参数或其他附加数据（如对象、参数、变量等），可以使用 **Asc.scope** 对象。

:::note
不能通过 Asc.scope 对象将函数传递给调用命令方法
:::

### 示例

```ts
Asc.scope.text = text
Asc.plugin.callCommand(() => {
  const oDocument = Api.GetDocument()
  const oParagraph = Api.CreateParagraph()
  oParagraph.AddText(Asc.scope.text)
  oDocument.InsertContent([oParagraph])
}, true, true, (returnValue) => {})
```

## 更多示例 {#more-examples}

### 插入表格 {#insert-a-table}

```ts
Asc.plugin.callCommand(() => {
  const oDoc = Api.GetDocument();
  const oTable = Api.CreateTable(3, 4);
  oDoc.InsertContent([oTable]);
}, false);
```

### 通过 URL 插入图片 {#insert-an-image-from-url}

```ts
Asc.scope.imageUrl = "https://example.com/image.png";

Asc.plugin.callCommand(() => {
  const oDoc = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  const oImage = Api.CreateImage(Asc.scope.imageUrl, 100 * 36000, 60 * 36000);
  oParagraph.AddDrawing(oImage);
  oDoc.InsertContent([oParagraph]);
}, false);
```

### 操作内容控件 {#work-with-content-controls}

```ts
// 添加带标签的内容控件
Asc.plugin.executeMethod("AddContentControl", [
  1, // type: 1 = richText
  { Tag: "myField", Lock: 0 },
]);

// 获取所有内容控件
Asc.plugin.executeMethod("GetAllContentControls", [], (controls) => {
  controls.forEach((ctrl) => console.log(ctrl.Tag, ctrl.InternalId));
});
```

## info 对象 {#info-object}

`Asc.plugin.info` 对象是 [Asc.plugin](./asc-plugin.md) 对象的属性。有关完整的属性列表和示例，请参阅 [Asc.plugin > info 对象](./asc-plugin.md#info-object)。

## 调试

要在浏览器控制台中记录所有 `callCommand` 和 [`executeMethod`](how-to-call-methods.md) 调用，请在浏览器本地存储中设置 `asc_plugin_commands_log` 键：

```js
localStorage.setItem("asc_plugin_commands_log", "true");
```

要禁用日志，请删除该键：

```js
localStorage.removeItem("asc_plugin_commands_log");
```

该设置在页面重新加载后仍然有效。
