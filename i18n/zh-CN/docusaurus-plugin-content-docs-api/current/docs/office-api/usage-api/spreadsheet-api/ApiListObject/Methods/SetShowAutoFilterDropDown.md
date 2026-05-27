# SetShowAutoFilterDropDown

设置是否在表格的标题行上显示自动筛选下拉箭头。
不会移除自动筛选本身，仅隐藏或显示下拉按钮。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.SetShowAutoFilterDropDown(bShow);
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bShow | 必需 | boolean |  | 传入 true 显示下拉箭头，false 隐藏它们。 |

## 返回值

此方法不返回任何数据。

## 示例

在不移除筛选器的情况下隐藏电子表格中表格上的筛选下拉箭头。

```javascript editor-xlsx
// How do I show or hide the drop-down arrows in a table header in a spreadsheet?

// Prevent users from changing filter settings while keeping existing criteria intact in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");
table.SetShowAutoFilterDropDown(false);

worksheet.GetRange("D1").SetValue("Show dropdown:");
worksheet.GetRange("E1").SetValue(table.GetShowAutoFilterDropDown());
```
