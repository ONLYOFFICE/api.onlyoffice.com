# SetCategory

Sets the document category.

## Syntax

```javascript
expression.SetCategory(sCategory);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sCategory | Required | string |  | The document category. |

## Returns

This method doesn't return any data.

## Example

Set the category of the document using the core properties in a document.

```javascript editor-docx
// How can I set category using a core properties in a document?

// Set category for a core properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);
```
