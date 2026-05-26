# SetDescription

Sets the document description.

## Syntax

```javascript
expression.SetDescription(sDescription);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescription | Required | string |  | The document description. |

## Returns

This method doesn't return any data.

## Example

Write a descriptive summary into the document's core properties in a document.

```javascript editor-docx
// How do I add a description to a document's built-in metadata in a document?

// Provide context about a document's purpose by saving a plain-text summary in its properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetDescription("This is a sample document made to help fellow users understand how to use the ApiCore methods.");

const description = core.GetDescription();
let paragraph = doc.GetElement(0);
paragraph.AddText("Description: " + description);
```
