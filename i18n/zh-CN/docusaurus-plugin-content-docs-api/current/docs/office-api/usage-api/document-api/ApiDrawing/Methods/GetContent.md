# GetContent

返回可以插入段落或文本块的绘图内部内容（如果存在）。

## 语法

```javascript
expression.GetContent();
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDocumentContent](../../ApiDocumentContent/ApiDocumentContent.md)

## 示例

获取文档中绘图对象的内容。

```javascript editor-docx
// How do I get the content in a document?

// Get the content using a drawing object object in a document.

const doc = Api.GetDocument();
let firstParagraph = doc.GetElement(0);

const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const fill = Api.CreateSolidFill(Api.CreateRGBColor(100, 150, 200));
const drawing = Api.CreateShape("rect", 100 * 36000, 20 * 36000, fill, stroke);
firstParagraph.AddDrawing(drawing);

const docContent = drawing.GetContent();

const shapeParagraph = Api.CreateParagraph();
shapeParagraph.AddText('This is the text added to the paragraph inside the drawing using the GetContent method.');
docContent.AddElement(0, shapeParagraph);
```
