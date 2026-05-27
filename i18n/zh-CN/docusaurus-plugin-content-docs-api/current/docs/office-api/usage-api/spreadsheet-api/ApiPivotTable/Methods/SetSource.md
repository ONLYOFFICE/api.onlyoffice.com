# SetSource

设置数据透视表的源区域。

## 语法

```javascript
expression.SetSource(source);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| source | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 数据透视表将位于的区域。 |

## 返回值

此方法不返回任何数据。

## 示例

更改电子表格中数据透视表读取的数据范围。

```javascript editor-xlsx
// How do I point a pivot table to a different range of data in a spreadsheet?

// Update the source cells so the pivot table reflects a new or expanded dataset in a spreadsheet.

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

pivotWorksheet.GetRange('A12').SetValue('Source Range');
pivotWorksheet.GetRange('B12').SetValue(pivotTable.GetSource().GetAddress(true, true));

pivotTable.SetSource(worksheet.GetRange('C1:D5'));
```
