# GetSheets

返回表示活动工作簿中所有工作表的工作表集合。

## 语法

```javascript
expression.GetSheets();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorksheet](../../ApiWorksheet/ApiWorksheet.md)[]

## 示例

将所有工作表标签收集到列表中并在电子表格的单元格中显示其名称。

```javascript editor-xlsx
// How do I loop through every sheet in the workbook and read their names in a spreadsheet?

// Build an inventory of all tabs by gathering their titles and writing them out in a spreadsheet.

Api.AddSheet("new_sheet_name");
let sheets = Api.GetSheets();
let sheetName1 = sheets[0].GetName();
let sheetName2 = sheets[1].GetName();
sheets[1].GetRange("A1").SetValue(sheetName1);
sheets[1].GetRange("A2").SetValue(sheetName2);
```
