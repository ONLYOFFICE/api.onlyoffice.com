# GetLockValue

Returns the lock value for the specified lock type of the current drawing.

Inherited from [ApiDrawing.GetLockValue](../../ApiDrawing/Methods/GetLockValue.md).

## Syntax

```javascript
expression.GetLockValue(sType);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | [DrawingLockType](../../Enumeration/DrawingLockType.md) |  | Lock type in the string format. |

## Returns

boolean

## Example

Read a lock setting for a shape on a page in a PDF form.

```javascript editor-pdf
// Query whether a specific lock is applied to a shape before editing it.

// Create a shape, lock it against moving, then read and display that lock value.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rect", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetLockValue("noMove", true);
const lockValue = shape.GetLockValue("noMove");
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("This drawing cannot be moved: " + lockValue);
```
