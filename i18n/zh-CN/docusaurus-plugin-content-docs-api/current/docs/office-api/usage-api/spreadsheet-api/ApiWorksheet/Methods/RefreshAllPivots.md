# RefreshAllPivots

刷新当前工作表上的所有数据透视表。

## 语法

```javascript
expression.RefreshAllPivots();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何刷新所有数据透视表。

```javascript editor-xlsx
// How to refresh field values of all pivot tables.

// Refresh pivot tables from the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotRef = worksheet.GetRange('A7');
Api.InsertPivotExistingWorksheet(dataRef, worksheet.GetRange('A7'));
Api.InsertPivotExistingWorksheet(dataRef, worksheet.GetRange('D7'));
Api.InsertPivotExistingWorksheet(dataRef, worksheet.GetRange('G7'));

worksheet.GetAllPivotTables().forEach(function (pivot) {
    pivot.AddDataField('Price');
});

worksheet.RefreshAllPivots();

```
