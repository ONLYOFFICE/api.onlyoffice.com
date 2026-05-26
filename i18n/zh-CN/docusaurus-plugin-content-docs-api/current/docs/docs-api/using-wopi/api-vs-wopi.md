---
sidebar_position: -1
---

# API 与 WOPI

您可以使用 API 或 WOPI 将 [ONLYOFFICE 文档](https://www.onlyoffice.com/office-suite.aspx)与任何云服务集成。

下表将帮助您找出这些选项之间的区别。

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

|                  | **API**                                                                                     | **WOPI**                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **基本信息**         | [API](../get-started/basic-concepts.md)                                                     | [WOPI](./overview.md)                                                                                |
| **集成**           | [即用型连接器](https://www.onlyoffice.com/all-connectors.aspx)                                    | WOPI 连接器                                                                                             |
| **协作（模式）**       | 实时和段落锁定                                                                                     | 仅实时                                                                                                  |
| **定制**           |                                                                                             |                                                                                                      |
| 编辑器界面语言          | [Yes](../usage-api/config/editor/editor.md#lang)                                            | [Yes](./wopi-discovery.md#ui)                                                                        |
| 编辑器界面主题          | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#uitheme)  | [Yes](./wopi-discovery.md#thm)                                                                       |
| 禁用聊天             | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#chat)     | [Yes](./wopi-discovery.md#dchat)                                                                     |
| "关于"中的客户信息       | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#customer) | [Yes](./wopi-rest-api/checkfileinfo.md#BreadcrumbBrandUrl)                                           |
| 工具栏定制和品牌         | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md)          | No                                                                                                   |
| 文件模板             | [Yes](../usage-api/config/editor/editor.md#templates)                                       | No                                                                                                   |
| 最近打开的文件列表        | [Yes](../usage-api/config/editor/editor.md#recent)                                          | No                                                                                                   |
| 插件               | [Yes](../usage-api/config/editor/plugins.md)                                                | No                                                                                                   |
| **安全**           |                                                                                             |                                                                                                      |
| IP 过滤（可信集成商）     | [Yes](./overview.md#ip-filter)                                                              | [Yes](./overview.md#ip-filter)                                                                       |
| 限制访问服务器          | [JWT](../additional-api/signature/browser.md)                                               | No                                                                                                   |
| 限制对数据的访问         | [JWT 签名](../additional-api/signature/request/token-in-body.md#outgoing-requests)            | [Proof keys](./proof-keys.md)                                                                        |
| **基本操作**         | 查看、编辑、协同编辑、移动查看和编辑、嵌入式文档查看                                                                  | 查看、编辑和协同编辑                                                                                           |
| **通过方法调用的操作**    |                                                                                             |                                                                                                      |
| 以不同格式下载          | [Yes](../usage-api/methods.md#downloadas)                                                   | No                                                                                                   |
| 设置收藏夹状态          | [Yes](../usage-api/methods.md#setfavorite)                                                  | No                                                                                                   |
| 显示工具提示消息         | [Yes](../usage-api/methods.md#showmessage)                                                  | No                                                                                                   |
| **通过事件处理的操作**    |                                                                                             |                                                                                                      |
| 关闭编辑器            | [Yes](../usage-api/config/events.md#onrequestclose)                                         | [Yes](./postmessage.md#UI_Close)                                                                     |
| 转到文件夹            | [Yes](../usage-api/config/editor/customization/customization-standard-branding.md#goback)   | [Yes](./wopi-rest-api/checkfileinfo.md#BreadcrumbFolderUrl)                                          |
| 切换到编辑模式          | [Yes](../usage-api/config/events.md#onrequesteditrights)                                    | [Yes](./postmessage.md#UI_Edit)                                                                      |
| 重命名文件            | [Yes](../usage-api/config/events.md#onrequestrename)                                        | [Yes](./postmessage.md#File_Rename)                                                                  |
| 共享访问设置           | [Yes](../usage-api/config/events.md#onrequestsharingsettings)                               | [Yes](./postmessage.md#UI_Sharing)                                                                   |
| 文档版本历史           | [Yes](../usage-api/config/events.md#onrequesthistory)                                       | [Yes](./postmessage.md#UI_FileVersions)                                                              |
| 从存储中插入图像         | [Yes](../usage-api/config/events.md#onrequestinsertimage)                                   | [Yes](./postmessage.md#UI_InsertGraphic)                                                             |
| 以不同格式保存          | [Yes](../usage-api/config/events.md#onrequestsaveas)                                        | [Yes](./wopi-rest-api/putrelativefile.md#save-copy-as)                                               |
| 邮件合并             | [Yes](../usage-api/config/events.md#onrequestmailmergerecipients)                           | No                                                                                                   |
| 文档比较             | [Yes](../usage-api/config/events.md#onrequestcomparefile)                                   | No                                                                                                   |
| 获取操作链接           | [Yes](../usage-api/config/events.md#onmakeactionlink)                                       | No                                                                                                   |
| 提及用户             | [Yes](../usage-api/config/events.md#onrequestusers)                                         | No                                                                                                   |
| 创建新文件            | [Yes](../usage-api/config/events.md#onrequestcreatenew)                                     | No                                                                                                   |
| **文件锁**          | [状态回调](../usage-api/callback-handler.md#status*)                                            | [锁定](./wopi-rest-api/lock.md)、[刷新锁定](./wopi-rest-api/refreshlock.md)、[解锁](./wopi-rest-api/unlock.md) |
| **文件访问权限**       |                                                                                             |                                                                                                      |
| 查看               | Yes                                                                                         | Yes                                                                                                  |
| 编辑               | [Yes](../usage-api/config/document/permissions.md#edit)                                     | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanWrite)                                                 |
| 审阅（仅适用于文本文档）     | [Yes](../usage-api/config/document/permissions.md#review)                                   | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanReview)                                                |
| 评论               | [Yes](../usage-api/config/document/permissions.md#comment)                                  | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanOnlyComment)                                           |
| 填写表单（仅适用于表单）     | [Yes](../usage-api/config/document/permissions.md#fillforms)                                | No                                                                                                   |
| 修改内容控件（仅适用于文本文档） | [Yes](../usage-api/config/document/permissions.md#modifycontentcontrol)                     | No                                                                                                   |
| 修改过滤器（仅适用于电子表格）  | [Yes](../usage-api/config/document/permissions.md#modifyfilter)                             | No                                                                                                   |
| 复制到剪贴板           | [Yes](../usage-api/config/document/permissions.md#copy)                                     | No                                                                                                   |
| 下载               | [Yes](../usage-api/config/document/permissions.md#download)                                 | No                                                                                                   |
| 打印               | [Yes](../usage-api/config/document/permissions.md#print)                                    | [Yes](./wopi-rest-api/checkfileinfo.md#HidePrintOption)                                              |
| 重命名              | No                                                                                          | [Yes](./wopi-rest-api/checkfileinfo.md#UserCanRename)                                                |

```mdx-code-block
</APITable>
```
