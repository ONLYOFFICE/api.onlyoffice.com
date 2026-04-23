# SetFill

设置当前文本运行的文本颜色。

## 语法

```javascript
expression.SetFill(oApiFill);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充文本颜色的颜色或图案。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

此示例设置文本运行的文本颜色。

```javascript editor-pdf
// How to change a color of a text.

// Get the text properties of the run and color its font.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);

const textFill = Api.CreateSolidFill(Api.RGB(51, 51, 51));
textPr.SetFill(textFill);
run.AddText("This is a text run with the font color set to black using the text properties.");
paragraph.AddElement(run);
page.AddObject(shape);

```
