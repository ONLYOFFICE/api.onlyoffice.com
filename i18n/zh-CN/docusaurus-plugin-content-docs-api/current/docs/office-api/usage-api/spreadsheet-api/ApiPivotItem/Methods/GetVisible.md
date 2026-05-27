# GetVisible

返回数据透视项的可见性。

## 语法

```javascript
expression.GetVisible();
```

`expression` - 表示 [ApiPivotItem](../ApiPivotItem.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查电子表格中每个透视字段项目当前是可见还是隐藏。

```javascript editor-xlsx
// How do I find out which items in a pivot field are shown and which are hidden in a spreadsheet?

// Audit the visible state of every pivot item and report its status alongside its name in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Sales');

worksheet.GetRange('B2').SetValue('North');
worksheet.GetRange('B3').SetValue('South');
worksheet.GetRange('B4').SetValue('East');
worksheet.GetRange('B5').SetValue('West');

worksheet.GetRange('C2').SetValue(15000);
worksheet.GetRange('C3').SetValue(12000);
worksheet.GetRange('C4').SetValue(8000);
worksheet.GetRange('C5').SetValue(9500);

let dataRef = Api.GetRange(`'${worksheet.Name}'!$B$1:$C$5`);
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.AddFields({
    rows: 'Region'
});

pivotTable.AddDataField('Sales');

let pivotWorksheet = Api.GetActiveSheet();
let regionField = pivotTable.GetPivotFields('Region');
let regionItems = regionField.GetPivotItems();

// Hide one region item to demonstrate visibility changes
regionItems[2].Visible = false;

pivotWorksheet.GetRangeByNumber(8, 0).SetValue('Region item visibility');

for (let i = 0; i < regionItems.length; i += 1) {
    let isVisible = regionItems[i].GetVisible();
    let status = isVisible ? 'Visible' : 'Hidden';
    pivotWorksheet.GetRangeByNumber(8 + i, 1).SetValue(regionItems[i].GetName() + ': ' + status);
}
```
