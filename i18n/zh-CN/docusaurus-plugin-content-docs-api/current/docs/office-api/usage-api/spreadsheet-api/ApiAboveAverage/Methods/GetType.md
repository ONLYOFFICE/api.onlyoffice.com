# GetType

返回高于平均值条件格式规则的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## 示例

此示例演示如何获取高于平均值条件格式规则的类型。

```javascript editor-xlsx
// How to identify the type of conditional formatting rule.

// Get the type of the above average conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(20);
worksheet.GetRange("A4").SetValue(30);
worksheet.GetRange("A5").SetValue(40);
worksheet.GetRange("A6").SetValue(50);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition = formatConditions.AddAboveAverage();
condition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let conditionType = condition.GetType();

worksheet.GetRange("C1").SetValue("Type:");
worksheet.GetRange("C2").SetValue(conditionType);

```
