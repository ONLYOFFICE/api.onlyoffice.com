# GetSelection

返回表示所选范围的对象。

## 语法

```javascript
expression.GetSelection();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

操作用户在电子表格中当前选择的单元格。

```javascript editor-xlsx
// Identify which cells are active and modify them regardless of their location in a spreadsheet?

// Put text into selected cells without knowing their exact position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");
```
