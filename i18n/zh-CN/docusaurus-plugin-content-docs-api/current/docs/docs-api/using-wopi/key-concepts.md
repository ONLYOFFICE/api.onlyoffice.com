---
sidebar_position: -9
---

# 关键概念

理解以下概念对实现 WOPI 客户端集成至关重要，更多详细信息可参考[微软官方文档](https://learn.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/rest/concepts)。

## 文件标识符 {#file-id}

文件标识符是用于表示 WOPI 操作对象的唯一字符串（文件或文件夹）。主机必须为 WOPI 客户端使用的任何文件发出唯一 ID。客户端在向 WOPI 主机发出请求时将包含文件标识符。因此，主机必须能够使用文件标识符来定位特定文件。

文件标识符需满足以下要求：

- 标识单个文件；
- 需符合 URL 编码规范，因为标识符在 URL 中主要通过 [WOPISrc](#wopisrc) 参数传递；
- 文件编辑后标识不变；
- 文件移动/重命名后标识不变；
- 上级目录重命名后标识不变；
- 共享文件的标识对所有访问用户保持一致。

## 访问令牌 {#access-token}

访问令牌是用于验证 WOPI 请求方身份和权限的安全凭证。

WOPI 主机存储文件的同时掌握用户权限的信息，因此需向客户端提供访问令牌。客户端在后续请求中返回此令牌，WOPI 主机接收后进行验证。若令牌无效或未获授权，主机将以相应的 HTTP 状态码响应。

在在线办公环境中，主机会预先生成访问令牌，并通过`access_token`参数，在首次 WOPI 请求之前将其传递给客户端。

WOPI 访问令牌必须遵循[此处](https://learn.microsoft.com/zh-cn/microsoft-365/cloud-storage-partner-program/rest/concepts#access-token)所述规范。

## 令牌有效期（access_token_ttl） {#the-access_token_ttl-property}

`access_token_ttl`属性表示 WOPI 客户端访问令牌的过期时间，即自1970年1月1日UTC（JavaScript 纪元时间戳）起算的过期时间（以毫秒为单位）。尽管名称可能产生误解，但它并不代表令牌的有效时长，而是总是与特定的访问令牌相关联，不会单独使用。

我们建议设置`access_token_ttl`值为10小时，以确保访问令牌的有效期为10小时。此外，主机也可将`access_token_ttl`设为`0`，表示令牌的过期时间无限或未知。然而，这样做可能导致客户端禁用提示用户刷新会话的 UI，进而可能因令牌过期而造成意外数据丢失。因此，我们强烈建议为`access_token_ttl`指定一个具体的值。

## 锁 {#lock}

锁是与文件操作相关的一个重要概念，在 WOPI 中有两大作用：

- 锁能够防止未持有有效锁 ID 的任何用户修改文件。当用户通过 WOPI 客户端开始编辑文件时，客户端会先锁定该文件，以确保在编辑过程中，其他实体无法进行更改。
- 锁被用来存储与文件相关的一小段临时数据，这段数据被称为锁 ID。锁 ID 是一个字符串，其最大长度可达1024个 ASCII 字符。

因此，WOPI 锁需满足以下条件：

- 必须与单个文件相关联；
- 包含锁 ID，该 ID 为最大1024个 ASCII 字符的字符串；
- 在未提供正确锁 ID 的情况下，禁止对文件进行任何修改；
- 锁的有效期为30分钟，除非进行([刷新](./wopi-rest-api/refreshlock.md))操作；
- 锁不应与特定用户绑定。

所有涉及文件修改的 WOPI 操作（例如 [PutFile](./wopi-rest-api/putfile.md)）都会在请求中附带一个锁 ID 作为参数，该 ID 通常通过`X-WOPI-Lock`请求头进行传递。

WOPI 要求主机对 WOPI 请求中的锁 ID 与文件当前锁 ID 进行比对，一旦发现不匹配，主机需在`X-WOPI-Lock`响应标头中返回当前锁 ID。这一步骤至关重要，因为它帮助 WOPI 客户端决定后续应采取哪些 WOPI 调用。

## WOPI源地址（WOPISrc）{#wopisrc}

WOPI源地址（WOPISrc）是执行 WOPI 操作的文件专属 URL，由主机的文件端点 URL 与特定[文件 ID](#file-id)组合而成，但不包含[访问令牌](#access-token)。

自 8.0 版本起，WOPISrc 查询参数被加入到从浏览器至服务器的请求中，这一改动支持创建多个独立的 ONLYOFFICE 实例。利用 WOPISrc 进行负载平衡请求，可确保协作编辑顺畅进行：所有编辑同一文档的用户都将由同一服务器提供服务。

对于 WOPI，采用集成商提供的参数；对于文档 API，则使用 [shardkey](../get-started/configuration/shard-key.md)参数。
