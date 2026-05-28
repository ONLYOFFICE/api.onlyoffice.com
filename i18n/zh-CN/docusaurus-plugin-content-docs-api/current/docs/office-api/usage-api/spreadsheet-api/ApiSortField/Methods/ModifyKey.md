# ModifyKey

更改排序键列。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.ModifyKey(rng);
```

`expression` - 表示 [ApiSortField](../ApiSortField.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| rng | 必需 | [ApiRange](../../ApiRange/ApiRange.md) |  | 新的排序键范围。 |

## 返回值

此方法不返回任何数据。

## 示例

将现有排序条件指向不同的列并在电子表格中重新排序表格。

```javascript editor-xlsx
// How do I reassign which column a sort field targets without creating a new sort rule in a spreadsheet?

// Swap the data column driving a sort criterion, then apply the updated order in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Oranges");
worksheet.GetRange("B2").SetValue(150);
worksheet.GetRange("A3").SetValue("Apples");
worksheet.GetRange("B3").SetValue(100);
worksheet.GetRange("A4").SetValue("Bananas");
worksheet.GetRange("B4").SetValue(80);
let table = worksheet.AddListObject("xlSrcRange", "A1:B4");

let sort = table.GetSort();
let field = sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");
field.ModifyKey(worksheet.GetRange("B1"));
sort.Apply();

worksheet.GetRange("D1").SetValue("First product after sort by price:");
worksheet.GetRange("E1").SetValue(worksheet.GetRange("A2").GetValue());
```
