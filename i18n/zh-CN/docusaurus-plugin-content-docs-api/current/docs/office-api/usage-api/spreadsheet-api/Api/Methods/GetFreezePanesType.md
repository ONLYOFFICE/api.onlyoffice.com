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

此示例冻结第一列并将冻结类型粘贴到表格中。

```javascript editor-xlsx
// How to freeze a column in a worksheet.

// Freeze worksheet column and show its name in a cell.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("Type: ");
worksheet.GetRange("B1").SetValue(Api.GetFreezePanesType());
```
