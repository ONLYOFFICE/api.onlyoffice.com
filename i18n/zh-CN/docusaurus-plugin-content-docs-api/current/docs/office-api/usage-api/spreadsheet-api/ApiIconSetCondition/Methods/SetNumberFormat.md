# SetNumberFormat

设置当条件格式规则计算结果为 true 时应用于单元格的数字格式。

## 语法

```javascript
expression.SetNumberFormat(NumberFormat);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NumberFormat | 必需 | string |  | 数字格式代码（例如 "General"、"#,##0.00" 等） |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置条件格式规则的数字格式。

```javascript editor-xlsx
// How to apply number formatting to conditional formatting rules.

// Set conditional formatting rule number format.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(1234.56);
worksheet.GetRange("A3").SetValue(2500.75);
worksheet.GetRange("A4").SetValue(150.25);
worksheet.GetRange("A5").SetValue(3000.00);
worksheet.GetRange("A6").SetValue(750.50);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "2000");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original format:");
worksheet.GetRange("C2").SetValue(condition1.GetNumberFormat());

condition1.SetNumberFormat("$#,##0.00");

worksheet.GetRange("C4").SetValue("New format:");
worksheet.GetRange("C5").SetValue(condition1.GetNumberFormat());

```
