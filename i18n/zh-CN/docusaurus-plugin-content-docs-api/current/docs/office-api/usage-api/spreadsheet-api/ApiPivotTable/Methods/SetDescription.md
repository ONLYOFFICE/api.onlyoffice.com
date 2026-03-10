# SetDescription

设置数据透视表描述。

## 语法

```javascript
expression.SetDescription(description);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| description | 必需 | string |  | 数据透视表描述。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置表格的描述。

```javascript editor-xlsx
// How to rename a description of a table.

// Create a pivot table, add data to it then set its description.

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
pivotWorksheet.GetRange('A9').SetValue('Default description');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetDescription());

pivotWorksheet.GetRange('A11').SetValue('My description');
pivotTable.SetDescription('Awesome description');
pivotWorksheet.GetRange('B11').SetValue(pivotTable.GetDescription());
```
