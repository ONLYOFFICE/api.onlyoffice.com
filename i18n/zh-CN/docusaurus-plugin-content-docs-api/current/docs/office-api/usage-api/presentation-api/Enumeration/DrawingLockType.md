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

This example shows how to get the lock value for the specified lock type of a drawing.

```javascript editor-pptx
// How to get a lock value of the drawing.

// Find out a lock value of an image.

let lockValue = drawing.GetLockValue("noSelect");
```
