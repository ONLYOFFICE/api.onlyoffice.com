# SetStopIfTrue

设置如果此规则计算结果为 true，编辑器是否停止计算其他格式规则。

## 语法

```javascript
expression.SetStopIfTrue(StopIfTrue);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| StopIfTrue | 必需 | boolean |  | 为 true 时停止计算其他规则。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中当最前/最后规则满足时停止计算优先级较低的格式规则。

```javascript editor-xlsx
// How do I prevent the other formatting rules from being applied to the top values in a spreadsheet?

// Keep the two greatest values formatted by the top 10 rule only in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let top10 = formatConditions.AddTop10();
let condition = formatConditions.Add("xlCellValue", "xlGreater", "20");

top10.SetRank(2);
top10.SetFillColor(Api.RGB(255, 0, 0));
top10.SetStopIfTrue(true);

condition.SetNumberFormat("0.00");

worksheet.GetRange("C1").SetValue("The top 2 cells keep the general number format");
```
