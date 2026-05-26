# SetLayoutSubtotals

设置指定是否显示分类汇总的设置。

## 语法

```javascript
expression.SetLayoutSubtotals(show);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | 必需 | boolean |  | 指定是否显示分类汇总。 |

## 返回值

此方法不返回任何数据。

## 示例

控制电子表格中数据透视表布局中是否显示小计。

```javascript editor-xlsx
// How do I turn subtotals on or off in a pivot table in a spreadsheet?

// Hide or show subtotal rows to simplify the pivot table view in a spreadsheet.

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

pivotTable.SetLayoutSubtotals(false);
```
