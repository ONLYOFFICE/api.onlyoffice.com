# UnMerge

将选定的合并单元格范围拆分为单个单元格。

## 语法

```javascript
expression.UnMerge();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在电子表格中将之前合并的单元格范围拆分回各个单元格。

```javascript editor-xlsx
// How do I separate merged cells into single cells in a spreadsheet?

// Undo a cell merge so each address in the range becomes its own independent cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A5:E5").UnMerge();
```
