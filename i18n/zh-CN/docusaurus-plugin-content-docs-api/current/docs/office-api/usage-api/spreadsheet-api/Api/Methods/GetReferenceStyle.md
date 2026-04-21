# GetReferenceStyle

返回单元格引用样式。

## 语法

```javascript
expression.GetReferenceStyle();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ReferenceStyle](../../Enumeration/ReferenceStyle.md)

## 示例

获取电子表格中的引用样式。

```javascript editor-xlsx
// Get style of a reference in a spreadsheet.

// Insert a reference style into the cell.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
