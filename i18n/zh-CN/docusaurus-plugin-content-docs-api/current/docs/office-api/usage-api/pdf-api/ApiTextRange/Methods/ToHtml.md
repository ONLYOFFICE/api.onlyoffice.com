# ToHtml

将文本范围转换为 HTML。

## 语法

```javascript
expression.ToHtml(options);
```

`expression` - 表示 [ApiTextRange](../ApiTextRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| options | 可选 | [ToHtmlOptions](../../Enumeration/ToHtmlOptions.md) | \{\} | HTML 转换选项。 |

## 返回值

string

## 示例

在 PDF 文档中将段落的一部分导出为 HTML 字符串。

```javascript editor-pdf
// A text range limits the HTML export to the characters between its start and end positions.

// Convert the end of a sentence with its bold words to HTML and show the markup in a second paragraph of the shape on a PDF page.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 200 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
page.AddObject(shape);

const docContent = shape.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("Convert only ");
const boldRun = paragraph.AddText("this part");
boldRun.SetBold(true);

const range = paragraph.GetTextRange(8, 22);
const html = range.ToHtml({"RenderHTMLTags": true});
const htmlParagraph = Api.CreateParagraph();
htmlParagraph.AddText("HTML output: " + html.trim());
docContent.Push(htmlParagraph);
```
