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

This example demonstrates how to set the revision of the current document.

```javascript editor-docx
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetRevision("Rev. A");

const revision = core.GetRevision();
let paragraph = doc.GetElement(0);
paragraph.AddText("Revision: " + revision);

```
