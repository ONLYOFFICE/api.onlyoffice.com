# GetShowValue

返回数据条是否显示单元格值。

## 语法

```javascript
expression.GetShowValue();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中单元格值是否与数据条一起可见。

```javascript editor-xlsx
// How do I find out if numbers are displayed inside data bar cells in a spreadsheet?

// Verify whether a data bar rule keeps the underlying values visible to the reader in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let showValue = dataBar.GetShowValue();

worksheet.GetRange("C1").SetValue("Show Value:");
worksheet.GetRange("C2").SetValue(showValue ? "Yes" : "No");
```
