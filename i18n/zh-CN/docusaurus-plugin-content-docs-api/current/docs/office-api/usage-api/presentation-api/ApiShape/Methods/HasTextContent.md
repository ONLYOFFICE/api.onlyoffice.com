# HasTextContent

检查绘图对象是否具有关联的文本主体。

继承自 [ApiDrawing.HasTextContent](../../ApiDrawing/Methods/HasTextContent.md)。

## 语法

```javascript
expression.HasTextContent();
```

`expression` - 表示 [ApiShape](../ApiShape.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在添加文本前后检查形状是否具有关联的文本主体。

```javascript editor-pptx
// Returns true if the shape already contains a text body, false otherwise.

// Create two shapes, use one to display results, and verify HasTextContent changes after GetTextRange sets text.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const shape = Api.CreateShape("rect", 1000000, 500000);
const shapeForDesc = Api.CreateShape("rect", 8000000, 3000000);
slide.RemoveAllObjects();
slide.AddObject(shape);
slide.AddObject(shapeForDesc);
const paragraph = shapeForDesc.GetContent().GetElement(0);
paragraph.AddText('Before add text shape.HasTextContent() === ' + shape.HasTextContent());
shape.GetTextRange().SetText("Sample");
paragraph.AddText('\nAfter add text shape.HasTextContent() === ' + shape.HasTextContent());
```
