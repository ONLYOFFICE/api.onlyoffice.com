# MoveCursorToNoteReference

Moves the cursor to the reference of this footnote/endnote in the main document.

If this document content is not a footnote/endnote, does nothing.

Inherited from [ApiDocumentContent.MoveCursorToNoteReference](../../ApiDocumentContent/Methods/MoveCursorToNoteReference.md).

## Syntax

```javascript
expression.MoveCursorToNoteReference(isBefore);
```

`expression` - A variable that represents an [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBefore | Required | boolean |  | Specifies whether to place the cursor before (*true*) or after (*false*) the note reference. |

## Returns

boolean
