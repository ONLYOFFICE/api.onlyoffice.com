# GetLayoutSubtotalLocation

返回布局分类汇总位置。

## 语法

```javascript
expression.GetLayoutSubtotalLocation();
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[LayoutSubtotalLocationType](../../Enumeration/LayoutSubtotalLocationType.md)

## 示例

读取透视字段的小计出现位置——在电子表格中每组的顶部还是底部。

```javascript editor-xlsx
// How do I find out where subtotals are placed for a pivot table field in a spreadsheet?

// Inspect the subtotal position of a pivot field to confirm whether totals show above or below grouped rows.

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
    rows: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotWorksheet.GetRange('A14').SetValue('Region layout subtotal location');
pivotWorksheet.GetRange('B14').SetValue(pivotField.GetLayoutSubtotalLocation());
```
