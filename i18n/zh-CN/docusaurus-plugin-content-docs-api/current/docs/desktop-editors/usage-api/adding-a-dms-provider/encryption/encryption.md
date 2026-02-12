---
sidebar_position: -1
---

# 加密

从 5.6 版本开始，ONLYOFFICE 桌面编辑器支持私密空间（Private Rooms），这是一个安全的工作空间，即使你实时协同编辑文档，你输入的每个字符都会进行端到端加密。使用 ONLYOFFICE 桌面编辑器可以在客户端对数据进行加密和解密，确保端点安全。

## 处理桌面编辑器命令

声明 *cloudCryptoCommand* 函数来处理来自桌面应用的消息：

``` ts
window.cloudCryptoCommand = function cloudCryptoCommand(type, params, callback) {};
```

### type

定义命令类型：

- *encryptionKeys* - 将私钥和公钥保存到参数中；

- *relogin* - 在密钥解密失败后重新进入门户；

- *getsharingkeys* - 请求所有有权访问该文件的用户的公钥。这些密钥将通过回调传递：

  ``` ts
  callback({
    keys: [{
      userId: "78e1e841",
      publicKey: "yyy",
    }],
  })
  ```

类型：字符串

### params

定义传递给该方法的参数。

类型：字符串

### callback

定义该方法返回的结果。

类型：字符串

浏览以下页面了解需要使用哪些命令：

- [密钥生成](key-generation.md)
- [加密文件操作](operations-with-encrypted-files.md)
