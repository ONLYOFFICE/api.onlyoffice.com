# StyleType

用于文档元素的样式类型。

## 类型

枚举

## 值

- "paragraph"
- "table"
- "run"
- "numbering"

## 示例

将默认文档段落样式分配给 'oNormalStyle' 变量。

```javascript editor-docx
// How to get a default style of the paragraph from the document.

// Return a paragraph default style.

let normalStyle = doc.GetDefaultStyle("paragraph");
```
