# SetLockAspect

Sets whether the aspect ratio of the drawing is locked.

Inherited from [ApiDrawing.SetLockAspect](../../ApiDrawing/Methods/SetLockAspect.md).

## Syntax

```javascript
expression.SetLockAspect(bAspect);
```

`expression` - A variable that represents an [ApiShape](../ApiShape.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bAspect | Required | boolean |  | Specifies whether the aspect ratio of this drawing is locked. |

## Returns

boolean

## Example

Set whether the aspect ratio of the drawing is locked in a spreadsheet.

```javascript editor-xlsx
// Useful for locking the aspect ratio of a shape in a spreadsheet.

// Create a shape, lock its aspect ratio and display the result.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = worksheet.AddShape("triangle", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
drawing.SetSize(120 * 36000, 70 * 36000);
drawing.SetPosition(0, 2 * 36000, 1, 3 * 36000);
drawing.SetLockAspect(true);
let lockAspect = drawing.GetLockAspect();
worksheet.GetRange("A1").SetValue("Aspect ratio locked: " + lockAspect);
```
