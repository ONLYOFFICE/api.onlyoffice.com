# Unfreeze

移除当前工作表中的所有冻结窗格。

## 语法

```javascript
expression.Unfreeze();
```

`expression` - 表示 [ApiFreezePanes](../ApiFreezePanes.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

此示例冻结第一列，然后解冻工作表中的所有窗格。

```javascript editor-xlsx
// How to unfreeze columns from freezed panes.

// Add freezed panes then unfreeze the first column and show all freezed ones' location to prove it.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.Unfreeze();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range + "");
```
