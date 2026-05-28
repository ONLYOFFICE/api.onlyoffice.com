# GetData

返回数据透视表中数据字段的值。

## 语法

```javascript
expression.GetData(items);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| items | 必需 | string[] |  | 描述数据透视表报告中的单个单元格。例如，"'Estimated Costs' Tables May" 表示五月份表格的估计成本（数据字段 = Costs，产品 = Tables，月份 = May）。 |

## 返回值

number \| null

## 示例

按行和列名称从电子表格中的数据透视表检索特定值。

```javascript editor-xlsx
// How do I look up a single summarized value inside a pivot table in a spreadsheet?

// Pull the aggregated result for a chosen category combination and write it to a cell in a spreadsheet.

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
let dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');
pivotTable.AddFields({
    rows: 'Region',
    columns: 'Style',
});

let pivotWorksheet = Api.GetActiveSheet();

let value = pivotTable.GetData(['East', 'Tee']);
pivotWorksheet.GetRange('A9').SetValue('Value of East Tee Price:');
pivotWorksheet.GetRange('B9').SetValue(value);
```
