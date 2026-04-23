# GetOperator

返回格式条件运算符。

## 语法

```javascript
expression.GetOperator();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlFormatConditionOperator](../../Enumeration/XlFormatConditionOperator.md)

## 示例

此示例获取条件格式规则的运算符。

```javascript editor-xlsx
// How to retrieve the operator from conditional formatting rules.

// Get conditional formatting rule operator.

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
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let operator = condition1.GetOperator();

worksheet.GetRange("C1").SetValue("Rule operator:");
worksheet.GetRange("C2").SetValue(operator);

```
