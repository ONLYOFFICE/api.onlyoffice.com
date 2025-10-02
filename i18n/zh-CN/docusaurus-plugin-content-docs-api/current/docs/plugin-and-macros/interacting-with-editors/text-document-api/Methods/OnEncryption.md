# 加密文档

加密文档。

## 语法

```javascript
expression.OnEncryption(obj);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称**      | **必填/选填** | **数据类型** | **默认值** | **描述**                                                                                                                  |
| ------------- | ------------- | ------------ | ---------- | ------------------------------------------------------------------------------------------------------------------------- |
| obj           | 必填          | object       |            | 加密属性。                                                                                                               |
| obj.type      | 必填          | string       |            | 加密操作类型：**generatePassword** - 为文档生成密码，**getPasswordByFile** - 打开文档时发送密码，**encryptData** - 协作编辑时加密更改，**decryptData** - 协作编辑时解密更改。 |
| obj.password  | 必填          | string       |            | 访问文档的密码字符串。                                                                                                   |
| obj.data      | 必填          | string       |            | 被加密或解密的更改内容。                                                                                                 |
| obj.check     | 必填          | boolean      |            | 检查加密/解密操作是否成功（仅用于 *encryptData* 或 *decryptData* 类型）。                                                 |
| obj.docinfo   | 必填          | string       |            | 加密文件中未加密的部分。                                                                                                 |
| obj.hash      | 必填          | string       |            | 文件哈希值字符串（默认使用 sha256）。                                                                                  |
| obj.error     | 必填          | string       |            | 错误信息字符串（值为 "" 表示操作成功）。                                                                                  |

## 返回值

此方法不返回任何数据。

## 示例

```javascript
window.Asc.plugin.executeMethod ("OnEncryption", [
    {
        "type": "getPasswordByFile",
        "password": "123456",
        "docinfo": "{docinfo}",
        "hash": "sha256"
    }
]);
```
