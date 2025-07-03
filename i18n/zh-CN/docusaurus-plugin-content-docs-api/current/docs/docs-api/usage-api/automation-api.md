---
sidebar_position: -2
---

# 自动化应用程序编程接口（API）

**连接器**是一个允许从外部源编辑文本文档、电子表格、演示文稿和可填写表单的类。使用"自动化API" 的示例可以在[此处](../samples/external-access-to-the-document-editing/external-access-to-the-document-editing.md)找到。

要创建连接器，请使用**文档编辑器**对象的 [createConnector](./methods.md#createconnector) 方法 ：

``` ts
const connector = docEditor.createConnector()
```

> > 请注意，连接器仅适用于 **ONLYOFFICE文档开发者版**。
>
> 连接器是ONLYOFFICE文档开发者版默认不包含的附加功能，需要额外付费才能使用。请联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com) 获取报价。

连接器与插件具有相同的接口。下面可以找到可用于此类的方法。

## addContextMenuItem

调用该函数将项目添加到上下文菜单。上下文菜单的操作过程与 [plugins](../../plugin-and-macros/customization/context-menu.md) 相同，但 *onClick* 方法除外，该方法用于代替通过 ID 订阅。

参数  :

| 名称  | 类型                                        | 描述                                           |
| ----- | ------------------------------------------- | ----------------------------------------------------- |
| items | Array.\<[ContextMenuItem](#contextmenuitem)\> | 包含上下文菜单项参数的数组。 |

### ContextMenuItem

| 名称       | 类型                     | 描述                                                                                                                |
| ---------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| *id*       | string                   | 项目 ID。                                                                                                           |
| *text*     | string                   | 项目标题。                                                                                                       |
| *data*     | string                   | 项目数据（此数据将发送到点击事件回调）。                                                        |
| *disabled* | boolean                  | 指定当前项是否已禁用。                                                                          |
| *icons*    | string                   | 项目图标（请参阅插件 [config](../../plugin-and-macros/structure/configuration/configuration.md#variationsicons)文档）。 |
| *onClick*  | function                 | 点击事件回调。                                                                                                  |
| *items*    | Array.\<ContextMenuItem> | 包含当前项的上下文菜单项的数组。                                                           |

示例:

``` ts
connector.attachEvent("onContextMenuShow", (options) => {
  connector.addContextMenuItem([{
    text: "mainItem",
    onClick: () => {
      console.log("[CONTEXTMENUCLICK] menuSubItem1")
    },
  }])
})
```

## addToolbarMenuItem

调用该函数将项目添加到工具栏菜单。使用工具栏菜单的过程与 [plugins](../../plugin-and-macros/customization/toolbar.md) 相同，除了使用 *onClick* 方法代替通过 ID 订阅。

参数:

| 名称  | 类型                                        | 描述                            |
| ----- | ------------------------------------------- | -------------------------------------- |
| items | [ToolbarMenuMainItem](#toolbarmenumainitem) | 工具栏主菜单项参数。 |

### ToolbarMenuMainItem

| 名称 | 类型                                      | 描述                                                     |
| ---- | ----------------------------------------- | --------------------------------------------------------------- |
| guid | string                                    | 插件 guid。                                                |
| tabs | Array.\<[ToolbarMenuTab](#toolbarmenutab)\> | 包含当前工具栏菜单选项卡的数组项。 |

### ToolbarMenuTab

| 名称  | 类型                                        | 描述                                                     |
| ----- | ------------------------------------------- | --------------------------------------------------------------- |
| id    | string                                      | 选项卡 ID。                                                     |
| text  | string                                      | 选项卡文本。                                                   |
| items | Array.\<[ToolbarMenuItem](#toolbarmenuitem)\> | 包含当前标签的工具栏菜单项的数组。 |

### ToolbarMenuItem

| 名称             | 类型                                        | 描述                                                                                                                              |
| ---------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| *id*             | string                                      | 项目 ID。                                                                                                                             |
| *type*           | [ToolbarMenuItemType](#toolbarmenuitemtype) | 项目类型。                                                                                                                           |
| *text*           | string                                      | 项目标题。如果此字段为""，则工具栏按钮仅显示图标，不显示标题。                             |
| *hint*           | string                                      | 项目提示。                                                                                                                           |
| *icons*          | string                                      | 对象                                                                                                                                   | 项目图标（请参阅插件 [config](../../plugin-and-macros/structure/configuration/configuration.md#variationsicons) 文档）。 |
| *disabled*       | boolean                                     | 指定当前项目是否已锁定。                                                                                          |
| *enableToggle*   | boolean                                     | 指定工具栏菜单项（当 *"split == false"* 时）或其顶部（当 *"split == true"* 时）是否可以切换。               |
| *lockInViewMode* | boolean                                     | 指定工具栏菜单项是否在视图模式（预览、查看表单、断开连接等时）中自动锁定。 |
| *separator*      | boolean                                     | 指定工具栏菜单项之间是否使用分隔符。                                                                    |
| *split*          | boolean                                     | 指定工具栏菜单项是否分为两部分并包含下拉菜单。                                         |
| onClick          | function                                    | 点击事件回调。                                                                                                                |
| *items*          | Array.\<ToolbarMenuItem>                    | 包含当前项的上下文菜单项的数组。                                                                         |

### ToolbarMenuItemType

工具栏菜单项类型。*button* 和 *big-button* 值相同，可以同样用于指定工具栏按钮。

类型: "button" | "big-button"

示例:

``` ts
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
                console.log(`[TOOLBARMENUCLICK]: ${data}`)
              },
            },
          ],
        },
      ],
    },
  ],
})
```

## attachEvent

被调用以添加事件侦听器的函数，该函数将在指定事件传递到目标时被调用。所有可用事件的列表与插件的列表相同。

参数:

| 名称     | 类型     | 描述         |
| -------- | -------- | ------------------- |
| name     | string   | 事件名称。     |
| callback | function | 事件侦听器。 |

示例:

``` ts
connector.attachEvent("onChangeContentControl", (obj) => {
  console.log(`[EVENT] onChangeContentControl: ${JSON.stringify(obj)}`)
})
```

## callCommand

调用的函数，用于将数据发送回编辑器。它允许连接器发送可以插入到结果文档文件中的结构化数据（格式化的段落、表格、文本部分和单独的单词等）。

> **ONLYOFFICE 文档生成器** 命令只能用于创建内容并将其插入文档编辑器 (使用 *Api.GetDocument().InsertContent(...))*。由于在线编辑器中的联合编辑功能，存在此限制。

参数:

| 名称     | 类型     | 描述                                                                                                                                                                                                                                                                                                                                                                      |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| command  | function | 定义用JavaScript编写的命令，其目的是形成可插入结果文档文件（格式化段落、表格、文本部分和单独单词等）的结构化数据。然后将数据发送给编辑器。该命令必须与 [Office JavaScript API](../../office-api/get-started/overview.md) 语法兼容。|
| callback | function | 方法返回的结果。这是一个可选参数。                                                                                                                                                                                                                                                                                                                 |
| isNoCalc | boolean  | 定义是否可以重新计算文档。**true** 值用于在执行 *command* 参数中的函数后重新计算文档。**false** 值不会重新计算文档 （仅当您的编辑肯定不需要重新计算文档时才使用它）。默认值为 **false**。                                    |

此方法在与其他JavaScript数据隔离的上下文中执行。此方法在与其他JavaScript数据隔离的上下文中执行。如果需要将某些参数或其他数据传递给此方法，请使用 [Asc.scope](../../plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) 对象。

示例:

``` ts
connector.callCommand(() => {
  const oDocument = Api.GetDocument()
  const oParagraph = Api.CreateParagraph()
  oParagraph.AddText("Hello")
  oDocument.InsertContent([oParagraph])
}, () => {
  console.log("[COMMAND] Callback command")
})
```

## 连接

 调用该函数将连接器连接到编辑器。

> 请注意，只有在使用 [disconnect](#disconnect) 方法断开连接器并需要再次将其连接到编辑器时，才应调用此方法。创建连接器时，不需要使用 *connect* 方法，因为它会与 [createConnector](./methods.md#createconnector) 方法一起自动调用。

示例:

``` ts
connector.connect()
```

## createWindow

调用该函数来创建 [connector modal window](#connector-window) 以在编辑器内显示附加信息。

示例:

``` ts
const testConnectorWindow = connector.createWindow()
```

## detachEvent

调用该函数以删除事件侦听器。

参数:

| 名称 | 类型   | 描述     |
| ---- | ------ | --------------- |
| name | string | 事件名称。 |

示例:

``` ts
connector.detachEvent("onChangeContentControl")
```

## disconnect

调用该函数以断开连接器与编辑器的连接。

示例:

``` ts
connector.disconnect()
```

## executeMethod

调用该函数以使用连接器执行某些编辑器方法。这些方法的完整列表与插件相同。

参数:

| 名称     | 类型     | 描述                                                      |
| -------- | -------- | ---------------------------------------------------------------- |
| name     | string   | 必须执行的特定方法的名称。           |
| args     | array    | 正在使用的方法具有的参数（如果有）。       |
| callback | function | 方法返回的结果。这是一个可选参数。 |

示例:

``` ts
connector.executeMethod("GetCurrentWord", [], (word) => {
  console.log(`[METHOD] GetCurrentWord: ${word}`)
})
```

## updateContextMenuItem

调用该函数来使用指定项更新上下文菜单中的项。

参数:

| 名称  | 类型                                         | 描述                                           |
| ----- | -------------------------------------------- | ----------------------------------------------------- |
| items | array of [ContextMenuItem](#contextmenuitem) | 包含上下文菜单项参数的数组。 |

### ContextMenuItem

| 名称     | 类型                     | 描述                                                                                                                |
| -------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| id       | string                   | 项目 ID。                                                                                                               |
| text     | string                   | 项目文本。                                                                                                             |
| data     | string                   | 项目数据（此数据将发送到点击事件回调）。                                                        |
| disabled | boolean                  | 指定当前项目是否已禁用。                                                                          |
| icons    | string                   | 项目图标（请参阅插件 [config](../../plugin-and-macros/structure/configuration/configuration.md#variationsicons) 文档）。 |
| items    | array of ContextMenuItem | 包含当前项的上下文菜单项的数组。                                                         |

示例:

``` ts
const items = [
  {
    id: "onConvert",
    text: "Convert to Markdown or HTML",
  },
]

connector.updateContextMenuItem(items)
```

## Connector window

Connector window 是一个代表连接器窗口的类。要创建它，请使用 connector 对象的 [createWindow](#createwindow) 方法。

您可以在下面找到此类可用的方法。

### attachEvent

调用函数来向模态窗口框架添加事件监听器。每当将指定事件传递给目标时，都会调用此函数。所有可用事件的列表与插件的列表相同。

参数:

| 名称   | 类型     | 描述         |
| ------ | -------- | ------------------- |
| id     | string   | 事件名称。     |
| action | function | 事件侦听器。 |

示例:

``` ts
testConnectorWindow.attachEvent("onWindowMessage", (message) => {
  console.log(`panel message: ${message}`)
})
```

### dispatchEvent

调用函数来将事件发送到模态窗口框架。所有可用事件的列表与插件的列表相同。

参数:

| 名称 | 类型            | 描述     |
| ---- | --------------- | --------------- |
| name | string          | 事件名称。 |
| data | string / object | 事件数据。 |

示例:

``` ts
testConnectorWindow.dispatchEvent("messageName", {
  prop: "value",
})
```

### show

调用函数来在编辑器内显示模态窗口。

参数:

| 名称     | 类型   | 描述                                                                                                                                      |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| settings | object | 模态窗口参数与插件 [variations](../../plugin-and-macros/structure/configuration/configuration.md#variations) 相同。 |

示例:

``` ts
testConnectorWindow.show({
  url: "./window/panel.html",
  description: "Panel example!",
  type: "panel",
  buttons: [],
  icons: "./icon.svg",
})
```

在连接器窗口代码中，您还可以使用以下方法：

### attachEvent

调用函数来订阅来自插件的消息。

参数:

| 名称     | 类型     | 描述         |
| -------- | -------- | ------------------- |
| *id*     | string   | 事件名称。     |
| *action* | function | 事件侦听器。  |

返回：此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.attachEvent("messageName", (message) => {
  console.log(message)
})
```

### sendToPlugin

调用函数来从模态窗口向编辑器发送消息。

参数:

| 名称 | 类型   | 描述     |
| ---- | ------ | --------------- |
| name | string | 事件名称。 |
| data | object | 事件数据。 |

示例:

``` ts
window.Asc.plugin.sendToPlugin("onWindowMessage", {type: "onWindowReady"})
```
