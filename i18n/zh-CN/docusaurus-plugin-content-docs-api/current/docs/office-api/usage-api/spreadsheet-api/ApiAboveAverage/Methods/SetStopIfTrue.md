# SetStopIfTrue

设置如果此规则计算结果为 true，编辑器是否停止计算其他格式规则。

## 语法

```javascript
expression.SetStopIfTrue(StopIfTrue);
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| StopIfTrue | 必需 | boolean |  | 为 true 时停止计算其他规则。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中当高于平均值规则满足时停止计算优先级较低的格式规则。

```javascript editor-xlsx
// How do I prevent the other formatting rules from being applied to the above average cells in a spreadsheet?

// Keep the above average cells formatted by the first rule only in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let aboveAverage = formatConditions.AddAboveAverage();
let condition = formatConditions.Add("xlCellValue", "xlGreater", "20");

aboveAverage.SetFillColor(Api.RGB(255, 255, 0));
aboveAverage.SetStopIfTrue(true);

condition.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The above average cells keep the general number format");
```
