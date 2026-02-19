---
sidebar_position: -6
---

# execCommand 方法

使用 *window.AscDesktopEditor* 对象的 **execCommand** 方法来执行请求中指定的命令。

```ts
window.AscDesktopEditor.execCommand(command, parameters);
```

## 参数

| 名称        | 类型   | 描述                     |
| ----------- | ------ | ------------------------ |
| command     | string | 定义必须执行的命令。     |
| parameters  | string | 定义传递给该方法的参数。 |

可用命令如下：

## 命令

| 命令                                                       | 描述                                                  |
| ---------------------------------------------------------- | ----------------------------------------------------- |
| [open:document](./opening-documents.md)           | 打开文档。                                            |
| [portal:checkpwd](./encryption/key-generation.md) | 将密码信息从登录页面传输到桌面应用。                  |
| [portal:login](./login-and-logout.md#login)     | 注册云并将其添加到“已连接的云”页面。                  |
| [portal:logout](./login-and-logout.md#logout)   | 从“已连接的云”页面的列表中移除云。                    |
| [portal:uitheme](./changing-a-theme.md)         | 更改桌面编辑器选项卡的主题。                          |
