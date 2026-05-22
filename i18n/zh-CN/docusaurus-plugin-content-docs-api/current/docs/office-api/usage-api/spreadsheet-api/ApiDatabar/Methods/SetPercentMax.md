# SetPercentMax

设置数据条的百分比最大值。

## 语法

```javascript
expression.SetPercentMax(percent);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| percent | 必需 | number |  | 数据条的最大百分比长度。 |

## 返回值

此方法不返回任何数据。

## 示例

将数据条规则中最长的条限制为电子表格中列宽的特定百分比。

```javascript editor-xlsx
// How do I limit how wide the largest data bar can grow inside a cell in a spreadsheet?

// Prevent oversized bars by defining an upper percentage boundary for bar length in a spreadsheet.

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

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetPercentMax() + "%");

dataBar.SetPercentMax(80);

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetPercentMax() + "%");
```
