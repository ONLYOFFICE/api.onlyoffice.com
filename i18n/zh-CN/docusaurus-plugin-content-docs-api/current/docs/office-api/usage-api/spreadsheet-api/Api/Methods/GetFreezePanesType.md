# GetFreezePanesType

返回冻结窗格类型。

## 语法

```javascript
expression.GetFreezePanesType();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[FreezePaneType](../../Enumeration/FreezePaneType.md)

## 示例

锁定第一列并在电子表格的单元格中显示活动的冻结类型。

```javascript editor-xlsx
// How do I find out which rows or columns are currently frozen in a spreadsheet?

// Check what kind of pane freeze is applied and record it in a cell in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
```
