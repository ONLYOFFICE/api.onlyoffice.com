# SetLayoutSubtotalLocation

设置布局分类汇总位置。

## 语法

```javascript
expression.SetLayoutSubtotalLocation(type);
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [LayoutSubtotalLocationType](../../Enumeration/LayoutSubtotalLocationType.md) |  | 布局分类汇总位置。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置透视字段的布局分类汇总位置。

```javascript editor-xlsx
// How to change a pivot field layout subtotal location.

// Create a pivot table, add data to it then set layout subtotal location of a specified pivot.

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
let pivotField = pivotTable.GetPivotFields('Region');

pivotField.SetLayoutSubtotalLocation('Bottom');

pivotWorksheet.GetRange('A14').SetValue('Region layout subtotal location');
pivotWorksheet.GetRange('B14').SetValue(pivotField.GetLayoutSubtotalLocation());
```
