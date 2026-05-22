# SetNumberFormat

设置表示对象格式代码的值。

## 语法

```javascript
expression.SetNumberFormat(format);
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | 必需 | string |  | 对象的格式代码。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为数据透视表值字段应用数字格式。

```javascript editor-xlsx
// How do I control how numbers are displayed in a pivot table data field in a spreadsheet?

// Format the values in a pivot field as currency, percentages, or scientific notation in a spreadsheet.

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
let dataField = pivotTable.GetDataFields('Sum of Price');
dataField.SetNumberFormat('0.00E+00');
```
