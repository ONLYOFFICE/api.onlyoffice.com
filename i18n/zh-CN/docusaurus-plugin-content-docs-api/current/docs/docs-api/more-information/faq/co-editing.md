---
sidebar_position: -8
---

# 共同编辑问题

## 如何检查我需要多少个连接？

您可能需要的最小连接数应该等于将使用您的文档服务器的用户数。但是您应该记住，在大多数情况下，一个用户一个连接，因为一个用户可以在多个浏览器中打开多个文档。

因此，如果您确定您的所有用户都将同时使用文档服务器，则连接数的盈余至少等于您的用户数的两倍，否则缺少连接的用户将只能以仅查看模式打开文档。

此页面[此页面](https://www.onlyoffice.com/integration-edition-prices.aspx)上提供了所有可用的连接定价计划。

## 如何找到当前正在编辑文档的用户的信息？

您可以使用API向**文档命令服务**发送 POST 请求。将 *c* 参数设置为 [info](../../additional-api/command-service/info.md) 与 *key* 参数一起使用，以标识您要查找有关信息的文档。参数作为请求正文中JSON对象的一部分发送：

  ``` json
  {
    "c": "info",
    "key": "Khirz6zTPdfd7"
  }
  ```

如果文档正在被两个用户编辑，**文档编辑服务**将使用[回调处理程序](../../usage-api/callback-handler.md)通知**文档存储服务**，并提供以下信息：

  ``` json
  {
    "key": "Khirz6zTPdfd7",
    "status": 1,
    "users": ["6d5a81d0", "78e1e841"]
  }
  ```

- *key* 是文档的标识符与上面的 POST 请求相同）；

- *Status* 值为 **1** 表示当前正在编辑文档；

- *users* 是参与共同编辑的用户的ID数组。

  有关**文档编辑服务**响应的更多信息，请参见[此页面](../../usage-api/callback-handler.md)。

## 如何在保存文档之前断开当前正在编辑文档的用户？

要在保存文档之前强制断开用户与文档的连接，请使用 API 向 **文档命令服务**发送 POST 请求。将 *c* 参数设置为 [drop](../../additional-api/command-service/drop.md) 与标识文档的 *key* 参数、以及要断开连接的用户ID数组一起使用。参数作为请求正文中 JSON 对象的一部分发送：

  ``` json
  {
    "c": "drop",
    "key": "Khirz6zTPdfd7",
    "users": ["6d5a81d0", "78e1e841"]
  }
  ```

因此，具有上述请求中 ID 的两个用户（"6d5a81d0"和"78e1e841"）将无法使用 **Khirz6zTPdfd7** 键编辑文档。

有关使用来自**文档命令服务**的请求的更多信息，请参见[此页面](../../additional-api/command-service/command-service.md)。
