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

Move the cursor outside a content control in a document.

```javascript editor-docx
// How do I move the cursor outside a content control in a document?

// Place the cursor after a content control to continue typing outside it in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("The cursor will be placed after the current content control.");
doc.AddElement(0, blockLvlSdt);
blockLvlSdt.MoveCursorOutside(true);
```
