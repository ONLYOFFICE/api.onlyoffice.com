---
sidebar_position: -1
---

# 使用 shard key 进行负载均衡

从 8.1 版本开始，在向 ONLYOFFICE 文档 API（**文档命令服务**、**文档转换服务** 或 **文档构建服务**）发送请求时，URL 查询字符串中会添加 shardkey 参数。在协作编辑过程中，该参数也会作为 [WOPISrc](../../using-wopi/key-concepts.md#wopisrc) 查询参数添加到浏览器与服务器的交互中。

该参数的值为 key 字段。例如：?shardkey=Khirz6zTPdfd7。如果请求体中没有包含 key 字段，则无需发送此参数（例如在 [getForgottenList](../../additional-api/command-service/getforgottenlist.md) 命令中）。

在使用编辑服务器集群时，建议使用该参数请求负载均衡：所有正在编辑同一文档的用户将由同一台服务器处理。
