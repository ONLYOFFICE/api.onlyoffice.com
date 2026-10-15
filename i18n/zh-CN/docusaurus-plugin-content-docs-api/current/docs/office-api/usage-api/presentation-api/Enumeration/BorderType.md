# BorderType

边框类型。

## 类型

枚举

## 值

- "none"
- "single"

## 示例

该段落具有 3 磅宽的单条绿色底部边框，与段落底部边缘的偏移量为零。

```javascript editor-pptx
// How do I set a bottom border with a specific type and color?

// Use a border index to set borders with properties.

paraPr.SetBottomBorder("single", 24, 0, Api.Color(0, 255, 0));
```
