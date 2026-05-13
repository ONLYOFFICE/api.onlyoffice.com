# SetIdentifier

Sets the document identifier.

## Syntax

```javascript
expression.SetIdentifier(sIdentifier);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sIdentifier | Required | string |  | The document identifier. |

## Returns

This method doesn't return any data.

## Example

Set the identifier of the current document using the core properties in a document.

```javascript editor-docx
// How to set identifier for a core properties in a document?

// Set identifier and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);
```
