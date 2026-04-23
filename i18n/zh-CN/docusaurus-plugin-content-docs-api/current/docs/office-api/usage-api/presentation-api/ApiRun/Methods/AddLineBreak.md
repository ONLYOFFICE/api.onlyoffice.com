# AddLineBreak

在当前运行位置添加换行符，并从新行开始下一个元素。

## 语法

```javascript
expression.AddLineBreak();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例在运行位置添加换行符，并从新行开始下一个元素。

```javascript editor-pptx
// How to add a line break after a sentence in a text run.

// How to split a text with a line break.

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
run.AddText("This is the text for the first line. Nothing special.");
run.AddLineBreak();
run.AddText("This is the text which starts from the beginning of the second line. ");
run.AddText("It is written in two text runs, you need a space at the end of the first run sentence to separate them.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
