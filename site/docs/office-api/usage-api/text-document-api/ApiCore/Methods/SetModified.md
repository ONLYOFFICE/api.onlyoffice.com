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

This example demonstrates how to get the date when the current document was last modified.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetModified(new Date('1990-03-10'));

const lastModifiedDate = core.GetModified().toDateString();
let paragraph = doc.GetElement(0);
paragraph.AddText("Last modified: " + lastModifiedDate);

```
