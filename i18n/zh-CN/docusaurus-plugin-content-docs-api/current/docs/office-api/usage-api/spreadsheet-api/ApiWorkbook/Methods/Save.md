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

保存电子表格中工作簿的更改。

```javascript editor-xlsx
// How can I save using a workbook in a spreadsheet?

// Save for a workbook in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
worksheet.GetRange("A1").SetValue("This sample text is saved to the worksheet.");
workbook.Save();
```
