# RelFromV

用于计算对象相对垂直定位的基准的可能值。

## 类型

枚举

## 值

- "bottomMargin"
- "insideMargin"
- "topMargin"
- "margin"
- "outsideMargin"
- "page"
- "line"
- "paragraph"

## 示例

将绘图相对于页面垂直居中。

```javascript editor-docx
// How do I center a drawing vertically relative to the page?

// Set a drawing vertical aligment.

drawing.SetVerAlign("page", "center");
```
