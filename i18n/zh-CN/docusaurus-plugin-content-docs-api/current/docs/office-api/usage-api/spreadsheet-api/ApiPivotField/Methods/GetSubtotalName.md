# GetSubtotalName

返回在指定数据透视表报表的分类汇总列或行标题中显示的文本标签。

## 语法

```javascript
expression.GetSubtotalName();
```

`expression` - 表示 [ApiPivotField](../ApiPivotField.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例展示如何获取透视字段的分类汇总名称。

```javascript editor-xlsx
// How to get a pivot field's subtotal name.

// Create a pivot table, add data to it then get subtotal name of a specified pivot field.

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
    columns: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');

let pivotWorksheet = Api.GetActiveSheet();
let pivotField = pivotTable.GetPivotFields('Region');

pivotField.SetSubtotalName('My name');

pivotWorksheet.GetRange('A14').SetValue('Region subtotal name');
pivotWorksheet.GetRange('B14').SetValue(pivotField.GetSubtotalName());
```
