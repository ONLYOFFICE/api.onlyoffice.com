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

This example shows how to create a numbering.

```javascript editor-xlsx playground
// The paragraph will be starting with the Arabic numeral which has parenthesis.

// How to create a bullet indicating its type.

// Create a numbered paragraph in arabic numeral.

let bullet = Api.CreateNumbering("ArabicParenR");
```
