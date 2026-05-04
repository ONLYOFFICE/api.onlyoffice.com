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

Move a cursor outside the content control in a document.

```javascript editor-docx
// Create a block content control, add a text to it, and move a cursor outside the container in a document.

// How to move a cursor outside the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorOutside(true);
```
