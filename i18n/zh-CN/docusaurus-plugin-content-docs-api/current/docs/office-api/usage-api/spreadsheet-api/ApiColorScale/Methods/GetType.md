# GetType

返回色阶条件格式规则的类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## 示例

此示例演示如何获取色阶条件格式规则的类型。

```javascript editor-xlsx
// How to identify the type of conditional formatting rule.

// Get the type of the color scale conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(30);
worksheet.GetRange("A4").SetValue(50);
worksheet.GetRange("A5").SetValue(70);
worksheet.GetRange("A6").SetValue(90);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale(2);

let conditionType = colorScale.GetType();

worksheet.GetRange("C1").SetValue("Type:");
worksheet.GetRange("C2").SetValue(conditionType);

```
