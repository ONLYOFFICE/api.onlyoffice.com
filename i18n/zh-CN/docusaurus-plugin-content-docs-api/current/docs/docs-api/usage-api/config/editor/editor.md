# 编辑器

editorConfig 部分允许更改与编辑器界面有关的参数：打开模式（查看器或编辑器）、界面语言、附加按钮等）。

## actionLink

`类型: object`

使用 *data.actionLink* 参数中的 [onMakeActionLink](../events.md#onmakeactionlink) 事件或 [onRequestSendNotify](../events.md#onrequestsendnotify) 事件指定从**文档编辑服务**接收的数据，其中包含有关将滚动到的文档中的操作的信息。

**示例**: `ACTION\_DATA`

## callbackUrl

`类型: string`| **必填**

指定**文档存储服务**的绝对 URL（[必须](../../callback-handler.md)由在自己的服务器上使用 ONLYOFFICE 文档的软件集成商实施）。

**示例**: `https://example.com/url-to-callback.ashx`

## coEditing

`类型: object`

定义共同编辑模式（*Fast* 或 *Strict*）以及更改它的可能性。

此参数用于应用[共同编辑](../../../get-started/how-it-works/co-editing.md#co-editing-modes)和[查看](../../../get-started/how-it-works/viewing.md)模式。

**示例**:

``` json
{
  "mode": "fast",
  "change": true
}
```

### coEditing.mode

`类型: string`

共同编辑模式（*fast* 或 *strict*）。默认值为 **fast**。

:::请注意
如果在编辑器界面中更改 *mode* 设置，它将存储在浏览器本地存储中，并将覆盖作为 *editorConfig.coEditing.mode* 参数发送的任何值。
:::

**示例**: `"fast"`

### coEditing.change

`类型: boolean`

定义是否可以在编辑器界面中更改共同编辑模式。默认值为 **true**。

示例: `true`

![共同编辑模式](/assets/images/editor/coediting-mode.png)

## createUrl

`类型: string`

定义将在其中创建并在创建后可用的文档的绝对 URL。如果未指定，将没有创建按钮。您可以使用 [onRequestCreateNew](../events.md#onrequestcreatenew) 事件代替此字段。

**示例**: `https://example.com/url-to-create-document/`

![创建 URL](/assets/images/editor/create.png)

## lang

`型: string`

定义编辑器界面语言（如果存在英语以外的其他语言）。使用两个字母（**de**、**ru**、**it**等）语言代码设置。默认值为 **"en"**。

:::请注意
要将编辑器界面翻译为葡萄牙语（葡萄牙）或中文（繁体，台湾）（这些语言是在7.2版中添加的），您需要分别使用四个字母的语言代码-**pt-PT**或**zh-TW**。两个字母**pt**语言代码设置葡萄牙语（巴西），**zh**代码指定汉语（中华人民共和国）。
:::

**示例**: `"en"`

## 位置 (#location)

`类型: string`

定义默认测量单位。指定 **us** 或 **ca** 以设置英寸。默认值为 **""**。

:::请注意
设置 **us** 或 **ca** 值时，默认测量单位为英寸。
:::
:::danger[Deprecated]
自 8.2 版起已弃用，请改用[地区](#region)参数。
:::

**示例**: `""`

## 模式 {#mode}

`类型: string`

定义编辑器打开模式。可以是 **view** 以打开文档进行查看，也可以是 **edit** 以在编辑模式下打开文档，从而允许对文档数据进行更改。默认值为 **"edit"**。

**示例**: `"edit"`

## 最近 {#recent}

`类型: array of object`

在 **打开最近..** 菜单选项中定义文档存在或不存在。

**示例**:

``` json
[
  {
    "folder": "Example Files",
    "title": "exampledocument1.docx",
    "url": "https://example.com/exampledocument1.docx"
  }
]
```

### recent.folder

`类型: string`

存储文档的文件夹（如果文档存储在根文件夹中，可以为空）。

**示例**: `"Example Files"`

### recent.title

`类型: string`

将在 **Open Recent...** 菜单选项中显示的文档标题。

**示例**: `"exampledocument1.docx"`

### recent.url

存储它的文档的绝对 URL。

`类型: string`

**示例**: `https://example.com/exampledocument1.docx`

![最近的文件](/assets/images/editor/recent.png) 

## 地区 {#region}

`类型: string`

定义货币和日期和时间的默认显示格式（仅在 **电子表格编辑器** 中）。使用四个字母（**en-US**、**fr-FR**等）语言代码设置。对于默认值，采用 *lang* 参数，或者，如果没有与 *lang* 值对应的区域设置可用，则使用 **en-US**。

从 8.2 版开始，此参数还定义所有编辑器类型中的默认测量单位。对于 **...-US** 或 **...-CA** 地区，如果 [editorConfig.customization.unit](../editor/customization/customization-standard-branding.md#unit) 参数中未指定其他值，则默认使用英寸。

**示例**: `"en-US"`

## 模板 {#templates}

`类型: array of object`

在 **Create New\...** 菜单选项中定义模板是否存在。

**示例**:

``` json
[
  {
    "image": "https://example.com/exampletemplate1.png",
    "title": "exampletemplate1.docx",
    "url": "https://example.com/url-to-create-template1"
  }
]
```

### templates.image

`类型: string`

模板图像的绝对 URL。

**示例**: `https://example.com/exampletemplate1.png`

### templates.title

`类型: string`

将在 **Create New\...** 菜单选项中显示的模板标题。

**示例**: `"exampletemplate1.docx"`

### templates.url

`类型: string`

将在其中创建并在创建后可用的文档的绝对 URL。

**示例**: `https://example.com/url-to-create-template1`

![模板](/assets/images/editor/templates.png)

## 用户 {#user}

`类型: object`

定义当前查看或编辑文档的用户。

:::请注意
因为头像 URL 被插入到编辑器框架的 HTML 中，对用户头像的请求是未经授权发送的。此外，还可能出现CORS问题。在这种情况下，请使用base64格式的头像。例如，*"data:image/png,base64,\*\*\*\*\*"*.

请注意，如果您订阅了 [onRequestUsers](../events.md#onrequestusers) 事件并使用 [setUsers](../../methods.md#setusers) 方法，初始化配置中的 *user.image* 字段不是必需的。如果头像以base64格式发送且初始化配置使用JWT签名，我们特别不建议指定此参数。在这种情况下，令牌就会太长。
:::

**示例**:

``` json
{
  "group": "Group1,Group2",
  "id": "78e1e841",
  "image": "https://example.com/url-to-user-avatar.png",
  "name": "John Smith"
}
```

### user.firstname

`类型: string`

用户的名字。

:::danger[Deprecated]
自 4.2 版起已弃用，请改用[user.name](#username)参数。
:::

**示例**: `"John"`

### user.group

`类型: string`

用户所属的组（或用逗号分隔的多个组）。

**示例**: `"Group1,Group2"`

### user.id

`类型: string`

用户的标识。长度限制为 128 个符号。此信息被存储并用于区分共同作者, 在保存和突出显示历史记录（在[更改](../../callback-handler.md#users)列表中）时指出最后更改的 [作者](../../callback-handler.md#changeshistory))，并根据用户数量计算有权访问许可证的用户。我们建议使用一些唯一的匿名哈希。不要在此字段中使用敏感数据，例如姓名或电子邮件。

**示例**: `"78e1e841"`

### user.image

`类型: string`

用户头像的地址。

**示例**: `https://example.com/url-to-user-avatar.png`

### user.lastname

`类型: string`

用户的姓氏。

:::danger[Deprecated]
自 4.2 版起已弃用，请改用[user.name](#username)参数。
:::

**示例**: `"Smith"`

### user.name

`类型: string`

用户的全名。长度限制为 128 个符号。从 4.2 版开始使用。

**示例**: `"John Smith"`

## 示例

``` ts
const config = {
  editorConfig: {
    actionLink: "ACTION_DATA",
    callbackUrl: "https://example.com/url-to-callback.ashx",
    coEditing: {
      mode: "fast",
      change: true,
    },
    createUrl: "https://example.com/url-to-create-document/",
    lang: "en",
    mode: "edit",
    recent: [
      {
        folder: "Example Files",
        title: "exampledocument1.docx",
        url: "https://example.com/exampledocument1.docx",
      },
    ],
    region: "en-US",
    templates: [
      {
        image: "https://example.com/exampletemplate1.png",
        title: "exampletemplate1.docx",
        url: "https://example.com/url-to-create-template1",
      },
    ],
    user: {
      group: "Group1,Group2",
      id: "78e1e841",
      image: "https://example.com/url-to-user-avatar.png",
      name: "John Smith",
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。
