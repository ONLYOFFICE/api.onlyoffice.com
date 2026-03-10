# GetOrientation

返回表示数据字段在指定数据透视表报表中位置的数据字段方向值。

## 语法

```javascript
expression.GetOrientation();
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md)

## 示例

此示例展示如何获取数据字段的方向。

```javascript editor-xlsx
// How to get a table element orientation.

// Create a pivot table, add data to it then display a custom data field's orientation.

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
let dataField = pivotTable.AddDataField('Price');
dataField.SetPosition(1);

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A15').SetValue('Sum of Price2 orientation:');
pivotWorksheet.GetRange('B15').SetValue(dataField.GetOrientation());
```
