# SortHeader

指定排序区域的第一行是否包含标题信息。

## 类型

枚举

## 值

- "xlNo"
- "xlYes"


## 示例

This example specify that the first row contains header information.

```javascript editor-xlsx
// How to specify a sorting header for a range.

// Sort a range of cells indicating sorting header.

worksheet.GetRange("A1:C5").SetSort("A1:A5", "xlAscending", "B1:B5", "xlDescending", "C1:C5", "xlAscending", "xlYes", "xlSortColumns");
```
