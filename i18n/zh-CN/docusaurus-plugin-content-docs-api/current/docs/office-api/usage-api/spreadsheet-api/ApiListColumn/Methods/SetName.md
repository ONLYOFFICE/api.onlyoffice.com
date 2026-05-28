# SetName

设置表格列的名称。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetName(sName);
```

`expression` - 表示 [ApiListColumn](../ApiListColumn.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 新的列名称。 |

## 返回值

此方法不返回任何数据。

## 示例

重命名电子表格中格式化表格的列标题。

```javascript editor-xlsx
// How do I change the label of a table column in a spreadsheet?

// Update a column name to better reflect its contents after restructuring your data in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let column = table.GetListColumns()[0];
column.SetName("Item");

worksheet.GetRange("D1").SetValue("New column name:");
worksheet.GetRange("E1").SetValue(column.GetName());
```
