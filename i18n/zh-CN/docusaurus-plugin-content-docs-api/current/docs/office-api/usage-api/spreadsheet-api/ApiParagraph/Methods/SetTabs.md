# SetTabs

指定将用于当前段落中任何制表符的自定义制表位序列。
-**警告**：aPos 数组和 aVal 数组的长度-**必须**相等。

继承自 [ApiParaPr.SetTabs](../../ApiParaPr/Methods/SetTabs.md)。

## 示例

设置一系列自定义制表位，用于电子表格中段落中的任何制表符。

```javascript editor-xlsx
// How to change sizes of tabs between paragraphs in a spreadsheet.

// Customize all kind of tabs indicating sizes in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 150 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetTabs([1440, 2880, 4320], ["left", "center", "right"]);
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 1 inch left");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 2 inches center");
paragraph.AddLineBreak();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("Custom tab - 3 inches right");
```
