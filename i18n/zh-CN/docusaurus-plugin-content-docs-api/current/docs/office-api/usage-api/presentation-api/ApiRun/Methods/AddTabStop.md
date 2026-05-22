# AddTabStop

向当前文本块添加制表位。

## 语法

```javascript
expression.AddTabStop();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在演示文稿中为文本添加制表符间距。

```javascript editor-pptx
// How do I insert tabs in text in a presentation?

// Space out text by adding multiple tab stops in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.SetFontSize(30);
run.AddText("This is just a sample text. After it three tab stops will be added.");
run.AddTabStop();
run.AddTabStop();
run.AddTabStop();
run.AddText("This is the text which starts after the tab stops.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
