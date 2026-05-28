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

Save a list of keywords in the document's core properties in a document.

```javascript editor-docx
// How do I add searchable keywords to a document's metadata in a document?

// Improve discoverability by tagging the document with relevant terms stored in its built-in properties in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);
```
