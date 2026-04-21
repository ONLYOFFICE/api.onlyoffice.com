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

获取表示电子表格中所选范围的对象。

```javascript editor-xlsx
// How to get selected range in a spreadsheet.

// Get selection from the worksheet and set its value.

let worksheet = Api.GetActiveSheet();
worksheet.GetSelection().SetValue("selected");
```
