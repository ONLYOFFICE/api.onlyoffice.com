# MoveField

将指定字段从一个类别移动到另一个类别。

## 语法

```javascript
expression.MoveField(identifier, type, index);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| identifier | 必需 | number \| string |  | 字段的索引号或名称。 |
| type | 必需 | [PivotMoveFieldType](../../Enumeration/PivotMoveFieldType.md) \| [PivotFieldOrientationType](../../Enumeration/PivotFieldOrientationType.md) |  | 移动数据透视表字段的方向，或数据透视字段方向类型。 |
| index | 可选 | number |  | 新类别中的字段索引。 |

## 返回值

此方法不返回任何数据。

## 示例

通过将字段移动到不同区域来重新排列电子表格中的数据透视表字段。

```javascript editor-xlsx
// How do I change which area a field appears in (rows, columns, or values) in a spreadsheet?

// Reorganize a pivot table layout by shifting a field from rows to columns in a spreadsheet.

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

pivotTable.MoveField('Style', 'Columns');
```
