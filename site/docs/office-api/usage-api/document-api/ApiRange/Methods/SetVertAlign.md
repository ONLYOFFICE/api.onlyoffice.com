# SetVertAlign

Specifies the alignment which will be applied to the Range contents in relation to the default appearance of the Range text:
-**"baseline"** - the characters in the current text Range will be aligned by the default text baseline.
-**"subscript"** - the characters in the current text Range will be aligned below the default text baseline.
-**"superscript"** - the characters in the current text Range will be aligned above the default text baseline.

## Syntax

```javascript
expression.SetVertAlign(sType);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | Required | "baseline" \| "subscript" \| "superscript" |  | The vertical alignment type applied to the text contents. |

## Returns

[ApiRange](../../ApiRange/ApiRange.md) \| null

## Example

Position selected text above or below the normal line as superscript or subscript in a document.

```javascript editor-docx
// How do I align a range of characters vertically as raised or lowered text in a document?

// Mark a word or symbol to sit above or below the baseline of surrounding text in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Copyright Document Builder");
let range = doc.GetRange(10, 19);
range.SetVertAlign("superscript");
```
