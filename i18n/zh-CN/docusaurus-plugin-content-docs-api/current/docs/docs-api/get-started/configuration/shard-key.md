---
sidebar_position: -1
---

# 使用 shard key 进行负载均衡

当 ONLYOFFICE 文档作为多服务器集群运行时，协作编辑要求同一文档的所有请求到达同一服务器节点。`shardkey` 查询参数可以实现这一点：负载均衡器可以从 URL 中读取该参数并据此进行路由。

## 在 API 请求中添加 shard key

向**文档命令服务**、**文档转换服务**或**文档构建服务**发送请求时，请在查询字符串中添加 `shardkey` 参数。将其值设置为请求体中的文档 [`key`](../../usage-api/config/document/document.md#key)：

```
?shardkey=Khirz6zTPdfd7
```

如果请求体中没有 `key` 字段（例如 [getForgottenList](../../additional-api/command-service/getforgottenlist.md) 命令），则省略该参数。

## 浏览器到服务器的请求

在协作编辑期间，**文档编辑器**会自动将 shard key 附加到其浏览器到服务器的请求中。在 WOPI 集成中，[WOPISrc](../../using-wopi/key-concepts.md#wopisrc) 查询参数起到相同的路由作用。
