# SetTextPr

设置当前文本块的文本属性。

## 语法

```javascript
expression.SetTextPr(oTextPr);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oTextPr | 必需 | [ApiTextPr](../../ApiTextPr/ApiTextPr.md) |  | 要设置到当前文本块的文本属性。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在电子表格中为当前 run 设置文本属性。

```javascript editor-xlsx
// How to create text property for a text object in a spreadsheet.

// Create a text run object, add properties like font size, style, color, etc in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is a sample text with the font size set to 15 points and the font weight set to bold.");
let textProps = run.GetTextPr();
textProps.SetFontSize(30);
textProps.SetBold(true);
run.SetTextPr(textProps);
paragraph.AddElement(run);
```
