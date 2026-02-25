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

This example demonstrates how to set the name of the last user who modified the current document.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetLastModifiedBy("Mark Pottato");

const lastModifiedBy = core.GetLastModifiedBy();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified by: " + lastModifiedBy);

```
