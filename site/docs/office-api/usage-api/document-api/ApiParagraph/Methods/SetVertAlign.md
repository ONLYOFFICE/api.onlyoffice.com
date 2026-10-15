# SetVertAlign

Specifies the alignment which will be applied to the contents of this paragraph in relation to the default appearance of the paragraph text:

- **"baseline"** - the characters in the current paragraph will be aligned by the default text baseline.
- **"subscript"** - the characters in the current paragraph will be aligned below the default text baseline.
- **"superscript"** - the characters in the current paragraph will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(type);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | Required | "baseline" \| "subscript" \| "superscript" \| null |  | The vertical alignment type applied to the text contents. Pass *null* to remove the vertical alignment. |

## Returns

[ApiParagraph](../../ApiParagraph/ApiParagraph.md) \| null

## Example

Position paragraph text above or below the normal line of writing in a document.

```javascript editor-docx
// How do I raise or lower the text of a paragraph relative to the baseline in a document?

// Distinguish scientific notation or footnote markers by shifting paragraph text vertically in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a paragraph with the text aligned below the baseline vertically.");
paragraph.SetVertAlign("subscript");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a paragraph with the text aligned above the baseline vertically.");
paragraph.SetVertAlign("superscript");
doc.Push(paragraph);
```
