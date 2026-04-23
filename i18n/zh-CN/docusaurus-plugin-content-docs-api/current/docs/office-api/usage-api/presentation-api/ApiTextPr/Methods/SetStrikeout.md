# SetStrikeout

指定运行的内容显示为中间有一条水平线穿过。

## 语法

```javascript
expression.SetStrikeout(isStrikeout);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isStrikeout | 必需 | boolean |  | 指定当前运行的内容显示为删除线。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例指定文本运行的内容显示时在行的中心有一条水平线。

```javascript editor-pptx
// How to strike out a text with one line.

// Get the text properties of the run and cross it out.

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
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetStrikeout(true);
paragraph.SetJc("left");
run.AddText("This is a struck out text inside the shape.");
paragraph.AddElement(run);
slide.AddObject(shape);

```
