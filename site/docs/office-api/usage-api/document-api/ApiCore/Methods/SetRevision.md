# SetRevision

Sets the document revision.

## Syntax

```javascript
expression.SetRevision(sRevision);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sRevision | Required | string |  | The document revision. |

## Returns

This method doesn't return any data.

## Example

Set the revision of the current document in a document.

```javascript editor-docx
// How do I set revision in a document?

// Set revision using a core properties object in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);
```
