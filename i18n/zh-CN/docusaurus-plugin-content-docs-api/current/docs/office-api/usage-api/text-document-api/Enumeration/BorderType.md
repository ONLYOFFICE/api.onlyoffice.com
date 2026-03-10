# BorderType

将添加到文档元素的边框类型。
-**「none」** - 不会向创建的元素或所选元素侧添加边框。
-**「single」** - 将向创建的元素或所选元素侧添加单边框。

## 类型

枚举

## 值

- "none"
- "single"


## 示例

The paragraph has a single green bottom border of 3 point wide with a zero offset from the bottom paragraph edge.

```javascript editor-docx
// How to set a bottom border specifying its type and color.

// Use a border index to set borders with properties.

paraPr.SetBottomBorder("single", 24, 0, 0, 255, 0);
```
