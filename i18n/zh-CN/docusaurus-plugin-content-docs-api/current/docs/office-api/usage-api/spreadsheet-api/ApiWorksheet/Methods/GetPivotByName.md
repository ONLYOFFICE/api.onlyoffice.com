# GetPivotByName

按名称从当前工作表返回数据透视表，如果不存在则返回 null。

## 语法

```javascript
expression.GetPivotByName(name);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| name | 必需 | string |  | 数据透视表名称。 |

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md) \| null

## 示例

此示例展示如何按名称获取数据透视表。

```javascript editor-xlsx
// How to find a pivot table.

// Get a pivot table and by its name and update its fields.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);

Api.GetActiveSheet().GetPivotByName(pivotTable.GetName()).AddFields({
    rows: 'Region',
});

Api.GetActiveSheet().GetPivotByName(pivotTable.GetName()).AddDataField('Price');
```
