# CaptionLabel

题注标签的可能值。

## 类型

枚举

## 值

- "Table"
- "Equation"
- "Figure"


## 示例

This example add a cross-reference to the page containing a table caption.

```javascript editor-docx
// How to add reference to the page with caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("Table", "pageNum", caption);
```
