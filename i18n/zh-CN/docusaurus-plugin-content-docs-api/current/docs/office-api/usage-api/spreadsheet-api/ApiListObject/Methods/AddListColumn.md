# AddListColumn

在指定的从 1 开始的位置向表格添加新列。
如果未提供位置，则将列追加到末尾。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.AddListColumn(nPosition);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | 可选 | number |  | 插入新列的从 1 开始的位置。 |

## 返回值

[ApiListColumn](../../ApiListColumn/ApiListColumn.md) \| null

## 示例

通过添加新列在电子表格中扩展格式化表格。

```javascript editor-xlsx
// How do I add an extra column to an existing table in a spreadsheet?

// Grow your table structure to capture additional data fields without rebuilding it from scratch in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
let newColumn = table.AddListColumn();

worksheet.GetRange("D1").SetValue("New column name:");
worksheet.GetRange("E1").SetValue(newColumn ? newColumn.GetName() : "none");
worksheet.GetRange("D2").SetValue("Column count:");
worksheet.GetRange("E2").SetValue(table.GetListColumns().length);
```
