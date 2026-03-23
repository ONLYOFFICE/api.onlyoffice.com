# SetOrientation

设置表示字段在指定数据透视表报表中
位置的透视字段方向值。

## 语法

```javascript
expression.SetOrientation(type);
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | 透视字段方向类型。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置透视字段的方向。

```javascript editor-xlsx
// How to change a pivot field orientation.

// Create a pivot table, add data to it then change an orientation a specified pivot.

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
pivotWorksheet.GetRange('A12').SetValue('The Style field orientation will change soon');

let pivotField = pivotTable.GetPivotFields('Style');

setTimeout(function () {
    pivotField.SetOrientation("Columns");
}, 5000);
```
