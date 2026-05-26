# SetName

设置表格的名称。等同于 SetDisplayName。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetName(sName);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sName | 必需 | string |  | 未提供描述。 |

## 返回值

boolean

## 示例

重命名表格以便电子表格中的公式和引用使用新名称。

```javascript editor-xlsx
// How do I change the internal name of a table in a spreadsheet?

// Update a table's identifier to keep structured formula references accurate in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetName("SalesTable");

worksheet.GetRange("D1").SetValue("Table name:");
worksheet.GetRange("E1").SetValue(table.GetName());
```
