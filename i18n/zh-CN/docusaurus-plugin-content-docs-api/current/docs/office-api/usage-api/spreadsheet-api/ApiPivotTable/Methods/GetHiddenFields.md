# GetHiddenFields

返回表示数据透视表中所有隐藏字段的数组。

## 语法

```javascript
expression.GetHiddenFields();
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPivotField](../../ApiPivotField/ApiPivotField.md)[]

## 示例

列出电子表格中未放置在数据透视表任何区域的字段。

```javascript editor-xlsx
// How do I see which source fields are hidden and unused in a pivot table in a spreadsheet?

// Identify fields excluded from rows, columns, and filters in a pivot table in a spreadsheet.

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
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
pivotWorksheet.GetRange('A9').SetValue('Hidden Fields');

let hiddenFields = pivotTable.GetHiddenFields();
for (let i = 0; i < hiddenFields.length; i += 1) {
    let cell = pivotWorksheet.GetRangeByNumber(8 + i, 1);
    cell.SetValue(hiddenFields[i].GetName());
}
```
