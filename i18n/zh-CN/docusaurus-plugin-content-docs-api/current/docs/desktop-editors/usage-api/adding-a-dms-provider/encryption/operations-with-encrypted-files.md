# 加密文件操作

要对加密文件执行操作，包括文件加密、解密、创建、编辑和共享，ONLYOFFICE 使用用户的个人凭据（RSA 密钥对）和文档密码（文档加密密钥）。此处介绍加密文件的上传和共享过程。

## 上传加密文档

要在桌面应用中上传加密文件，请将标准的 *input type = file* 调用替换为 *cloudCryptoCommand* 函数，并指定类型为 *upload*。*params* 对象包含以下值：

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```

| 名称           | 类型   | 示例                                      | 描述                                                                 |
| -------------- | ------ | ----------------------------------------- | -------------------------------------------------------------------- |
| cryptoEngineId | string | `"{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}"` | 定义**加密**插件 ID。                                                |
| filter         | string | `"*.docx *.xlsx *.pptx"`                   | 定义可加密的文档类型。目前，仅能加密 OOXML 格式，即 DOCX、XLSX 和 PPTX。 |

```mdx-code-block
</APITable>
```

### 示例

``` ts
window.AscDesktopEditor.cloudCryptoCommand("upload", {
  cryptoEngineId: "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
  filter: "*.docx *.xlsx *.pptx",
}, callback);
```

用户选择文件后，文件将被循环加密并传输到 *callback*：

``` ts
callback({
  bytes: [],
  name: "Example Document Title.docx",
  isCrypto: true,
})
```

## 共享加密文档

要共享加密文档，请调用 *cloudCryptoCommand* 函数，并指定类型为 *share*。*params* 对象包含以下值：

```mdx-code-block
<APITable>
```

| 名称           | 类型   | 示例                                              | 描述                                     |
| -------------- | ------ | ------------------------------------------------- | ---------------------------------------- |
| cryptoEngineId | string | `"{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}"`           | 定义**加密**插件 ID。                    |
| file           | string | `"https://example.com/url-to-example-document.docx"` | 定义文档的绝对 URL。                     |
| keys           | array  | `[{"userId":"78e1e841","publicKey":"yyy"}, ...]`     | 定义用户 ID 与相关公钥的配对。           |

```mdx-code-block
</APITable>
```

### 示例

``` ts
window.AscDesktopEditor.cloudCryptoCommand("share", {
  cryptoEngineId: "{FFF0E1EB-13DB-4678-B67D-FF0A41DBBCEF}",
  file: ["https://example.com/url-to-example-document.docx"],
  keys: [{
    userId: "78e1e841",
    publicKey: "yyy",
  }],
}, callback);
```

文件由桌面应用上传并加密。文件的访问权限通过密钥传递给它。之后，它会被传输到 *callback*：

``` ts
callback({
  bytes: [],
  isCrypto: true,
})
```
