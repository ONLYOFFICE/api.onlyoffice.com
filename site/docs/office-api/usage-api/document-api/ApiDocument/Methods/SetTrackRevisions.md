# SetTrackRevisions

Sets the change tracking mode.

## Syntax

```javascript
expression.SetTrackRevisions(isTrack);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isTrack | Required | boolean |  | Specifies if the change tracking mode is set or not. |

## Returns

boolean

## Example

Turn change-tracking mode on or off in a document.

```javascript editor-docx
// How do I enable revision tracking so all edits are recorded in a document?

// Activate tracked changes before editing so reviewers can accept or reject each modification later.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph.AddText("Track revisions mode was set.");
```
