# Command service

与**文档命令服务**的交互使用 POST 请求。请求参数以 JSON 格式填写在请求正文中。请求被发送至`https://documentserver/command`地址，其中**文档服务器**指安装了 ONLYOFFICE 文档的服务器名称。

> 请注意，在 8.2 版本之前，`https://documentserver/coauthoring/CommandService.ashx` 地址被用于发送请求。

从 8.1 版开始，建议将[shardkey](../../Get%20Started/How%20It%20Works/How%20It%20Works.md#shard-key)参数添加到 URL *QueryString*，其中包含 *key* 值。 例如，*?shardkey=Khirz6zTPdfd7*。这允许您对请求进行负载平衡。

> 在版本4.2之前的 **ONLYOFFICE 文档服务器**中，使用了带有 *QueryString* 中参数的GET请求。

请参阅下面可用的命令类型以了解更多信息。

## 命令服务

| 命令                                       | 描述                                                                                                                        |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [deleteForgotten](deleteForgotten.md)   | 该命令允许删除被遗忘的文件。                                                                                    |
| [drop](drop.md)                         | 此命令允许断开指定用户与文档编辑服务的连接。                                           |
| [forcesave](forcesave.md)               | 此命令允许强制保存正在编辑的文档，而无需关闭它。                                                 |
| [getForgotten](getForgotten.md)         | 该命令允许请求一个被遗忘的文件。                                                                                   |
| [getForgottenList](getForgottenList.md) | 此命令允许请求被遗忘文件的列表。                                                                      |
| [info](info.md)                         | 此命令允许请求一个文档的状态以及打开编辑过该文档的用户标识符列表。|
| [license](license.md)                   | 此命令可用于向 ONLYOFFICE 文档请求许可证，并获取有关服务器和用户配额的信息。                  |
| [meta](meta.md)                         | 此命令允许为所有协作编辑器更新文档的元信息。                                  |
| [version](version.md)                   | 此命令可用于向 ONLYOFFICE 文档请求当前版本号。                                                      |

JSON Web令牌应以JSON对象格式发送到**文档命令服务**它用于接收具有指定键的文档的状态。

``` json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjIjoiaW5mbyIsImtleSI6IktoaXJ6NnpUUGRmZDcifQ.r_6sThjFABsHMNHhkVdHDSz4jwkbXRQNYdvawkBGJgg"
}
```

## 参数

| 名称  | 描述   | 类型                  | 出现                                                                                                                                                                    |
| ----- | ------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| token | string | 配置所需 | 定义以[token](../../Additional%20API/Signature/Request/Token%20in%20body.md#command)形式添加到 **ONLYOFFICE Docs** 配置的加密签名。 |

**文档编辑服务**将命令产生的结果通知**文档存储服务**，并通过[callback handler](../../Usage%20API/Callback%20handler.md)发送包含所有必要数据的响应。

## 可能的错误代码及其描述

| 错误代码 | 描述                                                                            |
| ---------- | -------------------------------------------------------------------------------------- |
| 0          | 没有错误。                                                                           |
| 1          | 文档密钥缺失或找不到具有该密钥的文档。                  |
| 2          | 回调url不正确。                                                             |
| 3          | 内部服务器错误。                                                                |
| 4          | 在收到 **forcesave** 命令之前，未对文档应用任何更改。 |
| 5          | 命令不正确。                                                                  |
| 6          | 令牌无效。                                                                        |
