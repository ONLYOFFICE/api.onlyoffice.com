---
sidebar_position: -5
---

# 清单

*config.json* 文件是插件的配置文件，包含将插件注册到编辑器中所需的主要信息。

## baseUrl

插件路径。所有其他路径都相对于此路径进行计算。如果 baseUrl == ""，则默认使用 sdkjs-plugins 文件夹中的插件路径。

类型：string

示例：""

## 分组

插件所在的分组，在**插件**选项卡中用于与其他插件区分。第一组通常包含 **插件管理器**和 **后台插件**。其他插件则出现在第二组。你可以根据需要添加任意数量的分组。如果省略该参数，插件将被添加到最后一个分组中。

类型： object

示例：

``` json
{
  "name": "group name",
  "rank": 2
} 
```

### 分组名称

分组名称。

类型： string

示例： "分组名称"

### 分组顺序

插件在**插件**选项卡中的分组顺序，从整数 1 开始。

类型： number

示例： 2

![插件分组](/assets/images/plugins/plugin-groups.png#gh-light-mode-only)![插件分组](/assets/images/plugins/plugin-groups.dark.png#gh-dark-mode-only)

## guid

插件标识符，**必须**为 *asc.\{UUID\}* 类型。

类型：string

示例： `asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}`

## 帮助

插件帮助页面的路径。如果设置该参数，插件窗口中将显示帮助按钮。用户点击该按钮时，会跳转到插件的帮助页面。

类型： string

示例： "url_to_help_page"

![插件帮助页面](/assets/images/plugins/plugin-help.png#gh-light-mode-only)![插件帮助页面](/assets/images/plugins/plugin-help.dark.png#gh-dark-mode-only)

## 最低版本

支持当前插件的最低编辑器版本。

类型：string

示例："6.3.0"

## 名称 {#name}

插件名称，将显示在插件工具栏中。

类型： string

示例： "plugin name"

## 插件名称多语言翻译

插件名称的多语言翻译。对象的键为两位语言代码（如 ru、de、it 等），值为各语言对应的插件名称的翻译。

类型：[插件名称多语言翻译](#localetranslate)

示例：`{ "fr": "french plugin name" }`

#### 多语言翻译 {#localetranslate}

文本字段的多语言翻译。对象的键为两位语言代码（如 ru、de、it 等），值为各语言对应的按钮标签翻译。

类型： object

示例：

``` json
{
  "variations": [
      {
          "name": "plugin name",
          "nameLocale": {
              "fr": "french plugin name",
              "es": "spanish plugin name"
          },
          ...
      }
  ]
};
```

## 插件作者

提交该插件以供发布的插件作者。

类型： string

示例： "John Smith"

## onlyofficeScheme

该说明指明了该插件是否包含在标有 ONLYOFFICE 品牌的服务器版或桌面版中。

类型: boolean

示例: true

## 插件变体 {#variations}

插件变体（或子插件），是在原始插件内部创建的子模块。详见[此处](variations.md)。

类型： array of objects

示例：

``` json
[
  {
    "buttons": [
      { 
        "text": "Cancel",
        "primary": false,
        "isviewer": false,
        "textLocale": {
          "fr": "Annuler",
          "es": "Cancelar"
        }
      }
    ],
    "cryptoDisabledForExternalCloud": "true",
    "cryptoDisabledForInternalCloud": "true",
    "cryptoDisabledOnStart": "true",
    "cryptoMode": "1",
    "description": "plugin description",
    "descriptionLocale": {
      "fr": "french plugin description",
      "es": "spanish plugin description"
    },
    "EditorsSupport": ["word", "cell", "slide", "pdf"],
    "events": ["onClick"],
    "icons": "url_to_icon",
    "initData": "",
    "initDataType": "ole",
    "initOnSelectionChanged": true,
    "isCustomWindow": true,
    "isDisplayedInViewer": true,
    "isUpdateOleOnResize": true,
    "isViewer": true,
    "size": [600, 700],
    "store": {
      "background": {
        "light": "#F5F5F5",
        "dark": "#444444"
      },
      "categories": ["specAbilities", "work"],
      "icons": {
        "light": "resources/store/icons",
        "dark": "resources/store/icons"
      },
      "screenshots": ["resources/store/screenshots/screen_1.png"]
    },
    "type": "background",
    "url": "index.html"
  }
]
```

### 插件变体按钮 {#variationsbuttons}

插件界面中使用的可换肤按钮列表。该参数仅适用于插件窗口和面板类型的插件，即当[类型](#variationstype)参数为窗口、面板或右侧面板时使用。

类型： array of [Button](#button)

示例：

``` json
[
  {
    "text": "Cancel",
    "primary": false,
    "isviewer": false,
    "textLocale": {
      "fr": "Annuler",
      "es": "Cancelar"
    }
  }
]
```

![插件按钮](/assets/images/plugins/plugin-buttons.png#gh-light-mode-only)![插件按钮](/assets/images/plugins/plugin-buttons.dark.png#gh-dark-mode-only)

#### 按钮 {#button}

该可换肤插件按钮用于插件界面（仅用于具有独立窗口的可视插件，即 `isVisual == true` 且 `isInsideMode == false`

类型： object

属性：

| 名称       | 类型             | 描述                                                                                                                                                              |
| ---------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| text       | string          | 按钮上显示的标签。                                                                                                                              |
| primary    | boolean         | 定义按钮是否为主按钮。主按钮标记仅影响按钮的皮肤样式。                                                                                  |
| isViewer   | boolean         | 定义按钮是否仅在查看模式下显示。                                                                                                           |
| textLocale | [localeTranslate](#localetranslate) | text 字段的翻译。对象的键为两字母语言代码（如 ru、de、it 等），值为对应语言的按钮标签翻译。 |

示例:

``` json
{
  "variations": [
      {
          "buttons": [
              { 
                  "text": "Cancel",
                  "primary": false,
                  "isviewer": false,
                  "textLocale": {
                      "fr": "Annuler",
                      "es": "Cancelar"
                  }
              }
          ],
          ...
      }
  ]
};
```

### 插件变体是否禁用第三方云的加密

指定是否禁用第三方云的加密。

类型：string

示例："true"

### 插件变体是否禁用本地文件的加密

指定是否禁用本地文件的加密。

类型：string

示例："true"

### 插件变体是否在启动时禁用加密

指定是否在启动时禁用加密。

类型：string

示例："true"

![Encryption disabled](/assets/images/plugins/encryption-disabled.png)

### 加密模式

加密模式。可用值：

- **0** - 无（加密被禁用）；
- **1** - 简单；
- **2** - 高级。

类型：string

示例："1" 

### 变体描述 {#variationsdescription}

描述，即最能描述你插件的内容。将显示在 **ONLYOFFICE 插件市场**。

类型：string

示例："plugin description"

![插件变体描述](/assets/images/plugins/plugin-description.png#gh-light-mode-only)![插件变体描述n](/assets/images/plugins/plugin-description.dark.png#gh-dark-mode-only)

### 描述翻译

对描述字段的翻译。对象的键为两字母语言代码（fr、de、it 等），值为对应语言的插件描述翻译。

类型：[localeTranslate](#localetranslate)

示例：`{ "fr": "french plugin description" }`

### 变体插件支持的编辑器

插件可用的编辑器（**word**、**cell**、**slide** 或 **pdf**）。

类型：array of [editorType](#editortype)

示例：`["word"]`

#### 编辑器类型 {#editortype}

插件可用的编辑器：

- `word` - 文本文档编辑器，
- `cell` - 电子表格编辑器，
- `slide` - 演示文稿编辑器，
- `pdf` - PDF 编辑器。

类型：enumeration

示例：

``` json
{
  "variations": [
      {
          "EditorsSupport": ["word", "cell", "slide"],
          ...
      }
  ]
};
```

### 插件变体事件 {#variationsevents}

当前插件代码中使用的插件事件。了解如何订阅事件，请参见[这里](../../interacting-with-editors/overview/how-to-attach-events.md)。

类型：[事件类型]列(#eventtype)

示例：`["onClick"]`

#### 事件类型

插件事件（如 "onDocumentContentReady"、"onTargetPositionChanged"、"onClick"、"onInputHelperClear"、"onInputHelperInput" 等）。

类型： string

示例：

``` json
{
  "variations": [
      {
          "events": ["onClick"],
          ...
      }
  ]
};
```

### 插件变体图标 {#variationsicons}

插件图标图片文件的 URL。该 URL 允许你为主题（名称、类型）、样式（普通、悬停、激活）和缩放设置自定义规则。更多信息见[这里](../../customization/icons.md)。

类型：string

示例："url_to_icon"

### 插件变体图标2 {#variationsicons2}

用于插件扩展的可缩放图标，已废弃。更多信息见[这里](../../customization/icons.md)。

类型：array of objects

示例：`[ { "100%": { "normal": "icon.png" } } ]`

### 插件变体初始化数据

编辑器启动插件时发送给插件的数据。该参数通常为""。如果 initDataType == "text"，插件启动时将接收选中的文本。加密插件中也可能等于 encryption。

类型：string

示例："text"

![初始化数据](/assets/images/plugins/init-data.png#gh-light-mode-only)![初始化数据](/assets/images/plugins/init-data.dark.png#gh-dark-mode-only)

### 插件变体初始化数据类型 {#variationsinitdatatype}

编辑器中选定并发送给插件的数据类型（**text**、**html**、**ole**、**desktop**、**desktop-external**、**sign** 或 **none**）。

类型：[initDataType](#initdatatype)

示例："ole"

#### 初始化数据类型 {#initdatatype}

编辑器中选定并发送给插件的数据类型：

- `text` - 文本数据，
- `html` - HTML 格式代码，
- `ole` - OLE 对象数据，
- `desktop` - 桌面编辑器数据，
- `desktop-external` - 桌面应用主页面数据（系统消息），
- `none` - 编辑器不会向插件发送任何数据，
- `sign` - 钥匙串插件的签名。

类型：enumeration

示例：

``` json
{
  "variations": [
      {
          "initDataType": "ole",
          ...
      }
  ]
};
```

### 插件变体初始化时监听选区

指定插件是否监听编辑器窗口中的文本选区事件。当插件处理选中文本且输出会随选区变化而改变时，该参数设置为**真**。例如，**翻译器**插件会显示选中文本的翻译。

类型：boolean

示例：true

### 插件变体是否使用自定义窗口

指定插件是否使用无标准边框和按钮的自定义窗口（仅在 type == "window" 时使用）。

类型：boolean

示例：true

### 插件变体是否在查看器中显示

指定插件是否同时在查看器模式和编辑器模式中显示（isDisplayedInViewer == true），或仅在编辑器模式中显示（isDisplayedInViewer == false）。

类型：boolean

示例：true

### 插件变体内嵌模式

已废弃。请改用[类型](#variationstype) 参数。指定插件是否必须显示在编辑器面板内，而非独立窗口。

类型：boolean

示例：true

### 插件变体模态窗口

已废弃。请改用[类型](#variationstype)参数。指定打开的插件窗口是否为模态窗口（仅用于可视插件，且当 isInsideMode 不为 **true** 时）。

类型：boolean

示例：true

### 插件变体系统插件

已废弃。请改用[类型](#variationstype)参数。指定插件是否不在编辑器界面显示，并随服务器（或桌面编辑器启动）后台启动，不干扰其他插件，使它们能同时工作。此类插件无法在编辑器窗口中禁用。

类型：boolean

示例：false

### 插件变体调整大小时更新 OLE

指定在编辑器中使用矢量对象绘制类型调整 OLE 对象大小时，是否必须重绘该对象（仅用于 OLE 对象，即 initDataType == "ole"）。

类型：boolean

示例：true

### 插件变体查看器模式支持

指定插件是否仅在文档以查看器模式时生效。默认值为 **false**。

类型：boolean

示例：false

### 插件变体可视插件

已废弃。请改用[类型](#variationstype)参数。指定插件是否为可视插件（会打开窗口进行操作，或在编辑器面板引入某些扩展）或非可视插件（提供按钮对文档进行某些转换或操作）。

类型：boolean

示例：true

### 插件变体菜单位置 {#variationsmenu}

已废弃。请改用[类型](#variationstype)参数。指定插件放置位置（右侧或左侧面板）。

类型：string

示例："right"

### 插件变体截图

已废弃。请改用 [variations.store.screenshots](#variationsstorescreenshots)参数。插件在 **ONLYOFFICE 插件市场** 中描述用的截图图片文件。

类型：string 数组

示例：`["resources/store/screenshots/screen_1.png"]`

### 插件变体窗口大小

插件窗口尺寸，单位为像素。仅在 type == "window" 时使用。

类型：数字数组

示例：`[600]`

### 插件市场展示选项

插件在 **ONLYOFFICE 插件市场** 中的展示选项。

类型：object

示例：

``` json
{
  "background": {
    "light": "#F5F5F5",
    "dark": "#444444"
  },
  "categories": ["specAbilities", "work"],
  "icons": {
    "light": "resources/store/icons",
    "dark": "resources/store/icons"
  },
  "screenshots": ["resources/store/screenshots/screen_1.png"]
}
```

### 插件市场图标背景色

**ONLYOFFICE 插件市场**中插件图标使用的背景颜色。

类型：object

示例：

``` json
{
  "light": "#F5F5F5",
  "dark": "#444444"
}
```

### 插件变体浅色主题背景色

浅色主题下插件图标使用的背景颜色。

类型：string

示例："#F5F5F5"

![Light icon](/assets/images/plugins/icon-light.png)

### 插件变体深色主题背景色

深色主题下插件图标使用的背景颜色。

类型：string

示例："#444444"

![Dark icon](/assets/images/plugins/icon-dark.png)

### 插件变体分类

**ONLYOFFICE 插件市场**中的插件分类：

- "all" - 全部，
- "recommended" - 推荐，
- "devTools" - 开发者工具，
- "work" - 工作，
- "entertainment" - 娱乐，
- "communication" - 通讯，
- "specAbilities" - 特殊功能。

类型：字符串数组

示例：`["specAbilities", "work"]`

![插件类型](/assets/images/plugins/plugin-categories.png#gh-light-mode-only)![插件类型](/assets/images/plugins/plugin-categories.dark.png#gh-dark-mode-only)

### 插件市场图标路径

**ONLYOFFICE 插件市场**中使用的插件图标图片文件路径。

类型：object

示例：

``` json
{
  "light": "resources/store/icons",
  "dark": "resources/store/icons"
}
```

### 浅色主题图标路径

浅色主题下可缩放插件图标的路径。不同缩放比例的图标文件命名方式如下：

- 100% - `icon.png`
- 125% - `icon@1.25.png`
- 150% - `icon@1.5x.png`
- 175% - `icon@1.75.png`
- 200% - `icon@2x.png`

类型：string

示例："resources/store/icons"

### 深色主题图标路径

深色主题下可缩放插件图标的路径。不同缩放比例的图标文件命名方式如下：

- 100% - `icon.png`
- 125% - `icon@1.25.png`
- 150% - `icon@1.5x.png`
- 175% - `icon@1.75.png`
- 200% - `icon@2x.png`

类型：string

示例："resources/store/icons"

### 插件市场描述截图 {#variationsstorescreenshots}

用于 **ONLYOFFICE 插件市场**插件描述的图片。

类型：字符串数组

示例： `["resources/store/screenshots/screen\_1.png"]`

![插件屏幕截图](/assets/images/plugins/plugin-screenshots.png#gh-light-mode-only)![插件屏幕截图](/assets/images/plugins/plugin-screenshots.dark.png#gh-dark-mode-only)

### 插件类型 {#variationstype} 

插件的[类型](../configuration/types.md)。可用值如下：

- **"system"**：系统插件不显示在编辑器界面中，随服务器（或桌面编辑器启动）在后台运行，不干扰其他插件，使它们能同时工作。此类插件无法在编辑器窗口中禁用。
- **"background"**：后台插件启动后持续运行，其状态（启用/禁用）在会话间保持。可通过顶部工具栏的 **后台插件** 按钮访问后台插件。
- **"window"**：启动时作为独立窗口运行的插件。
- **"panel"**：在左侧面板打开的插件。
- **"panelRight"**：在右侧面板打开的插件。
- **"unvisible"**：启动时不可见的插件。

请注意，任何类型的插件在运行过程中都可以创建窗口和选项卡。

类型：string

示例："background"

### 插件入口

插件入口，即连接 plugin.js 文件（插件工作的基础文件）并启动插件代码的 HTML 文件。详见 [index.html](../entry-point.md) 部分。

类型：string

示例："index.html"

## 版本

插件版本号。

类型：string

示例："1.0"

## 示例

``` json
{
  "baseUrl": "",
  "group": {
    "name": "group name",
    "rank": 2
  },
  "guid": "asc.{FFE1F462-1EA2-4391-990D-4CC84940B754}",
  "help": "url_to_help_page",
  "minVersion": "6.3.0",
  "name": "plugin name",
  "nameLocale": {
    "fr": "french plugin name",
    "es": "spanish plugin name"
  },
  "offered": "John Smith",
  "variations": [
    {
      "buttons": [
        { 
          "text": "Cancel",
          "primary": false,
          "isviewer": false,
          "textLocale": {
            "fr": "Annuler",
            "es": "Cancelar"
          }
        }
      ],
      "cryptoDisabledForExternalCloud": "true",
      "cryptoDisabledForInternalCloud": "true",
      "cryptoDisabledOnStart": "true",
      "cryptoMode": "1",
      "description": "plugin description",
      "descriptionLocale": {
        "fr": "french plugin description",
        "es": "spanish plugin description"
      },
      "EditorsSupport": ["word", "cell", "slide", "pdf"],
      "events": ["onClick"],
      "icons": "url_to_icon",
      "initData": "",
      "initDataType": "ole",
      "initOnSelectionChanged": true,
      "isCustomWindow": true,
      "isDisplayedInViewer": true,
      "isUpdateOleOnResize": true,
      "isViewer": true,
      "size": [600, 700],
      "store": {
        "background": {
          "light": "#F5F5F5",
          "dark": "#444444"
        },
        "categories": ["specAbilities", "work"],
        "icons": {
          "light": "resources/store/icons",
          "dark": "resources/store/icons"
        },
        "screenshots": ["resources/store/screenshots/screen_1.png"]
      },
      "type": "background",
      "url": "index.html"
    }
  ],
  "version": "1.0"
}
```
