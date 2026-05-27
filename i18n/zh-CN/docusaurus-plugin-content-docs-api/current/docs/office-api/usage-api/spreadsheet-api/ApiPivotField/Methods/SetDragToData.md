# SetDragToData

设置指定是否可以将指定字段拖动到数据位置的设置。

## 语法

```javascript
expression.SetDragToData(flag);
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| flag | 必需 | boolean |  | 指定是否可以将指定字段拖动到数据位置。 |

## 返回值

此方法不返回任何数据。

## 示例

控制电子表格中的透视字段是否可以拖动到值区域。

```javascript editor-xlsx
// How do I prevent a pivot field from being moved to the values area in a spreadsheet?

// Lock a pivot field so users cannot reposition it as a data value in a spreadsheet.

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
    rows: ['Style'],
    columns: 'Region',
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotField.SetDragToData(false);

pivotWorksheet.GetRange('A13').SetValue('Drag to data');
pivotWorksheet.GetRange('B13').SetValue(pivotField.GetDragToData());
pivotWorksheet.GetRange('A14').SetValue('Try drag Region to data!');
```
