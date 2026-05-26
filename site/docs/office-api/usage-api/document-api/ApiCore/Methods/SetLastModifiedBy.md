# SetLastModifiedBy

Sets the name of the user who last modified the document.

## Syntax

```javascript
expression.SetLastModifiedBy(sLastModifiedBy);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sLastModifiedBy | Required | string |  | The name of the user who last modified the document. |

## Returns

This method doesn't return any data.

## Example

Record the name of the last person who modified a document in a document.

```javascript editor-docx
// How do I store the author name of the most recent edit in a document?

// Track document ownership and editing history by saving the modifier's name in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);
```
