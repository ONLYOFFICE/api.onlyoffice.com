# AddMathEquation

Adds a math equation to the current presentation.

## Syntax

```javascript
expression.AddMathEquation(sText, sFormat);
```

`expression` - A variable that represents a [ApiPresentation](../ApiPresentation.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The math equation text. |
| sFormat | Required | string |  | The math equation format. Possible values are "unicode", "latex", and "mathml". |

## Returns

boolean

## Example

This example adds math equations to the document in three different formats: LaTeX, Unicode, and MathML.

```javascript editor-pptx
// How to add math equations in different formats.

// Insert math equations using LaTeX, Unicode, and MathML formats.

const presentation = Api.GetPresentation();

presentation.AddMathEquation("e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}", "latex");

presentation.AddMathEquation("e^(iπ) + 1 = 0", "unicode");

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
presentation.AddMathEquation(xml, "mathml");

```
