# GetValue

返回数据透视表字段中指定项的名称。

## 语法

```javascript
expression.GetValue();
```

`expression` - 表示 [ApiPivotItem](../ApiPivotItem.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例演示如何获取数据透视项的值。

```javascript editor-xlsx
// How to get a pivot item value.

// Create a pivot table, add data to it then get a value of a specified pivot item.

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
    columns: ['Style'],
    rows: 'Region',
});

pivotTable.AddDataField('Style');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Style');
let pivotItems = pivotField.GetPivotItems();
pivotWorksheet.GetRangeByNumber(15, 0).SetValue('Style item values');

for (let i = 0; i < pivotItems.length; i += 1) {
    pivotWorksheet.GetRangeByNumber(15 + i, 1).SetValue(pivotItems[i].GetValue());
}
```
