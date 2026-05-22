# SetTableStyleColumnStripes

设置指定是否为数据透视表启用奇偶列背景颜色交替的设置。

## 语法

```javascript
expression.SetTableStyleColumnStripes(show);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | 必需 | boolean |  | 指定是否为数据透视表启用奇偶列背景颜色交替。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中启用数据透视表样式的交替列底纹。

```javascript editor-xlsx
// How do I add column stripe formatting to a pivot table in a spreadsheet?

// Apply banded column colors to make pivot table data easier to scan in a spreadsheet.

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
    columns: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');
pivotTable.SetTableStyleColumnStripes(true);

let pivotWorksheet = Api.GetActiveSheet();

pivotWorksheet.GetRange('A12').SetValue('Table Style Column Stripes');
pivotWorksheet.GetRange('B12').SetValue(pivotTable.GetTableStyleColumnStripes());
```
