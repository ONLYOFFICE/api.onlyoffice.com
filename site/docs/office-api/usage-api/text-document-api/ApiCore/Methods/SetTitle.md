# SetTitle

Sets the document title.

## Syntax

```javascript
expression.SetTitle(sTitle);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sTitle | Required | string |  | The document title. |

## Returns

This method doesn't return any data.

## Example

Set the title of the current document in a document.

```javascript editor-docx
// How to set title for a core properties in a document?

// Set title and display the result in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);
```
