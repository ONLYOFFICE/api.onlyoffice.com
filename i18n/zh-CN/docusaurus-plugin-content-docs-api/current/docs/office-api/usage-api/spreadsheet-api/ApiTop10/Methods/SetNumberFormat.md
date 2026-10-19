# SetNumberFormat

设置前 10 项条件格式规则的数字格式。

## 语法

```javascript
expression.SetNumberFormat(NumberFormat);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NumberFormat | 必需 | string |  | 要应用的数字格式。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为符合前 10 项规则的单元格应用自定义数字格式。

```javascript editor-xlsx
// How do I display highlighted top values in a specific number format in a spreadsheet?

// Format the winning cells as currency when a top 10 condition is triggered in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.RGB(255, 255, 0));

let formatBefore = condition1.GetNumberFormat();
condition1.SetNumberFormat("$#,##0.00");
let formatAfter = condition1.GetNumberFormat();

worksheet.GetRange("C1").SetValue("Format before: " + (formatBefore || "General"));
worksheet.GetRange("C2").SetValue("Format after: " + formatAfter);
```
