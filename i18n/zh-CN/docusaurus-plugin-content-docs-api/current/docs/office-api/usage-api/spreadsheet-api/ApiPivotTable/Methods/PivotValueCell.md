# PivotValueCell

返回数据透视表单元格的值。

## 语法

```javascript
expression.PivotValueCell(rowLine, colLine);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rowLine | 必需 | number |  | 透视行（数据透视表中的一行）在行区域上的位置。 |
| colLine | 必需 | number |  | 透视行（数据透视表中的一列）在列区域上的位置。 |

## 返回值

number \| string \| null

## 示例

此示例展示如何使用位置获取透视值单元格。

```javascript editor-xlsx
// How to get a pivot value cell.

// Create a pivot table, add data to it then get its value cell.

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
    rows: 'Region',
    columns: 'Style',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A9').SetValue('First value in Pivot Table');

pivotWorksheet.GetRange('C9').SetValue(pivotTable.PivotValueCell(1, 1));
```
