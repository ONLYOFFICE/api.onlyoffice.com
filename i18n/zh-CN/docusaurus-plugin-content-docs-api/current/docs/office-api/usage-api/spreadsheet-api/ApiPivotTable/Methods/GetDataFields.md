# GetDataFields

返回表示单个数据透视表数据字段
或所有可见数据字段集合的集合。

## 语法

```javascript
expression.GetDataFields(field);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | 必需 | number \| string \| undefined |  | 要返回的字段的名称或索引。 |

## 返回值

[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)[] \| [ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md) \| null

## 示例

此示例展示如何获取数据字段。

```javascript editor-xlsx
// How to get data fields from a pivot table.

// Create a pivot table, add data to it then get data fields from it.

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
    columns: 'Region',
    rows: 'Style',
});

pivotTable.AddDataField('Price');
pivotTable.AddDataField('Price');

let dataFields = pivotTable.GetDataFields();
for (let i = 0; i < dataFields.length; i += 1) {
    dataFields[i].SetName('Count of Price' + (i + 1));
    dataFields[i].SetFunction('Count');
}
```
