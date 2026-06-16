---
sidebar_position: 1
---

# 连接器类

**连接器**是一个允许从外部源编辑文本文档、电子表格、演示文稿、PDF 和可填写表单的类。它与插件具有相同的接口。

下面可以找到此类可用的方法。

## addContextMenuItem

调用该函数将项目添加到上下文菜单。上下文菜单的操作过程与 [plugins](../../../plugins/customization/context-menu.md) 相同，但 *onClick* 方法除外，该方法用于代替通过 ID 订阅。

### 参数

| 名称  | 类型                                        | 描述                                           |
| ----- | ------------------------------------------- | ----------------------------------------------------- |
| items | [ContextMenuItem](#contextmenuitem)[] | 包含上下文菜单项参数的数组。 |

### ContextMenuItem

| 名称       | 类型                     | 描述                                                                                                                |
| ---------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| *id*       | string                   | 项目 ID。                                                                                                           |
| *text*     | string                   | 项目标题。                                                                                                       |
| *data*     | string                   | 项目数据（此数据将发送到点击事件回调）。                                                        |
| *disabled* | boolean                  | 当前项是否已禁用。                                                                          |
| *icons*    | string                   | 项目图标（请参阅插件 [config](../../../plugins/configuration/configuration.md#variationsicons) 文档）。 |
| *onClick*  | function                 | 点击事件回调。仅适用于 [addContextMenuItem](#addcontextmenuitem) 方法。                                                                                                  |
| *items*    | [ContextMenuItem](#contextmenuitem)[] | 包含当前项的上下文菜单项的数组。                                                           |

### 示例

```ts
const connector = docEditor.createConnector();
connector.attachEvent("onContextMenuShow", (options) => {
  connector.addContextMenuItem([{
    text: "mainItem",
    onClick: () => {
      console.log("[CONTEXTMENUCLICK] menuSubItem1");
    },
  }]);
});
```

## addToolbarMenuItem

调用该函数将项目添加到工具栏菜单。使用工具栏菜单的过程与 [plugins](../../../plugins/customization/toolbar.md) 相同，除了使用 *onClick* 方法代替通过 ID 订阅。

### 参数

| 名称  | 类型                                        | 描述                            |
| ----- | ------------------------------------------- | -------------------------------------- |
| items | [ToolbarMenuMainItem](#toolbarmenumainitem) | 工具栏主菜单项参数。 |

### ToolbarMenuMainItem

| 名称 | 类型                                      | 描述                                                     |
| ---- | ----------------------------------------- | --------------------------------------------------------------- |
| guid | string                                    | 插件 guid。                                                |
| tabs | [ToolbarMenuTab](#toolbarmenutab)[] | 包含当前工具栏菜单选项卡的数组项。 |

### ToolbarMenuTab

| 名称  | 类型                                        | 描述                                                     |
| ----- | ------------------------------------------- | --------------------------------------------------------------- |
| id    | string                                      | 选项卡 ID。                                                     |
| text  | string                                      | 选项卡文本。                                                   |
| items | [ToolbarMenuItem](#toolbarmenuitem)[] | 包含当前标签的工具栏菜单项的数组。 |

### ToolbarMenuItem

| 名称             | 类型                                        | 描述                                                                                                                              |
| ---------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| *id*             | string                                      | 项目 ID。                                                                                                                             |
| *type*           | [ToolbarMenuItemType](#toolbarmenuitemtype) | 项目类型。                                                                                                                           |
| *text*           | string                                      | 项目标题。如果此字段为""，则工具栏按钮仅显示图标，不显示标题。                             |
| *hint*           | string                                      | 项目提示。                                                                                                                           |
| *icons*          | string \| object                            | 项目图标（请参阅插件 [config](../../../plugins/configuration/configuration.md#variationsicons) 文档）。 |
| *disabled*       | boolean                                     | 当前项目是否已锁定。                                                                                          |
| *enableToggle*   | boolean                                     | 工具栏菜单项（当 *"split == false"* 时）或其顶部（当 *"split == true"* 时）是否可以切换。               |
| *lockInViewMode* | boolean                                     | 工具栏菜单项是否在视图模式（预览、查看表单、断开连接等时）中自动锁定。 |
| *separator*      | boolean                                     | 工具栏菜单项之间是否使用分隔符。                                                                    |
| *split*          | boolean                                     | 工具栏菜单项是否分为两部分并包含下拉菜单。                                         |
| onClick          | function                                    | 点击事件回调。                                                                                                                |
| *items*          | ToolbarMenuItem[]                    | 包含当前项的上下文菜单项的数组。                                                                         |

### ToolbarMenuItemType

| 类型                      | 描述                                                                                                              |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| "button" \| "big-button" | 工具栏菜单项类型。*button* 和 *big-button* 值相同，可以同样用于指定工具栏按钮。 |

#### 示例

```ts
const connector = docEditor.createConnector();
connector.addToolbarMenuItem({
  tabs: [
    {
      text: "Connector",
      items: [
        {
          id: "toolConnector1",
          type: "button",
          text: "Meaning",
          hint: "Meaning",
          lockInViewMode: true,
          icons: "./icon.svg",
          items: [
            {
              id: "toolC1",
              text: "Text",
              data: "Hello",
              onClick: (data) => {
                console.log(`[TOOLBARMENUCLICK]: ${data}`);
              },
            },
          ],
        },
      ],
    },
  ],
});
```

## attachEvent

被调用以添加事件侦听器的函数，该函数将在指定事件传递到目标时被调用。所有可用事件的列表与插件的列表相同：

- [文本文档事件](../../../plugins/interacting-with-editors/document-api/Events/Events.md)
- [电子表格事件](../../../plugins/interacting-with-editors/spreadsheet-api/Events/Events.md)
- [演示文稿事件](../../../plugins/interacting-with-editors/presentation-api/Events/Events.md)
- [PDF 事件](../../../plugins/interacting-with-editors/pdf-api/Events/Events.md)
- [表单事件](../../../plugins/interacting-with-editors/form-api/Events/Events.md)

### 参数

| 名称     | 类型     | 描述         |
| -------- | -------- | ------------------- |
| name     | string   | 事件名称。     |
| callback | function | 事件侦听器。 |

### 示例

```ts
const connector = docEditor.createConnector();
connector.attachEvent("onChangeContentControl", (obj) => {
  console.log(`[EVENT] onChangeContentControl: ${JSON.stringify(obj)}`);
});
```

## callCommand

调用的函数，用于将数据发送回编辑器。它允许连接器发送可以插入到结果文档文件中的结构化数据（格式化的段落、表格、文本部分和单独的单词等）。

### 参数

| 名称      | 类型     | 必需     | 描述                                                                                                                                                                                                                                                     |
| --------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| commandFn | function | 必需     | 包含 [Office JavaScript API](../../../office-api/get-started/overview.md) 命令的函数，用于操作文档。                                                                                                                                                     |
| callback  | function | 可选     | 接收 `commandFn` 返回值的函数。支持原始类型、普通对象、数组和 TypedArray（最多 10 层嵌套）。如果返回值包含函数或超过嵌套限制，回调将收到 `undefined`。                                                                                                   |
| isNoCalc  | boolean  | 可选     | 是否跳过文档重新计算。仅当您的编辑肯定不需要重新计算时，才设置为 `true`。默认值：`false`。                                                                                                                                                               |

`commandFn` 函数在与其他 JavaScript 数据隔离的独立上下文中执行。如果需要将某些参数或其他数据传递给它，请使用 [Asc.scope](../../../plugins/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) 对象。

### 示例

```ts
const connector = docEditor.createConnector();
connector.callCommand(() => {
  const oDocument = Api.GetDocument();
  const oParagraph = Api.CreateParagraph();
  oParagraph.AddText("Hello");
  oDocument.InsertContent([oParagraph]);
}, () => {
  console.log("[COMMAND] Callback command");
});
```

## connect

调用该函数将连接器连接到编辑器。

:::note
请注意，只有在您已经使用了 [disconnect](#disconnect) 方法断开连接器，并需要将连接器重新连接到编辑器时，才应调用此方法。在创建连接器时，无需使用 *connect* 方法，因为它会同 [createConnector](../methods.md#createconnector) 方法一起自动被调用。
:::

### 示例

```ts
const connector = docEditor.createConnector();
connector.connect();
```

## createWindow

调用该函数来创建 [连接器模态窗口](./connector-window.md) 以在编辑器内显示附加信息。

### 示例

```ts
const connector = docEditor.createConnector();
const testConnectorWindow = connector.createWindow();
```

## detachEvent

调用该函数以删除事件侦听器。

### 参数

| 名称 | 类型   | 描述     |
| ---- | ------ | --------------- |
| name | string | 事件名称。 |

### 示例

```ts
const connector = docEditor.createConnector();
connector.detachEvent("onChangeContentControl");
```

## disconnect

调用该函数以断开连接器与编辑器的连接。

### 示例

```ts
const connector = docEditor.createConnector();
connector.disconnect();
```

## executeMethod

调用该函数以使用连接器执行某些编辑器方法。这些方法的完整列表与插件相同：

- [文本文档方法](../../../plugins/interacting-with-editors/document-api/Methods/Methods.md)
- [电子表格方法](../../../plugins/interacting-with-editors/spreadsheet-api/Methods/Methods.md)
- [演示文稿方法](../../../plugins/interacting-with-editors/presentation-api/Methods/Methods.md)
- [PDF 方法](../../../plugins/interacting-with-editors/pdf-api/Methods/Methods.md)
- [表单方法](../../../plugins/interacting-with-editors/form-api/Methods/Methods.md)

### 参数

| 名称     | 类型     | 描述                                                      |
| -------- | -------- | ---------------------------------------------------------------- |
| name     | string   | 必须执行的特定方法的名称。           |
| args     | array    | 正在使用的方法具有的参数（如果有）。       |
| callback | function | 方法返回的结果。这是一个可选参数。 |

### 示例

```ts
const connector = docEditor.createConnector();
connector.executeMethod("GetCurrentWord", [], (word) => {
  console.log(`[METHOD] GetCurrentWord: ${word}`);
});
```

## updateContextMenuItem

调用该函数来使用指定项更新上下文菜单中的项。

### 参数

| 名称  | 类型                                  | 描述                                           |
| ----- | ------------------------------------- | ----------------------------------------------------- |
| items | [ContextMenuItem](#contextmenuitem)[] | 包含上下文菜单项参数的数组。 |

### 示例

```ts
const connector = docEditor.createConnector();
const items = [
  {
    id: "onConvert",
    text: "Convert to Markdown or HTML",
  },
];

connector.updateContextMenuItem(items);
```
