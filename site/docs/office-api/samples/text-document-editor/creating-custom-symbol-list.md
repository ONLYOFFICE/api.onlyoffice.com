---
hide_table_of_contents: true
---

# Creating a custom symbol list

Create a document with a custom symbol list using non-standard characters instead of typical bullet points:

- create bullet numbering with custom symbols using template types ([ApiDocument/CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [ApiNumberingLevel/SetTemplateType](/docs/office-api/usage-api/text-document-api/ApiNumberingLevel/Methods/SetTemplateType.md));
- apply numbering to paragraphs with proper spacing ([ApiParagraph/SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md), [ApiParagraph/SetSpacingAfter](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingAfter.md));
- format list items with contextual spacing and alignment ([ApiParagraph/SetContextualSpacing](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetContextualSpacing.md), [ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Add title
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Project Status:").SetBold(true).SetFontSize(14 * 2);

// Create custom symbol list items with different symbols
let listItems = [
  { symbol: "✓", text: "Requirements collected" },
  { symbol: "➤", text: "Draft document created" },
  { symbol: "❖", text: "Feedback round scheduled" },
  { symbol: "○", text: "Final version approved" }
];

// Create different numbering levels with custom symbols
let customSymbols = ["✓", "➤", "❖", "○"];

for (let i = 0; i < listItems.length; i++) {
  // Create bullet numbering with custom symbol
  let numbering = doc.CreateNumbering("bullet");
  let numLvl = numbering.GetLevel(0);
  numLvl.SetTemplateType("bullet", customSymbols[i]);
  
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(listItems[i].text);
  paragraph.SetNumbering(numLvl);
  paragraph.SetSpacingAfter(120); // 6pt spacing after (120 twips = 6pt)
  paragraph.SetJc("left");
  paragraph.SetContextualSpacing(true);
  doc.Push(paragraph);
}

// Add closing note
let closingParagraph = Api.CreateParagraph();
closingParagraph.SetSpacingBefore(240); // 12pt spacing before
closingParagraph.AddText("Next review is planned for Monday morning.");
doc.Push(closingParagraph);
```
