# RemoveAllElements

从当前文档或当前文档元素中移除所有元素。
💡 当所有元素被移除时，会自动创建一个新的空段落。如果要向此段落添加内容，请使用 [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) 方法。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从演示文稿中形状内的内容移除所有元素。

```javascript editor-pptx
// How do I clear the text and objects inside a shape in a presentation?

// Access the shape's content area and delete all text and elements in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
docContent.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
docContent.Push(paragraph);
slide.AddObject(shape);
```
