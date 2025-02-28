---
sidebar_position: -3
---

# 转换 API

在线办公中要转换不同的文件格式，就要用到POST请求。这些请求被发送到 */cool/convert-to/\<format>&\<lang=xx-XX>* 或 */lool/convert-to/\<format>&\<lang=xx-XX>* 端点。

## 请求参数及其说明：

| 参数        | 类型    | 出现 | 描述                                                                                                                             |
| ---------------- | ------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| format           | string  | 必需的 | 输出文件格式。                                                                                                                |
| PDFVer           | string  | 可选的 | 用于输出文件（PDF/A-1b、PDF/A-2b 等）的相应 PDF 类型的 pdf 版本。                               |
| FullSheetPreview | bollean | 可选的 | 指定完整工作表预览是否可用。                                                                          |
| file             | object  | 必需的 | 要在负载中转换的文件。                                                                                                       |
| lang             | string  | 可选的 | 默认格式语言。它用于日期类型的单元格。如果指定了语言，它决定了显示/输出格式。 |
| Password         | string  | 可选的 | 受保护文档的密码。从版本 8.2 开始可用。                                                                      |
| PasswordToOpen   | string  | 可选的 | 打开受保护文档的密码。从版本 8.2 开始可用。                                                                  |

## 请求示例

### 转换请求示例

``` sh
curl -F "data=sample.txt" https://documentserver/cool/convert-to/docx > result.docx
```

其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

### HTML 格式的转换请求示例

``` html
<form action="https://documentserver/cool/convert-to/docx" enctype="multipart/form-data" method="post">
    File: <input type="file" name="data"><br/>
    <input type="submit" value="Convert to DOCX">
</form>
```

其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

### 带有*格式*参数的转换请求示例

``` sh
curl -F "data=sample.odt" -F "format=pdf" "PDFVer=PDF/A-2b" https://documentserver/cool/convert-to > result.pdf
```

其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。

### *格式*参数为 HTML 格式的转换请求示例

``` html
<form action="https://documentserver/cool/convert-to" enctype="multipart/form-data" method="post">
    File: <input type="file" name="data"><br/>
    Format: <input type="text" name="format"><br/>
    <input type="submit" value="Convert">
</form>
```

其中 **documentserver** 是安装了 ONLYOFFICE 文档的服务器的名称。
