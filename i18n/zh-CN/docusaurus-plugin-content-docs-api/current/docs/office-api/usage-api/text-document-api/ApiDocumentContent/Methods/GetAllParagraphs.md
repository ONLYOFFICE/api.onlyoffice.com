# GetAllParagraphs

从当前文档内容返回所有段落的数组。

## 语法

```javascript
expression.GetAllParagraphs();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)[]

## 示例

此示例展示如何从文档内容获取所有段落的数组。

```javascript editor-docx
// Get all paragraphs added to the document.

// How to retrieve all paragraphs and make the first one bold.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let docContent = shape.GetDocContent();
paragraph = docContent.GetElement(0);
paragraph.AddText("Paragraph 1");
paragraph = Api.CreateParagraph();
paragraph.AddText("Paragraph 2");
docContent.Push(paragraph);
let paragraphs = docContent.GetAllParagraphs();
paragraphs[0].SetBold(true);
```
