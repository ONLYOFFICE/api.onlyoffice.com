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

释放所有锁定的行和列使工作表在电子表格中自由滚动。

```javascript editor-xlsx
// How do I remove frozen panes and allow the entire sheet to scroll without restrictions in a spreadsheet?

// Unpin any fixed areas to restore normal scrolling behavior across the whole sheet in a spreadsheet.

Api.SetFreezePanesType('column');
let worksheet = Api.GetActiveSheet();
let freezePanes = worksheet.GetFreezePanes();
freezePanes.Unfreeze();
let range = freezePanes.GetLocation();
worksheet.GetRange("A1").SetValue("Location: ");
worksheet.GetRange("B1").SetValue(range + "");
```
