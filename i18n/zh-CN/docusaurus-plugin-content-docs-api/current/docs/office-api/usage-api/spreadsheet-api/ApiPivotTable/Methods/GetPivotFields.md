# GetPivotFields

返回表示单个数据透视表字段或数据透视表报表中
可见和隐藏字段集合的集合。

## 语法

```javascript
expression.GetPivotFields(field);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | 可选 | string \| number |  | 要返回的字段的名称或索引。 |

## 返回值

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)[] \| [ApiPivotField](../../ApiPivotField/ApiPivotField.md) \| [ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md) \| null

## 示例

此示例展示如何获取数据透视表的透视字段。

```javascript editor-xlsx
// How to get table pivot fields as an array of fields.

// Create a pivot table, add data to it then get its pivot fields.

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
    rows: 'Region',
    columns: 'Style',
});
pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Pivot Fields');

let pivotFields = pivotTable.GetPivotFields();
for (let i = 0; i < pivotFields.length; i += 1) {
    let cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
    cell.SetValue(pivotFields[i].GetName());
}
```
