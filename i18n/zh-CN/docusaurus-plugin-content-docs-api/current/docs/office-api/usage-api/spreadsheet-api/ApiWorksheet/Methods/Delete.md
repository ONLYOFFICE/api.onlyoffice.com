# Delete

删除当前工作表。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从电子表格中的工作簿移除工作表。

```javascript editor-xlsx
// How do I delete a worksheet that is no longer needed in a spreadsheet?

// Permanently discard a sheet and confirm the removal with a message.

Api.AddSheet("New sheet");
let sheet = Api.GetActiveSheet();
sheet.Delete();
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3").SetValue("This method just deleted the second sheet from this spreadsheet.");
```
