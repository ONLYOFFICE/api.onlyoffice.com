# ToMarkdown

将文档转换为 Markdown。

## 语法

```javascript
expression.ToMarkdown(bHtmlHeadings, bBase64img, bDemoteHeadings, bRenderHTMLTags);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bHtmlHeadings | 可选 | boolean | false | 定义当目标平台的 Markdown 渲染器不处理 Markdown 样式 ID 时，是否生成 HTML 标题和 ID。 |
| bBase64img | 可选 | boolean | false | 定义图像是否以 base64 格式创建。 |
| bDemoteHeadings | 可选 | boolean | false | 定义文档中的所有标题级别是否将降级以符合以下标准：单个 H1 作为标题，H2 作为正文中的顶级标题。 |
| bRenderHTMLTags | 可选 | boolean | false | 定义是否在 Markdown 中保留 HTML 标签。如果只是偶尔使用 HTML 标签，可以通过以下方式避免使用左尖括号：\<tag&gt;text\</tag&gt;。默认情况下，左尖括号将被替换为特殊字符。 |

## 返回值

string

## 示例

将文档内容转换为 Markdown 字符串。

```javascript editor-docx
// How do I export a document with headings and paragraphs as Markdown in a document?

// Produce a Markdown representation of the document so the text can be used in version-controlled or plain-text workflows.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Heading 1");
let heading1Style = doc.GetStyle("Heading 1");
paragraph1.SetStyle(heading1Style);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This document will be converted to Markdown.");
doc.Push(paragraph2);
let search = paragraph2.Search("Markdown");
search[0].SetBold(true);
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Heading 2");
doc.Push(paragraph3);
let heading2Style = doc.GetStyle("Heading 2");
paragraph3.SetStyle(heading2Style);
let paragraph4 = Api.CreateParagraph();
paragraph4.AddText("There is an example of two heading levels.");
doc.Push(paragraph4);
let markdown = doc.ToMarkdown(false, false, true, false);
let paragraph5 = Api.CreateParagraph();
paragraph5.AddLineBreak();
paragraph5.AddText("Markdown").SetBold(true);
paragraph5.AddLineBreak();
paragraph5.AddText(markdown);
doc.Push(paragraph5);
```
