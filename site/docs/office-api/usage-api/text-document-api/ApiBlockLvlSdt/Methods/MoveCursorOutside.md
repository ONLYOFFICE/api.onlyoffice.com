# MoveCursorOutside

Places a cursor before/after the current content control.

## Syntax

```javascript
expression.MoveCursorOutside(isAfter);
```

`expression` - A variable that represents a [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isAfter | Optional | boolean | true | Specifies whether a cursor will be placed before (false) or after (true) the current content control. |

## Returns

boolean

## Example

This example shows how to move a cursor outside the content control.

```javascript editor-docx playground
// Creates a block content control, adds a text to it, and moves a cursor outside the container.

// How to move a cursor outside the ApiBlockLvlSdt object.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorOutside(true);
```
