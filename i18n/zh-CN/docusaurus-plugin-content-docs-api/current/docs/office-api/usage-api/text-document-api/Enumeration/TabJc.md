# TabJc

自定义制表符类型。

## 类型

枚举

## 值

- "clear"
- "left"
- "right"
- "center"

## 示例

在 50、75 和 150 磅位置设置制表位，文本分别在各制表位处居中、左对齐和右对齐。

```javascript editor-docx
// How to set tabs and indicate justifications of text at each tab stop.

// Add tabs at points with text alignment.

paraPr.SetTabs([1000, 1500, 3000], ["center", "left", "right"]);
```
