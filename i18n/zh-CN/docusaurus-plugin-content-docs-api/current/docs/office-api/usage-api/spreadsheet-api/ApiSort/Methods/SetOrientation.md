# SetOrientation

设置排序方向。

:::note\
此功能仅在 ONLYOFFICE Docs 付费版本中可用。\
:::

## 语法

```javascript
expression.SetOrientation(sOrientation);
```

`expression` - 表示 [ApiSort](../ApiSort.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sOrientation | 必需 | [XlSortOrientation](../../Enumeration/XlSortOrientation.md) |  | 未提供描述。 |

## 返回值

此方法不返回任何数据。

## 示例

控制电子表格中表格数据是按行还是按列排序。

```javascript editor-xlsx
// How do I choose a top-to-bottom or left-to-right sort direction in a spreadsheet?

// Pick the axis along which the table values are reordered in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("A3").SetValue("Oranges");
let table = worksheet.AddListObject("xlSrcRange", "A1:A3");

let sort = table.GetSort();
sort.SetOrientation("xlTopToBottom");

worksheet.GetRange("C1").SetValue("Sort orientation:");
worksheet.GetRange("D1").SetValue(sort.GetOrientation());
```
