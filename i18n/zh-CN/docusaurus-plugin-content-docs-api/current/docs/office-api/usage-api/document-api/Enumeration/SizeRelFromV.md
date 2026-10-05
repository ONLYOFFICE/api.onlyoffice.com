# SizeRelFromV

用于计算对象相对垂直大小的基准的可能值。

## 类型

枚举

## 值

- "bottomMargin"
- "insideMargin"
- "topMargin"
- "margin"
- "outsideMargin"
- "page"

## 示例

设置绘图相对于页面高度的高度。

```javascript editor-docx
// How do I make a drawing take up a quarter of the page height?

// Set a drawing relative height to 25% of the page.

drawing.SetRelativeHeight("page", 25);
```
