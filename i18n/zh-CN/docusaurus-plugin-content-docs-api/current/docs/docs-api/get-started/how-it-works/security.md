---
sidebar_position: -12
---

# 安全性

为了防止在 ONLYOFFICE 文档服务器请求中替换重要参数，以**令牌**的形式向其中添加了加密签名。

在初始化**文档编辑器**时以及在**文档存储服务**和**文档编辑服务**、**文档命令服务**、**文档转换服务**和**文档构建器服务**之间交换命令时，会在配置中添加**令牌**。

**令牌**是使用 *JWT* ([JSON Web 令牌](https://jwt.io/))标准生成的。令牌由服务器的密钥签名，因此客户端能够验证令牌是否合法。

*JSON Web 令牌*由以点 (.) 分隔的三部分组成，它们是：*标头*, *有效负载*, *签名*。*标头*由两部分组成：令牌类型 (*JWT*)和散列算法(*HMAC SHA256*)。令牌的第二部分是*有效负载*，其中包含 JSON 格式的声明。要创建签名部分，您必须获取编码过的标头、编码过的有效负载、加密码、标头中指定的算法，并对其进行签名。

**ONLYOFFICE 文档**验证**令牌**。来自*有效载荷*的数据被认为是有效的，并且被用来代替来自主要参数的相应数据。如果**令牌**无效，则不执行命令。

请参阅[签名](../../additional-api/signature/signature.md)配置部分以了解更多信息。

> 请注意，集成商使用**本地链接**，需要配置中的 *JWT*。
> 
> 在以下方法中使用本地链接时一定要添加令牌：[insertImage](../../usage-api/methods.md#insertimage), [setHistoryData](../../usage-api/methods.md#sethistorydata), [setMailMergeRecipients](../../usage-api/methods.md#setmailmergerecipients), [setReferenceData](../../usage-api/methods.md#setreferencedata), [setReferenceSource](../../usage-api/methods.md#setreferencesource), [setRequestedDocument](../../usage-api/methods.md#setrequesteddocument), [setRequestedSpreadsheet](../../usage-api/methods.md#setrequestedspreadsheet), [setRevisedFile](../../usage-api/methods.md#setrevisedfile)。此外，当为[打开](../../usage-api/config/document/document.md#url)或[转换](../../additional-api/conversion-api/request.md#url)定义本地 url时，它是有必要的。
