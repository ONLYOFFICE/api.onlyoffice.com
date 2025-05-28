---
sidebar_label: Standard branding

---

# 定制 - 白标定制

自定义部分允许自定义编辑器界面，使其看起来像您的其他产品（如果有），并更改是否出现附加按钮、链接、更改徽标和编辑器所有者详细信息。

在此页面上，您将找到 ONLYOFFICE 文档开发者版的 [白标定制](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) 可用的自定义参数。如果您拥有扩展的白标许可证，请访问[白标页面](customization-white-label.md)以了解可用的其他自定义选项。

:::请注意，
只有以下参数可用于移动编辑器：[close](#close), [feedback](#feedback), [goback](#goback), [help](#help), [logo](#logo), [宏模式](#macrosmode), [mobile](#mobile).
:::

## 匿名

`类型: object`

添加对匿名名称的请求：

**示例**:

``` ts
const anonymous = {
  request: true,
  label: "Guest",
}
```

### anonymous.request

`类型: boolean`

定义是否发送请求。默认值为 **true**。

**示例**: `true`

### anonymous.label

`类型: string`

添加到用户名的后缀。默认值为 **Guest**。

**示例**: `"Guest"`

![匿名](/assets/images/editor/anonymous.png)

## 自动保存

`类型: boolean`

定义**自动保存**菜单选项是启用还是禁用。如果设置为 **false**，则只能选择 **Strict** 共同编辑模式，因为 **Fast** 在没有自动保存的情况下不起作用。默认值为 **true**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.autosave* 参数发送的任何值。
:::

**示例**: `true`

## 聊天

`类型: boolean`

定义**聊天**菜单按钮是显示还是隐藏。请注意，如果您隐藏**聊天**按钮，相应的聊天功能也将被禁用。默认值为 **true**。

:::danger[Deprecated]
自 7.1 版起已弃用，请改用 [document.permissions.chat](../../document/permissions.md#chat) 参数。
:::

**示例**: `true`

![聊天](/assets/images/editor/chat.png#gh-light-mode-only)![聊天](/assets/images/editor/chat.dark.png#gh-dark-mode-only)

## 关闭

 `类型: object`
 
 定义用于关闭编辑器的关闭按钮的设置。

 **示例**:

``` ts
const close = {
  visible: true,
  text: "Close file",
}
```

### close.visible

`类型: boolean`

定义用于关闭编辑器的关闭按钮是显示还是隐藏。默认值为 **true**。

**示例**: `true`

### close.text

`类型: string`

定义编辑器标题中按钮的工具提示文本或移动编辑器中的菜单项文本以及 Web 编辑器的 **File** 菜单中的按钮的工具提示文本。

:::请注意，
仅当设置了 [onRequestClose](../../events.md#onrequestclose) 事件时，该参数才可用。如果未声明该事件且未指定 *close* 参数，则不会显示关闭按钮。

请注意，此参数也适用于移动编辑器。
:::

**示例**: `"关闭文件"`

![标题中的十字按钮](/assets/images/editor/cross-button.png#gh-light-mode-only)![标题中的十字按钮](/assets/images/editor/cross-button.dark.png#gh-dark-mode-only)

## commentAuthorOnly

`类型: boolean`

定义用户是否只能编辑和删除他的评论。默认值为 **false**。

:::danger[Deprecated]
自 6.3 版起已弃用，请改用 [document.permissions.editCommentAuthorOnly](../../document/permissions.md#editcommentauthoronly) 和 [document.permissions.deleteCommentAuthorOnly](../../document/permissions.md#deletecommentauthoronly) 字段。
:::

**示例**: `true`

## 评论

`类型: boolean`

定义**注释**菜单按钮是显示还是隐藏。请注意，如果您隐藏**评论**按钮，则相应的评论功能将仅供查看，无法添加和编辑评论。默认值为**true**。

**示例**: `true`

![批注](/assets/images/editor/comment.png#gh-light-mode-only)![批注](/assets/images/editor/comment.dark.png#gh-dark-mode-only)

## compactHeader

`类型: boolean`

定义附加操作按钮是显示在编辑器窗口标题的上部靠近徽标 (**false**) 还是显示在工具栏 (**true**) 中，使标题更紧凑。默认值为 **false**。

**示例**: `false`

![紧凑标题](/assets/images/editor/compactHeader.png#gh-light-mode-only)![紧凑标题](/assets/images/editor/compactHeader.dark.png#gh-dark-mode-only)

## compactToolbar

`类型: boolean`

定义显示的顶部工具栏类型是完整的 (**false**) 还是紧凑的 (**true**)。默认值为 **false**。从 8.3 版开始，此设置也适用于查看器。*查看*模式的默认值为 **true**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.compactToolbar* 参数发送的任何值。
:::

**示例**: `false`

![紧凑工具栏](/assets/images/editor/compactToolbar.png#gh-light-mode-only)![紧凑工具栏](/assets/images/editor/compactToolbar.dark.png#gh-dark-mode-only)

## compatibleFeatures

`类型: boolean`

定义仅与 OOXML 格式兼容的功能的使用。例如，不要对整个文档使用注释。默认值为 **false**。

**示例**: `false`

## 客户

`类型: object`

包含将在编辑器**关于**部分中显示的信息，并对所有编辑器用户可见。

:::请注意，
此参数仅适用于 ONLYOFFICE 文档开发者版的编辑。
:::

**示例**:

``` ts
const customer = {
  address: "My City, 123a-45",
  info: "Some additional information",
  logo: "https://example.com/logo-big.png",
  logoDark: "https://example.com/dark-logo-big.png",
  mail: "john@example.com",
  name: "John Smith and Co.",
  phone: "123456789",
  www: "example.com",
}
```

### customer.address

`类型: string`

授予编辑者或编辑者作者访问权限的公司或个人的邮政地址。

**示例**: `"My City, 123a-45"`

### customer.info

`类型: string`

关于您希望其他人知道的公司或个人的一些附加信息。

**示例**: `"Some additional information"`

### customer.logo

`类型: string`

图片 logo 的路径（这个文件没有特别推荐，但是如果是透明背景的 *.png* 格式会更好）。图片必须具有以下尺寸：432x70.

**示例**: `https://example.com/logo-big.png`

### customer.logoDark

`类型: string`

深色主题图像徽标的路径（此文件没有特别建议，但如果是透明背景的 *.png* 格式会更好）。图片必须具有以下尺寸：432x70.

**示例**: `https://example.com/dark-logo-big.png`

### customer.mail

`类型: string`

授予编辑者或编辑者作者访问权限的公司或个人的电子邮件地址。

**示例**: `john@example.com`

### customer.name

`类型: string`

授予编辑者或编辑者作者访问权限的公司或个人的名称。

**示例**: `"John Smith and Co."`

### customer.phone

`类型: string`

授予编辑器或编辑器作者访问权限的公司或个人的电话。

**示例**: `"123456789"`

### customer.www

`类型: string`

上述公司或个人的主页地址。

**示例**: `"example.com"`

![客户](/assets/images/editor/customer.png#gh-light-mode-only)![客户](/assets/images/editor/customer.dark.png#gh-dark-mode-only)

## 功能

`类型: object`

如果可能，定义用户可以禁用或自定义的参数：

**示例**:

``` ts
const features = {
  featuresTips: true,
  roles: true,
  spellcheck: {
    mode: true,
  },
  tabBackground: {
    mode: "header",
    change: true,
  },
  tabStyle: {
    mode: "fill",
    change: true,
  },
}
```

### features.featuresTips

`类型: boolean`

定义在首次加载时，关于编辑器新功能的提示框是显示还是隐藏。默认值为**true**。

**示例**: `true`

### features.roles

`类型: boolean`

定义是否在 pdf 表单中禁用角色设置。如果该参数等于 **false**，则隐藏角色管理器，并禁用代表特定角色查看表单。在这种情况下，**表单**选项卡上的**管理角色**和**查看表单**按钮以及右侧面板中用于设置字段角色的下拉列表将不会显示。默认值为 **true**。

:::请注意，
此参数仅适用于 ONLYOFFICE 文档开发者版的编辑。
:::

**示例**: `true`

### features.spellcheck

`类型: object | boolean`

定义在加载编辑器时拼写检查器是自动打开还是关闭。如果此参数为布尔值，则将其设置为初始拼写检查值，并且不会隐藏拼写检查设置。默认值为 **true**。

**示例**: `true`

### features.spellcheck.mode

`类型: boolean`

定义在加载编辑器时拼写检查器是自动打开还是关闭。此参数仅适用于文档编辑器和演示文稿编辑器。

:::请注意，
如果在编辑器界面中更改*拼写检查*设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.features.spellcheck* 参数发送的任何值。
:::

**示例**: `true`

### features.tabBackground

`类型: object | string`

定义顶部工具栏选项卡的背景。如果此参数是字符串值（**header** 或 **toolbar**），则将其设置为初始选项卡背景值，并且不会隐藏选项卡背景设置。默认值为 **header**。

**示例**: `"header"`

### features.tabBackground.mode

`类型: string`

定义顶部工具栏选项卡的背景是否与标题背景（**header**）或工具栏背景（*toolbar**）匹配。默认值为 **header**。首次打开编辑器时使用此值。

**示例**: `"header"`

### features.tabBackground.change

`类型: boolean`

定义选项卡背景设置是否显示在 **文件 -> 高级设置** 中。此设置在所有编辑器类型中都可用。

**示例**: `true`

![选项卡背景](/assets/images/editor/tab-background.png#gh-light-mode-only)![选项卡背景](/assets/images/editor/tab-background.dark.png#gh-dark-mode-only)

### features.tabStyle

`类型: object | string`

定义顶部工具栏选项卡的样式。如果此参数是字符串值（**fill** 或 **line**），则将其设置为初始选项卡样式值，并且选项卡样式设置不会被隐藏。默认值为 **fill**。

**示例**: `"fill"`

### features.tabStyle.mode

`类型: string`

定义顶部工具栏选项卡是否清晰显示（**fill**）或仅突出显示以查看选择了哪个选项卡（**line**）。默认值为 **fill**。此值在编辑器首次打开时使用。

**示例**: `"fill"`

### features.tabStyle.change

`类型: boolean`

定义选项卡样式设置是否显示在 **文件 -> 高级设置** 中。此设置在所有编辑器类型中都可用。

**示例**: `true`

![选项卡样式](/assets/images/editor/tab-style.png#gh-light-mode-only)![选项卡样式](/assets/images/editor/tab-style.dark.png#gh-dark-mode-only)

## feedback

`类型: boolean | object`

定义**反馈和支持**菜单按钮的设置。可以是布尔值（仅显示或隐藏**反馈和支持**菜单按钮）或对象。

默认值为 **false**。

:::请注意，
此参数也适用于移动编辑器。
:::

**示例**: `true`

![反馈](/assets/images/editor/feedback.png)

### feedback.url

`类型: string`

单击**反馈和支持**菜单按钮时将打开的网站绝对URL。

**示例**: `https://example.com`

### feedback.visible

`类型: boolean`

显示或隐藏**反馈和支持**菜单按钮。

**示例**: `true`

## forcesave

`类型: boolean`

在**文档编辑服务**中保存文档时（例如单击**保存**按钮等），将文件强制保存请求添加到 [callback handler](../../../callback-handler.md#forcesavetype)。默认值为 **false**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.forcesave* 参数发送的任何值。
:::

**示例**: `false`

## goback

`类型: object`

定义**打开文件位置**菜单按钮和右上角按钮的设置。

:::请注意，
请注意，此参数也适用于移动编辑器。
:::

**示例**:

``` ts
const goback = {
  blank: true,
  text: "Open file location",
  url: "https://example.com",
}
```

![回去](/assets/images/editor/goback.png#gh-light-mode-only)![回去](/assets/images/editor/goback.dark.png#gh-dark-mode-only)

### goback.blank

`类型: boolean`

单击**打开文件位置**按钮时，在新浏览器选项卡/窗口（如果值设置为 **true**）或当前选项卡（如果值设置为 **false** ）中打开网站。默认值为 **true**。

**示例**: `true`

### goback.requestClose

`类型: boolean`

定义如果单击打开文件位置按钮，将调用 [events.onRequestClose](../../events.md#onrequestclose) 事件而不是打开浏览器选项卡或窗口。

:::danger[Deprecated]
自 8.1 版起已弃用。请使用 [close](#close) 参数代替。
:::

**示例**: `false`

### goback.text

`类型: string`

**打开文件位置**菜单按钮和右上角按钮显示的文本（也就是说，不是*转到文档*）。

**示例**: `"打开文件位置"`

### goback.url

`类型: string`

单击**打开文件位置**菜单按钮时将打开的网站绝对 URL。

**示例**: `https://example.com`

## 帮助

`类型: boolean`

定义**帮助**菜单按钮是显示还是隐藏。默认值为 **true**。

:::请注意，
请注意，此参数也适用于移动编辑器。
:::

**示例**: `true`

![帮助](/assets/images/editor/help.png#gh-light-mode-only)![帮助](/assets/images/editor/help.dark.png#gh-dark-mode-only)

## hideNotes

`类型: boolean`

定义注释面板在首次加载时是显示还是隐藏。默认值为 **false**。此参数仅适用于演示文稿编辑器。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.hideNotes* 参数发送的任何值。
:::

**示例**: `false`

![隐藏备注](/assets/images/editor/hideNotes.png#gh-light-mode-only)![隐藏备注](/assets/images/editor/hideNotes.dark.png#gh-dark-mode-only)

## hideRightMenu

`类型: boolean`

定义第一次加载时是否显示或隐藏右侧菜单。默认值为 **true**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.hideRightMenu* 参数发送的任何值。
:::

**示例**: `true`

## hideRulers

`类型: boolean`

定义编辑器标尺是显示还是隐藏。此参数可用于文档和演示文稿编辑器。文档编辑器的默认值为 **false**，演示文稿的默认值为 **true**。

**示例**: `false`

![隐藏标尺](/assets/images/editor/hideRulers.png#gh-light-mode-only)![隐藏标尺](/assets/images/editor/hideRulers.dark.png#gh-dark-mode-only)

## integrationMode

`类型: string`

定义将编辑器嵌入网页的模式。**embed** 值禁止在加载编辑器框架时滚动到编辑器框架，因为焦点未被捕获。

**示例**: `"embed"`

## logo

`类型: object`

更改编辑器标题左上角的图像文件。推荐的图像高度为 20 像素。

:::请注意，
此参数仅适用于 ONLYOFFICE 文档开发者版的编辑。

请注意，此参数也适用于移动编辑器。
:::

**示例**:

``` ts
const logo = {
  image: "https://example.com/logo.png",
  imageDark: "https://example.com/dark-logo.png",
  imageLight: "https://example.com/light-logo.png",
  url: "https://example.com",
  visible: true,
}
```

![标志](/assets/images/editor/logo.png)

### logo.image

`类型: string`

用于在通用工作模式（即所有编辑器的查看和编辑模式）或嵌入模式（请参阅[配置](../../config.md#type)部分以了解如何定义**嵌入**文档类型）中显示的图像文件的路径。图片必须具有以下尺寸：172x40.

**示例**: `https://example.com/logo.png`

### logo.imageDark

`类型: string`

用于深色标题的图像文件的路径（例如，在深色主题中或带有彩色标题的主题中）。图像必须具有以下尺寸：172x40。

**示例**: `https://example.com/dark-logo.png`

### logo.imageLight

`类型: string`

用于浅色标题的图像文件的路径（例如，在灰色主题中）。图像必须具有以下尺寸：172x40。

**示例**: `https://example.com/light-logo.png`

### logo.imageEmbedded

`类型: string`

用于以嵌入模式显示的图像文件的路径（请参阅[配置](../../config.md#type)部分以了解如何定义**嵌入**文档类型）。图片必须具有以下尺寸：248x40。

:::danger[Deprecated]
自 7.0 版起已弃用，请改用*图像*字段。
:::

**示例**: `https://example.com/logo_em.png`

### logo.url

`类型: string`

当有人单击徽标图像时将使用的绝对 URL（可用于访问您的网站等）。保留为空字符串或 *null* 以使徽标不可点击。

**示例**: `https://example.com`

### logo.visible

`类型: boolean`

显示或隐藏徽标。默认值为 **true**。

**示例**: `true`

## macros

`类型: boolean`

定义当编辑器打开时是否自动运行文档宏。默认值为 **true**。**false**值对用户隐藏 [宏设置](#macrosmode) 。

**示例**: `true`

## macrosMode

`类型: string`

定义启用自动开始时的宏运行模式。可以取以下值：

- **disable** - 不自动运行所有宏；
- **enable** - 自动运行所有宏；
- **warn** - 对运行宏发出警告并请求运行它们的权限。

默认值为 **warn**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.macrosMode* 参数发送的任何值。

请注意，此参数也适用于移动编辑器。
:::

**示例**: `"warn"`

## mentionShare

`类型: boolean`

定义在评论中提及后描述事件的提示。如果为 **true**，则提示表示用户将收到通知并访问文档。如果为 **false**，则提示表示用户将仅收到提及通知。默认值为 **true**。

:::请注意，
如果设置了 [onRequestSendNotify](../../events.md#onrequestsendnotify) 事件 ，它将仅可用于评论。
:::

**示例**: `true`

<img alt="Mention share" src="/assets/images/editor/mentionShare.png" width="379px" />

## mobile

`类型: object`

定义移动文档编辑器设置。

:::请注意，
此参数仅适用于移动编辑器。
:::

**示例**:

``` ts
const mobile = {
  forceView: true,
  info: false,
  standardView: false,
}
```

### mobile.forceView

`类型: boolean`

定义在移动文档编辑器中启动时是否启用查看模式。

**示例**: `true`

### mobile.info

`类型: boolean`

定义在移动文档编辑器中是否显示或隐藏**文档信息**按钮。

**示例**: `false`

### mobile.standardView

`类型: boolean`

定义编辑器是否在**标准视图**而不是**移动视图**中打开。

**示例**: `false`

## mobileForceView

`类型: boolean`

定义移动文档编辑器在启动时是否以查看/编辑模式打开。默认值为 **true**。

:::请注意，
请注意，此参数仅适用于移动编辑器。
:::
:::danger[Deprecated]
自版本 8.2 起已弃用。请改用 [mobile](#mobile) 参数。
:::

**示例**: `true`

## 插件

`类型: boolean`

定义 [插件](../../../../../plugin-and-macros/get-started/overview.md) 是否将启动并可用。默认值为 **true**。

**示例**: `true`

## pointerMode

`类型: string`

定义在查看器中加载演示文稿编辑器时的指针模式（**select** 或 **hand**）。默认值为 **select**。

**示例**: `"select"`

![指针模式](/assets/images/editor/pointerMode.png#gh-light-mode-only)![指针模式](/assets/images/editor/pointerMode.dark.png#gh-dark-mode-only)

## 审阅

`类型: object`

包含有关审阅模式的信息。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.review.hoverMode* 和 *editorConfig.customization.review.reviewDisplay* 参数发送的任何值。

[showReviewChanges](#showreviewchanges), [reviewDisplay](#reviewdisplay), [trackChanges](#trackchanges) 参数自 7.0 版起已弃用。请改用 *review* 参数。
:::

**示例**:

``` ts
const review = {
  hideReviewDisplay: false,
  showReviewChanges: false,
  reviewDisplay: "original",
  trackChanges: true,
  hoverMode: false,
}
```

![审阅显示](/assets/images/editor/reviewDisplay.png)

### review.hideReviewDisplay

`类型: boolean`

定义 **显示模式** 按钮是在 **协作** 选项卡上显示还是隐藏。

**示例**: `false`

### review.hoverMode

`类型: boolean`

定义审阅显示模式：通过将鼠标悬停在更改上来在工具提示中显示审阅（**true**），或通过单击更改来在气球中显示审阅（**false**）。

**示例**: `false`

### review.reviewDisplay

`类型: string`

定义打开文档进行查看时将使用的审阅编辑模式。如果[模式](../../editor/editor.md#mode)设置为 **view**，它将仅对文档编辑器可用。

- **markup** - 显示文档，并突出显示建议的更改；
- **simple** - 显示文档并突出显示建议的更改，但气球已关闭；
- **final** - 显示文档并应用了所有建议的更改；
- **original** - 显示原始文档，没有建议的更改。

默认值为 **original**。

**示例**: `"original"`

### review.showReviewChanges

`类型: boolean`

定义在加载编辑器时是否自动显示或隐藏审阅更改面板。默认值为 **false**。

**示例**: `false`

### review.trackChanges

`类型: boolean`

无论 [document.permissions.review](../../document/permissions.md#review) 参数如何，定义是否以审阅编辑模式 (**true**) 打开文档 (**false**) （审阅模式仅针对当前用户更改）。如果参数 *未定义*，则使用 *document.permissions.review* 值（对于所有文档用户）。

**示例**: `true`

## reviewDisplay

 `类型: string`
 
 定义文档编辑器中的审阅编辑模式。此参数可以采用以下值：

- **markup** - 显示文档并突出显示建议的更改；
- **simple** - 显示文档并突出显示建议的更改，但气球已关闭；
- **final** - 显示文档并应用所有建议的更改；
- **original** - 显示原始文档，没有建议的更改。

查看器的默认值是 **original**, 编辑器的默认值是 **markup**。                                                       

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.reviewDisplay* 参数发送的任何值。
:::
:::danger[Deprecated]
自 7.0 版起已弃用。请改用 [review.reviewDisplay](#reviewreviewdisplay) 参数。
:::

**示例**: `"original"`

## showHorizontalScroll

`类型: boolean`

从 8.3 版本开始，定义在加载电子表格编辑器时是否自动显示或隐藏水平滚动条。默认值为 **true**.

**示例**: `true`

## showReviewChanges

`类型: boolean`

定义在加载编辑器时是否自动显示或隐藏审阅更改面板。默认值为 **false**。

:::danger[Deprecated]
自 7.0 版起已弃用。请改用 [review.showReviewChanges](#reviewshowreviewchanges) 参数。
:::

**示例**: `false`

## showVerticalScroll

`类型: boolean`

从 8.3 版本开始，定义在加载电子表格编辑器时是否自动显示或隐藏垂直滚动条。默认值为 **true**.

**示例**: `true` 

## slidePlayerBackground

`类型: string`

从版本 8.3 开始，定义演示文稿编辑器中幻灯片的背景颜色。可以以 HEX、RGB 或 RGBA 格式表示。例如，*#ff0000*、*rgb(255, 0, 0)*、*rgba(255, 0, 0, 0.5)*。

**示例**: `"#000000"`

## spellcheck

`类型: boolean`

定义在加载编辑器时拼写检查器是自动打开还是关闭。拼写检查器仅适用于文档编辑器和演示文稿编辑器。默认值为 **true**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.spellcheck* 参数发送的任何值。
:::
:::danger[Deprecated]
自 7.1 版起已弃用。请改用 [features.spellcheck](#featuresspellcheck) 参数。
:::

**示例**: `true`

## submitForm

`类型: object | boolean`

从版本 8.3 开始，定义**完成并提交**按钮设置。如果此参数是布尔值，则指定**完成并提交**按钮将在顶部工具栏上显示还是隐藏。按钮仅适用于*pdf*格式。默认值为**true**。

**示例**: `true`

![提交按钮](/assets/images/editor/submitForm.png)
![提交按钮](/assets/images/editor/submitForm-message.png)

### submitForm.visible

`类型: boolean`

定义顶部工具栏上是否显示或隐藏 **Complete & Submit** 按钮。按钮仅适用于 *pdf* 格式。默认值为**true**。

**示例**: `true`

### submitForm.resultMessage

`类型: string`

定义表单提交后显示的消息。可用的值如下：

- **""** - 不显示消息；
- **null / undefined** - 显示默认消息；
- **"text"** - 显示用户指定的任何文本。

**示例**: `"text"`

## toolbarHideFileName

`类型: boolean`

定义文档标题在顶部工具栏上是可见的 (**false**) 还是隐藏的 (**true**)。默认值为 **false**。

:::请注意，
当 [compactHeader](#compactheader) 和 [toolbarNoTabs](#toolbarnotabs) 参数设置为 **true**时使用此设置。
:::

**示例**: `false`

![工具栏隐藏文件名](/assets/images/editor/toolbarHideFileName.png)

## toolbarNoTabs

`类型: boolean`

定义顶部工具栏选项卡是清晰显示 (**false**) 还是仅突出显示以查看选择了哪个 (**true**)。默认值为 **false**。

:::danger[Deprecated]
自版本 8.2 起已弃用，请使用 [editorConfig.customization.features.tabStyle](#featurestabstyle) 参数（设置为 **line**）和 [editorConfig.customization.features.tabBackground](#featurestabbackground) 参数（等于 **toolbar**）。
:::

**示例**: `false`

## trackChanges

`类型: boolean`

无论 [document.permissions.review](../../document/permissions.md#review) 参数如何， 定义是(**true**)否(**false**)以审阅编辑模式打开文档（仅针对当前用户更改审阅模式）。如果参数是 *未定义*，则使用 *document.permissions.review* 值（对于所有文档用户）。

:::danger[Deprecated]
自 7.0 版起已弃用。请改用 [review.trackChanges](#reviewtrackchanges) 参数。
:::

**示例**: `true`

## uiTheme

 `类型: string`

 定义编辑器主题设置。可以通过两种方式设置：

- **theme id** - 用户通过其 id 设置主题参数（**theme-light**, **theme-classic-light**, **theme-dark**, **theme-contrast-dark**），
- **default theme** - 将设置默认的深色或浅色主题值（**default-dark**，**default-light**）。默认的浅色主题是 **theme-classic-light**。

第一个选项具有更高的优先级。

除了可用的编辑器主题外，用户还可以为应用程序界面自定义自己的[颜色主题](https://helpcenter.onlyoffice.com/installation/docs-developer-change-theme.aspx)。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.uiTheme* 参数发送的任何值。
:::

**示例**: `"theme-dark"`

## 单元

`类型: string`

定义标尺和对话框中使用的测量单位。可以取以下值：

- **cm** - 厘米;
- **pt** - 点;
- **inch** - 英寸。

默认值为厘米 (**cm**)。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.unit* 参数发送的任何值。
:::

**示例**: `"cm"`

## wordHeadingsColor

`类型: string`

从版本 8.3 开始，定义文档编辑器中默认标题样式的十六进制颜色。

**示例**: `"#00ff00"`

## zoom

`类型: integer`

定义以百分比测量的文档显示缩放值。可以取大于 **0**的值。对于文本文档和演示文稿，可以将此参数设置为 **-1** （使文档适合页面选项）或 **-2** （使文档页面宽度适合编辑器页面）。默认值为 **100**。

:::请注意，
如果在编辑器界面中更改此设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.customization.zoom* 参数发送的任何值。
:::

**示例**: `100`

![自定义](/assets/images/editor/customization.png)

## 示例

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    customization: {
      anonymous: {
        request: true,
        label: "Guest",
      },
      autosave: true,
      close: {
        visible: true,
        text: "Close file",
      },
      comments: true,
      compactHeader: false,
      compactToolbar: false,
      compatibleFeatures: false,
      customer: {
        address: "My City, 123a-45",
        info: "Some additional information",
        logo: "https://example.com/logo-big.png",
        logoDark: "https://example.com/dark-logo-big.png",
        mail: "john@example.com",
        name: "John Smith and Co.",
        phone: "123456789",
        www: "example.com",
      },
      features: {
        featuresTips: true,
        roles: true,
        spellcheck: {
          mode: true,
        },
        tabBackground: {
          mode: "header",
          change: true,
        },
        tabStyle: {
          mode: "fill",
          change: true,
        },
      },
      feedback: {
        url: "https://example.com",
        visible: true,
      },
      forcesave: false,
      goback: {
        blank: true,
        text: "Open file location",
        url: "https://example.com",
      },
      help: true,
      hideNotes: false,
      hideRightMenu: true,
      hideRulers: false,
      integrationMode: "embed",
      logo: {
        image: "https://example.com/logo.png",
        imageDark: "https://example.com/dark-logo.png",
        imageLight: "https://example.com/light-logo.png",
        url: "https://example.com",
        visible: true,
      },
      macros: true,
      macrosMode: "warn",
      mentionShare: true,
      mobile: {
        forceView: true,
        info: false,
        standardView: false,
      },
      plugins: true,
      pointerMode: "select",
      review: {
        hideReviewDisplay: false,
        showReviewChanges: false,
        reviewDisplay: "original",
        trackChanges: true,
        hoverMode: false,
      },
      showHorizontalScroll: true,
      showVerticalScroll: true,
      slidePlayerBackground: "#000000",
      submitForm: {
        visible: true,
        resultMessage: "text",
      },
      toolbarHideFileName: false,
      uiTheme: "theme-dark",
      unit: "cm",
      wordHeadingsColor: "#00ff00",
      zoom: 100,
    },
  },
})
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../../get-started/how-it-works/how-it-works.md)章节。
