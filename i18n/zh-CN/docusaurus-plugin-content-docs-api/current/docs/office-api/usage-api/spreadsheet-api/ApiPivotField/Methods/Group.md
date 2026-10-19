# Group

按时间段对数据透视表字段的日期进行分组，或按间隔对其数字进行分组，与 VBA 中对字段单元格执行的 Range.Group 作用相同。该字段必须位于行或列中；再次分组会替换该字段之前的分组。对于日期，该字段显示最短的时间段，并且会在其旁边为每个较长的时间段添加一个新字段。

## 语法

```javascript
expression.Group(start, end, by, periods);
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| start | 可选 | boolean \| number \| Date | true | 要分组的第一个值，或传递 true 表示字段的第一个值。日期为 Date 对象或其序列号。 |
| end | 可选 | boolean \| number \| Date | true | 要分组的最后一个值，或传递 true 表示字段的最后一个值。 |
| by | 可选 | number |  | 每个数字组的大小，或者在仅按天对日期分组时每组的天数。如果省略，则自动选择数字组的大小，并且每一天为一组。 |
| periods | 可选 | boolean[] |  | 七个值，分别指定是否按秒、分钟、小时、天、月、季度和年对日期进行分组。如果省略，则按月对日期分组。数字分组会忽略此参数。 |

## 返回值

boolean

## 示例

在电子表格中按月和年对数据透视表字段的日期进行分组。

```javascript editor-xlsx
// How do I show pivot table totals by month and year instead of by day in a spreadsheet?

// Summarize daily sales by month within each year using date grouping in a pivot table.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1:C1').SetValue([['Date', 'Amount']]);
worksheet.GetRange('B2:C7').SetValue([
    ['2024-01-15', 120],
    ['2024-01-28', 80],
    ['2024-02-10', 150],
    ['2024-12-05', 60],
    ['2025-01-20', 90],
    ['2025-02-14', 110]
]);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$7");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: 'Date',
});

pivotTable.AddDataField('Amount');

// The periods are seconds, minutes, hours, days, months, quarters and years, as in VBA.
let pivotField = pivotTable.GetPivotFields('Date');
let grouped = pivotField.Group(true, true, undefined, [false, false, false, false, true, false, true]);

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('D1').SetValue('Grouped by months and years');
pivotWorksheet.GetRange('E1').SetValue(grouped);
```
