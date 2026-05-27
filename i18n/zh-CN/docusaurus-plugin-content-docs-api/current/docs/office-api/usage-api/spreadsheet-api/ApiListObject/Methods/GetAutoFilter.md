# GetAutoFilter

返回表示应用于表格的自动筛选的 ApiAutoFilter 对象。
如果表格没有自动筛选，则返回 null。

:::note
此功能仅在 ONLYOFFICE Docs 付费版本中可用。
:::

## 语法

```javascript
expression.GetAutoFilter();
```

`expression` - 表示 [ApiListObject](../ApiListObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiAutoFilter](../../ApiAutoFilter/ApiAutoFilter.md) \| null

## 示例

访问电子表格中附加到表格的自动筛选。

```javascript editor-xlsx
// How do I check whether a table has an auto filter in a spreadsheet?

// Confirm that a table's filter control is present before applying filter settings in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Product");
worksheet.GetRange("B1").SetValue("Price");
worksheet.GetRange("A2").SetValue("Apples");
worksheet.GetRange("B2").SetValue(100);
worksheet.GetRange("A3").SetValue("Oranges");
worksheet.GetRange("B3").SetValue(150);
let table = worksheet.AddListObject("xlSrcRange", "A1:B3");

let autoFilter = table.GetAutoFilter();
worksheet.GetRange("D1").SetValue("AutoFilter present:");
worksheet.GetRange("E1").SetValue(autoFilter !== null);
```
