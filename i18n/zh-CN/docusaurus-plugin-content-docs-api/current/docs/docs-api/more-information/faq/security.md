---
sidebar_position: -11
---

# 安全问题

## 如何限制对我的文档服务器的访问？

为了防止未经授权访问您的文档和替换 ONLYOFFICE 文档请求中的重要参数，它使用 JSON Web Token (JWT) 兼容令牌来确保安全性。令牌由服务器密钥签名，因此客户端能够验证令牌是否合法。

该**令牌**是在初始化 ONLYOFFICE 文档时以及在**文档存储服务**与**文档编辑服务**、**文档命令服务**和**文档转换服务**之间交换命令时添加到配置中的。

ONLYOFFICE 文档验证令牌。如果有效，则使用来自*有效负载*的数据，而不是来自主要参数的相应数据。如果令牌无效，则不会执行命令，也不会使用或更改任何参数。

令牌可以在请求[标头](../../additional-api/signature/request/token-in-header.md)或[正文](../../additional-api/signature/request/token-in-body.md)中发送。

## 在标头和正文中发送令牌有什么区别？

从 ONLYOFFICE 文档 5.2 版开始，可以在请求标头和正文中发送令牌。这两种方法的主要区别在于长度限制：HTTP header 有长度限制，一些服务器（例如一些 NGINX 版本）不接受 header 长度超过 4 KB 的请求，而其他服务器将 header 长度限制为8-48 KB。如果标头长度超过这些值，服务器将返回 *413 Entity Too Large* 错误。

为避免此限制，在请求正文中发送令牌应该是执行此操作的首选方法。从版本 7.1 开始，传入请求使用正文中的令牌（如果存在）。否则，将采用标头令牌。传出请求同时使用正文中的令牌和标头中的令牌。它们可以不同。例如，由于标头中令牌的大小限制，可以从标头令牌中删除有关版本历史的信息。

有关更多详细信息，请参阅[标头中带有令牌的请求](../../additional-api/signature/request/token-in-header.md)或[正文部分中带有令牌的请求](../../additional-api/signature/request/token-in-body.md)。
