# InsertPivotNewWorksheet

将指定的数据透视表插入到新工作表中。

## 语法

```javascript
expression.InsertPivotNewWorksheet(dataRef, newSheetName);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 源数据范围。 |
| newSheetName | 可选 | [ApiRange](../../ApiRange/ApiRange.md) |  | 新工作表名称。 |

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)

## 示例

在电子表格的全新工作表中添加数据透视表。

```javascript editor-xlsx
// How do I create a pivot table on a newly added sheet in a spreadsheet?

// Summarize data with a pivot table placed on a fresh sheet in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotTable = Api.InsertPivotNewWorksheet(dataRef);
```
