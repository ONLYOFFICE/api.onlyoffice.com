---
sidebar_position: -3
---

# 窗口与面板

插件可以以模态窗口（modal window）或面板（panel）的形式展示。

![Modal window（模态窗口）](/assets/images/plugins/plugin-window.png#gh-light-mode-only)![Modal window](/assets/images/plugins/plugin-window.dark.png#gh-dark-mode-only)

<img alt="Plugin left panel" src="/assets/images/plugins/plugin-left-panel.png#gh-light-mode-only" width="300px" /><img alt="Plugin left panel" src="/assets/images/plugins/plugin-left-panel.dark.png#gh-dark-mode-only" width="300px" />

可以同时运行多个面板插件。每个插件将在左侧或右侧工具栏显示为一个独立按钮。

## 创建窗口

要为插件创建模态窗口或面板：

1. 在[插件代码](../interacting-with-editors/overview/overview.md)文件中，指定类似于插件配置中 [variations](../structure/manifest/manifest.md#variations) 的模态窗口 / 面板设置。

   参数说明:

   | 名称                     | 类型            | 示例                                                                                                            | 描述                                                                                                                                                                                                                                                               |
   | ------------------------ | --------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   | variations             | 模态面板          |                                                                                                                    | 设置                                                                                                                                                                                                                                        |
   | variations.url         | string          | "settings.html"                                                                                                    | 模态窗口 / 面板的入口文件，即连接 *plugin.js* 文件（用于插件运行的基础文件）并启动插件代码的 HTML 页面。详见 [index.html](../structure/entry-point.md)。 |
   | variations.description | string          | "Description"                                                                                                      | 模态窗口 / 面板的描述文本。                                                                                                                                                                                                                            |
   | variations.type        | string          | "window"                                                                                                           | 插件的[type](../structure/manifest/manifest.md#variationstype)。使用 **"window"** 调取模态窗口，**"panel"** 调取左侧面板，**"panelRight"** 调取右侧面板。                                                                                     |
   | variations.size        | Array.\<number> | [343, 122]                                                                                                         | 模态窗口的尺寸。该参数仅适用于模态窗口。                                                                                                                                                                                                     |
   | variations.buttons     | Array.\<Button> | [ \{ "text": "Cancel", "primary": false, "isviewer": false, "textLocale": \{ "fr": "Annuler", "es": "Cancelar" \} \} ] | 模态窗口中可皮肤化的插件按钮列表。该参数仅适用于模态窗                                                                                                                                                            |
   | variations.isActivated | boolean         | false                                                                                                              | 指定创建的面板是否默认为折叠（**false**）或展开（**true**）。默认值为 **true**。仅当 `variations.type` 为 *"panel"* 或 *"panelRight"*，并且插件版本为 8.3 及以上时该参数才有效。                        |

   示例:

   ``` ts
   function getFullUrl(name) {
     const location = window.location
     const start = location.pathname.lastIndexOf("/") + 1
     const file = location.pathname.slice(start)
     return location.href.replace(file, name)
   }

   const variation = {
     url: getFullUrl("settings.html"),
     description: "Description",
     type: "window",
     size: [343, 122],
     buttons: [
       {
         text: "Save",
         primary: true,
         textLocale: {
           fr: "Enregistrer",
           es: "Guardar",
           de: "Speichern",
           cs: "Uložit",
           zh: "保存",
         },
       },
     ],
   }
   ```

2. 在插件代码文件中定义一个新的插件窗口 / 面板：

   ```ts
   const newWindow = new window.Asc.PluginWindow()
   ```

3. 在[index.html](../structure/entry-point.md) 文件中指定窗口 / 面板的外观。

## 显示窗口

要在编辑器中显示插件的模态窗口 / 面板，请使用 **show** 方法。

参数说明:

| 名称          | 类型        | 描述            |
| ----------- | --------- | ------------- |
| variation | variation | 模态窗口 / 面板设置。 |

返回值：该方法不返回任何数据。

示例:

``` ts
newWindow.show(variation)
```

你也可以使用 *window.Asc.plugin.executeMethod* 的 **ShowWindow** 方法。

参数说明:

| 名称          | 类型        | 描述            |
| ----------- | --------- | ------------- |
| *frameId*   | string    | 框架 ID。        |
| *variation* | variation | 模态窗口 / 面板设置。 |

返回值：该方法不返回任何数据。

示例:

``` ts
const variation = {
  url: location.href.replace(file, "modal.html"),
  description: window.Asc.plugin.tr("Warning"),
  isVisual: true,
  isModal: true,
  EditorsSupport: ["word", "cell", "slide"],
  size: [350, 100],
  buttons: [
    {
      text: window.Asc.plugin.tr("Yes"),
      primary: true,
    },
    {
      text: window.Asc.plugin.tr("No"),
      primary: false,
    },
  ],
}
window.Asc.plugin.executeMethod("ShowWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", variation])
```

## 激活窗口

要激活（前置）插件窗口 / 面板，请使用 window.Asc.plugin.executeMethod 的 **ActivateWindow** 方法。

参数说明：

| 名称        | 类型     | 描述     |
| --------- | ------ | ------ |
| *frameId* | string | 框架 ID。 |

返回值： 此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("ActivateWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}"])
```

## 与窗口进行交互

当鼠标在插件的 iframe 内移动时，可以使用 **MouseMoveWindow** 方法（来自*window.Asc.plugin.executeMethod*）向插件发送事件。

参数说明:

| 名称        | 类型     | 描述     |
| --------- | ------ | ------ |
| *frameId* | string | 框架 ID。 |
| *x*       | number | X 坐标。  |
| *y*       | number | Y 坐标。  |

返回值： 此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("MouseMoveWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 70, 40])
```

- 当鼠标按钮在插件的 iframe 内被松开时，可以使用 **MouseMoveWindow** 方法（来自*window.Asc.plugin.executeMethod*）向插件发送事件。

参数说明:

| 名称        | 类型     | 描述     |
| --------- | ------ | ------ |
| frameId | string | 框架 ID。 |
| x       | number | X 坐标。  |
| y       | number | Y 坐标。  |

返回值： 此方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("MouseUpWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 70, 40])
```

- 你可以通过调用 *window.Asc.plugin.executeMethod* 的 **ResizeWindow** 方法来调整插件模态窗口的大小。

参数说明:

| 名称        | 类型     | 描述       |
| --------- | ------ | -------- |
| frameId | string | 窗口框架 ID  |
| size    | number | 窗口框架大小   |
| minSize | number | 窗口框架最小大小 |
| maxSize | number | 窗口框架最大大小 |

返回值：该方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("ResizeWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", 392, 392, 392])
```

你也可以使用 **resizeWindow** 方法来更改窗口大小，同时更新最小/最大尺寸。

参数说明:

| 名称       | 类型     | 描述     |
| -------- | ------ | ------ |
| width  | number | 窗口宽度   |
| height | number | 窗口高度   |
| minW   | number | 窗口最小宽度 |
| minH   | number | 窗口最小高度 |
| maxW   | number | 窗口最大宽度 |
| maxH   | number | 窗口最大高度 |

返回值：该方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.init = () => {
  this.resizeWindow(392, 147, 392, 147, 392, 147)
}
```

- 你可以通过使用 **command** 方法向模态窗口或面板发送消息。 

参数说明:

| 名称            | 类型     | 描述                 |
| ------------- | ------ | ------------------ |
| messageName | string | 消息名称               |
| data        | string | 消息数据（该数据将发送到事件回调中） |

返回值：该方法不返回任何数据。

示例:

``` ts
newWindow.command("messageName", "data")
```

- 你可以在模态窗口或面板的代码中使用 **sendToPlugin** 方法向插件发送消息。 

参数说明:

| 名称     | 类型     | 描述   |
| ------ | ------ | ---- |
| name | string | 事件名称 |
| data | object | 事件数据 |

返回值：类型为布尔值。

示例:

``` ts
Asc.plugin.sendToPlugin("onWindowMessage", {type: "onWindowReady"})
```

- 你可以通过调用 *window.Asc.plugin.executeMethod* 的 **SendToWindow** 方法向插件模态窗口或面板发送消息。

参数:

| 名称         | 类型     | 描述      |
| ---------- | ------ | ------- |
| windowID | string | 窗口框架 ID |
| name     | string | 事件名称    |
| data     | object | 事件数据    |

返回值：该方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.executeMethod("SendToWindow", ["iframe_asc.{BE5CBF95-C0AD-4842-B157-AC40FEDD9841}", "onWindowMessage", {config: oConfig}])
```

- 你可以在窗口或面板的代码中使用 **attachEvent** 方法订阅来自插件的消息。

参数说明:

| 名称       | 类型       | 描述     |
| -------- | -------- | ------ |
| id     | string   | 事件名称   |
| action | function | 事件监听函数 |

返回值：该方法不返回任何数据。

示例:

``` ts
Asc.plugin.attachEvent("messageName", (message) => {
  console.log(message)
})
```

## 关闭窗口

要关闭插件窗口或面板，请使用 *window.Asc.plugin.executeMethod* 的 **CloseWindow** 方法。

参数:

| 名称        | 类型     | 描述      |
| --------- | ------ | ------- |
| frameId | string | 窗口框架 ID |

返回值：该方法不返回任何数据。

示例:

``` ts
window.Asc.plugin.button = (id, windowId) => {
  if (!modalWindow) {
    return
  }

  if (windowId) {
    switch (id) {
    default:
      window.Asc.plugin.executeMethod("CloseWindow", [windowId])
    }
  }
}
```
