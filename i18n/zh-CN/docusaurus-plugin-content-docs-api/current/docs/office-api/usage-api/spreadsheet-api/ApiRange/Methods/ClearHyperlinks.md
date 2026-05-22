# ClearHyperlinks

清除当前范围中的所有超链接。

## 语法

```javascript
expression.ClearHyperlinks();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

从电子表格中的单元格范围移除所有超链接，同时保留显示的文本。

```javascript editor-xlsx
// How do I detach links from cells without deleting their text in a spreadsheet?

// Turn linked cells back into plain text by stripping away their URLs in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("http://example.com");
let range = worksheet.GetRange("A1");
range.ClearHyperlinks();
worksheet.GetRange("A2").SetValue("Result is hyperlinks cleared for A1 cell.");
```
