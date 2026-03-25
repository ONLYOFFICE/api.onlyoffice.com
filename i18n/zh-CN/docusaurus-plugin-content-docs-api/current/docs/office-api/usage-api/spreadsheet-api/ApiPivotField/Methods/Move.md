# Move

在类别内移动当前透视字段。

## 语法

```javascript
expression.Move(type, index);
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [PivotMoveFieldType](../../Enumeration/PivotMoveFieldType.md) \| [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | 移动数据透视表字段的方向，或透视字段方向类型。 |
| index | 必需 | number \| undefined |  | 新类别中的字段索引。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何移动透视字段。

```javascript editor-xlsx
// How to change the position a pivot field.

// Create a pivot table, add data to it then move a specified pivot field by columns.

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

let pivotWorksheet = Api.GetActiveSheet();
pivotTable.AddDataField('Price');
let pivotField = pivotTable.GetPivotFields('Region');
pivotWorksheet.GetRange('A10').SetValue('The Region field will be moved soon');

setTimeout(function () {
    pivotField.Move('Columns');
}, 5000);
```
