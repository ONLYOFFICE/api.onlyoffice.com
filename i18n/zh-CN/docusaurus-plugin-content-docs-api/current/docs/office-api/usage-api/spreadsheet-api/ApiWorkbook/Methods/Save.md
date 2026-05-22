# Save

保存对指定文档的更改。

## 语法

```javascript
expression.Save();
```

`expression` - 表示 [ApiWorkbook](../ApiWorkbook.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在编辑工作簿后将所有未保存的更改持久化到磁盘。

```javascript editor-xlsx
// How do I make sure my changes are written to the file in a spreadsheet?

// Write a value to a cell and immediately commit the workbook to storage in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
workbook.Save();
```
