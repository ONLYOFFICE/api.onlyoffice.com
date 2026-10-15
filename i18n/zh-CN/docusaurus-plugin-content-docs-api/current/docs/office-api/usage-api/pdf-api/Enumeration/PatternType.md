# PatternType

可用于填充的可用预设图案。

## 类型

枚举

## 值

- "cross"
- "dashDnDiag"
- "dashHorz"
- "dashUpDiag"
- "dashVert"
- "diagBrick"
- "diagCross"
- "divot"
- "dkDnDiag"
- "dkHorz"
- "dkUpDiag"
- "dkVert"
- "dnDiag"
- "dotDmnd"
- "dotGrid"
- "horz"
- "horzBrick"
- "lgCheck"
- "lgConfetti"
- "lgGrid"
- "ltDnDiag"
- "ltHorz"
- "ltUpDiag"
- "ltVert"
- "narHorz"
- "narVert"
- "openDmnd"
- "pct10"
- "pct20"
- "pct25"
- "pct30"
- "pct40"
- "pct5"
- "pct50"
- "pct60"
- "pct70"
- "pct75"
- "pct80"
- "pct90"
- "plaid"
- "shingle"
- "smCheck"
- "smConfetti"
- "smGrid"
- "solidDmnd"
- "sphere"
- "trellis"
- "upDiag"
- "vert"
- "wave"
- "wdDnDiag"
- "wdUpDiag"
- "weave"
- "zigZag"

## 示例

使用向下虚线对角线图案创建图案填充。

```javascript editor-pdf
// How do I create a pattern fill with a specific pattern type?

// Create a dash diagonal pattern.

let fill = Api.CreatePatternFill(
	"dashDnDiag",
	Api.RGB(0, 225, 0),
	Api.RGB(255, 0, 0)
);
```
