# GetParent

返回当前格式条件的父区域对象。

继承自 [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

在电子表格中获取拥有高于平均值规则的格式集合。

```javascript editor-xlsx
// How do I access the parent container of an above-average conditional formatting rule in a spreadsheet?

// Navigate from an individual rule back up to the collection it belongs to in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data Set");
worksheet.GetRange("A2").SetValue(45);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(89);
worksheet.GetRange("A5").SetValue(23);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();

let parentRange = aboveAverageCondition.GetParent();
worksheet.GetRange("C1").SetValue("Parent range:");
worksheet.GetRange("C2").SetValue(parentRange.GetAddress());
```
