# SetLastPriority

设置当前条件格式规则的计算顺序，使其在工作表上的所有其他规则之后计算。

继承自 [ApiFormatCondition.SetLastPriority](../../ApiFormatCondition/Methods/SetLastPriority.md)。

## 语法

```javascript
expression.SetLastPriority();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中降低高于平均值突出显示规则的优先级，使其在所有其他规则之后计算。

```javascript editor-xlsx
// How do I give an above-average formatting rule the lowest priority among all conditions in a spreadsheet?

// Push a highlight rule to the back of the evaluation order so other rules override it in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Priority Test");
worksheet.GetRange("A2").SetValue(60);
worksheet.GetRange("A3").SetValue(80);
worksheet.GetRange("A4").SetValue(90);
worksheet.GetRange("A5").SetValue(70);

let dataRange = worksheet.GetRange("A2:A5");
let formatConditions = dataRange.GetFormatConditions();

let aboveAverageCondition = formatConditions.AddAboveAverage();
let cellValueCondition = formatConditions.Add("xlCellValue", "xlLess", "75");

worksheet.GetRange("C1").SetValue("Before priority: " + aboveAverageCondition.GetPriority());
aboveAverageCondition.SetLastPriority();
worksheet.GetRange("C2").SetValue("After priority: " + aboveAverageCondition.GetPriority());
```
