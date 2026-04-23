# ToHtml

将文档转换为 HTML。

## 语法

```javascript
expression.ToHtml(bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bHtmlHeadings | 可选 | boolean | false | 定义当目标平台的 Markdown 渲染器不处理 Markdown 样式 ID 时，是否生成 HTML 标题和 ID。 |
| bBase64img | 可选 | boolean | false | 定义图像是否以 base64 格式创建。 |
| bDemoteHeadings | 可选 | boolean | false | 定义文档中的所有标题级别是否将降级以符合以下标准：单个 H1 作为标题，H2 作为正文中的顶级标题。 |
| bRenderHTMLTags | 可选 | boolean | false | 定义 HTML 标签是否将保留在 Markdown 中。如果只想偶尔使用 HTML 标签，可以通过以下方式避免使用左尖括号：\&lt;tag&gt;text\&lt;/tag&gt;。默认情况下，左尖括号将被替换为特殊字符。 |

## 返回值

string

## 示例

此示例将文档转换为 HTML。

```javascript editor-docx
// How to get an HTML from the document content.

// Convert the document indicating "html" parameter.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Heading 1");
let heading1Style = doc.GetStyle("Heading 1");
paragraph1.SetStyle(heading1Style);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This document will be converted to HTML.");
doc.Push(paragraph2);
let search = paragraph2.Search("HTML");
search[0].SetBold(true);
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Heading 2");
doc.Push(paragraph3);
let heading2Style = doc.GetStyle("Heading 2");
paragraph3.SetStyle(heading2Style);
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("There is an example of two heading levels.");
doc.Push(paragraph4);
let html = Api.ConvertDocument("html", false, false, false, true);
let paragraph5 = Api.CreateParagraph();
paragraph5.AddLineBreak();
paragraph5.AddText("HTML").SetBold(true);
paragraph5.AddLineBreak();
paragraph5.AddText(html);
doc.Push(paragraph5);
```
