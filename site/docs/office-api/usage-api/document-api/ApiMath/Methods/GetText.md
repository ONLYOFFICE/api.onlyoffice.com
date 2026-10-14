# GetText

Returns the inner text of the current math element.

## Syntax

```javascript
expression.GetText(format);
```

`expression` - A variable that represents an [ApiMath](../ApiMath.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| format | Optional | "unicode" \| "latex" | "unicode" | The format the text should be returned in. |

## Returns

string

## Example

Read the text representation of a math equation, either as unicode linear text or as LaTeX, in a document.

```javascript editor-docx
// Get the formula of an equation back as plain text or as LaTeX in a document.

// Build a fraction equation, then read it back both as unicode text and as LaTeX.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("dx/dy", "unicode");
paragraph.AddElement(math);
let unicodeText = math.GetText("unicode");
let latexText = math.GetText("latex");
paragraph = Api.CreateParagraph();
paragraph.AddText("Unicode: " + unicodeText + ", LaTeX: " + latexText);
doc.Push(paragraph);
```
