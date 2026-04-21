# GetAllPivotTables

返回工作簿中的所有数据透视表。

## 语法

```javascript
expression.GetAllPivotTables();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)[]

## 示例

从电子表格中的工作簿获取数据透视表。

```javascript editor-xlsx
// How to get all pivot tables for a workbook in a spreadsheet?

// Get all pivot tables and display the result in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange('Sheet1!B1:C3');
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);
Api.InsertPivotNewWorksheet(dataRef);

workbook.GetAllPivotTables().forEach(function (pivot) {
	pivot.AddDataField('Price');
});
```
