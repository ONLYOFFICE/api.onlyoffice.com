---
sidebar_position: -4
---

# 打开文档

在云端[注册](./login-and-logout.md)后，您就可以开始处理存储在那里的文档了。

将 ONLYOFFICE 桌面编辑器连接到您的云，使您能够在没有持续互联网连接的情况下编辑文本文档、电子表格和演示文稿，并轻松切换到在线模式进行实时协同编辑（如果您的云已集成[ONLYOFFICE Docs](../../../docs-api/get-started/basic-concepts.md)）。

此外，使用 ONLYOFFICE 桌面编辑器，您不再受浏览器资源的限制。这意味着您可以：

- 使用编辑器工具栏按钮和上下文菜单选项在另一个文档中复制和粘贴；
- 使用**打印**选项直接从应用程序打印文档；
- 使用本地计算机上可用的所有字体；
- 无需事先手动设置语言即可处理文档（语言会自动设置）。

要在新窗口/标签中正确打开文档：

**选项 1.** 使用 *window.open("http://url.to.document")* JavaScript 命令，其中文档的 URL 由[配置](./adding-a-dms-provider.md)的 *editorPage* 值验证。验证成功后，文档将被打开。

**选项 2.** 使用 [execCommand](./execcommand.md) 方法的 *open:document* 命令。发送此命令后，文档将被打开。参数以带有序列化 *json* 的字符串格式指定，如下所示：

``` json
{
  "url": "文档的 URL",
  "type": "类型",
  "provider": "提供者"
} 
```

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable>
```
| 参数     | 类型   | 示例                                               | 描述                                                                                                   |
|----------|--------|----------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| url      | string | `https://example.com/url-to-example-document.docx` | 定义要打开的文档的绝对 URL。                                                                            |
| type     | string | `"word"`                                           | 定义可定义的打开文档的类型：**word**（文字）、**cell**（表格）、**slide**（幻灯片）或 **pdf**（PDF）。             |
| provider | string | `"onlyoffice"`                                     | 定义用于在 JavaScript 命令中引用桌面应用程序的提供者 ID（与[配置](./adding-a-dms-provider.md)中的相同）。 |

```mdx-code-block
</APITable>
```

## 示例

``` ts
const params = {
  url: "https://example.com/url-to-example-document.docx",
  type: "word",
  provider: "onlyoffice",
};
window.AscDesktopEditor.execCommand("open:document", JSON.stringify(params));
```
