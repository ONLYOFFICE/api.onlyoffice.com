# HasTextContent

检查绘图对象是否具有关联的文本主体。

继承自 [ApiDrawing.HasTextContent](../../ApiDrawing/Methods/HasTextContent.md)。

## 语法

```javascript
expression.HasTextContent();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中添加文本前后检查形状是否具有关联的文本主体。

```javascript editor-docx
// Returns true if the shape already contains a text body, false otherwise.

// Add a shape, check HasTextContent, add text to the shape and check it again.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
const hasTextContentBefore = drawing.HasTextContent();
drawing.GetContent().GetElement(0).AddText("Sample");
const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText("Before adding text: HasTextContent() === " + hasTextContentBefore);
resultParagraph.AddLineBreak();
resultParagraph.AddText("After adding text: HasTextContent() === " + drawing.HasTextContent());
doc.Push(resultParagraph);
```
