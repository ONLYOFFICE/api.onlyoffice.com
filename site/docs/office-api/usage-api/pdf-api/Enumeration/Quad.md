# Quad

Quadrilateral represented as a flat tuple of vertices.\
Vertices order is fixed:\
 · left-top → right-top → left-bottom → right-bottom\
\
Invariants:\
 · x1 &lt;= x2 (top edge goes left → right)\
 · x3 &lt;= x4 (bottom edge goes left → right)\
 · y1 &lt;= y3 (left edge goes top → bottom)\
 · y2 &lt;= y4 (right edge goes top → bottom)

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| 0 | [pt](../Enumeration/pt.md) | x1 (left top) |
| 1 | [pt](../Enumeration/pt.md) | y1 (left top) |
| 2 | [pt](../Enumeration/pt.md) | x2 (right top) |
| 3 | [pt](../Enumeration/pt.md) | y2 (right top) |
| 4 | [pt](../Enumeration/pt.md) | x3 (left bottom) |
| 5 | [pt](../Enumeration/pt.md) | y3 (left bottom) |
| 6 | [pt](../Enumeration/pt.md) | x4 (right bottom) |
| 7 | [pt](../Enumeration/pt.md) | y4 (right bottom) |
