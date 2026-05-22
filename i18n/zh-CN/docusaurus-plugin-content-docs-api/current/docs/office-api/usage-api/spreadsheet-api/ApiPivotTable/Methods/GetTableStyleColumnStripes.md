# GetTableStyleColumnStripes

返回指定是否为数据透视表启用奇偶列背景颜色交替的设置。

## 语法

```javascript
expression.GetTableStyleColumnStripes();
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中数据透视表样式是否启用了交替列底纹。

```javascript editor-xlsx
// How do I find out if a pivot table style uses banded columns in a spreadsheet?

// Inspect the column stripe setting of a pivot table's visual theme in a spreadsheet.

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
    columns: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A12').SetValue('Table Style Column Stripes');
pivotWorksheet.GetRange('B12').SetValue(pivotTable.GetTableStyleColumnStripes());
```
