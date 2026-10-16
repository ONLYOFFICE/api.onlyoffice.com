# Delete

Deletes the specified drawing object from the parent.

Inherited from [ApiDrawing.Delete](../../ApiDrawing/Methods/Delete.md).

## Syntax

```javascript
expression.Delete();
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Delete the table from the slide in a presentation.

```javascript editor-pptx
// Useful for removing a table from the presentation slide.

// Create a table and then delete it from the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
slide.RemoveAllObjects();
slide.AddObject(table);
table.Delete();
```
