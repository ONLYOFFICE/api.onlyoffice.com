# CreateNewHistoryPoint

创建新的历史记录点。

## 语法

```javascript
expression.CreateNewHistoryPoint();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例创建一个新的历史记录点。

```javascript editor-pptx
// How to add a new history point to the presentation.

// Create a presentation history point.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
paragraph.AddText("This is just a sample text.");
presentation.CreateNewHistoryPoint();
paragraph = Api.CreateParagraph();
paragraph.AddText("New history point was just created.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
