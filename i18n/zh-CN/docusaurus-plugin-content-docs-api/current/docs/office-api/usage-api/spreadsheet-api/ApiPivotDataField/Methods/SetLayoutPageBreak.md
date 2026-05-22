# SetLayoutPageBreak

设置指定是否在每个字段后插入分页符的设置。

继承自 [ApiPivotField.SetLayoutPageBreak](../../ApiPivotField/Methods/SetLayoutPageBreak.md)。

## 示例

在电子表格中打印时在每个透视字段组后插入分页符。

```javascript editor-xlsx
// How do I make each pivot field group start on a new page in a spreadsheet?

// Ensure every group in a pivot field prints on its own page by enabling page breaks in a spreadsheet.

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

pivotField.SetLayoutPageBreak(true);

pivotWorksheet.GetRange('A15').SetValue('Page break:');
pivotWorksheet.GetRange('B15').SetValue(pivotField.GetLayoutPageBreak());
```
