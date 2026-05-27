# GetPivotField

返回创建数据字段的透视字段。

## 语法

```javascript
expression.GetPivotField();
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)

## 示例

将电子表格中数据透视表数据字段追溯到其源透视字段。

```javascript editor-xlsx
// How do I find which source field a data field is based on in a pivot table in a spreadsheet?

// Link a summarized value column to the underlying data column it was created from in a spreadsheet.

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
pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let dataField = pivotTable.GetDataFields('Sum of Price');

pivotWorksheet.GetRange('A15').SetValue('Sum of Price position:');
pivotWorksheet.GetRange('B15').SetValue(dataField.GetIndex());

pivotWorksheet.GetRange('A16').SetValue('Price position:');
pivotWorksheet.GetRange('B16').SetValue(dataField.GetPivotField().GetIndex());
```
