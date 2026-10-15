# PaperSize

The paper size, specified as a value of the Excel **xlPaperSize** enumeration.

## Type

Enumeration

## Values

- "xlPaperLetter"
- "xlPaperLetterSmall"
- "xlPaperTabloid"
- "xlPaperLedger"
- "xlPaperLegal"
- "xlPaperStatement"
- "xlPaperExecutive"
- "xlPaperA3"
- "xlPaperA4"
- "xlPaperA4Small"
- "xlPaperA5"
- "xlPaperB4"
- "xlPaperB5"
- "xlPaperFolio"
- "xlPaperQuarto"
- "xlPaper10x14"
- "xlPaper11x17"
- "xlPaperNote"
- "xlPaperEnvelope9"
- "xlPaperEnvelope10"
- "xlPaperEnvelope11"
- "xlPaperEnvelope12"
- "xlPaperEnvelope14"
- "xlPaperCsheet"
- "xlPaperDsheet"
- "xlPaperEsheet"
- "xlPaperEnvelopeDL"
- "xlPaperEnvelopeC5"
- "xlPaperEnvelopeC3"
- "xlPaperEnvelopeC4"
- "xlPaperEnvelopeC6"
- "xlPaperEnvelopeC65"
- "xlPaperEnvelopeB4"
- "xlPaperEnvelopeB5"
- "xlPaperEnvelopeB6"
- "xlPaperEnvelopeItaly"
- "xlPaperEnvelopeMonarch"
- "xlPaperEnvelopePersonal"
- "xlPaperFanfoldUS"
- "xlPaperFanfoldStdGerman"
- "xlPaperFanfoldLegalGerman"

## Example

The paper size, specified as an Excel xlPaperSize constant name.

```javascript editor-xlsx
// Common values: "xlPaperLetter", "xlPaperLegal", "xlPaperA3", "xlPaperA4".

// How to set the print paper size of a worksheet.

let pageSetup = Api.GetActiveSheet().GetPageSetup();
pageSetup.SetPaperSize("xlPaperA4");
```
