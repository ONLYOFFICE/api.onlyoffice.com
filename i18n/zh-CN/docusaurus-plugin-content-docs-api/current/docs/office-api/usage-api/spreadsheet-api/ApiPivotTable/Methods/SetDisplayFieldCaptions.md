# SetDisplayFieldCaptions

设置是否显示行和列的字段标题。

## 语法

```javascript
expression.SetDisplayFieldCaptions(show);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| show | 必需 | boolean |  | 指定是否显示行和列的字段标题。 |

## 返回值

此方法不返回任何数据。

## 示例

切换电子表格中数据透视表中字段标题标注的可见性。

```javascript editor-xlsx
// How do I hide or show the field label row at the top of a pivot table in a spreadsheet?

// Remove or restore the column and row header labels displayed in a pivot table in a spreadsheet.

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

pivotTable.SetDisplayFieldCaptions(false);

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Disaply field captions');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetDisplayFieldCaptions());
```
