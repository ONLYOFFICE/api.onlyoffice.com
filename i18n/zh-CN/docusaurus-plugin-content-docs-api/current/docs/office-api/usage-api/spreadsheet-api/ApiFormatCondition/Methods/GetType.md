# GetType

返回格式条件类型。

## 语法

```javascript
expression.GetType();
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlFormatConditionType](../../Enumeration/XlFormatConditionType.md)

## 示例

读取对电子表格中条件格式规则进行分类的类别。

```javascript editor-xlsx
// How do I find out whether a formatting rule is based on cell value, a formula, or a date period in a spreadsheet?

// Inspect what kind of condition a formatting rule evaluates in a spreadsheet.

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

let ruleType = condition1.GetType();

worksheet.GetRange("C1").SetValue("Rule type:");
worksheet.GetRange("C2").SetValue(ruleType);
```
