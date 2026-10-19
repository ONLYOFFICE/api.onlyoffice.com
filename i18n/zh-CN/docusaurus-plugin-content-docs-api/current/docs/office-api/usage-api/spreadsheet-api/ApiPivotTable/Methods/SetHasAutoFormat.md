# SetHasAutoFormat

设置更新时是否自动设置数据透视表格式；在编辑器中，这会使列宽自动适应其内容。

## 语法

```javascript
expression.SetHasAutoFormat(hasAutoFormat);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hasAutoFormat | 必需 | boolean |  | 指定是否在每次更新时自动设置数据透视表格式。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中更新数据透视表时保持列宽不变。

```javascript editor-xlsx
// How do I stop a pivot table from resizing its columns every time it is refreshed in a spreadsheet?

// Turn off the autofit of column widths and set the widths by hand for a pivot table in a spreadsheet.

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

pivotTable.AddDataField('Price');

pivotTable.AddFields({
    rows: 'Region',
    columns: 'Style',
});

pivotTable.SetHasAutoFormat(false);

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A1').SetColumnWidth(30);
pivotTable.Update();

pivotWorksheet.GetRange('A9').SetValue('Has auto format');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetHasAutoFormat());
```
