# AddListRow

在指定的从 1 开始的位置向表格添加新数据行。
如果未提供位置，则将行追加到末尾。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.AddListRow(nPosition, bAlwaysInsert);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosition | 可选 | number |  | 在数据正文中插入行的从 1 开始的位置。如果省略，则将行追加到末尾。 |
| bAlwaysInsert | 可选 | boolean | true | 指定添加行时表格外的单元格是否移动。 |

## 返回值

[ApiListRow](../../ApiListRow/ApiListRow.md) \| null

## 示例

在电子表格中向格式化表格追加新数据行。

```javascript editor-xlsx
// How do I add another row of data to an existing table in a spreadsheet?

// Extend the table downward to accommodate incoming records while keeping all formatting intact in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
let newRow = table.AddListRow();

worksheet.GetRange("D1").SetValue("Row count after add:");
worksheet.GetRange("E1").SetValue(table.GetListRows().length);
```
