# GetFillColor

返回当前单元格范围的背景颜色。当单元格/单元格范围的背景颜色为空时返回“No Fill”。

## 语法

```javascript
expression.GetFillColor();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## 示例

读取电子表格中单元格范围的背景颜色。

```javascript editor-xlsx
// How do I find out what background color a cell has in a spreadsheet?

// Copy a cell's fill color and apply it to another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.SetColumnWidth(0, 60);
let range = worksheet.GetRange("A1");
range.SetFillColor(Api.CreateColorFromRGB(255, 213, 191));
range.SetValue("This is the cell with a color set to its background.");
let fillColor = range.GetFillColor();
worksheet.GetRange("A3").SetValue("This is another cell with the same color set to its background");
worksheet.GetRange("A3").SetFillColor(fillColor);
```
