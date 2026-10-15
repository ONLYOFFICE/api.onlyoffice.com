# SetOutLine

设置当前文本块的文本轮廓。

继承自 [ApiTextPr.SetOutLine](../../ApiTextPr/Methods/SetOutLine.md)。

## 语法

```javascript
expression.SetOutLine(oStroke);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建文本轮廓的笔画。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在电子表格中为文本运行的字母应用彩色边框。

```javascript editor-xlsx
// How do I add an outline stroke to text in a spreadsheet?

// Give text a visible edge by drawing a colored line around each character in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);
run = Api.CreateRun();
stroke = Api.CreateStroke(0.2 * 36000, Api.CreateSolidFill(Api.RGB(128, 128, 128)));
run.SetOutLine(stroke);
run.AddText("This is a text run with the gray text outline.");
paragraph.AddElement(run);
```
