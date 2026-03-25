# AddUniqueValues

向集合添加新的唯一值条件格式规则。

## 语法

```javascript
expression.AddUniqueValues();
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiUniqueValues](../../ApiUniqueValues/ApiUniqueValues.md) \| null

## 示例

此示例向区域添加唯一值条件格式。

```javascript editor-xlsx
// How to add unique values conditional formatting rules to highlight unique or duplicate values.

// Add unique values conditional formatting to cells.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product Names");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");
worksheet.GetRange("A6").SetValue("Banana");
worksheet.GetRange("A7").SetValue("Grape");
worksheet.GetRange("A8").SetValue("Orange");
worksheet.GetRange("A9").SetValue("Kiwi");

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.GetFont().SetColor(Api.CreateColorFromRGB(255, 0, 0));

```
