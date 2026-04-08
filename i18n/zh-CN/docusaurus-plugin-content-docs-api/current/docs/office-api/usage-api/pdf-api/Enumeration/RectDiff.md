# RectDiff

以元组表示的轴对齐矩形差值。
描述两个矩形之间的坐标增量 (B - A)。

不变量：
 - diff[0] = x1B - x1A
 - diff[1] = y1B - y1A
 - diff[2] = x2B - x2A
 - diff[3] = y2B - y2A

## 类型

对象

## 属性

| 名称 | 类型 | 描述 |
| ---- | ---- | ----------- |
| 0 | [pt](../Enumeration/pt.md) | dx1（左增量） |
| 1 | [pt](../Enumeration/pt.md) | dy1（上增量） |
| 2 | [pt](../Enumeration/pt.md) | dx2（右增量） |
| 3 | [pt](../Enumeration/pt.md) | dy2（下增量） |
