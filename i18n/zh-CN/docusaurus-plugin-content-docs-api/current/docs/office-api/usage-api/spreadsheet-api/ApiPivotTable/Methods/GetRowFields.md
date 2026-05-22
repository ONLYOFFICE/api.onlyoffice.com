# GetRowFields

返回当前在数据透视表中显示为行字段的集合。

## 语法

```javascript
expression.GetRowFields(field);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | 必需 | number \| string \| undefined |  | 要返回的字段的名称或索引。 |

## 返回值

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)[]

## 示例

列出电子表格中放置在数据透视表行区域的字段。

```javascript editor-xlsx
// How do I see which fields are used as row labels in a pivot table in a spreadsheet?

// Retrieve every row-area field from a pivot table and display their names in a spreadsheet.

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
pivotWorksheet.GetRange('A9').SetValue('Row Fields');

let rowFields = pivotTable.GetRowFields();
for (let i = 0; i < rowFields.length; i += 1) {
    let cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
    cell.SetValue(rowFields[i].GetName());
}
```
