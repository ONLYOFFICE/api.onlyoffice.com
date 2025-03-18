# CheckFileInfo

`GET /wopi/files/(file_id)`

必须为所有 WOPI 操作实施 *CheckFileInfo* 操作。此操作返回有关文件的信息、用户对该文件的权限以及有关 WOPI 主机对该文件所具有的功能的一般信息。此外，某些 CheckFileInfo 属性可能会影响 WOPI 客户端的外观和行为。

## 参数

| 名称     | 类型   | 描述                                                                                                  |
| -------- | ------ | ------------------------------------------------------------------------------------------------------------ |
| file\_id | string | [ID of a file](../key-concepts.md#file-id) 必须是 URL 安全的文件 ID。 |

## 查询参数

| 名称          | 类型   | 描述                                                                                                                      |
| ------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------- |
| access\_token | string | [访问令牌](../key-concepts.md#access-token)主机将用它来确定请求是否被授权。 |

## 请求标头

| 名称                  | 类型   | 是否必填 | 描述                                                       |
| --------------------- | ------ | -------- | ----------------------------------------------------------------- |
| X-WOPI-SessionContext | string | 可选的 | 会话上下文（如果在初始 WOPI 操作 URL 上提供）。 |

## 必需的响应属性

> 请注意，任何响应字符串值的默认值都是空字符串。

| 名称         | 类型   | 示例                  | 描述                                                                                                                                                                     |
| ------------ | ------ | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BaseFileName | string | "Example File Name.docx" | 不带路径的文件名，显示在用户界面 (UI) 中并确定文件扩展名。                                    |
| Version      | string | "Khirz6zTPdfd7"          | 基于服务器文件版本架构的文件的当前版本。每次编辑和保存文档时，都必须更改版本。给定文件的版本号不得重复。 |

## 面包屑导航属性

| 名称                 | 类型   | 示例                                                | 描述                                                                                                                                                          |
| -------------------- | ------ | ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| BreadcrumbBrandName  | string | "Example Brand Name"                                   | 主机的品牌名称。                                                                                                                                          |
| BreadcrumbBrandUrl   | string | `https://example.com/url-to-breadcrumb-brand-page.com` | 当用户单击显示 [BreadcrumbBrandName](#breadcrumb-properties) 的 UI 时，WOPI 客户端导航到的网页的 URL。                  |
| BreadcrumbDocName    | string | "Example Breadcrumb File Name.docx"                    | WOPI 客户端向用户显示的文件名。如果未指定此参数，则使用 [BaseFileName](#required-response-properties) 参数。 |
| BreadcrumbFolderName | string | "Example Folder Name"                                  | 包含文件的容器的名称。                                                                                                                    |
| BreadcrumbFolderUrl  | string | `https://example.com/url-to-breadcrumb-brand-folder`   | 当用户单击显示 [BreadcrumbFolderName](#breadcrumb-properties) 的 UI 时，WOPI 客户端导航到的网页的 URL。                 |

## PostMessage 属性

| 名称                        | 类型    | 示例                     | 描述                                                                                                                                                                                                                                                                                                  |
| --------------------------- | ------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ClosePostMessage            | boolean | true                        | 指定主机是否希望在在线办公软件中的 **Close** UI 激活时接收 [UI\_Close](../postmessage.md#ui_close) PostMessage。                                                                                                                                           |
| EditModePostMessage         | boolean | true                        | 指定主机是否希望在在线办公软件中的 *Edit* UI 激活时接收 [UI\_Edit](../postmessage.md#ui_edit) PostMessage。如果此属性未设置为 *true*，则在线办公软件会在 *Edit* UI 激活时将内部 iframe URL 导航到编辑操作 URL。 |
| EditNotificationPostMessage | boolean | true                        | 指定主机是否希望接收 [Edit\_Notification](../postmessage.md#edit_notification) PostMessage。                                                                                                                                                                                 |
| FileSharingPostMessage      | boolean | true                        | 指定当在线办公软件中的 *Share* UI 激活时，主机是否期望接收 [UI\_Sharing](../postmessage.md#ui_sharing) PostMessage。                                                                                                                                         |
| FileVersionPostMessage      | boolean | true                        | 指定当在线办公软件中的 *Previous Versions* UI 激活时，主机是否期望接收 [UI\_FileVersions](../postmessage.md#ui_fileversions) PostMessage。                                                                                                                   |
| PostMessageOrigin           | string  | `https://exampledomain.com` | [host page](../host-page.md) 正在向其发送和接收 PostMessage 的域。在线办公软件仅向此域发送传出的 PostMessage，并且仅监听来自此域的 PostMessage。                                                                           |

## 文件 URL 属性

| 名称           | 类型   | 示例                                                | 描述                                                                                                                         |
| -------------- | ------ | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| CloseUrl       | string | `https://example.com/url-to-close-page.com`            | 当应用程序关闭或发生不可恢复的错误时，WOPI 客户端应导航到的网页的 URI。 |
| FileSharingUrl | string | `https://example.com/url-to-sharing-page.com`          | 允许用户共享文件的位置的 URI。                                                                         |
| FileVersionUrl | string | `https://example.com/url-to-previous-version-page.com` | 指向允许用户查看文件版本历史记录的位置的 URI。                                                      |
| HostEditUrl    | string | `https://example.com/url-to-host-page.com`             | 指向加载编辑 WOPI 操作的主机页面的 URI。                                                                               |

## 其他杂项属性

| 名称                  | 类型    | 示例                        | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------------- | ------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CopyPasteRestrictions | string  | "BlockAll"                     | 指定 WOPI 客户端是否应禁用应用程序内的**复制和粘贴**功能。默认情况下，所有**复制和粘贴**功能均已启用，即该设置无效。可能的属性值：<br/><br/>- **BlockAll** - 应用程序中的**复制和粘贴**功能完全禁用；<br/><br/>- **CurrentDocumentOnly** - **复制和粘贴**功能已启用，但只能在应用程序中当前打开的文件中复制和粘贴内容。 |
| DisablePrint          | boolean | true                           | 指定 WOPI 客户端是否应禁用所有打印功能。                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| FileExtension         | string  | ".docx"                        | 文件扩展名必须以“。”开头。如果提供，WOPI 客户端将使用此值作为文件扩展名。否则，将从 [BaseFileName](#required-response-properties) 解析扩展名。                                                                                                                                                                                                                                                                                                               |
| FileNameMaxLength     | integer | 20                             | WOPI 主机支持的文件名的最大长度，不包括文件扩展名。默认值为 250。请注意，如果省略该属性或将其明确设置为 0，WOPI 客户端将使用此默认值。                                                                                                                                                                                                                                                                                           |
| LastModifiedTime      | string  | "2009-06-15T13:45:30.0000000Z" | 上次修改文件的时间。此时间必须始终为 UTC 时间，并且必须采用 ISO 8601 往返格式。此属性可以指定为 [Version](#required-response-properties) 属性的替代。                                                                                                                                                                                                                                                                                  |

## 用户元数据属性

| 名称             | 类型    | 示例      | 描述                                                                                                                                                                          |
| ---------------- | ------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| IsAnonymousUser  | boolean | true         | 指定用户是否通过主机进行身份验证。对于未经身份验证的用户，主机应始终将其设置为 *true*，以便客户端知道用户是匿名用户。 |
| UserFriendlyName | string  | "John Smith" | 用户的名称，适合在 UI 中显示。                                                                                                                                 |
| UserId           | string  | "uid-1"      | 唯一标识当前访问文件的用户的值。                                                                                                                  |

## 用户权限属性

| 名称                    | 类型    | 示例 | 描述                                                                                                                                                                                                                                                                                                              |
| ----------------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ReadOnly                | boolean | true    | 指定当前用户是否无法更改文件。                                                                                                                                                                                                                                                               |
| UserCanNotWriteRelative | boolean | false   | 指定用户是否具有在 WOPI 服务器上创建新文件的足够权限。**true** 值表示此用户在当前文件上执行 [PutRelativeFile](./putrelativefile.md) 将失败。默认情况下，此参数为 **false**，并执行 *PutRelativeFile* 操作。 |
| UserCanRename           | boolean | true    | 指定用户是否有权重命名当前文件。                                                                                                                                                                                                                                                        |
| UserCanReview           | boolean | true    | 指定用户是否有权查看当前文件。                                                                                                                                                                                                                                                        |
| UserCanWrite            | boolean | true    | 指定用户是否有权更改文件。                                                                                                                                                                                                                                                                 |

## WOPI 主机功能属性

| 名称              | 类型    | 示例 | 描述                                                                                                                                       |
| ----------------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| SupportsLocks     | boolean | true    | 指定主机是否支持 [Lock](./lock.md)、[Unlock](./unlock.md) 和 [RefreshLock](./refreshlock.md) 操作。 |
| SupportsRename    | boolean | true    | 指定 WOPI 服务器是否支持重命名权限。                                                                                    |
| SupportsReviewing | boolean | true    | 指定主机是否支持查看权限。                                                                                             |
| SupportsUpdate    | boolean | true    | 指定主机是否支持 [PutFile](./putfile.md) 和 [PutRelativeFile](./putrelativefile.md) 操作。                  |

## Nextcloud/Collabora/Seafile properties

| 名称                    | 类型    | 示例 | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------------- | ------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| EnableInsertRemoteImage | boolean | true    | 指定是否启用调用 [UI\_InsertGraphic](../postmessage.md#ui_insertgraphic) 消息的菜单项和工具栏项。此属性用于显示用户界面元素（例如，对话框），允许用户从集成中选择图像。该集成应该提供一个可下载一次的临时 URL，并通过 [Action\_InsertGraphic](../postmessage.md#action_insertgraphic) 消息将其返回，并将 *Values* 设置为临时 URL。 |
| HidePrintOption         | boolean | false   | 指定 WOPI 服务器是否隐藏 UI 中文件菜单栏的打印选项。                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
