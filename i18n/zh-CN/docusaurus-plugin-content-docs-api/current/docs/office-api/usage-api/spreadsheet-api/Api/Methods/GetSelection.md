# GetSelection

返回表示所选范围的对象。

## 语法

```javascript
expression.GetSelection();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

获取表示电子表格中所选范围的对象。

```javascript editor-xlsx
// How to get selected range object in a spreadsheet.

// Update the value of the selected range in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
```
