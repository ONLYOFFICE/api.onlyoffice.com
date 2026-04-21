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

指定区域内容将向上旋转。

```javascript editor-xlsx
// Use angles to set orientation of the range. 

// How to rotate a range.

worksheet.GetRange("A1").SetOrientation("xlUpward");
```
