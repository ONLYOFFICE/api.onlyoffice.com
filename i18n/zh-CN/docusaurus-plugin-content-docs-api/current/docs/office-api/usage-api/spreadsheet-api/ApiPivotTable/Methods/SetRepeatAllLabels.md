# SetRepeatAllLabels

指定是否为指定数据透视表中的所有透视字段重复项目标签。

## 语法

```javascript
expression.SetRepeatAllLabels(repeat);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| repeat | 必需 | boolean |  | 指定是否在数据透视表报表中重复所有字段项标签。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置数据透视表的重复所有标签。

```javascript editor-xlsx
// How to set repeat all labels of a table.

// Create a pivot table, add data to it then set its repeat all labels.

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

pivotTable.SetRepeatAllLabels(true);
```
