# SetFill

设置当前文本块的文本颜色。

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

应用纯色填充以更改电子表格中文本运行的颜色。

```javascript editor-xlsx
// How do I set a specific color for text using a fill in a spreadsheet?

// Paint text with a chosen color by assigning a solid fill to its formatting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
let textProps = run.GetTextPr();
fill = Api.CreateSolidFill(Api.RGB(128, 128, 128));
textProps.SetFill(fill);
run.AddText("This is a text run with the font color set to gray.");
paragraph.AddElement(run);
```
