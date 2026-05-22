# AddMathEquation

Adds a math equation to the current document.

## Syntax

```javascript
expression.AddMathEquation(sText, sFormat);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | An equation written as a linear text string. |
| sFormat | Optional | "unicode" \| "latex" \| "mathml" | "unicode" | The format of the specified linear representation. |

## Returns

boolean

## Example

Add math equations in LaTeX, Unicode, and MathML formats in a document.

```javascript editor-docx
// How do I insert a mathematical formula into a document?

// Represent the same or different expressions using three standard equation formats in a document.

let doc = Api.GetDocument();
doc.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

let paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
doc.AddMathEquation("e^(iπ) + 1 = 0", "unicode");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.Select();
let xml = `<math>
		<mrow>
			<msup>
				<mi>a</mi>
				<mn>2</mn>
			</msup>
			<mo>+</mo>
			<msup>
				<mi>b</mi>
				<mn>2</mn>
			</msup>
			<mo>=</mo>
			<msup>
				<mi>c</mi>
				<mn>2</mn>
			</msup>
		</mrow>
</math>`;
doc.AddMathEquation(xml, "mathml");
```
