# SetFontSize

设置当前文本块字符的字体大小。

## 语法

```javascript
expression.SetFontSize(nSize);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nSize | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位测量的文本大小值。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

调整电子表格中文本运行的字体大小。

```javascript editor-xlsx
// How do I make one part of the text larger than the rest in a spreadsheet?

// Scale up a specific run to give it visual weight compared to other text in a spreadsheet.

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
run.SetFontSize(30);
run.AddText("This is a text run with the font size set to 15 points (30 half-points).");
paragraph.AddElement(run);
```
