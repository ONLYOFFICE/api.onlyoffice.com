# 转换文档

将文档转换为 Markdown 或 HTML 文本。

## 语法

```javascript
expression.ConvertDocument(sConvertType, bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags);
```

`expression` - 表示一个 [Api](Methods.md) 类的变量。

## 参数

| **名称** | **必填/选填** | **数据类型** | **默认值** | **描述** |
| -------- | ------------- | ------------- | ---------- | -------- |
| sConvertType | 选填 | "markdown" \| "html" | "markdown" | 转换类型（"markdown" 或 "html"）。 |
| bHtmlHeadings | 选填 | boolean | false | 指定当目标平台的 Markdown 渲染器不支持 Markdown 风格的标题 ID 时，是否生成 HTML 标题及其 ID。 |
| bBase64img | 选填 | boolean | false | 指定是否将图像以 base64 格式嵌入。 |
| bDemoteHeadings | 选填 | boolean | false | 指定是否降低文档中所有标题的等级，以符合以下规范：使用单个 H1 作为标题，H2 作为正文中的一级标题。 |
| bRenderHTMLTags | 选填 | boolean | false | 指定是否在 Markdown 中保留 HTML 标签。如果只想偶尔使用 HTML 标签，可以通过如下方式避免使用尖括号：\&lt;tag&gt;text\&lt;/tag&gt;。默认情况下，尖括号会被替换为特殊字符。 |

## 返回值

string（字符串）

## 示例

```javascript
let info = "";
window.Asc.plugin.executeMethod ("ConvertDocument", ["markdown", false, false, true, false], function (output) {
    document.getElementById ("text-area").value = info + output;
});
```
