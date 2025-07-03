# IsTrackRevisions

Checks if change tracking mode is enabled or not.

## Syntax

```javascript
expression.IsTrackRevisions();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

This example checks if change tracking mode is enabled or not.

```javascript editor-docx
// How to track revisions of the document.

// Get a boolean value that shows whether revision tracking is enabled or not.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
let trackRevisions = doc.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);
```
