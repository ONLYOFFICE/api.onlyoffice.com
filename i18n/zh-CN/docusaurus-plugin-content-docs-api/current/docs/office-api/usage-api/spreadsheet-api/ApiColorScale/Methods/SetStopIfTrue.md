# SetStopIfTrue

设置如果此规则计算结果为 true，编辑器是否停止计算其他格式规则。

继承自 [ApiFormatCondition.SetStopIfTrue](../../ApiFormatCondition/Methods/SetStopIfTrue.md)。

## 语法

```javascript
expression.SetStopIfTrue(StopIfTrue);
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| StopIfTrue | 必需 | boolean |  | 为 true 时停止计算其他规则。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中当某条规则满足时停止计算优先级较低的格式规则。

```javascript editor-xlsx
// How do I prevent the other conditional formatting rules from being applied to the cells which are already highlighted in a spreadsheet?

// Keep the number format of the cells greater than 200 untouched by the second rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
let condition2 = formatConditions.Add("xlCellValue", "xlGreater", "20");

condition1.SetFillColor(Api.RGB(255, 0, 0));
condition1.SetStopIfTrue(true);

condition2.SetFillColor(Api.RGB(0, 255, 0));
condition2.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The cells greater than 200 keep the general number format");
```
