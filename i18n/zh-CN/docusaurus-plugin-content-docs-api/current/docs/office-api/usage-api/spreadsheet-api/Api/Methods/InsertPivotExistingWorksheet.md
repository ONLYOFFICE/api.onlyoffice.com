# InsertPivotExistingWorksheet

将指定的数据透视表插入到现有工作表中。

## 语法

```javascript
expression.InsertPivotExistingWorksheet(dataRef, pivotRef, confirmation);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| dataRef | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 源数据范围。 |
| pivotRef | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 数据透视表将位于的范围。 |
| confirmation | 必需 | boolean |  | 指定是否替换指定数据透视表范围中的数据（如果存在）或为此创建对话框（如果存在）。 |

## 返回值

[ApiPivotTable](../../ApiPivotTable/ApiPivotTable.md)

## 示例

此示例演示如何在现有工作表上插入数据透视表。

```javascript editor-xlsx
// How to insert a pivot table into a range of an existing worksheet using references.

// Get a pivot table and insert it to the range.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange('B1').SetValue('Region');
worksheet.GetRange('C1').SetValue('Price');
worksheet.GetRange('B2').SetValue('East');
worksheet.GetRange('B3').SetValue('West');
worksheet.GetRange('C2').SetValue(42.5);
worksheet.GetRange('C3').SetValue(35.2);

let dataRef = Api.GetRange("'Sheet1'!$B$1:$C$3");
let pivotRef = worksheet.GetRange('A7');
let pivotTable = Api.InsertPivotExistingWorksheet(dataRef, pivotRef);

```
