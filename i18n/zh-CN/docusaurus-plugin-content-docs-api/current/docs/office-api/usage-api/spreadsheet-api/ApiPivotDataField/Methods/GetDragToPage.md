# GetDragToPage

返回指定是否可以将指定字段拖动到页位置的设置。

继承自 [ApiPivotField.GetDragToPage](../../ApiPivotField/Methods/GetDragToPage.md)。

## 示例

检查电子表格中的透视字段是否可以移动到页面筛选区域。

```javascript editor-xlsx
// How do I find out if a pivot field is allowed to be dragged to the page zone in a spreadsheet?

// Confirm that a pivot field supports use as a top-level filter above the pivot table in a spreadsheet.

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
    rows: ['Style'],
    columns: 'Region',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotWorksheet.GetRange('A13').SetValue('Drag to page');
pivotWorksheet.GetRange('B13').SetValue(pivotField.GetDragToPage());
```
