---
sidebar_position: -1
---

# 使用WOPI

## 如何启用WOPI？

要启用 WOPI，请将 ONLYOFFICE 文档配置中的 [wopi.enable](https://helpcenter.onlyoffice.com/installation/docs-developer-configuring.aspx#wopi-enable) 参数设置为 **true**。

参数:

| 名称        | 类型    | 示例 | 描述                                                        |
| ----------- | ------- | ------- | ------------------------------------------------------------------ |
| wopi.enable | boolean | true    | 定义是否启用 WOPI。默认值为 **false**。 |

示例:

  ``` json
  {
    "wopi": {
      "enable": true
    }
  }
  ```

## 如何将 ONLYOFFICE 文档配置为仅接受来自受信任的集成商的 WOPI 请求？

此类可信集成商的 IP 地址必须包含在 [WOPI 域允许列表](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/build-test-ship/settings#wopi-domain-allow-list)中。

按照[此章节中](../../using-wopi/overview.md#ip-filter)的步骤配置 ONLYOFFICE 文档 IP 过滤器。

## 为什么我需要discovery XML 以及如何获取它？

[WOPI 发现](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/discovery)是通过从在线办公室请求discovery XML 来帮助 WOPI 服务器发现 WOPI 客户端的过程。WOPI 主机使用discovery XML 来指定如何与在线办公室进行交互。discovery XML的 **action** 元素表示：

- 在线办公室中可用的文档操作，
- 支持的文件格式（扩展名）。

请求被发送到`https://documentserver/hosting/discovery` 地址，其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

有关 WOPI discovery的更多信息，请参见[此处](../../using-wopi/wopi-discovery.md)。

## 如何通过 WOPI 自定义编辑器行为？

每个 WOPI 发现操作都有两个属性：

属性:

| 名称     | 描述                                                                      |
| -------- | -------------------------------------------------------------------------------- |
| requires | 使用操作所需的 WOPI REST 端点。                             |
| urlsrc   | 为了对特定文件调用操作而导航到的 URL。 |

示例:

  ``` xml
  <action name="edit" ext="docx" requires="locks,update"
      urlsrc="https://word-edit.officeapps.live.com/we/wordeditorframe.aspx?
  ui=en-us&amp;thm=1&amp;"/>
  ```

语言、主题或聊天等编辑器行为可以通过**发现查询参数**进行自定义，这些参数是可以通过文件存储在 *urlsrc* 属性中公开的参数。

所有可用的发现查询参数都可以在 [这里](../../using-wopi/wopi-discovery.md#wopi-standard) 找到。

## 如何在应用程序中创建在线办公会话？

为了在您的应用程序中创建在线办公会话，主机必须创建一个 HTML 页面，该页面将在其中托管一个指向特定 [WOPI 操作 URL](../../using-wopi/wopi-discovery.md#wopi-actions) 的 iframe 元素。

主机页面必须包含以下元素：

- 出于安全目的，主机必须通过该 *form* 元素将 *access_token* 和 *access_token_ttl* 参数 *POST* 到在线办公室 iframe。

- 使用 [PostMessage](../../using-wopi/postmessage.md) 与在线办公室 iframe 交互的 JavaScript 代码。

- body元素和在线office的特定 CSS 样式，以避免视觉包。此外，主机页面应使用 [WOPI discovery](../../using-wopi/wopi-discovery.md) 中提供的网站图标 URL 为页面设置适当的网站图标。

- 用于避免移动端浏览器的视觉和功能问题的 *viewport* 元标签。

 可以在[此页面](../../using-wopi/host-page.md)上找到主机页面代码的示例。

## 如何通过 WOPI 限制公众对数据的访问？

要限制公众访问您的数据，必须配置在线办公室和集成商之间的安全请求交换。

集成商必须检查是否从 ONLYOFFICE 文档收到请求。它为此目的使用[证明密钥](https://docs.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/online/scenarios/proofkeys) 。ONLYOFFICE 文档使用私钥对请求进行签名。相应的公钥写在 [WOPI discovery XML](../../using-wopi/wopi-discovery.md) 的 proof-key 元素中。集成商使用公钥检查私钥。签名随 **X-WOPI-Proof** 和 **X-WOPI-ProofOld** HTTP 标头中的每个请求一起发送。

有关证明密钥的更多信息，请参见[此页面](../../using-wopi/proof-keys.md)。

## 我在哪里可以找到可能的 WOPI 错误代码及其描述？

您可以在 [此页面](../../using-wopi/wopi-rest-api/wopi-rest-api.md)上找到可能的 WOPI 错误代码及其描述。

## ONLYOFFICE 文档支持哪些 WOPI REST API 操作？

ONLYOFFICE 文档使用以下 WOPI 操作：[CheckFileInfo](../../using-wopi/wopi-rest-api/checkfileinfo.md), [GetFile](../../using-wopi/wopi-rest-api/getfile.md), [Lock](../../using-wopi/wopi-rest-api/lock.md), [RefreshLock](../../using-wopi/wopi-rest-api/refreshlock.md), [Unlock](../../using-wopi/wopi-rest-api/unlock.md), [PutFile](../../using-wopi/wopi-rest-api/putfile.md), [RenameFile](../../using-wopi/wopi-rest-api/renamefile.md)。有关这些操作的更多信息，请参见相应页面。

## 如何通过WOPI限制访问ONLYOFFICE服务器的使用？

您不能通过 WOPI 限制对 ONLYOFFICE 服务器的使用。编辑访问控制只能通过 ONLYOFFICE 文档 API 并基于 JWT 签名。生成[文件打开请求](../../additional-api/signature/browser.md)需要密钥。

更多关于签名的信息可以在[这里](../../additional-api/signature/signature.md)找到。

## 如何通过 WOPI 获取有关文件属性、访问权限和编辑器设置的信息？

要获取有关文件属性、访问权限和编辑器设置的信息，请使用 **CheckFileInfo** 方法。您可以在[此页面](../../using-wopi/wopi-rest-api/checkfileinfo.md)上找到所有可用参数。

## WOPI 支持哪些操作？

除了查看、编辑和共同编辑的基本操作，您还可以关闭编辑器，从查看切换到编辑模式，重命名文件，打开共享访问设置对话框，打开文档版本历史记录，插入存储中的图像。

在[此页面](../../using-wopi/postmessage.md)上了解有关其他通过事件处理的操作的更多信息。

## 我可以通过 WOPI 对文档设置哪些访问权限？

您可以设置查看、编辑、重命名、审阅和打印的访问权限

在[此页面](../../using-wopi/postmessage.md)上了解有关访问权限的更多信息。

## ONLYOFFICE 文档 API 和 WOPI 有什么区别？

Y您可以使用 API 或 WOPI 将 [ONLYOFFICE 文档](https://www.onlyoffice.com/office-suite.aspx) 与任何云服务集成。

[此页面上](../../using-wopi/api-vs-wopi.md)的表格将帮助您找出这些选项之间的区别。
