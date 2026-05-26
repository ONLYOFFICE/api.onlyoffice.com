# MoveCursorToNoteReference

Moves the cursor to the reference of this footnote/endnote in the main document. If this document content is not a footnote/endnote, does nothing.

## Syntax

```javascript
expression.MoveCursorToNoteReference(isBefore);
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBefore | Required | boolean |  | Specifies whether to place the cursor before (&lt;em&gt;true&lt;/em&gt;) or after (&lt;em&gt;false&lt;/em&gt;) the note reference. |

## Returns

boolean
