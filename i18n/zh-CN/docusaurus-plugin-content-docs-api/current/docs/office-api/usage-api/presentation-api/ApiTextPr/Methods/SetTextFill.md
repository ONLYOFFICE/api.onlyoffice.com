# SetTextFill

设置当前文本块的文本填充。

## 语法

```javascript
expression.SetTextFill(oApiFill);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充文本颜色的颜色或图案。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在演示文稿中为文本应用填充颜色。

```javascript editor-pptx
// What fill colors can be applied to text in a presentation?

// Set the solid color that fills the text characters in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
fill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetTextFill(fill);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the black text fill set using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
