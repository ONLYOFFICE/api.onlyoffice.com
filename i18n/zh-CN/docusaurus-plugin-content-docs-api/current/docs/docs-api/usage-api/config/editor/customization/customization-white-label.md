---
sidebar_label: White label
---

# 定制 - 白标定制

customization 部分定义编辑器自定义参数。

:::info
此页面上的参数仅适用于 [ONLYOFFICE 文档开发者版](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api)的扩展白标许可证。要索取报价，请联系我们的销售团队 [sales@onlyoffice.com](mailto:sales@onlyoffice.com)。
:::

## 关于

**类型：** `boolean` | **默认值：** `true`

定义**关于**菜单按钮显示还是隐藏。

**示例**: `true`

## features.spellcheck.change

**类型：** `boolean`

定义拼写检查器设置是否显示。此设置在所有编辑器类型中可用。

:::note
`features` 对象的其他字段可用于标准品牌，并在[此处](customization-standard-branding.md#features)中描述。只有 `features.spellcheck.change` 字段需要额外付款。
:::

:::danger[已弃用]
自 9.0.4 版起已弃用。
:::

**示例**: `true`

## 字体 

**类型：** `object`

定义界面元素（按钮、选项卡等）的字体。

**示例**:

``` ts
{
  name: "Arial",
  size: "11px",
}
```

### font.name

**类型：** `string`

字体名称。

**示例**: `"Arial"`

### font.size

**类型：** `string`

字体大小。

**示例**: `"11px"`

## 布局

**类型：** `object`

定义用户可用于隐藏界面元素但不完全禁用功能的参数。隐藏的功能仍可通过上下文菜单或快捷键访问。

**示例**:

``` ts
{
  header: {
    editMode: true,
    save: true,
    user: true,
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

**类型：** `object`

定义编辑器标题设置。

**示例**:

``` ts
{
  editMode: true,
  save: true,
  user: true,
  users: true,
}
```

### layout.header.editMode

**类型：** `boolean` | **默认值：** `true`

定义是否在标题中显示用于切换编辑器模式的按钮。

**示例**: `true`

### layout.header.save

**类型：** `boolean` | **默认值：** `true`

定义编辑器标题中的**保存**按钮是显示还是隐藏。请注意，当 [compactHeader](customization-standard-branding.md#compactheader) 参数设置为 `false` 时，将使用此设置。

**示例**: `true`

### layout.header.user

**类型：** `boolean` | **默认值：** `true`

定义编辑器标题栏中带有用户头像/姓名首字母的图标是否显示或隐藏。

**示例**: `true`

### layout.header.users

**类型：** `boolean` | **默认值：** `true`

定义是否显示或隐藏带有编辑用户的按钮。

**示例**: `true`

### layout.leftMenu

**类型：** `object | boolean` | **默认值：** `true`

定义左侧菜单设置。如果设置为 `false`，左侧菜单将被隐藏。

**示例**:

``` ts
{
  mode: true,
  navigation: true,
  spellcheck: true,
}
```

### layout.leftMenu.mode

**类型：** `boolean` | **默认值：** `true`

定义左侧面板可见性的初始值 - 显示或隐藏。它用于**视图**选项卡上的**左侧面板**菜单选项。

**示例**: `true`

### layout.leftMenu.navigation

**类型：** `boolean` | **默认值：** `true`

定义**导航**按钮是显示还是隐藏。此参数仅适用于文档编辑器。

**示例**: `true`

### layout.leftMenu.spellcheck

**类型：** `boolean` | **默认值：** `true`

定义**拼写检查**按钮是显示还是隐藏。此参数仅适用于电子表格编辑器。

**示例**: `true`

### layout.rightMenu

**类型：** `object | boolean` | **默认值：** `true`

定义右侧菜单设置。如果设置为 `false`，右侧菜单将被隐藏。

**示例**:

``` ts
{
  mode: true,
}
```

### layout.rightMenu.mode

**类型：** `boolean` | **默认值：** `true`

定义右侧面板可见性的初始值 - 显示或隐藏。它用于**视图**选项卡上的**右侧面板**菜单选项。

**示例**: `true`

### layout.statusBar

**类型：** `object | boolean` | **默认值：** `true`

定义状态栏设置。如果设置为 `false`，状态栏将被隐藏。

**示例**:

``` ts
{
  actionStatus: true,
  docLang: true,
  textLang: true,
}
```

### layout.statusBar.actionStatus

**类型：** `boolean` | **默认值：** `true`

定义动作状态是显示还是隐藏。

**示例**: `true`

### layout.statusBar.docLang

**类型：** `boolean` | **默认值：** `true`

定义是显示还是隐藏用于选择文档语言的按钮。此参数仅适用于文档编辑器和演示文稿编辑器。

**示例**: `true`

### layout.statusBar.textLang

**类型：** `boolean` | **默认值：** `true`

定义用于选择文本语言的按钮是显示还是隐藏。此参数仅适用于文档编辑器和演示文稿编辑器。

**示例**: `true`

### layout.toolbar

**类型：** `object | boolean` | **默认值：** `true`

定义工具栏设置。如果设置为 `false`，工具栏将被隐藏。

**示例**:

``` ts
{
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
  insert: {
    file: true,
    field: true,
  },
  layout: {
    pagecolor: true,
  },
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

**类型：** `object | boolean` | **默认值：** `true`

定义 **Collaboration** 选项卡设置。如果设置为 `false`，选项卡将被隐藏。

**示例**:

``` ts
{
  mailmerge: true,
}
```

### layout.toolbar.collaboration.mailmerge

**类型：** `boolean` | **默认值：** `true`

定义选择邮件合并基础的按钮是否显示或隐藏。

**示例**: `true`

### layout.toolbar.draw

**类型：** `boolean` | **默认值：** `true`

定义是否显示或隐藏**绘图**选项卡。

**示例**: `true`

### layout.toolbar.file

**类型：** `object | boolean` | **默认值：** `true`

定义**文件**选项卡设置。如果设置为 `false`，选项卡将被隐藏。

**示例**:

``` ts
{
  close: true,
  info: true,
  save: true,
  settings: true,
}
```

### layout.toolbar.file.close

**类型：** `boolean` | **默认值：** `true`

定义**关闭菜单**选项是显示还是隐藏。

**示例**: `true`

### layout.toolbar.file.info

**类型：** `boolean` | **默认值：** `true`

定义是显示还是隐藏**文档信息**选项。

**示例**: `true`

### layout.toolbar.file.save

**类型：** `boolean` | **默认值：** `true`

定义**保存**选项是显示还是隐藏。

**示例**: `true`

### layout.toolbar.file.settings

**类型：** `boolean` | **默认值：** `true`

定义是显示还是隐藏**高级设置**选项。

**示例**: `true`

### layout.toolbar.home

**类型：** `object`

定义**主页**选项卡设置。无法隐藏此选项卡。

**示例**: `{}`

### layout.toolbar.home.mailmerge

**类型：** `boolean`

定义是否显示或隐藏用于选择邮件合并基础的按钮。

:::danger[已弃用]
请改用 [toolbar.collaboration.mailmerge](#layouttoolbarcollaborationmailmerge) 参数。
:::

**示例**: `true`

### layout.toolbar.insert

**类型：** `object | boolean` | **默认值：** `true`

定义**插入**选项卡设置。如果设置为 `false`，选项卡将被隐藏。此参数仅适用于文档编辑器。

**示例**:

``` ts
{
  file: true,
  field: true,
}
```

### layout.toolbar.insert.field

**类型：** `boolean` | **默认值：** `true`

定义**域**按钮是显示还是隐藏。此参数仅适用于文档编辑器。

**示例**: `true`

### layout.toolbar.insert.file

**类型：** `boolean` | **默认值：** `true`

定义**来自文件的文本**按钮是显示还是隐藏。此参数仅适用于文档编辑器。

**示例**: `true`

### layout.toolbar.layout

**类型：** `object | boolean` | **默认值：** `true`

定义**布局**选项卡设置。如果设置为 `false`，选项卡将被隐藏。此参数仅适用于文档编辑器和电子表格编辑器。

**示例**:

``` ts
{
  pagecolor: true,
}
```

### layout.toolbar.layout.pagecolor

**类型：** `boolean` | **默认值：** `true`

定义**页面颜色**按钮是显示还是隐藏。此参数仅适用于文档编辑器。

**示例**: `true`

### layout.toolbar.plugins

**类型：** `boolean` | **默认值：** `true`

定义**插件**选项卡是显示还是隐藏。

**示例**: `true`

### layout.toolbar.protect

**类型：** `boolean` | **默认值：** `true`

定义**保护**选项卡是显示还是隐藏。

**示例**: `true`

### layout.toolbar.references

**类型：** `boolean` | **默认值：** `true`

定义是显示还是隐藏**参考**选项卡。此参数仅适用于文档编辑器。

**示例**: `true`

### layout.toolbar.save

**类型：** `boolean` | **默认值：** `true`

定义工具栏上的**保存**按钮是显示还是隐藏。请注意，当 [compactHeader](customization-standard-branding.md#compactheader) 参数设置为 `true` 时，将使用此设置。

**示例**: `true`

### layout.toolbar.view

**类型：** `object | boolean` | **默认值：** `true`

定义**视图**选项卡设置。如果设置为 `false`，选项卡将被隐藏。

**示例**:

``` ts
{
  navigation: true,
}
```

### layout.toolbar.view.navigation

**类型：** `boolean` | **默认值：** `true`

定义**导航**按钮是显示还是隐藏。此参数仅适用于文档编辑器。

**示例**: `true`

## leftMenu

**类型：** `boolean` | **默认值：** `true`

定义左侧菜单面板是显示还是隐藏。

:::danger[Deprecated]
自 7.1 版起已弃用，请改用 [layout.leftMenu](#layoutleftmenu) 参数。
:::

**示例**: `true`

## loaderLogo

**类型：** `string`

定义加载文档时显示的图像徽标的路径。当在编辑器中显示时，图像将按比例调整到 160 像素的高度。

:::note
对于此文件没有特别的建议，但最好使用透明背景的 .png 格式。
:::

**示例**: `"https://example.com/loader-logo.png"`

## loaderName

**类型：** `string`

定义加载文档时显示的文本。

**示例**: `"正在加载文档，请稍候…"`

## rightMenu

**类型：** `boolean` | **默认值：** `true`

定义右菜单面板是显示还是隐藏。

:::danger[Deprecated]
自 7.1 版起已弃用。请改用 [layout.rightMenu](#layoutrightmenu) 参数。
:::

**示例**: `true`

## statusBar

**类型：** `boolean` | **默认值：** `true`

定义状态栏是显示还是隐藏。

:::danger[Deprecated]
自 7.1 版起已弃用。请改用 [layout.statusBar](#layoutstatusbar) 参数。
:::

**示例**: `true`

## toolbar

**类型：** `boolean` | **默认值：** `true`

定义顶部工具栏是显示还是隐藏。

:::danger[Deprecated]
自 7.1 版起已弃用。请改用 [layout.toolbar](#layouttoolbar) 参数。
:::

**示例**: `true`

## 示例

``` ts
const config = {
  // ...
  editorConfig: {
    // ...
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
          user: true,
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
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../../get-started/how-it-works/how-it-works.md)章节。
