# ShapesMergeOperation

用于合并形状的操作。

- **"union"** - 将多个形状联合为一个形状。
- **"combine"** - 联合多个形状并移除其重叠区域。
- **"fragment"** - 沿相交线将多个形状拆分为单独的形状。
- **"intersect"** - 仅保留形状的重叠区域。
- **"subtract"** - 从第一个形状中减去其他形状。

## 类型

枚举

## 值

- "union"
- "combine"
- "fragment"
- "intersect"
- "subtract"

## 示例

在文档中从矩形中剪去一个圆形。

```javascript editor-pptx
// Pass the merge operation as a string to the MergeShapes method.

// Merge the shapes with the "subtract" operation so that the circle is removed from the rectangle.

Api.MergeShapes([rectangle, circle], "subtract");
```
