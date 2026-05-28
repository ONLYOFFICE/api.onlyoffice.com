# SetPosition

指定此文本块的文本相对于周围非定位文本的默认
基线升高或降低的量。

## 语法

```javascript
expression.SetPosition(nPosition);
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | 必需 | [hps](../../Enumeration/hps.md) |  | 以半磅（1/144 英寸）为单位指定正值（上标文本）或负值（下标文本）的度量值。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

相对于电子表格中周围文本基线升高或降低文本运行。

```javascript editor-xlsx
// How do I shift text up or down without changing its font size in a spreadsheet?

// Adjust the vertical offset of a word or phrase to create superscript or subscript-like effects in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text raised 10 half-points.");
run.SetPosition(10);
paragraph.AddElement(run);
run = Api.CreateRun();
run.AddText("This is a text run with the text lowered 16 half-points.");
run.SetPosition(-16);
paragraph.AddElement(run);
```
