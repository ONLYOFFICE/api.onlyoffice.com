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

此示例冻结第一列并将冻结的范围地址粘贴到表格中。

```javascript editor-xlsx
// How to get freezed panes.

// Get all freezed panes, its location and show it on the worksheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
