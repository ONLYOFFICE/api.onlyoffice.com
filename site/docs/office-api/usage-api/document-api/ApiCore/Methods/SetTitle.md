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

Set the title in the core properties of a document in a document.

```javascript editor-docx
// How do I give a document a formal title in its metadata?

// Name a document for easier identification in file managers and document management systems in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetTitle("My Document Title");

const title = core.GetTitle();
let paragraph = doc.GetElement(0);
paragraph.AddText("Title: " + title);
```
