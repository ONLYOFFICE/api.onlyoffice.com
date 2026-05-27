# SetMatchCase

设置排序是否区分大小写。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetMatchCase(matchCase);
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| matchCase | 必需 | boolean |  | 指定排序是否区分大小写。 |

## 返回值

此方法不返回任何数据。

## 示例

打开电子表格中格式化表格的区分大小写排序。

```javascript editor-xlsx
// How do I make the sort treat uppercase and lowercase letters as different values in a spreadsheet?

// Configure the sort to distinguish between upper and lower case text before ordering rows in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("apple");
worksheet.GetRange("A3").SetValue("cherry");
worksheet.GetRange("A4").SetValue("Apple");
let table = worksheet.AddListObject("xlSrcRange", "A1:A4");

let sort = table.GetSort();
sort.SetMatchCase(true);
sort.GetSortFields().Add(worksheet.GetRange("A1"), "xlSortOnValues", "xlAscending");

worksheet.GetRange("C1").SetValue("First product after case-sensitive sort:");
worksheet.GetRange("D1").SetValue(worksheet.GetRange("A2").GetValue());
```
