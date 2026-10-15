# CreateMath

Creates a math equation from a linear text string. The resulting object can be inserted into a paragraph the same way as a run (e.g. via [ApiParagraph#AddElement](../../ApiParagraph/Methods/AddElement.md) or [ApiParagraph#Push](../../ApiParagraph/Methods/Push.md)).

## Syntax

```javascript
expression.CreateMath(text, format);
```

`expression` - A variable that represents an [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| text | Required | string |  | An equation written as a linear text string. |
| format | Optional | "unicode" \| "latex" \| "mathml" | "unicode" | The format of the specified linear representation. |

## Returns

[ApiMath](../../ApiMath/ApiMath.md)

## Example

Build a math equation object and insert it into a paragraph like a text run in a document.

```javascript editor-docx
// Create the equation from a Unicode math expression string before attaching it to the paragraph.

// Produce a reusable equation object and place it into paragraph content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let math = Api.CreateMath("x^2 + y^2 = z^2", "unicode");
paragraph.AddElement(math);
```
