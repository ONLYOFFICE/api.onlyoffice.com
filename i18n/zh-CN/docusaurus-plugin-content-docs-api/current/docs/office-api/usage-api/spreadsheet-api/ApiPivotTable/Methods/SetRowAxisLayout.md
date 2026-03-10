# SetRowAxisLayout

设置指定数据透视表项目的显示方式 - 表格格式或大纲格式。

## 语法

```javascript
expression.SetRowAxisLayout(type, compact);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [PivotLayoutType](../../Enumeration/PivotLayoutType.md) |  | 数据透视表报表的布局类型。 |
| compact | 必需 | boolean |  | 指定数据透视表项是否以紧凑形式显示。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例展示如何设置数据透视表的行轴布局。

```javascript editor-xlsx
// How to set row axis layout of a table.

// Create a pivot table, add data to it then set its row axis layout.

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
    rows: ['Region', 'Style'],
});

pivotTable.AddDataField('Price');

pivotTable.SetRowAxisLayout('Tabular', false);
```
