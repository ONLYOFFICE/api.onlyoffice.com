# Formatting variables in text

Create a document with formulas or variables styled differently from the main text:

- create paragraphs with mixed text formatting for technical documentation ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- apply italic formatting to variables and mathematical symbols ([ApiRun/SetItalic](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetItalic.md));
- use monospace font for result values and code-like elements ([ApiRun/SetFontFamily](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetFontFamily.md)).

```ts editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

// Create the main instruction text with formatted variables
paragraph.AddText("To calculate the ");
paragraph.AddText("result").SetFontFamily("Courier New"); // monospace for result
paragraph.AddText(", multiply ");
paragraph.AddText("x").SetItalic(true); // italic for variable x
paragraph.AddText(" by the constant ");
paragraph.AddText("n").SetItalic(true); // italic for variable n
paragraph.AddText(", then divide the outcome by 2. The ");
paragraph.AddText("result").SetFontFamily("Courier New"); // monospace for result
paragraph.AddText(" should be rounded to the nearest integer before storing.");

// Add a second example paragraph
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Formula example: ");
paragraph2.AddText("y").SetItalic(true);
paragraph2.AddText(" = (");
paragraph2.AddText("x").SetItalic(true);
paragraph2.AddText(" × ");
paragraph2.AddText("n").SetItalic(true);
paragraph2.AddText(") / 2, where ");
paragraph2.AddText("y").SetItalic(true);
paragraph2.AddText(" represents the ");
paragraph2.AddText("final_value").SetFontFamily("Courier New");
paragraph2.AddText(".");
doc.Push(paragraph2);

// Add a third example with more complex formatting
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("In programming notation: ");
paragraph3.AddText("result = Math.round((x * n) / 2)").SetFontFamily("Courier New").SetColor(0, 100, 0);
paragraph3.AddLineBreak();
paragraph3.AddText("Where ");
paragraph3.AddText("x").SetItalic(true);
paragraph3.AddText(" and ");
paragraph3.AddText("n").SetItalic(true);
paragraph3.AddText(" are input parameters, and ");
paragraph3.AddText("result").SetFontFamily("Courier New");
paragraph3.AddText(" is the calculated output.");
doc.Push(paragraph3);
```
