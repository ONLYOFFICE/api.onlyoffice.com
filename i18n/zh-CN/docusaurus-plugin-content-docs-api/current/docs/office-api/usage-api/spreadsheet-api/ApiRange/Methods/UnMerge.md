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

此方法不返回任何数据。

## 示例

此示例将选定的合并单元格范围拆分为单个单元格。

```javascript editor-xlsx
// How to unmerge a range of cells.

// Get a range and split its merged cells.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A3:E8").Merge(true);
worksheet.GetRange("A5:E5").UnMerge();

```
