# GetFreezePanes

返回当前工作表的冻结窗格。

## 语法

```javascript
expression.GetFreezePanes();
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFreezePanes](../../ApiFreezePanes/ApiFreezePanes.md)

## 示例

读取冻结窗格区域并在电子表格的工作表上显示其地址。

```javascript editor-xlsx
// How do I find out which rows or columns are frozen in a spreadsheet?

// Check where the freeze boundary is and write its location to a cell in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
