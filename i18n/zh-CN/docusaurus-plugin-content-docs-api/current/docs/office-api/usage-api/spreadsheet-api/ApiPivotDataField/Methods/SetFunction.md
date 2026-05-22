# SetFunction

为当前数据字段设置函数。

## 语法

```javascript
expression.SetFunction(func);
```

`expression` - 表示 [ApiPivotDataField](../ApiPivotDataField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| func | 必需 | [DataConsolidateFunctionType](../../Enumeration/DataConsolidateFunctionType.md) |  | 要在添加的数据字段中执行的函数。 |

## 返回值

此方法不返回任何数据。

## 示例

更改电子表格中数据透视表值字段使用的计算类型。

```javascript editor-xlsx
// How do I switch a data field from summing values to counting them in a spreadsheet?

// Pick a different aggregation method, such as average or count, for a pivot field in a spreadsheet.

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
pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let dataField = pivotTable.GetDataFields('Sum of Price');
dataField.SetFunction('Count');
```
