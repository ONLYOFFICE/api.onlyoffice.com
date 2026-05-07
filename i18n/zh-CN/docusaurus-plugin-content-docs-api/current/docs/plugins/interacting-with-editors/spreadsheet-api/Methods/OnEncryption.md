# OnEncryption

加密文档。

## 语法

```javascript
expression.OnEncryption(obj);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| obj | 必需 | object |  | 加密属性。 |
| obj.type | 必需 | string |  | 加密操作类型：**generatePassword** - 为文档生成密码，**getPasswordByFile** - 打开文档时发送密码，**encryptData** - 协作编辑时加密更改，**decryptData** - 协作编辑时解密更改。 |
| obj.password | 必需 | string |  | 指定访问文档密码的字符串值。 |
| obj.data | 必需 | string |  | 加密/解密的更改。 |
| obj.check | 必需 | boolean |  | 检查加密/解密操作是否成功（仅用于 *encryptData* 或 *decryptData* 类型）。 |
| obj.docinfo | 必需 | string |  | 加密文件的未加密部分。 |
| obj.hash | 必需 | string |  | 指定文件哈希值的字符串值（默认为 *sha256*）。 |
| obj.error | 必需 | string |  | 指定发生错误的字符串值（"" 值表示操作成功）。 |

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
