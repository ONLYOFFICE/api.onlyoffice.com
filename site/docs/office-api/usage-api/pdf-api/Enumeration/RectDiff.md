# RectDiff

Axis-aligned rectangle difference represented as a tuple.\
Describes coordinate-wise deltas between two rectangles (B - A).\
\
Invariants:\
 - diff[0] = x1B - x1A\
 - diff[1] = y1B - y1A\
 - diff[2] = x2B - x2A\
 - diff[3] = y2B - y2A

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| 0 | [pt](../Enumeration/pt.md) | dx1 (left delta) |
| 1 | [pt](../Enumeration/pt.md) | dy1 (top delta) |
| 2 | [pt](../Enumeration/pt.md) | dx2 (right delta) |
| 3 | [pt](../Enumeration/pt.md) | dy2 (bottom delta) |
