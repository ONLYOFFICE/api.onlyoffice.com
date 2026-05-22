# SetDisplayName

设置表格的显示名称。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetDisplayName(sDisplayName);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDisplayName | 必需 | string |  | 表格的新显示名称。 |

## 返回值

boolean

## 示例

为电子表格中的表格指定在属性面板中可见的显示名称。

```javascript editor-xlsx
// How do I set the label that appears for a table in a spreadsheet?

// Brand a table with a friendly name so it is easy to spot in the interface in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetDisplayName("SalesTable");

worksheet.GetRange("D1").SetValue("Display name:");
worksheet.GetRange("E1").SetValue(table.GetDisplayName());
```
