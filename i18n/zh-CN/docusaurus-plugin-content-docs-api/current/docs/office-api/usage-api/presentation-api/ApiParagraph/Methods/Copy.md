# Copy

创建段落副本。忽略批注、脚注引用和复杂域。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

在演示文稿中复制段落。

```javascript editor-pptx
// How do I copy a paragraph in a presentation?

// Create and add a copy of an existing paragraph to a text box in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
docContent.RemoveAllElements();

const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is just a sample text that was copied.");
docContent.Push(paragraph);

const copyParagraph = paragraph.Copy();
docContent.Push(copyParagraph);
slide.AddObject(shape);
```
