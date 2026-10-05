# GetParent

返回当前格式条件的父区域对象。

继承自 [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

在电子表格中读取拥有数据条格式规则的单元格区域。

```javascript editor-xlsx
// How do I find out which range a data bar formatting rule belongs to in a spreadsheet?

// Trace back a data bar rule to the range it was applied to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let parent = dataBar.GetParent();

worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parent.GetAddress());
```
