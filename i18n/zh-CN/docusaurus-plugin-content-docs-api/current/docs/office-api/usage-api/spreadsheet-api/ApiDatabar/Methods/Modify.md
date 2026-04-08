# Modify

使用指定的参数修改当前格式条件。

## 语法

```javascript
expression.Modify(Type, Operator, Formula1, Formula2);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Type | 可选 | [XlFormatConditionType](../../Enumeration/XlFormatConditionType.md) |  | 格式条件类型。 |
| Operator | 可选 | [XlFormatConditionOperator](../../Enumeration/XlFormatConditionOperator.md) |  | 格式条件运算符。 |
| Formula1 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 第一个公式。 |
| Formula2 | 可选 | string \| number \| [ApiRange](../../ApiRange/ApiRange.md) |  | 第二个公式。 |

## 返回值

[ApiFormatCondition](../../ApiFormatCondition/ApiFormatCondition.md) \| null

## 示例

此示例修改条件格式规则。

```javascript editor-xlsx
// How to change the conditions of existing conditional formatting rules.

// Modify conditional formatting rule parameters.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(30);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(40);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlLess", "50");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original formula:");
worksheet.GetRange("C2").SetValue(condition1.Formula1);

condition1.Modify("xlCellValue", "xlGreater", "200");

worksheet.GetRange("C4").SetValue("Modified formula:");
worksheet.GetRange("C5").SetValue(condition1.Formula1);

```
