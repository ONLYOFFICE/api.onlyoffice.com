# GetCurrentParagraph

返回光标所在的当前段落。

## 语法

```javascript
expression.GetCurrentParagraph();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

此示例展示如何从文档内容获取当前段落。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);

const rgb = Api.CreateRGBColor(100, 150, 200);
const fill = Api.CreateSolidFill(rgb);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(drawing);

const docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
const newParagraph = Api.CreateParagraph();
newParagraph.AddText("This is a new paragraph inside the shape.");
docContent.Push(newParagraph);

const currentParagraph = docContent.GetCurrentParagraph();
currentParagraph.AddText("(Current paragraph detected!)");

```
