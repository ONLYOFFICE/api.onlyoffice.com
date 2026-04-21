# BulletType

A bullet type which will be added to the paragraph in spreadsheet or presentation.

## Type

Enumeration

## Values

- "None"
- "ArabicPeriod"
- "ArabicParenR"
- "RomanUcPeriod"
- "RomanLcPeriod"
- "AlphaLcParenR"
- "AlphaLcPeriod"
- "AlphaUcParenR"
- "AlphaUcPeriod"

## Example

Create a numbering.

```javascript editor-pptx
// The paragraph will be starting with the Arabic numeral which has parenthesis.

// Create a numbered paragraph in Arabic numeral format.

let bullet = Api.CreateNumbering("ArabicParenR");
```
