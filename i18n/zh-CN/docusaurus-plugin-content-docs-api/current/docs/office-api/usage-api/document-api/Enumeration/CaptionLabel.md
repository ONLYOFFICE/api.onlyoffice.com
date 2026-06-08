# CaptionLabel

题注标签的可能值。

## 类型

枚举

## 值

- "Table"
- "Equation"
- "Figure"

## 示例

使用 “Table” 题注标签添加交叉引用。

```javascript editor-docx
// Add a reference to the page with a caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("Table", "pageNum", caption);
```
