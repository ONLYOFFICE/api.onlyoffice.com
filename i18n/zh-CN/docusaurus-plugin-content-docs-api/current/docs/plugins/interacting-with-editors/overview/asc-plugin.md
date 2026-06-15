---
sidebar_position: -5
---

# Asc.plugin

`window.Asc.plugin` 是 ONLYOFFICE 插件 SDK 的主要对象。它在每个插件中可用，提供与编辑器交互的方法、属性和事件。

## 可用性

在 [index.html](../../fundamentals/configuration/entry-point.md) 中定义的插件脚本加载后，`Asc.plugin` 对象即可使用。入口点中必须包含插件 SDK 脚本：

```html
<script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
```

加载后，`window.Asc.plugin` 对象即可使用。

## 属性

| 名称   | 类型     | 描述                                                                                      |
| ------ | -------- | ----------------------------------------------------------------------------------------- |
| `guid` | `string` | 来自 [config.json](../../fundamentals/configuration/configuration.md#guid) 的插件 GUID。  |
| `info` | `object` | 包含编辑器和 OLE 对象元数据的辅助对象。请参阅[下文](#info-object)。                      |

### info 对象 {#info-object}

`info` 对象存储有关使用该插件的编辑器的信息（编辑器类型、OLE 对象设置等）。它还用于在执行 [callCommand](./how-to-call-commands.md#callcommand) 方法时发送附加参数——例如，将 `recalculate` 设置为 `true` 以强制文档重新计算。

| 名称        | 类型      | 示例                    | 描述                                                                                              |
| ----------- | --------- | ----------------------- | ------------------------------------------------------------------------------------------------- |
| `data`        | `string`  | `{data}`                | 需要发送到 `info` 对象并由插件使用的 OLE 对象数据。                                             |
| `editorType`  | `string`  | `"word"`                | 插件当前运行的编辑器类型。                                                                       |
| `guid`        | `string`  | `asc.{UUID}`            | 当前文档中的 OLE 对象 GUID。                                                                    |
| `height`      | `number`  | `70`                    | OLE 对象高度，以毫米为单位。                                                                     |
| `imgSrc`      | `string`  | `"./resources/img.png"` | 存储在 OLE 对象中并由插件使用的图像链接（其视觉表示）。                                         |
| `mmToPx`      | `number`  | `3`                     | OLE 对象矢量绘制的毫米到像素转换比率。                                                          |
| `objectId`    | `string`  | `"1"`                   | 当前文档中的 OLE 对象标识符。                                                                    |
| `recalculate` | `boolean` | `true`                  | 强制文档重新计算其内容数据。                                                                     |
| `resize`      | `boolean` | `true`                  | 检查 OLE 对象大小是否已更改。                                                                    |
| `width`       | `number`  | `70`                    | OLE 对象宽度，以毫米为单位。                                                                     |

**示例——按编辑器类型分支**：

```ts
Asc.plugin.init = () => {
  switch (Asc.plugin.info.editorType) {
    case "word":
      console.log("Running in a document editor");
      break;
    case "cell":
      console.log("Running in a spreadsheet editor");
      break;
    case "slide":
      console.log("Running in a presentation editor");
      break;
  }
};
```

**示例——读取插件 GUID**：

```ts
Asc.plugin.init = () => {
  const pluginGuid = Asc.plugin.info.guid;
};
```

**示例——强制文档重新计算**：

```ts
Asc.plugin.init = () => {
  Asc.plugin.info.recalculate = true;

  Asc.plugin.callCommand(() => {
    const oDocument = Api.GetDocument();
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText("Hello world!");
    oDocument.InsertContent([oParagraph]);
  }, true);
};
```

**示例——处理 OLE 对象调整大小**：

```ts
if (Asc.plugin.info.resize === true) {
  Asc.plugin.button(0);
}
```

**示例——处理 OLE 对象数据**：

```ts
Asc.plugin.button = (id) => {
  const info = Asc.plugin.info;

  const method = info.objectId === undefined
    ? "asc_addOleObject"
    : "asc_editOleObject";

  if (!info.width) info.width = 70;
  if (!info.height) info.height = 70;

  info.widthPix = Math.trunc(info.mmToPx * info.width);
  info.heightPix = Math.trunc(info.mmToPx * info.height);
  info.imgSrc = window.g_board.getResult(info.widthPix, info.heightPix).image;
  info.data = window.g_board.getData();

  const code = `Api.${method}(${JSON.stringify(info)});`;
  Asc.plugin.callCommand("close", code);
};
```

## 方法

| 方法                                                                                            | 返回值    | 描述                                                                                        |
| ----------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------- |
| [callCommand](./how-to-call-commands.md#callcommand)                                           | 无        | 使用 Office JavaScript API 向编辑器发送命令。                                              |
| [executeMethod](./how-to-call-methods.md#executemethod)                                        | `boolean` | 执行特定的编辑器方法（如 `AddComment`、`GetSelectedText`）。                               |
| [attachEditorEvent](./how-to-attach-events.md#option-1-using-the-attacheditorevent-method)     | 无        | 为编辑器事件添加监听器。                                                                     |
| [detachEditorEvent](./how-to-attach-events.md#detaching-events)                                | 无        | 移除编辑器事件的监听器。                                                                     |
| [attachContextMenuClickEvent](../../customization/context-menu.md#clicking-a-context-menu-item) | 无        | 按 ID 为特定上下文菜单项添加点击监听器。                                                   |
| [attachToolbarMenuClickEvent](../../customization/toolbar.md#attachtoolbarmenuclickevent)       | 无        | 按 ID 为特定工具栏菜单项添加点击监听器。                                                   |
| `tr`                                                                                             | `string`  | 返回给定键的翻译。参阅[本地化](../../fundamentals/configuration/localization.md)。         |
| `onThemeChangedBase`                                                                             | 无        | 基本主题处理程序。必须在自定义 [onThemeChanged](#onthemechanged) 处理程序的开头调用。 |

## executeMethod 目标方法

这些方法通过 `Asc.plugin.executeMethod("MethodName", [...])` 调用。有关编辑器特定方法（`AddComment`、`GetSelectedText` 等），请参阅各编辑器方法参考：[文档](../document-api/Methods/Methods.md)、[电子表格](../spreadsheet-api/Methods/Methods.md)、[演示文稿](../presentation-api/Methods/Methods.md)、[PDF](../pdf-api/Methods/Methods.md)、[表单](../form-api/Methods/Methods.md)。

### AddContextMenuItem

向上下文菜单添加项目。有关完整指南，参阅[上下文菜单](../../customization/context-menu.md)。

**参数**：

| 名称  | 类型                                          | 描述                         |
| ----- | --------------------------------------------- | ---------------------------- |
| items | `Array.<`[ContextMenuItem](#contextmenuitem)`>` | 包含上下文菜单项的数组。 |

**返回值**：此方法不返回任何数据。

#### ContextMenuItem

**类型：** `object`

上下文菜单项。

**属性**：

| 名称     | 类型                       | 描述                                                                                                  |
| -------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| `id`       | `string`                   | 项目 ID。                                                                                             |
| `text`     | `string`                   | 项目标题。                                                                                            |
| `data`     | `string`                   | 项目数据（该数据将发送到点击事件回调）。                                                              |
| `disabled` | `boolean`                  | 指定当前项目是否被禁用。                                                                              |
| `icons`    | `string`                   | 项目图标（参见插件 [config](../../fundamentals/configuration/configuration.md) 文档）。                 |
| `items`    | `Array.<`[ContextMenuItem](#contextmenuitem)`>` | 包含当前项目的上下文菜单项数组。                                                     |

**示例**：

```ts
Asc.plugin.attachEditorEvent("onContextMenuShow", (options) => {
  const items = {
    guid: Asc.plugin.guid,
    items: [
      {
        id: "onNameClick",
        text: "Name",
        items: [],
      },
    ],
  };

  Asc.plugin.executeMethod("AddContextMenuItem", [items]);
});
```

### UpdateContextMenuItem

更新上下文菜单项。有关完整指南，参阅[上下文菜单](../../customization/context-menu.md#updating-a-context-menu-item)。

**参数**：

| 名称  | 类型                                          | 描述                                     |
| ----- | --------------------------------------------- | ---------------------------------------- |
| items | `Array.<`[ContextMenuItem](#contextmenuitem)`>` | 包含当前项目的上下文菜单项数组。 |

**返回值**：此方法不返回任何数据。

**工具栏**：

| 方法                     | 描述                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `AddToolbarMenuItem`     | 向工具栏添加项目。参阅[工具栏](../../customization/toolbar.md#addtoolbarmenuitem)。                   |
| `UpdateToolbarMenuItem`  | 更新工具栏菜单项。参阅[工具栏](../../customization/toolbar.md#updatetoolbarmenuitem)。                |

**窗口和面板**：

| 方法              | 描述                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `ShowWindow`        | 打开插件窗口或面板。参阅[窗口和面板](../../customization/windows-and-panels.md#showing-a-window)。       |
| `ActivateWindow`    | 激活插件窗口。参阅[窗口和面板](../../customization/windows-and-panels.md#activating-a-window)。           |
| `CloseWindow`       | 关闭插件窗口。参阅[窗口和面板](../../customization/windows-and-panels.md#closing-a-window)。               |
| `ResizeWindow`      | 调整插件窗口大小。参阅[窗口和面板](../../customization/windows-and-panels.md#resizewindow)。         |
| `MouseMoveWindow`   | 向窗口发送鼠标移动事件。参阅[窗口和面板](../../customization/windows-and-panels.md#mousemovewindow)。    |
| `MouseUpWindow`     | 向窗口发送鼠标释放事件。参阅[窗口和面板](../../customization/windows-and-panels.md#mouseupwindow)。    |
| `SendToWindow`      | 向窗口发送消息。参阅[窗口和面板](../../customization/windows-and-panels.md#sendtowindow)。           |

**输入助手**：

| 方法              | 描述                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `ShowInputHelper`   | 显示输入助手。参阅[输入助手](../../customization/input-helper.md)。                                        |
| `UnShowInputHelper` | 隐藏输入助手。参阅[输入助手](../../customization/input-helper.md)。                                        |

## 事件 {#events}

事件是分配给 `Asc.plugin` 对象或通过 `attachEditorEvent` 绑定的函数。它们允许插件响应生命周期变化、用户操作和编辑器状态更新。

:::note
这些是在 `Asc.plugin` 对象本身上触发的**插件级**事件。有关编辑器触发的事件（评论、内容控件、选择等），请参阅各编辑器事件参考：[文档](../document-api/Events/Events.md)、[电子表格](../spreadsheet-api/Events/Events.md)、[演示文稿](../presentation-api/Events/Events.md)、[PDF](../pdf-api/Events/Events.md)、[表单](../form-api/Events/Events.md)。
:::

### init

插件初始化并准备运行其主逻辑时调用的函数。这是插件执行工作的入口点——插入内容、调用方法或设置 UI。

对于[输入助手](../../customization/input-helper.md)插件，该函数接收光标附近的当前文本。

**参数**：

| 名称 | 类型     | 描述                                                    |
| ---- | -------- | ------------------------------------------------------- |
| text | `string` | 光标附近的文本。仅传递给输入助手插件。 |

**示例**：

```ts
Asc.plugin.init = (text) => {
  console.log("Plugin initialized, text:", text);
};
```

### button

当任何插件[按钮](../../fundamentals/configuration/configuration.md#variationsbuttons)被点击时调用的函数。如果 `id` 为 `-1`，表示点击了**关闭**按钮（叉号图标）或插件操作被中断。

**参数**：

| 名称     | 类型     | 描述                                                                                                                                               |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | `number` | config.json 的 [buttons](../../fundamentals/configuration/configuration.md#variationsbuttons) 数组中的按钮索引。`-1` 表示关闭按钮。 |
| windowId | `number` | 点击按钮的模态窗口的标识符。                                                                                                    |

**示例**：

```ts
Asc.plugin.button = (id, windowId) => {
  console.log("Button clicked, id:", id, "windowId:", windowId);
};
```

### onMethodReturn

:::danger[已弃用]
请改用 [executeMethod](./how-to-call-methods.md#executemethod) 的 `callback` 参数。
:::

当未提供 `callback` 参数时，用于返回 `executeMethod` 调用结果的函数。

**参数**：

| 名称        | 类型  | 描述                 |
| ----------- | ----- | -------------------- |
| returnValue | `any` | 方法返回的值。 |

**示例**：

```ts
Asc.plugin.onMethodReturn = (returnValue) => {
  console.log("Method returned:", returnValue);
};
```

### onTranslate

插件启动后立即调用以应用翻译的函数，每当编辑器界面语言更改时再次调用。使用它通过 [`tr`](../../fundamentals/configuration/localization.md) 助手本地化 DOM 元素。

**示例**：

```ts
Asc.plugin.onTranslate = () => {
  console.log("Translation applied");

  const label = document.getElementById("button_new");
  if (label) {
    label.innerHTML = Asc.plugin.tr("New");
  }
};
```

:::warning
`onTranslate` 仅用于 DOM 文本本地化。请勿在此处理程序中调用 `executeMethod`、`callCommand` 或其他 API 方法——它们可能尚不可用，因为 `onTranslate` 可能在 `init` 之前触发。
:::

### onThemeChanged

当编辑器主题更改时以及插件初始加载时调用的函数。使用它保持插件外观与编辑器界面一致。

**参数**：

| 名称       | 类型     | 描述                                                                                          |
| ---------- | -------- | --------------------------------------------------------------------------------------------- |
| theme      | `object` | 主题对象，包含 `type`、`name` 和 CSS 变量值（如 `--background-normal`）。 |
| theme.type | `string` | 主题类型：`"light"`、`"dark"` 或 `"contrast-dark"`。                                        |
| theme.name | `string` | 主题名称（如 `"classic"`、`"dark"`）。                                                      |

**示例**：

```ts
function onThemeChanged(theme) {
  console.log("Theme changed:", theme.type, theme.name);

  // 始终首先调用基本实现
  Asc.plugin.onThemeChangedBase(theme);

  if (theme.type === "dark" || theme.type === "contrast-dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

Asc.plugin.onThemeChanged = onThemeChanged;
```

有关完整指南，请参阅[如何自定义主题](./how-to-customize-themes.md)。

### onContextMenuShow

上下文菜单显示时调用的函数。如果插件监听此事件，则必须调用 `AddContextMenuItem` 方法（同步或异步），因为编辑器会等待所有插件的响应后才填充上下文菜单。

**参数**：

| 名称    | 类型                                        | 描述                     |
| ------- | ------------------------------------------- | ------------------------ |
| options | [ContextMenuOptions](#contextmenuoptions) | 上下文菜单的信息。 |

#### ContextMenuOptions

**类型：** `object`

上下文菜单选项。

**属性**：

| 名称       | 类型                                    | 描述                                             |
| ---------- | --------------------------------------- | ------------------------------------------------ |
| Type       | [ContextMenuType](#contextmenutype)   | 上下文菜单类型。                                 |
| header     | `boolean`                               | 指定是否在标题栏内打开上下文菜单。               |
| footer     | `boolean`                               | 指定是否在页脚内打开上下文菜单。                 |
| headerArea | `boolean`                               | 指定是否在标题上打开上下文菜单。                 |
| footerArea | `boolean`                               | 指定是否在页脚上打开上下文菜单。                 |

#### ContextMenuType

**类型：** `"None" | "Target" | "Selection" | "Image" | "Shape" | "OleObject"`

上下文菜单类型：

- `None` — 未使用
- `Target` — 无选中内容
- `Selection` — 选中文本
- `Image` — 选中图片
- `Shape` — 选中形状
- `OleObject` — 选中 OLE 对象

根据选中类型，可以添加不同的上下文菜单项。

**示例**：

```ts
Asc.plugin.attachEditorEvent("onContextMenuShow", (options) => {
  console.log("Context menu shown, options:", options);

  const items = {
    guid: Asc.plugin.guid,
    items: [
      {
        id: "onMyAction",
        text: "My Plugin Action",
        items: [],
      },
    ],
  };

  Asc.plugin.executeMethod("AddContextMenuItem", [items]);
});
```

有关完整指南，请参阅[上下文菜单](../../customization/context-menu.md)。

### onContextMenuClick

当插件添加的上下文菜单项被点击时调用的函数。

**参数**：

| 名称 | 类型     | 描述       |
| ---- | -------- | ---------- |
| id   | `string` | 项目 ID。 |

**示例**：

```ts
Asc.plugin.attachEditorEvent("onContextMenuClick", (id) => {
  console.log("Context menu item clicked:", id);
});
```

:::tip
使用 [`attachContextMenuClickEvent`](../../customization/context-menu.md#clicking-a-context-menu-item) 助手为每个项目 ID 注册单独的处理程序。
:::

### onToolbarMenuClick

当插件添加的工具栏菜单项被点击时调用的函数。

**参数**：

| 名称 | 类型     | 描述       |
| ---- | -------- | ---------- |
| id   | `string` | 项目 ID。 |

**示例**：

```ts
Asc.plugin.attachEditorEvent("onToolbarMenuClick", (id) => {
  console.log("Toolbar item clicked:", id);
});
```

:::tip
使用 [`attachToolbarMenuClickEvent`](../../customization/toolbar.md#attachtoolbarmenuclickevent) 助手为每个项目 ID 注册单独的处理程序。
:::

有关完整指南，请参阅[工具栏](../../customization/toolbar.md)。

## 最简示例 {#minimal-example}

一个完整的 "Hello world" 插件，启动时插入文本：

```ts
Asc.plugin.init = () => {
  console.log("Plugin initialized");

  Asc.scope.text = "Hello world!";

  Asc.plugin.callCommand(() => {
    const oDocument = Api.GetDocument();
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText(Asc.scope.text);
    oDocument.InsertContent([oParagraph]);
  }, true);
};

Asc.plugin.button = (id) => {
  console.log("Button clicked, id:", id);
};
```

有关完整的插件设置（config.json、index.html、文件夹结构），请参阅[入门指南](../../fundamentals/getting-started/what-is-a-plugin.md)。
