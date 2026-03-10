# Angle

指定范围角度。

## 类型

枚举

## 值

- "xlDownward"
- "xlHorizontal"
- "xlUpward"
- "xlVertical"


## 示例

This example specifies that the range contents will be rotated upward.

```javascript editor-xlsx
// Use angles to set orientation of the range. 

// How to rotate a range.

worksheet.GetRange("A1").SetOrientation("xlUpward");
```
