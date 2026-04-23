# RemoveAllElements

从当前运行中移除所有元素。

## 语法

```javascript
expression.RemoveAllElements();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例从运行中移除所有元素。

```javascript editor-pptx
// How to remove all elements from the text run object.

// Delete text from the slide.

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
run.AddText("This is just a sample text.");
run.RemoveAllElements();
run.AddText("All elements from this run were removed before adding this text.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
