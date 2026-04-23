# SetLayoutPageBreak

设置指定是否在每个字段后插入分页符的设置。

## 语法

```javascript
expression.SetLayoutPageBreak(insert);
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| insert | 必需 | boolean |  | 指定是否在每个字段后插入分页符。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置透视字段的布局分页符。

```javascript editor-xlsx
// How to change a pivot field layout page break.

// Create a pivot table, add data to it then set layout page break of a specified pivot.

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

pivotField.SetLayoutPageBreak(true);

pivotWorksheet.GetRange('A15').SetValue('Page break:');
pivotWorksheet.GetRange('B15').SetValue(pivotField.GetLayoutPageBreak());
```
