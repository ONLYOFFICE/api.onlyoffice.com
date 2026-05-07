# ConvertDocument

将文档转换为 Markdown 或 HTML 文本。

## 语法

```javascript
expression.ConvertDocument(sConvertType, bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags);
```

`expression` - 表示 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sConvertType | 可选 | "markdown" \| "html" | "markdown" | 转换类型（"markdown" 或 "html"）。 |
| bHtmlHeadings | 可选 | boolean | false | 定义当目标平台的 Markdown 渲染器不处理 Markdown 样式的 ID 时，是否生成 HTML 标题和 ID。 |
| bBase64img | 可选 | boolean | false | 定义图像是否以 base64 格式创建。 |
| bDemoteHeadings | 可选 | boolean | false | 定义文档中的所有标题级别是否降级以符合以下标准：单个 H1 作为标题，H2 作为正文中的顶级标题。 |
| bRenderHTMLTags | 可选 | boolean | false | 定义是否在 Markdown 中保留 HTML 标签。如果只想偶尔使用 HTML 标签，可以按以下方式避免使用左尖括号：\&lt;tag&gt;text\&lt;/tag&gt;。默认情况下，左尖括号将被替换为特殊字符。 |

## 返回值

string

## 示例

```javascript
let info = "";
window.Asc.plugin.executeMethod ("ConvertDocument", ["markdown", false, false, true, false], function (output) {
    document.getElementById ("text-area").value = info + output;
});
```
