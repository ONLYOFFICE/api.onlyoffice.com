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

访问当前高亮显示的单元格并在电子表格中向其写入值。

```javascript editor-xlsx
// How do I work with whatever cells the user has selected at the moment in a spreadsheet?

// Fill the active selection with text without specifying a fixed address in a spreadsheet.

let worksheet = Api.GetActiveSheet();
Api.GetSelection().SetValue("selected");
```
