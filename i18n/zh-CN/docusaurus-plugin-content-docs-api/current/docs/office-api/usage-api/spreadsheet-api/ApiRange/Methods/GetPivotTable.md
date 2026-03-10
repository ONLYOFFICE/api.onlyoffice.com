# GetPivotTable

返回表示包含指定范围左上角的数据透视表报告的 ApiPivotTable 对象。

## 语法

```javascript
expression.GetPivotTable();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md) \| null

## 示例

此示例演示如何获取当前范围的数据透视表。

```javascript editor-xlsx
// How to get a pivot table of a cell.

// Get a range, get its pivot table and add some data fields to it.

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

let samePivotTable = Api.GetActiveSheet().GetRange('B3').GetPivotTable();

samePivotTable.AddFields({
    rows: 'Region',
    columns: 'Style'
});

samePivotTable.AddDataField('Price');
```
