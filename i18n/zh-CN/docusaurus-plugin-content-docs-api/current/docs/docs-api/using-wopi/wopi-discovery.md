---
sidebar_position: -8
---

# WOPI发现

[WOPI discovery](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/discovery) 是通过从在线办公软件请求discovery XML 来帮助 WOPI 服务器发现 WOPI 客户端的过程。WOPI 主机使用discovery XML 来指定如何与在线办公软件进行交互。请求被发送到 `https://documentserver/hosting/discovery` 地址，其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

## WOPI 发现操作

发现XML的**action**元素提供了在线办公室的重要特征。此元素表示：

- online office中可用的文档操作，
- 支持的文件格式（扩展名）。

### WOPI 操作 {#wopi-actions}

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称       | 描述                                                                                                                                                                                                                                       |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| view       | 呈现文档的不可编辑视图。                                                                                                                                                                                                        |
| edit       | 允许用户编辑文档。                                                                                                                                                                                                                  |
| editnew    | 使用适合文件类型的空白文件模板创建新文档，并在online office中打开此文档进行编辑。                                                                                                             |
| embedview  | 呈现为嵌入网页而优化的文档的不可编辑视图。此操作从7.2版开始可用。                                                                                                      |
| convert    | 将[二进制格式](./editing-binary-documents.md) (*doc、ppt、xls*) 的文档转换为现代格式 (*docx、pptx、xlsx*)，以便可以在在线办公中进行编辑。此操作从版本 7.3 开始可用。 |
| formsubmit | 支持在表单填写模式下打开 *pdf* 文件。 在这种情况下，即使用户没有使用 *edit* 操作的权限，他们也可能能够对 *pdf* 文件进行更改。此操作从 8.1 版开始可用。       |
| mobileView | 呈现文档的不可编辑视图，该视图已针对智能手机等移动设备上的查看进行了优化。此操作从版本 7.4 开始可用。                                                                                |
| mobileEdit | 允许用户在智能手机等移动设备上编辑文档。此操作从版本 7.4 开始可用。                                                                                                                        |

```mdx-code-block
</APITable>
```

### 属性

| 名称     | 描述                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| requires | 使用操作所需的 WOPI REST 端点。                             |
| urlsrc   | 为了对特定文件调用操作而导航到的 URL。 |

### 示例

``` xml
<action name="edit" ext="docx" requires="locks,update"
    urlsrc="https://word-edit.officeapps.live.com/we/wordeditorframe.aspx?
ui=en-us&amp;thm=1&amp;"/>
```

**发现查询参数**是可以通过 *urlsrc* 属性中的文件存储公开的参数，以自定义编辑器行为。例如，更改语言、主题或聊天。

## WOPI标准 {#wopi-standard}

### 参数

```mdx-code-block
<APITable>
```

| 名称       | 示例                                                          | 描述                                                                                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ui         | en-us                                                            | 指示 WOPI 服务器包含 [\[RFC1766\]](https://datatracker.ietf.org/doc/html/rfc1766.html) 中所述格式的首选 UI 语言。                                                                                            |
| rs         | en-us                                                            | 指示 WOPI 服务器包含 [\[RFC1766\]](https://datatracker.ietf.org/doc/html/rfc1766.html) 中所述格式的首选数据语言，用于语言可能影响数据计算的情况（在电子表格编辑器中）。             |
| thm        | 1                                                                | 指示 WOPI 服务器包含一个值来指定使用的主题。当前值为 *"1"* 表示浅色主题，*"2"* 表示深色主题。                                                                    |
| dchat      | 1                                                                | 指示 WOPI 服务器包含dchat值为 *"1"*，以加载一个不创建或加入聊天会话的文档视图。                                                                                                                       |
| embed      | true                                                             | 表明操作的输出将嵌入网页 (**true**)。                                                                                                                                                                   |
| wopisrc    | https\://\<host\_address>/ wopi/files/(file\_id)                 | 指示 WOPI 服务器包含 [WOPISrc](./key-concepts.md#wopisrc) 值。它告诉 WOPI 客户端在对文件运行 WOPI 操作时回调到哪个 URL。此参数是必需的。                                     |
| favIconUrl | "/web-apps/apps/ documenteditor/main/ resources/img/favicon.ico" | 表示WOPI服务器包括所有在线office应用程序的适当收藏夹的URL。主机应该使用此URL作为其主机页面的收藏夹图标，以便在使用在线office时显示相应的应用程序图标。 |

```mdx-code-block
</APITable>
```

## Nextcloud 特性

### 参数

| 名称 | 示例 | 描述                                                                                                                                                                                                                                           |
| ---- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lang | en-us   | 表示Nextcloud WOPI服务器包含 [\[RFC1766\]](https://datatracker.ietf.org/doc/html/rfc1766.html) 中所述格式的文档语言。 使用 **editnew** 操作创建新文档时使用此语言。 |

## Collabora特性

请注意 Collabora 连接器的 *discovery.xml* 结构。他们通过包含在以下结构的 *app* 元素中的 MIME 类型打开编辑器：

``` xml
<app name="application/msword">
    <action default="true" ext="" name="edit" urlsrc="http://159.89.20.129:9980/loleaflet/ba528af/loleaflet.html?"/>
</app>
```

像这样的 *app* 元素：

``` xml
<app name="Word" favIconUrl="http://localhost:8000/web-apps/apps/documenteditor/main/resources/img/favicon.ico">
```

被 Collabora 连接器忽略。
