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
| sFormat | Required | string |  | The math equation format. Possible values are "unicode" and "latex". |

## Returns

boolean

## Example

This example adds a math equation to the document.

```javascript editor-pptx
const equation = "e^x = 1 + x + \\frac{x^2}{2} + \\frac{x^3}{6} + \\cdots = \\sum_{n\\geq 0} \\frac{x^n}{n!}";
const presentation = Api.GetPresentation();
presentation.AddMathEquation(equation, "latex");

```
