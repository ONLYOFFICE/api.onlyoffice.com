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

此示例冻结第一列并将冻结的范围地址粘贴到表格中。

```javascript editor-xlsx
// How to get location address of a freezed column.

// Get an address of a column from freezed panes and display it in the worksheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range.GetAddress());
```
