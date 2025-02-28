---
sidebar_label: White label
---

# Customization - White label

自定义部分允许自定义编辑器界面，使其看起来像您的其他产品（如果有），并更改是否出现附加按钮、链接、更改徽标和编辑器所有者详细信息。

在此页面上，您将找到仅适用于 ONLYOFFICE 文档开发者版的 [extended white label license](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) 的定制参数。要索取报价，请联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)。

## 关于

定义**关于**菜单按钮显示还是隐藏。默认值为 **true**。

类型: boolean

示例: true

## features.spellcheck.change

定义拼写检查器设置是否显示拼写检查器设置在所有编辑器中可用。

> 请注意，`features` 对象的其他字段可用于标准品牌，并在 [here](customization-standard-branding.md#features) 中描述。只有 `features.spellcheck.change` 字段需要额外付款。

类型: boolean

示例: true

## 字体 

定义界面元素（按钮、选项卡等）的字体。

类型:  object

示例:

``` ts
const font = {
  name: "Arial",
  size: "11px",
}
```

### font.name

字体名称。

类型: string

示例: "Arial"

### font.size

字体大小。

类型: string

示例: "11px"

## 布局

定义用户可用于隐藏界面元素但不完全禁用功能的参数（例如，如果此功能可从其他元素（如关联菜单）或通过热键获得）。

类型: object

示例:

``` ts
const layout = {
  header: {
    editMode: true,
    save: true,
    users: true,
  },
  leftMenu: {
    mode: true,
    navigation: true,
    spellcheck: true,
  },
  rightMenu: {
    mode: true,
  },
  statusBar: {
    actionStatus: true,
    docLang: true,
    textLang: true,
  },
  toolbar: {
    collaboration: {
      mailmerge: true,
    },
    draw: true,
    file: {
      close: true,
      info: true,
      save: true,
      settings: true,
    },
    home: {},
    layout: true,
    plugins: true,
    protect: true,
    references: true,
    save: true,
    view: {
      navigation: true,
    },
  },
}
```

### layout.header

定义编辑器标题设置。

类型: object

示例:

``` ts
const header = {
  editMode: true,
  save: true,
  users: true,
}
```

### layout.header.editMode

定义是否在标题中显示用于切换编辑器模式的按钮。默认值为 **true**。

类型: boolean

示例: true

### layout.header.save

定义编辑器标题中的**保存**按钮是显示还是隐藏。默认值为 **true**。请注意，当 [compactHeader](#compactheader) 参数设置为 **false**时，将使用此设置。

类型: boolean

示例: true

### layout.header.users

定义是否显示或隐藏带有编辑用户的按钮。默认值为 **true**。

类型: boolean

示例: true

### layout.leftMenu

定义左侧菜单设置。如果此参数是布尔值，则它指定左侧菜单是显示还是隐藏。默认值为**真**。

类型: object or boolean

示例:

``` ts
const leftMenu = {
  mode: true,
  navigation: true,
  spellcheck: true,
}
```

### layout.leftMenu.mode

定义左侧面板可见性的初始值 - 显示或隐藏。它用于**视图**选项卡上的**左侧面板**菜单选项。默认值为**真**。

类型: boolean

示例: true

### layout.leftMenu.navigation

定义**导航**按钮是显示还是隐藏。默认值为 **true**。此参数仅适用于文档编辑器。

类型: boolean

示例: true

### layout.leftMenu.spellcheck

定义**拼写检查**按钮是显示还是隐藏。默认值为 **true**。此参数仅适用于电子表格编辑器。

类型: boolean

示例: true

### layout.rightMenu

定义右侧菜单设置。 如果此参数为布尔值，则指定是否显示或隐藏右侧菜单。默认值为 **true**。

类型: object or boolean

示例:

``` ts
const rightMenu = {
  mode: true,
}
```

### layout.rightMenu.mode

定义右侧面板可见性的初始值 - 显示或隐藏。它用于**视图**选项卡上的**右侧面板**菜单选项。默认值为 **true**。

类型: boolean

示例: true

### layout.statusBar

定义状态栏设置。如果此参数是布尔值，则指定是显示还是隐藏状态栏。默认值为 **true**。

类型: object or boolean

示例:

``` ts
const statusBar = {
  actionStatus: true,
  docLang: true,
  textLang: true,
}
```

### layout.statusBar.actionStatus

定义动作状态是显示还是隐藏。默认值为 **true**。

类型: boolean

示例: true

### layout.statusBar.docLang

定义是显示还是隐藏用于选择文档语言的按钮。默认值为 **true**。此参数仅适用于文档编辑器和演示文稿编辑器。

类型: boolean

示例: true

### layout.statusBar.textLang

定义用于选择文本语言的按钮是显示还是隐藏。默认值为 **true**。此参数仅适用于文档编辑器和演示文稿编辑器。

类型: boolean

示例: true

### layout.toolbar

定义工具栏设置。如果此参数是布尔值，则指定是显示还是隐藏工具栏。默认值为 **true**。

类型: object or boolean

示例:

``` ts
const toolbar = {
  collaboration: {
    mailmerge: true,
  },
  draw: true,
  file: {
    close: true,
    info: true,
    save: true,
    settings: true,
  },
  home: {},
  layout: true,
  plugins: true,
  protect: true,
  references: true,
  save: true,
  view: {
    navigation: true,
  },
}
```

### layout.toolbar.collaboration

定义 **Collaboration** 选项卡设置。如果此参数是布尔值，则指定是否显示或隐藏 **Collaboration** 选项卡。默认值为 **true**。

类型: object or boolean

示例:

``` ts
const collaboration = {
  mailmerge: true,
}
```

### layout.toolbar.collaboration.mailmerge

定义选择邮件合并基础的按钮是否显示或隐藏。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.draw

定义是否显示或隐藏**绘图**选项卡。默认值为**true**。

类型: boolean

示例: true

### layout.toolbar.file

定义**文件**选项卡设置。如果此参数是布尔值，则指定是显示还是隐藏**文件**选项卡。默认值为 **true**。

类型: object or boolean

示例:

``` ts
const file = {
  close: true,
  info: true,
  save: true,
  settings: true,
}
```

### layout.toolbar.file.close

定义**关闭菜单**选项是显示还是隐藏。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.file.info

定义是显示还是隐藏**文档信息**选项。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.file.save

定义**保存**选项是显示还是隐藏。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.file.settings

定义是显示还是隐藏**高级设置**选项。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.home

定义**主页**选项卡设置。无法隐藏此选项卡。

类型: object

示例: {}

### layout.toolbar.home.mailmerge

定义是否显示或隐藏用于选择邮件合并基础的按钮。此参数已弃用，请改用 *toolbar.collaboration.mailmerge* 参数。

类型: boolean

示例: true

### layout.toolbar.layout

定义**布局**选项卡是显示还是隐藏。此参数仅适用于文档编辑器和电子表格编辑器。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.plugins

定义**插件**选项卡是显示还是隐藏。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.protect

定义**保护**选项卡是显示还是隐藏。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.references

定义是显示还是隐藏**参考**选项卡。此参数仅适用于文档编辑器。默认值为 **true**。

类型: boolean

示例: true

### layout.toolbar.save

定义工具栏上的**保存**按钮是显示还是隐藏。默认值为 **true**。请注意，当 [compactHeader](#compactheader)  参数设置为 **true**时，将使用此设置。

类型: boolean

示例: true

### layout.toolbar.view

定义**视图**选项卡设置。如果此参数是布尔值，则指定是显示还是隐藏**视图**选项卡。默认值为 **true**。

类型: object or boolean

示例:

``` ts
const view = {
  navigation: true,
}
```

### layout.toolbar.view.navigation

定义**导航**按钮是显示还是隐藏。默认值为 **true**。此参数仅适用于文档编辑器。

类型: boolean

示例: true

## leftMenu

定义左侧菜单面板是显示还是隐藏。默认值为 **true**。

> 自 7.1 版起已弃用。请使用布局。改为 [layout.leftMenu](#layoutleftmenu) 参数。

类型: boolean

示例: true

## loaderLogo

定义加载文档时将显示的图像徽标的路径（对于此文件没有特别的建议，但最好使用透明背景的.png格式）。当在编辑器中显示时，图像将按比例调整到160像素的高度。

类型: string

示例: `https://example.com/loader-logo.png`

## loaderName

定义加载文档时将显示的文本。

类型: string

示例: "正在加载文档，请稍候…"

## rightMenu

定义右菜单面板是显示还是隐藏。默认值为 **true**。

> 自 7.1 版起已弃用。请改用 [layout.rightMenu](#layoutrightmenu) 参数。

类型: boolean

示例: true

## statusBar

定义状态栏是显示还是隐藏。默认值为 **true**。

> 自 7.1 版起已弃用。请改用 [layout.statusBar](#layoutstatusbar) 参数。

类型: boolean

示例: true

## toolbar

定义顶部工具栏是显示还是隐藏。默认值为 **true**。

> 自 7.1 版起已弃用。请改用 [layout.toolbar](#layouttoolbar) 参数。

类型: boolean

示例: true

## 示例

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    customization: {
      about: true,
      features: {
        spellcheck: {
          change: true,
        },
      },
      font: {
        name: "Arial",
        size: "11px",
      },
      layout: {
        header: {
          editMode: true,
          save: true,
          users: true,
        },
        leftMenu: {
          mode: true,
          navigation: true,
          spellcheck: true,
        },
        rightMenu: {
          mode: true,
        },
        statusBar: {
          actionStatus: true,
          docLang: true,
          textLang: true,
        },
        toolbar: {
          collaboration: {
            mailmerge: true,
          },
          draw: true,
          file: {
            close: true,
            info: true,
            save: true,
            settings: true,
          },
          home: {},
          layout: true,
          plugins: true,
          protect: true,
          references: true,
          save: true,
          view: {
            navigation: true,
          },
        },
      },
      loaderLogo: "https://example.com/loader-logo.png",
      loaderName: "The document is loading, please wait...",
    },
  },
})
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../../get-started/how-it-works/how-it-works.md)章节。
