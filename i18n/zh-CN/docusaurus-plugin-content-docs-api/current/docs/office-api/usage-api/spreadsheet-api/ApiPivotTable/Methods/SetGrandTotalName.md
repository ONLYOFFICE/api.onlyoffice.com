# SetGrandTotalName

设置在指定数据透视表报表的总计列或行标题中显示的文本字符串标签。

## 语法

```javascript
expression.SetGrandTotalName(name);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 总计名称。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置表格的总计名称。

```javascript editor-xlsx
// How to set a grand total name of a table.

// Create a pivot table, add data to it then set a grand total name.

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
pivotWorksheet.GetRange('A9').SetValue('Grand Total name');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetGrandTotalName());

pivotWorksheet.GetRange('A11').SetValue('New Grand total name');
pivotTable.SetGrandTotalName('My GT name');
pivotWorksheet.GetRange('B11').SetValue(pivotTable.GetGrandTotalName());
```
