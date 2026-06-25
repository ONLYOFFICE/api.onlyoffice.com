---
sidebar_position: -2
---

# 如何调用命令

要调用命令并将数据发送回编辑器，需要定义**调用命令**方法。该方法允许插件发送结构化数据，这些数据可以插入到最终的文档中（如格式化段落、表格、文本片段或单词等）。

## 调用命令 {#callcommand}

### 参数

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称     | 类型     | 描述                                                                                                                                                                                                                                     |
| -------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| func     | function | 用 JavaScript 编写的命令，其作用是构造可插入至最终文档文件中的结构化数据（如格式化段落、表格、文本片段或单词等），随后将该数据发送给编辑器。该命令必须符合 [Office JavaScript API](../../../office-api/get-started/overview.md) 的语法。 |
| isClose  | boolean  | 指定在执行完 func 参数中的代码后是否关闭插件窗口。值为 true 时将在执行后关闭插件窗口；值为 false 时将在执行后保持窗口开启，以便继续接收其他命令或操作。默认值为 false。                                                                  |
| isCalc   | boolean  | 指定在执行 func 参数中的代码后是否重新计算文档内容。值为 true 时将在执行后重新计算文档；值为 false 时不重新计算（仅当您确认所做修改不影响文档计算时使用）。默认值为 true。                                                               |
| callback | function | 方法返回的结果。仅支持 JavaScript 标准类型（如传入对象将被替换为 undefined）。                                                                                                                                                           |

```mdx-code-block
</APITable>
```

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
