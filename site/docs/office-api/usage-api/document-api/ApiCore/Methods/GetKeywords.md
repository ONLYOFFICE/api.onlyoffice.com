# GetKeywords

Returns the document keywords.

## Syntax

```javascript
expression.GetKeywords();
```

`expression` - A variable that represents a [ApiCore](../ApiCore.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the keywords stored in the core properties of a document.

```javascript editor-docx
// How do I retrieve the keyword tags from the core properties in a document?

// Extract searchable tags assigned to a document to aid indexing or categorization in a document.

const doc = Api.GetDocument();
const core = doc.GetCore();
core.SetKeywords("Example; ApiCore; Document");

const keywords = core.GetKeywords();
let paragraph = doc.GetElement(0);
paragraph.AddText("Keywords: " + keywords);
```
