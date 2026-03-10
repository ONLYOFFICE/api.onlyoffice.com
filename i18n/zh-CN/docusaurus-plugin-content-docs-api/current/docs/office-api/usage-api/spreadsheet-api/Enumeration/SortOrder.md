# SortOrder

指定排序顺序。

## 类型

枚举

## 值

- "xlAscending"
- "xlDescending"


## 示例

This example specify that the sort order for the values specified in "A1:A5" is ascending.

```javascript editor-xlsx
// How to specify a sorting order (ascending or descending) for each range.

// Sort a range of cells indicating sorting orders for sub ranges.

worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
