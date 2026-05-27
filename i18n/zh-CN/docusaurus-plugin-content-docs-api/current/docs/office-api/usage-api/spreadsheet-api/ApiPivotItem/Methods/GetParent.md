# GetParent

返回数据透视项的父级。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiPivotItem](../ApiPivotItem.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)

## 示例

查找电子表格中拥有特定透视项目的字段。

```javascript editor-xlsx
// How do I look up which pivot field a given item belongs to in a spreadsheet?

// Trace an item back to its parent field to understand the pivot table structure in a spreadsheet.

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
    pages: ['Style'],
    rows: 'Region',
});

pivotTable.AddDataField('Style');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Style');
let pivotItem = pivotField.GetPivotItems()[0];

pivotWorksheet.GetRange('A15').SetValue(pivotItem.GetName() + ' parent:');
pivotWorksheet.GetRange('B15').SetValue(pivotItem.GetParent().GetName());
```
