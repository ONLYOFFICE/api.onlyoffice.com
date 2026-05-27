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

读取电子表格中条件格式规则是高亮显示唯一值还是重复值。

```javascript editor-xlsx
// How do I tell if a formatting rule is set to mark unique entries or duplicates in a spreadsheet?

// Verify the highlight mode of a unique-values rule to see which kind of entries it targets in a spreadsheet.

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
