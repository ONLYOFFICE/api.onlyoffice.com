# TickLabelPosition

图表刻度标签位置（水平或垂直）的可能值。
- **“none”** - 不显示所选刻度标签。
- **“nextTo”** - 将所选刻度标签的位置设置为紧邻主标签。
- **“low”** - 将所选刻度标签的位置设置在图表中较低值的部分。
- **“high”** - 将所选刻度标签的位置设置在图表中较高值的部分。

## 类型

枚举

## 值

- "none"
- "nextTo"
- "low"
- "high"

## 示例

将垂直刻度标签的位置设置在主垂直标签旁边。

```javascript editor-xlsx
// How to set tick label positions for the chart.

// Set a chart vertical tick label position to "nextTo".

chart.SetVertAxisTickLabelPosition("nextTo");
```
