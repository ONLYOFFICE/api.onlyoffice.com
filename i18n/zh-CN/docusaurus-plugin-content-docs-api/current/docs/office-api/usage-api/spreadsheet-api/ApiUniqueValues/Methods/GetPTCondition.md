# GetPTCondition

返回数据透视表条件对象。

继承自 [ApiFormatCondition.GetPTCondition](../../ApiFormatCondition/Methods/GetPTCondition.md)。

## 语法

```javascript
expression.GetPTCondition();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

PTCondition \| null

## 示例

在电子表格中检查唯一值条件格式规则是否具有数据透视表范围条件。

```javascript editor-xlsx
// How do I find out if a unique-values rule is linked to a pivot table scope in a spreadsheet?

// Detect the pivot table association of a unique-values formatting rule in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let ptCondition = uniqueValuesCondition.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT Condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Available" : "Not available");
```
