# Add

向集合添加新的格式条件。

## 语法

```javascript
expression.Add(Type, Operator, Formula1, Formula2);
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | 必需 | [XlFormatConditionType](../../Enumeration/XlFormatConditionType.md) |  | 格式条件类型。 |
| Operator | 可选 | [XlFormatConditionOperator](../../Enumeration/XlFormatConditionOperator.md) |  | 格式条件运算符。 |
| Formula1 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 第一个公式。 |
| Formula2 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 第二个公式。 |

## 返回值

[ApiFormatCondition](../../ApiFormatCondition/ApiFormatCondition.md) \| null

## 示例

当电子表格中的单元格值满足条件时自动高亮显示。

```javascript editor-xlsx
// How do I create a rule that colors cells based on whether they are above or below a threshold in a spreadsheet?

// Set up automatic cell formatting that reacts to the data entered in a spreadsheet.

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
if (condition1) {
    condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));
}
```
