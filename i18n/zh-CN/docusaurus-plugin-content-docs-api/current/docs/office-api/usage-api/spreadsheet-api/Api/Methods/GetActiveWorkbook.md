# GetActiveWorkbook

返回表示活动工作簿的对象。

## 语法

```javascript
expression.GetActiveWorkbook();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiWorkbook](../../ApiWorkbook/ApiWorkbook.md)

## 示例

访问打开的工作簿以在电子表格中读取其属性。

```javascript editor-xlsx
// How do I retrieve information about the current workbook in a spreadsheet?

// Identify the workbook by name and display that name in a spreadsheet.

const workbook = Api.GetActiveWorkbook();
const worksheet = workbook.GetActiveSheet();
const cell = worksheet.GetActiveCell();
const workbookName = workbook.GetName();
cell.SetValue(workbookName);
```
