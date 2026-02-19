# 密钥生成

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';
```

要检查桌面应用是否支持加密，请调用以下命令：

``` ts
typeof window.AscDesktopEditor.cloudCryptoCommand === "function";
```

以下步骤解释了 ONLYOFFICE 中的文档加密过程。

1. 登录到云端并传递**加密**插件 ID：

   ``` ts
   window.AscDesktopEditor.execCommand("portal:login", JSON.stringify({
     encryptionKeys: {
       cryptoEngineId: "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
     },
   }));
   ```

2. 要监控登录页面的密码，请通过 [execCommand](../execcommand.md) 方法向桌面编辑器发送 *portal:checkpwd* 命令。参数以带有序列化 *json* 的字符串格式指定，如下所示：

   ``` json
   {
     "domain": "域名",
     "emailInput": "user@email.addr",
     "pwdInput": "密码"
   }
   ```

   ```mdx-code-block
   <APITable>
   ```
    | 名称        | 类型   | 示例                          | 描述                                     |
    | ----------- | ------ | ----------------------------- | ---------------------------------------- |
    | domain      | string | `"https://exampledomain.com"` | 定义云端名称和云端入口点。               |
    | emailInput  | string | `"john@example.com"`          | 定义在登录页面上输入的用户电子邮件。     |
    | pwdInput    | string | `"123456"`                    | 定义在登录页面上输入的密码。             |

   ```mdx-code-block
   </APITable>
   ```

   ## 示例

   ``` ts
   window.AscDesktopEditor.execCommand("portal:checkpwd", JSON.stringify({
     domain: "https://exampledomain.com",
     emailInput: "john@example.com",
     pwdInput: "123456",
   }));
   ```

   发送命令后，DMS 提供商将登录页面的密码信息传输到桌面应用。ONLYOFFICE 桌面编辑器会记住该密码，并将其用于密钥的加密和解密。

3. 使用以下参数将来自 DMS 提供商的加密私钥、公钥以及登录信息传递给桌面应用：

   ``` json
   {
     "encryptionKeys": {
       "cryptoEngineId": "guid",
       "privateKeyEnc": "私钥",
       "publicKey": "公钥"
     }
   }
   ```

   ```mdx-code-block
   <APITable>
   ```

   | 名称            | 类型   | 示例                                         | 描述                 |
   |-----------------|--------|----------------------------------------------|----------------------|
   | cryptoEngineId  | string | `"{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}"`   | 定义**加密**插件 ID。 |
   | privateKeyEnc   | string | `"xxx"`                                       | 定义加密的私钥。     |
   | publicKey       | string | `"yyy"`                                       | 定义公钥。           |

   ```mdx-code-block
   </APITable>
   ```

   ## 示例

   ``` ts
   window.AscDesktopEditor.execCommand("portal:login", JSON.stringify({
     encryptionKeys: {
       cryptoEngineId: "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
       privateKeyEnc: "xxx",
       publicKey: "yyy",
     },
   }));
   ```

   你也可以在编辑器初始化配置中进行设置：

   ``` ts
   const config = {
     editorConfig: {
       encryptionKeys: {
         cryptoEngineId: "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
         privateKeyEnc: "xxx",
         publicKey: "yyy",
       },
     },
   };

   const docEditor = new DocsAPI.DocEditor("placeholder", config);
   ```

4. 通过带有 *encryptionKeys* 类型的 *cloudCryptoCommand* 方法将生成的密钥发送到云端：

   ``` ts
   window.AscDesktopEditor.cloudCryptoCommand(
     "encryptionKeys",
     {
       cryptoEngineId: "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
       privateKeyEnc: "xxx",
       publicKey: "yyy",
     },
     callback,
   );
   ```
