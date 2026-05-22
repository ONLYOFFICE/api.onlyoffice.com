# SetLayoutForm

设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。

继承自 [ApiPivotField.SetLayoutForm](../../ApiPivotField/Methods/SetLayoutForm.md)。

## 示例

将电子表格中透视字段的显示格式更改为表格、大纲或紧凑。

```javascript editor-xlsx
// How do I choose the layout style for a pivot field in a spreadsheet?

// Apply a tabular presentation to a pivot field for a cleaner row-by-row view in a spreadsheet.

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

pivotField.SetLayoutForm("Tabular");

pivotWorksheet.GetRange('A12').SetValue('Region layout form');
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetLayoutForm());
```
