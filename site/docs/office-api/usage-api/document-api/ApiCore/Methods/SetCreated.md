# SetCreated

Sets the document creation date.

## Syntax

```javascript
expression.SetCreated(oCreated);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oCreated | Required | Date |  | The document creation date. |

## Returns

This method doesn't return any data.

## Example

Record the creation date in the document's core properties in a document.

```javascript editor-docx
// How do I store the date a document was originally created in a document?

// Embed an explicit creation timestamp in the metadata so the document's origin date is preserved in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCreated(new Date('20 January 2000'));

const createdDate = core.GetCreated().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Created: " + createdDate);
```
