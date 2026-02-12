# SetKeywords

Sets the document keywords.

## Syntax

```javascript
expression.SetKeywords(sKeywords);
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sKeywords | Required | string |  | The document keywords in the string format. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates how to set the keywords of the current document using the ApiCore.

```javascript editor-docx playground
const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);

```
