# GetContentStatus

Returns the document content status.

## Syntax

```javascript
expression.GetContentStatus();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the content status stored in the core properties of a document.

```javascript editor-docx
// How do I retrieve the content status value from the core properties in a document?

// Check whether a document is marked as Draft, Final, or another status in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetContentStatus("Final");

const contentStatus = core.GetContentStatus();
const paragraph = doc.GetElement(0);
paragraph.AddText("Content Status: " + contentStatus);
```
