# GetDefaultParaPr

Returns a set of default paragraph properties in the current document.

## Syntax

```javascript
expression.GetDefaultParaPr();
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[ApiParaPr](../../ApiParaPr/ApiParaPr.md)

## Example

Read and modify the default paragraph formatting properties in a document.

```javascript editor-docx
// How do I change the default line spacing and paragraph spacing for all paragraphs in a document?

// Adjust justification and spacing at the style level so every new paragraph inherits the settings in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);
let normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
paragraph.AddText("This is just a text.");
```
