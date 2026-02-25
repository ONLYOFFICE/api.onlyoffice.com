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

This example demonstrates how to set the category of the document using the ApiCore.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetCategory("Examples");

const category = core.GetCategory();
let paragraph = doc.GetElement(0);
paragraph.AddText("Category: " + category);

```
