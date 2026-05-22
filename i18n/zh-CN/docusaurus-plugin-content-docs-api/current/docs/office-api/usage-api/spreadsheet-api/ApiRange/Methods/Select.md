# Select

选择当前范围。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中选择单元格范围。

```javascript editor-xlsx
// How do I highlight a specific group of cells in a spreadsheet?

// Mark a range as the active selection so further actions apply to it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C1");
range.SetValue("1");
range.Select();
Api.GetSelection().SetValue("selected");
```
