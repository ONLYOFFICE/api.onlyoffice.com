# SetParaPr

Sets the paragraph properties to the current style.

## Syntax

```javascript
expression.SetParaPr(paraPr);
```

`expression` - A variable that represents a [ApiStyle](../ApiStyle.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| paraPr | Required | [ApiParaPr](../../ApiParaPr/ApiParaPr.md) |  | The paragraph properties that will be set. |

## Returns

[ApiStyle](../../ApiStyle/ApiStyle.md)

## Example

Apply paragraph formatting rules to a named style so all matching paragraphs share those settings in a document.

```javascript editor-docx
// How do I change the line spacing and alignment for all paragraphs that use a particular style in a document?

// Control indentation and spacing across multiple paragraphs at once by updating their shared style in a document.

let doc = Api.GetDocument();
let normalStyle = doc.GetDefaultStyle("paragraph");
let paraPr = Api.CreateParaPr();
paraPr.SetSpacingLine(480, "auto");
paraPr.SetJc("both");
normalStyle.SetParaPr(paraPr);

let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the line spacing, text justification and indent set using the paragraph style. ");
paragraph.AddText("We do not change the style of the paragraph itself. ");
paragraph.AddText("Only document-wide paragraph styles are applied.");
doc.Push(paragraph);
```
