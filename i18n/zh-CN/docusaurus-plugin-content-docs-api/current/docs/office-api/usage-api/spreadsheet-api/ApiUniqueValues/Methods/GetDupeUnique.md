# GetDupeUnique

返回指定唯一值条件格式规则是格式化重复值还是唯一值的设置。

## 语法

```javascript
expression.GetDupeUnique();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlDuplicateValues](../../Enumeration/XlDuplicateValues.md)

## 示例

此示例演示如何从唯一值条件格式规则获取重复/唯一值设置。

```javascript editor-xlsx
// How to check whether rule highlights unique or duplicate values.

// Get the duplicate/unique setting from unique values rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");

let range = worksheet.GetRange("A2:A6");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(0, 255, 0));

let dupeUniqueSetting = uniqueValuesCondition.GetDupeUnique();

worksheet.GetRange("C1").SetValue("DupeUnique setting:");
worksheet.GetRange("C2").SetValue(dupeUniqueSetting);
worksheet.GetRange("C3").SetValue("(xlUnique = unique, xlDuplicate = duplicate)");
```
