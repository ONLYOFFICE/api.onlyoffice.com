---
sidebar_position: -12
---

# 安全性

ONLYOFFICE 文档使用基于令牌的验证来确保服务之间的请求未被篡改。每个请求——无论是**文档编辑器**使用 [`config`](../../usage-api/config/config.md) 初始化时发出的请求，还是在**文档存储服务**与**文档编辑服务**、**文档命令服务**、**文档转换服务**或**文档构建器服务**之间传递的请求——都可以携带加密令牌，接收方在处理请求之前会对其进行验证。

令牌使用 [JSON Web Token](https://jwt.io/)（JWT）标准生成，并使用集成商服务器与 ONLYOFFICE 文档之间共享的密钥进行签名。当令牌存在时，ONLYOFFICE 文档会验证令牌，并使用令牌有效负载中的数据代替相应的请求参数。如果令牌缺失或无效，请求将被拒绝。

有关设置说明和代码示例，请参阅[签名](../../additional-api/signature/signature.md)部分。

:::caution
本地链接（指向私有或内部地址的 URL）始终需要令牌。在以下方法中使用本地链接时，请务必包含令牌：[insertImage](../../usage-api/methods.md#insertimage)、[setHistoryData](../../usage-api/methods.md#sethistorydata)、[setMailMergeRecipients](../../usage-api/methods.md#setmailmergerecipients)、[setReferenceData](../../usage-api/methods.md#setreferencedata)、[setReferenceSource](../../usage-api/methods.md#setreferencesource)、[setRequestedDocument](../../usage-api/methods.md#setrequesteddocument)、[setRequestedSpreadsheet](../../usage-api/methods.md#setrequestedspreadsheet)、[setRevisedFile](../../usage-api/methods.md#setrevisedfile)。为[打开](../../usage-api/config/document/document.md#url)或[转换](../../additional-api/conversion-api/request.md#url)指定本地 URL 时，也需要令牌。
:::
