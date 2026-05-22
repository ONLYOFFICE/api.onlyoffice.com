# GetElementsCount

返回当前文档中的元素数量。

## 语法

```javascript
expression.GetElementsCount();
```

`expression` - 表示 [ApiDocumentContent](../ApiDocumentContent.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算演示文稿中形状文本内容中的段落数。

```javascript editor-pptx
// How do I find out how many paragraphs a shape contains in a presentation?

// Get the paragraph count from a shape and display it as text on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText("We got the first paragraph inside the shape.");
paragraph.AddLineBreak();
paragraph.AddText("Number of elements inside the shape: " + docContent.GetElementsCount());
paragraph.AddLineBreak();
paragraph.AddText("Line breaks are NOT counted into the number of elements.");
slide.AddObject(shape);
```
