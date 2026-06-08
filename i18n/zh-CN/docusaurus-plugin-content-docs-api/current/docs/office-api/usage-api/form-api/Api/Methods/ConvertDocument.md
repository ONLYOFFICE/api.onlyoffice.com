# ConvertDocument

将文档转换为 Markdown 或 HTML 文本。

## 语法

```javascript
expression.ConvertDocument(convertType, htmlHeadings, base64img, demoteHeadings, renderHTMLTags);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| convertType | 可选 | "markdown" \| "html" | "markdown" | 转换类型。 |
| htmlHeadings | 可选 | boolean | false | 定义当目标平台的 Markdown 渲染器不处理 Markdown 样式 ID 时，是否生成 HTML 标题和 ID。 |
| base64img | 可选 | boolean | false | 定义图像是否以 base64 格式创建。 |
| demoteHeadings | 可选 | boolean | false | 定义文档中的所有标题级别是否将降级以符合以下标准：单个 H1 作为标题，H2 作为正文中的顶级标题。 |
| renderHTMLTags | 可选 | boolean | false | 定义是否在 Markdown 中保留 HTML 标签。如果只是偶尔使用 HTML 标签，可以通过以下方式避免使用左尖括号：\<tag&gt;text\</tag&gt;。默认情况下，左尖括号将被替换为特殊字符。 |

## 返回值

string

## 示例

将文档内容转换为 Markdown 并将结果粘贴回文档中。

```javascript editor-forms
// How do I export the text of a document as Markdown in a document?

// Write headings and paragraphs, then append the Markdown version of that content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Heading 1");
paragraph.SetStyle(doc.GetStyle("Heading 1"));

paragraph = Api.CreateParagraph();
paragraph.AddText("This document will be converted to Markdown.");
doc.Push(paragraph);
paragraph.Search("Markdown")[0].SetBold(true);

paragraph = Api.CreateParagraph();
paragraph.AddText("Heading 2");
doc.Push(paragraph);
paragraph.SetStyle(doc.GetStyle("Heading 2"));

paragraph = Api.CreateParagraph();
paragraph.AddText("There is an example of two heading levels.");
doc.Push(paragraph);

let md = Api.ConvertDocument("markdown", false, false, true, false);
paragraph = Api.CreateParagraph();
paragraph.AddLineBreak();
paragraph.AddText("Markdown").SetBold(true);
paragraph.AddLineBreak();
paragraph.AddText(md);
doc.Push(paragraph);
```
