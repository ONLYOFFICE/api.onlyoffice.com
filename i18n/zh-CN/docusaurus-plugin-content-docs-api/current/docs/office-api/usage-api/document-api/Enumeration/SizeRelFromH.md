# SizeRelFromH

用于计算对象相对水平大小的基准的可能值。

## 类型

枚举

## 值

- "insideMargin"
- "leftMargin"
- "rightMargin"
- "margin"
- "outsideMargin"
- "page"

## 示例

设置绘图相对于页面宽度的宽度。

```javascript editor-docx
// How do I make a drawing take up half of the page width?

// Set a drawing relative width to 50% of the page.

drawing.SetRelativeWidth("page", 50);
```
