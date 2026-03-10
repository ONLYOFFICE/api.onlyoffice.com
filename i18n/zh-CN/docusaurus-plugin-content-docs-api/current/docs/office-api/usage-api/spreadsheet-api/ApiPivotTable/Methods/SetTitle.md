# SetTitle

设置数据透视表标题。

## 语法

```javascript
expression.SetTitle(title);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| title | 必需 | string |  | 数据透视表标题。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置数据透视表的标题。

```javascript editor-xlsx
// How to set table title.

// Create a pivot table, add data to it then set its table title.

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
pivotWorksheet.GetRange('A9').SetValue('Pivot Table title');
pivotWorksheet.GetRange('B9').SetValue(pivotTable.GetTitle());

pivotWorksheet.GetRange('A11').SetValue('New Pivot Table title');
pivotTable.SetTitle('My Pivot Table');
pivotWorksheet.GetRange('B11').SetValue(pivotTable.GetTitle());
```
