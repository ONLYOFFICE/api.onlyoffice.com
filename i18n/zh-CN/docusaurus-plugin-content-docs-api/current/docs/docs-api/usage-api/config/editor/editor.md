# 编辑器

editorConfig 部分定义了编辑器界面参数。

## actionLink

**类型：** `object`

使用 `data.actionLink` 参数中的 [onMakeActionLink](../events.md#onmakeactionlink) 事件或 [onRequestSendNotify](../events.md#onrequestsendnotify) 事件指定从**文档编辑服务**接收的数据，其中包含有关将滚动到的文档中的操作的信息。

**示例**:

```ts
{
  action: {
    type: "bookmark",
    data: "bookmark_name",
  },
}
```

### actionLink.action

**类型：** `object`

文档中要滚动到的操作对象。

### actionLink.action.type

**类型：** `"bookmark" | "comment"`

文档中的操作类型。

**示例**: `"bookmark"`

### actionLink.action.data

**类型：** `string`

与操作关联的数据：书签名称或评论 ID。

**示例**: `"bookmark_name"`

## callbackUrl

**类型：** `string` | **必填**

**文档存储服务**的绝对 URL。此服务[必须](../../callback-handler.md)由在自己的服务器上使用 ONLYOFFICE 文档的软件集成商实施。

**示例**: `"https://example.com/url-to-callback"`

## coEditing

**类型：** `object`

共同编辑模式以及更改它的可能性。此参数用于应用[共同编辑](../../../get-started/how-it-works/co-editing.md#co-editing-modes)和[查看](../../../get-started/how-it-works/viewing.md)模式。

**示例**:

```json
{
  "mode": "fast",
  "change": true
}
```

### coEditing.mode

**类型：** `"fast" | "strict"` | **默认值：** `"fast"`

共同编辑模式。

:::note
如果在编辑器界面中更改 `mode` 设置，它将存储在浏览器本地存储中，并将覆盖作为 `editorConfig.coEditing.mode` 参数发送的任何值。`fast` 模式需要启用自动保存，因此如果 `customization.autosave` 设置为 `false`，它将被强制设为 `true`。
:::

**示例**: `"fast"`

### coEditing.change

**类型：** `boolean` | **默认值：** `true`

是否允许在编辑器界面中更改共同编辑模式。

**示例**: `true`

![共同编辑模式](/assets/images/editor/coediting-mode.png#gh-light-mode-only)![共同编辑模式](/assets/images/editor/coediting-mode.dark.png#gh-dark-mode-only)

## createUrl

**类型：** `string`

将在其中创建并在创建后可用的文档的绝对 URL。

:::note
如果未指定，**创建**按钮将不会显示。您可以使用 [onRequestCreateNew](../events.md#onrequestcreatenew) 事件代替此参数。
:::

**示例**: `"https://example.com/url-to-create-document"`

![创建 URL](/assets/images/editor/create.png#gh-light-mode-only)![创建 URL](/assets/images/editor/create.dark.png#gh-dark-mode-only)

## fileChoiceUrl

**类型：** `string`

在 iframe 中打开的文件选择对话框的 URL，用于插入图像、选择比较文档或选择邮件合并数据源。URL 可以包含 `{documentType}` 和 `{fileExt}` 占位符，它们将被替换为相应的值（例如 `ImagesOnly`、`DocumentsOnly`）。

:::note
需要 `{documentType}` 占位符才能显示*从存储中获取图像*和*从存储中获取文档*按钮。
:::

:::danger[已弃用]
请使用 [onRequestInsertImage](../events.md#onrequestinsertimage)、[onRequestSelectDocument](../events.md#onrequestselectdocument) 或 [onRequestSelectSpreadsheet](../events.md#onrequestselectspreadsheet) 事件代替此参数。
:::

**示例**: `"https://example.com/filechoice?type={documentType}"`

## lang

**类型：** `string` | **默认值：** `"en"`

编辑器界面语言。使用两个字母（`de`、`ru`、`it`等）语言代码。

:::note
要将编辑器界面翻译为葡萄牙语（葡萄牙）或中文（繁体，台湾）（在7.2版中添加），请使用四个字母的语言代码 `pt-PT` 或 `zh-TW`。两个字母 `pt` 语言代码设置葡萄牙语（巴西），`zh` 代码指定汉语（中华人民共和国）。
:::

<details>
<summary>支持的语言代码</summary>

| 代码 | 语言 |
| ---- | ---- |
| `ar` | 阿拉伯语 |
| `az` | 阿塞拜疆语 |
| `be` | 白俄罗斯语 |
| `bg` | 保加利亚语 |
| `ca` | 加泰罗尼亚语 |
| `cs` | 捷克语 |
| `da` | 丹麦语 |
| `de` | 德语 |
| `el` | 希腊语 |
| `en` | 英语 |
| `es` | 西班牙语 |
| `eu` | 巴斯克语 |
| `fi` | 芬兰语 |
| `fr` | 法语 |
| `gl` | 加利西亚语 |
| `he` | 希伯来语 |
| `hr` | 克罗地亚语 |
| `hu` | 匈牙利语 |
| `hy` | 亚美尼亚语 |
| `id` | 印度尼西亚语 |
| `it` | 意大利语 |
| `ja` | 日语 |
| `ko` | 韩语 |
| `lo` | 老挝语 |
| `lv` | 拉脱维亚语 |
| `ms` | 马来语 |
| `nl` | 荷兰语 |
| `no` | 挪威语 |
| `pl` | 波兰语 |
| `pt` | 葡萄牙语（巴西） |
| `pt-PT` | 葡萄牙语（葡萄牙） |
| `ro` | 罗马尼亚语 |
| `ru` | 俄语 |
| `si` | 僧伽罗语 |
| `sk` | 斯洛伐克语 |
| `sl` | 斯洛文尼亚语 |
| `sq` | 阿尔巴尼亚语 |
| `sr` | 塞尔维亚语（拉丁文） |
| `sr-Cyrl` | 塞尔维亚语（西里尔文） |
| `sv` | 瑞典语 |
| `tr` | 土耳其语 |
| `uk` | 乌克兰语 |
| `ur` | 乌尔都语 |
| `vi` | 越南语 |
| `zh` | 中文（简体） |
| `zh-TW` | 中文（繁体） |

</details>

**示例**: `"en"`

## 位置 {#location}

**类型：** `string` | **默认值：** `""`

默认测量单位。指定 `us` 或 `ca` 以设置英寸。

:::danger[Deprecated]
自 8.2 版起已弃用，请改用[地区](#region)参数。
:::

**示例**: `"us"`

## 模式 {#mode}

**类型：** `"edit" | "view"` | **默认值：** `"edit"`

编辑器打开模式。

**示例**: `"view"`

## mergeFolderUrl

**类型：** `string`

用于保存邮件合并结果的文件夹的绝对 URL。

:::danger[已弃用]
请使用 [onRequestSaveAs](../events.md#onrequestsaveas) 事件代替此参数。
:::

**示例**: `"https://example.com/url-to-merge-folder"`

## 最近 {#recent}

**类型：** `object[]`

**打开最近...**菜单选项中文档的存在或不存在。

**示例**:

```json
[
  {
    "folder": "Example Files",
    "title": "exampledocument1.docx",
    "url": "https://example.com/exampledocument1.docx"
  }
]
```

### recent.folder

**类型：** `string`

存储文档的文件夹。如果文档位于根文件夹中，可以为空。

**示例**: `"Example Files"`

### recent.title

**类型：** `string`

将在 **Open Recent...** 菜单选项中显示的文档标题。

**示例**: `"exampledocument1.docx"`

### recent.url

**类型：** `string`

存储它的文档的绝对 URL。

**示例**: `"https://example.com/exampledocument1.docx"`

![最近的文件](/assets/images/editor/recent.png#gh-light-mode-only)![最近的文件](/assets/images/editor/recent.dark.png#gh-dark-mode-only)

## 地区 {#region}

**类型：** `string` | **默认值：** `"en-US"`

货币、日期和时间的默认显示格式（仅在**电子表格编辑器**中）。使用四个字母（`en-US`、`fr-FR`等）语言代码设置。

:::note
如果定义了 `lang` 且存在匹配的区域设置，则默认值取自 `lang` 参数。否则，使用 `en-US`。
:::

:::info
从 8.2 版开始，此参数还定义所有编辑器类型中的默认测量单位。对于 **...-US** 或 **...-CA** 地区，如果 [editorConfig.customization.unit](./customization/customization-standard-branding.md#unit) 参数中未指定其他值，则默认使用英寸。
:::

<details>
<summary>支持的区域设置</summary>

| 代码 | 地区 |
| ---- | ---- |
| `ar-EG` | 阿拉伯语（埃及） |
| `ar-SA` | 阿拉伯语（沙特阿拉伯） |
| `az-Latn-AZ` | 阿塞拜疆语（拉丁文，阿塞拜疆） |
| `bg-BG` | 保加利亚语（保加利亚） |
| `cs-CZ` | 捷克语（捷克共和国） |
| `da-DK` | 丹麦语（丹麦） |
| `de-AT` | 德语（奥地利） |
| `de-CH` | 德语（瑞士） |
| `de-DE` | 德语（德国） |
| `el-GR` | 希腊语（希腊） |
| `en-AU` | 英语（澳大利亚） |
| `en-GB` | 英语（英国） |
| `en-ID` | 英语（印度尼西亚） |
| `en-US` | 英语（美国） |
| `es-ES` | 西班牙语（西班牙） |
| `es-MX` | 西班牙语（墨西哥） |
| `fi-FI` | 芬兰语（芬兰） |
| `fr-CH` | 法语（瑞士） |
| `fr-FR` | 法语（法国） |
| `hu-HU` | 匈牙利语（匈牙利） |
| `id-ID` | 印度尼西亚语（印度尼西亚） |
| `it-CH` | 意大利语（瑞士） |
| `it-IT` | 意大利语（意大利） |
| `ja-JP` | 日语（日本） |
| `ko-KR` | 韩语（韩国） |
| `lv-LV` | 拉脱维亚语（拉脱维亚） |
| `nl-NL` | 荷兰语（荷兰） |
| `pl-PL` | 波兰语（波兰） |
| `pt-BR` | 葡萄牙语（巴西） |
| `pt-PT` | 葡萄牙语（葡萄牙） |
| `ru-RU` | 俄语（俄罗斯） |
| `sk-SK` | 斯洛伐克语（斯洛伐克） |
| `sl-SI` | 斯洛文尼亚语（斯洛文尼亚） |
| `sr-Cyrl-RS` | 塞尔维亚语（西里尔文，塞尔维亚） |
| `sr-Latn-RS` | 塞尔维亚语（拉丁文，塞尔维亚） |
| `sv-FI` | 瑞典语（芬兰） |
| `sv-SE` | 瑞典语（瑞典） |
| `tr-TR` | 土耳其语（土耳其） |
| `uk-UA` | 乌克兰语（乌克兰） |
| `vi-VN` | 越南语（越南） |
| `zh-CN` | 中文（简体） |
| `zh-TW` | 中文（繁体） |

</details>

**示例**: `"en-US"`

## saveAsUrl

**类型：** `string`

用于保存文件的文件夹的绝对 URL。

:::danger[已弃用]
请使用 [onRequestSaveAs](../events.md#onrequestsaveas) 事件代替此参数。
:::

**示例**: `"https://example.com/url-to-save-folder"`

## sharingSettingsUrl

**类型：** `string`

文档共享设置页面的绝对 URL。

:::danger[已弃用]
请使用 [onRequestSharingSettings](../events.md#onrequestsharingsettings) 事件代替此参数。
:::

**示例**: `"https://example.com/url-to-sharing-settings"`

## 模板 {#templates}

**类型：** `object[]`

**Create New...**菜单选项中模板的存在或不存在。

**示例**:

```json
[
  {
    "image": "https://example.com/exampletemplate1.png",
    "title": "exampletemplate1.docx",
    "url": "https://example.com/url-to-create-template1"
  }
]
```

### templates.image

**类型：** `string`

模板图像的绝对 URL。

**示例**: `"https://example.com/exampletemplate1.png"`

### templates.title

**类型：** `string`

将在 **Create New...** 菜单选项中显示的模板标题。

**示例**: `"exampletemplate1.docx"`

### templates.url

**类型：** `string`

将在其中创建并在创建后可用的文档的绝对 URL。

**示例**: `"https://example.com/url-to-create-template1"`

![模板](/assets/images/editor/templates.png#gh-light-mode-only)![模板](/assets/images/editor/templates.dark.png#gh-dark-mode-only)

## 用户 {#user}

**类型：** `object`

当前查看或编辑文档的用户。

:::note
因为头像 URL 被插入到编辑器框架的 HTML 中，对用户头像的请求是未经授权发送的。可能会出现 CORS 问题。在这种情况下，请使用 base64 格式的头像（例如 `"data:image/png;base64,*****"`）。

如果您订阅了 [onRequestUsers](../events.md#onrequestusers) 事件并通过 [setUsers](../../methods.md#setusers) 方法发送头像，初始化配置中的 `user.image` 字段不是必需的。如果头像以 base64 格式发送且初始化配置使用 JWT 签名，不建议指定此参数，因为令牌会太长。
:::

**示例**:

```json
{
  "group": "Group1,Group2",
  "id": "78e1e841",
  "image": "https://example.com/url-to-user-avatar.png",
  "name": "John Smith",
  "roles": ["Role1"]
}
```

### user.group

**类型：** `string`

用户所属的组（或用逗号分隔的多个组）。可用于 `customization.reviewPermissions`、`permissions.reviewGroups` 或 `permissions.commentGroups`。

**示例**: `"Group1,Group2"`

### user.id

**类型：** `string`

用户的标识。长度限制为 128 个符号。此信息被存储并用于：

- 区分共同作者，
- 在保存和突出显示历史记录（在[更改](../../callback-handler.md#history)列表中）时指出最后更改的[作者](../../callback-handler.md#users)，
- 根据用户数量计算有权访问许可证的用户。

:::note
建议使用唯一的匿名哈希。不要使用敏感数据，例如真实姓名或电子邮件。
:::

**示例**: `"78e1e841"`

### user.image

**类型：** `string`

用户头像的地址。

**示例**: `"https://example.com/url-to-user-avatar.png"`

### user.name

**类型：** `string`

用户的全名。长度限制为 128 个符号。

**示例**: `"John Smith"`

### user.roles

**类型：** `string[]`

分配给用户的 PDF 表单填写角色。数组中的第一个角色用于确定用户可以填写哪些表单字段。

**示例**: `["Role1"]`

## customization

**类型：** `object`

customization 部分定义编辑器自定义参数：[标准品牌](customization/customization-standard-branding.md)和[白标](customization/customization-white-label.md)。

## embedded

**类型：** `object`

[embedded](embedded.md) 部分定义嵌入模式参数。

## plugins

**类型：** `object`

[plugins](plugins.md) 部分定义运行时插件参数。

## wopi

**类型：** `object`

WOPI 配置部分。仅在编辑器通过 [WOPI](../../../using-wopi/overview.md) 集成时使用。

### wopi.FileNameMaxLength

**类型：** `integer` | **默认值：** `250`

WOPI 主机支持的文件名最大长度，不包括文件扩展名。对应 CheckFileInfo 中的 [FileNameMaxLength](../../../using-wopi/wopi-rest-api/checkfileinfo.md#FileNameMaxLength) 属性。

**示例**: `20`

## 示例

```ts
const config = {
  // ...
  editorConfig: {
    actionLink: {
      action: {
        type: "bookmark",
        data: "bookmark_name",
      },
    },
    callbackUrl: "https://example.com/url-to-callback",
    coEditing: {
      mode: "fast",
      change: true,
    },
    createUrl: "https://example.com/url-to-create-document",
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
    customization: {
      // ...
    },
    embedded: {
      // ...
    },
    plugins: {
      // ...
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

此处的 **example.com** 表示安装**文档管理器**和**文档存储服务**的服务器名称。要深入了解 ONLYOFFICE 文档服务的客户端-服务器交互机制，请参阅[工作原理](../../../get-started/how-it-works/how-it-works.md)章节。
