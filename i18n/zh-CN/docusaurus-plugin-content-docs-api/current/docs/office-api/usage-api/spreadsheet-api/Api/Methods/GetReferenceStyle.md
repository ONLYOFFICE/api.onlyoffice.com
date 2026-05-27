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

读取当前的单元格寻址样式并在电子表格的单元格中显示。

```javascript editor-xlsx
// How do I check whether the column-letter or column-number addressing style is active in a spreadsheet?

// Record the active cell reference notation into a cell for inspection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue(Api.GetReferenceStyle());
```
