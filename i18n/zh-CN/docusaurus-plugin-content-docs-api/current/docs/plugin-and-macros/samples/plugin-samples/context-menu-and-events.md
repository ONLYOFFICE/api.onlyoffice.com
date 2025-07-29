# 右键菜单与事件

跟踪右键菜单的调用事件及其选项的点击操作，同时还会跟踪光标位置的变化。

**插件类型：** 非可视化、非系统插件。  

**支持的编辑器：** 文档。

![Context menu and events](/assets/images/plugins/gifs/context-menu-and-events.gif)

## 安装

将以下代码分别保存到 *config.json*、*index.html* 和 *code.js* 文件中。从[此插件](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_add/resources)下载包含图标的 *resources* 文件夹。将所有文件和该文件夹放入插件目录中，并根据以下说明进行安装：[桌面版](../../tutorials/installing/onlyoffice-desktop-editors.md)、[本地部署版](../../tutorials/installing/onlyoffice-docs-on-premises.md)、或[云端版](../../tutorials/installing/onlyoffice-cloud.md)。

## 使用方法

1. 打开**插件**选项卡并点击**右键菜单与事件**。
2. 在文档中任意位置放置光标，点击鼠标右键，选择**菜单项 1 -> 子菜单项 2**。将在光标位置插入*已点击：onClickItem1Sub2* 消息。
3. 选中任意文本，点击鼠标右键，选择**菜单项 3**。选中的文本将被替换为*已点击：onClickItem3* 消息。
4. 选中任意形状或图像，点击鼠标右键，选择**菜单项 4**。控制台中将显示*已点击：onClickItem4* 消息。
5. 改变光标位置。控制台中将显示*事件：onTargetPositionChanged* 消息。

## 插件结构

1. *config.json*、*index.html* 和 *code.js*
2. 图标

## 配置

``` json
{
  "name": "ContextMenu and Events",
  "guid": "asc.{B617C899-03AA-476F-8D2C-1B7272489CBC}",

  "variations": [
    {
      "description": "example context menu and events",
      "url": "index.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                    
          "100%": {
            "normal": "resources/light/icon.png"
          },
          "125%": {
            "normal": "resources/light/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/light/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/light/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/light/icon@2x.png"
          }
        },
        {
          "style": "dark",
                    
          "100%": {
            "normal": "resources/dark/icon.png"
          },
          "125%": {
            "normal": "resources/dark/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/dark/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/dark/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/dark/icon@2x.png"
          }
        }
      ],
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": false,
      "isModal": false,
      "isInsideMode": false,
      "isSystem": false,

      "initDataType": "none",
      "initData": "",

      "buttons": [],

      "events": [
        "onContextMenuShow",
        "onTargetPositionChanged"
      ]
    }
  ]
}
```

## index.html

``` html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>example context menu and events</title>
        <script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>    
        <script src="scripts/code.js"></script>
    </head>
    <body>
    </body>
</html>
```

## 插件代码

``` ts
console.log("work")
window.Asc.plugin.init = function init() {}
window.Asc.plugin.button = function button(id) {
  this.executeCommand("close", "")
}
window.Asc.plugin.event_onContextMenuShow = function event_onContextMenuShow(options) {
  switch (options.type) {
  case "Target":

    this.executeMethod("AddContextMenuItem", [{
      guid: this.guid,
      items: [
        {
          id: "onClickItem1",
          text: {en: "Item 1", de: "Menü 1"},
          items: [
            {
              id: "onClickItem1Sub1",
              text: {en: "Subitem 1", de: "Untermenü 1"},
              disabled: true,
            },
            {
              id: "onClickItem1Sub2",
              text: {en: "Subitem 2", de: "Untermenü 2"},
              separator: true,
            },
          ],
        },
        {
          id: "onClickItem2",
          text: {en: "Item 2", de: "Menü 2"},
        },
      ],
    }])
    break

  case "Selection":

    this.executeMethod("AddContextMenuItem", [{
      guid: this.guid,
      items: [
        {
          id: "onClickItem3",
          text: {en: "Item 3", de: "Menü 3"},
        },
      ],
    }])
    break

  case "Image":
  case "Shape":

    this.executeMethod("AddContextMenuItem", [{
      guid: this.guid,
      items: [
        {
          id: "onClickItem4",
          text: {en: "Item 4", de: "Menü 4"},
        },
      ],
    }])
    break

  default:
    break
  }
}
window.Asc.plugin.attachContextMenuClickEvent("onClickItem1Sub1", () => {
  window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem1Sub1"])
})
window.Asc.plugin.attachContextMenuClickEvent("onClickItem1Sub2", () => {
  window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem1Sub2"])
})
window.Asc.plugin.attachContextMenuClickEvent("onClickItem2", () => {
  window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem2"])
})
window.Asc.plugin.attachContextMenuClickEvent("onClickItem3", () => {
  window.Asc.plugin.executeMethod("InputText", ["clicked: onClickItem3"])
})
window.Asc.plugin.attachContextMenuClickEvent("onClickItem4", () => {
  console.log("clicked: onClickItem4")
})
window.Asc.plugin.event_onTargetPositionChanged = function event_onTargetPositionChanged() {
  console.log("event: onTargetPositionChanged")
}
```

## 方法与事件

- button
- init
- onTargetPositionChanged
- [attachContextMenuClickEvent](../../customization/context-menu.md#clicking-a-context-menu-item)
- [executeMethod ("AddContextMenuItem")](../../customization/context-menu.md#creating-a-context-menu-item)
- [executeMethod ("InputText")](../../interacting-with-editors/methods/text-document-api/Api/Methods/InputText.md)

## 支持

如需请求功能或报告此插件的问题，请通过 [GitHub Issues](https://github.com/ONLYOFFICE/onlyoffice.github.io/issues) 页面提交。
