# CaptionLabel

题注标签的可能值。

## 类型

枚举

## 值

- "Table"
- "Equation"
- "Figure"


## 示例

此示例添加指向包含表格标题的页面的交叉引用。

```javascript editor-docx
// How to add reference to the page with caption.

// Use caption to create a cross-reference.

paragraph.AddCaptionCrossRef("Table", "pageNum", caption);
```
