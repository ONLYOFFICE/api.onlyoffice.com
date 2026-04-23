# GetPosition

返回表示字段在其方向（行、列、页、数据）
中所有字段中的位置（第一、第二、第三等）的值。

## 语法

```javascript
expression.GetPosition();
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

此示例展示如何获取透视字段的位置。

```javascript editor-xlsx
// How to get a pivot field position.

// Create a pivot table, add data to it then get the position of a specified pivot field.

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

let pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');
let pivotField = pivotTable.GetPivotFields('Style');
pivotWorksheet.GetRange('A12').SetValue('Style field position');
pivotWorksheet.GetRange('B12').SetValue(pivotField.GetPosition());
```
