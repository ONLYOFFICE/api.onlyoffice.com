# TickLabelPosition

图表刻度标签位置的可能值（水平或垂直）。
- **“none”** - 不显示选定的刻度标签。
- **“nextTo”** - 将选定的刻度标签位置设置在主标签旁边。
- **“low”** - 将选定的刻度标签位置设置在图表中数值较低的部分。
- **“high”** - 将选定的刻度标签位置设置在图表中数值较高的部分。

## 类型

枚举

## 值

- "none"
- "nextTo"
- "low"
- "high"

## 示例

将垂直刻度标签的位置设置在主垂直标签旁边。

```javascript editor-pptx
// How to set tick label positions for the chart.

// Set a chart vertical tick label position to "nextTo".

chart.SetVertAxisTickLabelPosition("nextTo");
```
