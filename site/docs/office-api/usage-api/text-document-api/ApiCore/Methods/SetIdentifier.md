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

This example demonstrates how to set the identifier of the current document using the ApiCore.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetIdentifier("#ID42");

const identifier = core.GetIdentifier();
let paragraph = doc.GetElement(0);
paragraph.AddText("Identifier: " + identifier);

```
