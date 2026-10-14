# SetNumberFormat

设置唯一值条件格式规则的数字格式。

## 语法

```javascript
expression.SetNumberFormat(NumberFormat);
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| NumberFormat | 必需 | string |  | 要应用的数字格式。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为符合唯一值规则的单元格分配数字显示格式。

```javascript editor-xlsx
// How do I control how numbers appear in cells highlighted by a unique values rule in a spreadsheet?

// Format the numeric output of uniquely matched cells using a custom pattern in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Numbers");
worksheet.GetRange("A2").SetValue(10.5);
worksheet.GetRange("A3").SetValue(20.3);
worksheet.GetRange("A4").SetValue(10.5);
worksheet.GetRange("A5").SetValue(30.7);

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetNumberFormat("0.00%");

worksheet.GetRange("C1").SetValue("Number format set to percentage");
```
