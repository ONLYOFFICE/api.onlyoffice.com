# Select

Selects the current graphic object.

Inherited from [ApiDrawing.Select](../../ApiDrawing/Methods/Select.md).

## Syntax

```javascript
expression.Select(isReplace);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isReplace | Optional | boolean | false | Specifies whether the selection should replace the current selection (true) or be added to it (false). |

## Returns

boolean

## Example

Select a table on a slide to make it the active object.

```javascript editor-pptx
// Select is used to programmatically set the current selection to the table.

// Add a table to the slide and select it, then retrieve it as the active table.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
table.SetPosition(0, 0);
slide.AddObject(table);
table.Select();
const activeTable = presentation.GetActiveTable();
activeTable.SetBackgroundColor(Api.RGB(0, 122, 204));
```
