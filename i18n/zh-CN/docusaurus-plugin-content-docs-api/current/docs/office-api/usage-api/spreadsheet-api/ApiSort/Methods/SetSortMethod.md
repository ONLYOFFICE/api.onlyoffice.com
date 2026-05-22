# SetSortMethod

设置排序方法。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetSortMethod(sSortMethod);
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sSortMethod | 必需 | [XlSortMethod](../../Enumeration/XlSortMethod.md) |  | 未提供描述。 |

## 返回值

此方法不返回任何数据。

## 示例

选择电子表格中对表格排序时中文字符的排列方式。

```javascript editor-xlsx
// How do I sort Chinese text by pronunciation rather than stroke order in a spreadsheet?

// Switch the ordering rule for Chinese entries between PinYin and stroke-count in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetSortMethod("xlPinYin");

worksheet.GetRange("C1").SetValue("Sort method:");
worksheet.GetRange("D1").SetValue(sort.GetSortMethod());
```
