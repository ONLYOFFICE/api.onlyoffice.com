# GetLocation

返回描述活动工作表视图中冻结单元格的范围。

## 语法

```javascript
expression.GetLocation();
```

`expression` - 表示 [ApiFreezePanes](../ApiFreezePanes.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md) \| null

## 示例

读取当前冻结区域的地址并在电子表格的单元格中显示。

```javascript editor-xlsx
// How do I find out which rows or columns are currently locked in place in a spreadsheet?

// Retrieve the cell reference of the frozen region to confirm what is pinned in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
