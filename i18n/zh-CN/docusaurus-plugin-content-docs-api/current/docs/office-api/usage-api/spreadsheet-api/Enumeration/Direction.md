# Direction

指定指定区域中结束的方向。

## 类型

枚举

## 值

- "xlUp"
- "xlDown"
- "xlToRight"
- "xlToLeft"

## 示例

获取表示指定区域左端的 Range 对象。

```javascript editor-xlsx
// How to set a direction of the range.

// Get a range and set its direction, color fill, etc.

const color = Api.CreateColorFromRGB(255, 224, 204);
worksheet.GetRange("C4:D5").End("xlToLeft").SetFillColor(color);
```
