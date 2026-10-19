# SetStyle

Sets the style for the current table.

## Syntax

```javascript
expression.SetStyle(oStyle);
```

`expression` - A variable that represents an [ApiTable](../ApiTable.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oStyle | Required | [ApiStyle](../../ApiStyle/ApiStyle.md) |  | The table style to apply. |

## Returns

boolean

## Example

Apply a named table style from the presentation to the current table.

```javascript editor-pptx
// SetStyle looks up the style by name from the presentation's available table styles.

// Create a table, retrieve the first available style by name, and apply it.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const table = Api.CreateTable(3, 3);
slide.AddObject(table);
const style = presentation.GetStyle("Medium Style 2 - Accent 2");
table.SetStyle(style);
table.GetCell(0,0).AddText('Set style for table: ' + style.GetName());
```
