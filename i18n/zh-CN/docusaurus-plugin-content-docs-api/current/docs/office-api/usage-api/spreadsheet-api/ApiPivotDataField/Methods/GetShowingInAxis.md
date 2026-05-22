# GetShowingInAxis

返回指定数据透视表字段当前是否在数据透视表中可见的设置。

继承自 [ApiPivotField.GetShowingInAxis](../../ApiPivotField/Methods/GetShowingInAxis.md)。

## 示例

检查透视字段当前是否在电子表格中数据透视表的行轴或列轴上可见。

```javascript editor-xlsx
// How do I tell if a pivot field is actively shown on an axis in a spreadsheet?

// Confirm the visibility status of a pivot field on the table axes to see which fields are displayed and which are hidden.

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
    rows: ['Region'],
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A12').SetValue('Region showing in axis');
pivotWorksheet.GetRange('B12').SetValue(pivotTable.GetPivotFields('Region').GetShowingInAxis());

pivotWorksheet.GetRange('A13').SetValue('Style showing in axis');
pivotWorksheet.GetRange('B13').SetValue(pivotTable.GetPivotFields('Style').GetShowingInAxis());
```
