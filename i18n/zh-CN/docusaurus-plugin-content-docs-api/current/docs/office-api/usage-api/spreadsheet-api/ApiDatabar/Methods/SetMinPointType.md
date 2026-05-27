# SetMinPointType

设置数据条最小值条件的类型。

## 语法

```javascript
expression.SetMinPointType(type);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [XlConditionValueTypes](../../Enumeration/XlConditionValueTypes.md) |  | 最小值条件的类型。 |

## 返回值

此方法不返回任何数据。

## 示例

定义电子表格中数据条比例尺下边界的计算方式。

```javascript editor-xlsx
// How do I choose what determines the shortest possible data bar in a spreadsheet?

// Anchor the bottom of a data bar range to a percentage, fixed number, or automatic value in a spreadsheet.

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
worksheet.GetRange("C2").SetValue(dataBar.GetMinPointType());

dataBar.SetMinPointType("xlConditionValuePercent");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetMinPointType());
```
