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

Check whether revision tracking is currently enabled in a document.

```javascript editor-docx
// How do I find out if change tracking is turned on in a document?

// Verify the tracking state before deciding whether to record or ignore edits in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
let trackRevisions = doc.IsTrackRevisions();
paragraph.AddText("Change tracking is enabled: " + trackRevisions);
```
