# SetModified

Sets the date when the document was last modified.

## Syntax

```javascript
expression.SetModified(oModified);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oModified | Required | Date |  | The date when the document was last modified. |

## Returns

This method doesn't return any data.

## Example

Set the last-modified date for a document in a document.

```javascript editor-docx
// How do I update the modification timestamp of a document?

// Correct or backdate the recorded edit time to reflect when a document was actually changed in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);
```
