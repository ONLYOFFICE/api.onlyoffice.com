# SetDisplayFieldsInReportFilterArea

设置报表筛选区域设置中的数据透视表显示字段。

## 语法

```javascript
expression.SetDisplayFieldsInReportFilterArea(type, fields);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [FieldsInReportFilterType](../../Enumeration/FieldsInReportFilterType.md) |  | 指定报表筛选字段的位置方式。 |
| fields | 必需 | number |  | 报表筛选字段的数量。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中跨多列或多行排列报表筛选区域中的筛选字段。

```javascript editor-xlsx
// How do I control how many filter fields appear per row above a pivot table in a spreadsheet?

// Adjust the layout of the filter section so it wraps after a set number of fields in a spreadsheet.

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
    pages: ['Region','Style', 'Price'],
});

pivotTable.SetDisplayFieldsInReportFilterArea('OverThenDown', 3);
const info = pivotTable.GetDisplayFieldsInReportFilterArea();

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Type');
pivotWorksheet.GetRange('B9').SetValue(info.Type);

pivotWorksheet.GetRange('A10').SetValue('ReportFilterFields');
pivotWorksheet.GetRange('B10').SetValue(info.ReportFilterFields);
```
