# SortOrientation

指定排序应按行还是按列进行。

## 类型

枚举

## 值

- "xlSortColumns"
- "xlSortRows"


## 示例

This example specify that the sort should be by column.

```javascript editor-xlsx
// How to specify a sorting orientation (column wise or row wise) for each range.

// Sort a range of cells indicating sorting orientation for sub ranges.

worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
