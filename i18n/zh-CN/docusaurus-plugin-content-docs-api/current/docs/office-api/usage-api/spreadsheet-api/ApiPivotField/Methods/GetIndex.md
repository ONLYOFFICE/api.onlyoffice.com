# GetIndex

返回数据透视表字段的索引。

## 语法

```javascript
expression.GetIndex();
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取电子表格中透视字段在数据透视表内的数字位置。

```javascript editor-xlsx
// How do I find the index number assigned to a pivot field in a spreadsheet?

// Identify where a pivot field sits in the ordered list of all pivot table fields in a spreadsheet.

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
let pivotField = pivotTable.GetPivotFields('Style');

pivotWorksheet.GetRange('A12').SetValue('The Style field index');
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetIndex());
```
