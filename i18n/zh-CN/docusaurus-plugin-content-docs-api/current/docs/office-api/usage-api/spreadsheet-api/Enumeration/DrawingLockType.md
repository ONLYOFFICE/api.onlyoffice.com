# DrawingLockType

此类型指定绘图锁的类型。

## 类型

枚举

## 值

- "noGrp"
- "noUngrp"
- "noSelect"
- "noRot"
- "noChangeAspect"
- "noMove"
- "noResize"
- "noEditPoints"
- "noAdjustHandles"
- "noChangeArrowheads"
- "noChangeShapeType"
- "noDrilldown"
- "noTextEdit"
- "noCrop"
- "txBox"

## 示例

获取绘图对象指定锁定类型的锁定值。

```javascript editor-xlsx
// How to get a lock value of the drawing.

// Find out a lock value of an image.

let lockValue = drawing.GetLockValue("noSelect");
```
