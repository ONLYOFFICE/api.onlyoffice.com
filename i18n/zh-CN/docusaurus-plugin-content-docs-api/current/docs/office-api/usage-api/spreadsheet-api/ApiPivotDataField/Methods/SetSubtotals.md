# SetSubtotals

设置表示所有分类汇总的对象。

## 语法

```javascript
expression.SetSubtotals(subtotals);
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| subtotals | 必需 | [PivotFieldSubtotals](../../Enumeration/PivotFieldSubtotals.md) |  | 表示所有分类汇总或其中一部分的对象。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置透视字段的分类汇总。

```javascript editor-xlsx
// How to change a pivot field subtotals.

// Create a pivot table, add data to it then set subtotals of a specified pivot.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Style');
worksheet.GetRange('D1').SetValue('Price');

worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue('Fancy');
worksheet.GetRange('C3').SetValue('Fancy');
worksheet.GetRange('C4').SetValue('Tee');
worksheet.GetRange('C5').SetValue('Tee');

worksheet.GetRange('D2').SetValue(42.5);
worksheet.GetRange('D3').SetValue(35.2);
worksheet.GetRange('D4').SetValue(12.3);
worksheet.GetRange('D5').SetValue(24.8);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$D$5");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    columns: ['Style'],
    rows: 'Region',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotField.SetSubtotals({
    Count: true,
});

let subtotals = pivotField.GetSubtotals();
pivotWorksheet.GetRange('A11').SetValue('Region subtotals');
let k = 12;
for (let i in subtotals) {
    pivotWorksheet.GetRangeByNumber(k, 0).SetValue(i);
    pivotWorksheet.GetRangeByNumber(k++, 1).SetValue(subtotals[i]);
}
```
