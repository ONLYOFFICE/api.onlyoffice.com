# SetTextFill

设置当前文本块的文本填充。

继承自 [ApiTextPr.SetTextFill](../../ApiTextPr/Methods/SetTextFill.md)。

## 语法

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充文本颜色的颜色或图案。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在演示文稿中为文本运行应用文本填充颜色。

```javascript editor-pptx
// Set the font color using solid fills, gradients, or patterns.

// Create a text run and apply a color fill to its content.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
const runTextFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
run.SetTextFill(runTextFill);
run.AddText("This is a text run with the black text.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
