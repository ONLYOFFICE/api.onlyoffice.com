# DrawingLockType

This type specifies the type of drawing lock.

## Type

Enumeration

## Values

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


## Example

This example shows how to get the lock value for the specified lock type of a drawing.

```javascript editor-xlsx
// How to get a lock value of the drawing.

// Find out a lock value of an image.

let lockValue = drawing.GetLockValue("noSelect");
```
