# SetAlternativeText

设置表格的替代文本。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetAlternativeText(sAltText);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAltText | 必需 | string |  | 替代文本字符串。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为表格附加可访问性描述。

```javascript editor-xlsx
// How do I add alternative text to a table in a spreadsheet?

// Make a table readable by screen readers by giving it a plain-language label in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");

let table = worksheet.AddListObject("xlSrcRange", "A1:A3");
table.SetAlternativeText("List of products");

worksheet.GetRange("C1").SetValue("Alternative text:");
worksheet.GetRange("D1").SetValue(table.GetAlternativeText());
```
