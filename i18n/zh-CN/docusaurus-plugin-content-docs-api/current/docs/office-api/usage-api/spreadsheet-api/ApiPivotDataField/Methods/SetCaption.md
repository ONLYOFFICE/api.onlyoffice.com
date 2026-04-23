# SetCaption

设置表示数据字段标签文本的值。

## 语法

```javascript
expression.SetCaption(caption);
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| caption | 必需 | string |  | 数据字段的标签文本。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何为数据字段设置标题。

```javascript editor-xlsx
// How to rename a caption of a table element.

// Create a pivot table, add data to it then set a custom data field's caption.

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
let dataField = pivotTable.GetDataFields('Sum of Price');

pivotWorksheet.GetRange('A12').SetValue('Data field caption');
pivotWorksheet.GetRange('B12').SetValue(dataField.GetCaption());

dataField.SetCaption('My Sum of Price');
pivotWorksheet.GetRange('A13').SetValue('New Data field caption');
pivotWorksheet.GetRange('B13').SetValue(dataField.GetCaption());
```
