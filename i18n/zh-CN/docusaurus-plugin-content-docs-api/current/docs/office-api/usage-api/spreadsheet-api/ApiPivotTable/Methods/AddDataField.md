# AddDataField

向数据透视表报表添加数据字段。

## 语法

```javascript
expression.AddDataField(field);
```

`expression` - 表示 [ApiPivotTable](../ApiPivotTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| field | 必需 | number \| string |  | 数据字段的索引号或名称。 |

## 返回值

[ApiPivotDataField](../../ApiPivotDataField/ApiPivotDataField.md)

## 示例

此示例展示如何向数据透视表添加数据字段。

```javascript editor-xlsx
// How to add new field to the table.

// Create a pivot table, add data to it then add new data field to it.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

pivotTable.MoveField('Region', 'Rows');

let dataField = pivotTable.AddDataField('Price');
dataField.SetName('Regional prices');
```
