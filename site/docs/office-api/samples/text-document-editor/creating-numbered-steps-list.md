# Creating a numbered steps list

Create a document with a numbered steps list for step-by-step instructions, algorithms, and procedures:

- create an abstract multilevel numbering with numbered type ([ApiDocument/CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [ApiNumbering](/docs/office-api/usage-api/text-document-api/ApiNumbering/ApiNumbering.md));
- apply numbering to paragraphs with proper spacing ([ApiParagraph/SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md), [ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md));
- format list items with consistent alignment and contextual spacing ([ApiParagraph/SetJc](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [ApiParagraph/SetContextualSpacing](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetContextualSpacing.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Add title
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Steps to Finalize the Project").SetBold(true).SetFontSize(14 * 2);

// Create numbered numbering
let numbering = doc.CreateNumbering("numbered");
let numLvl = numbering.GetLevel(0);

// Create numbered steps list items
let stepItems = [
  "Open the project dashboard and review current progress.",
  "Assign responsibilities to team members based on workload.",
  "Prepare the draft of the presentation and share for feedback.",
  "Schedule a review meeting with the client before Friday."
];

// Add each step as a numbered list item
for (let i = 0; i < stepItems.length; i++) {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(stepItems[i]);
  paragraph.SetNumbering(numLvl);
  paragraph.SetSpacingBefore(120); // 6pt spacing before (120 twips = 6pt)
  paragraph.SetSpacingAfter(120); // 6pt spacing after (120 twips = 6pt)
  paragraph.SetJc("left");
  paragraph.SetContextualSpacing(true);
  doc.Push(paragraph);
}

// Add closing note
let closingParagraph = Api.CreateParagraph();
closingParagraph.SetSpacingBefore(240); // 12pt spacing before
closingParagraph.AddText("Make sure all listed steps are completed no later than Thursday EOD.");
doc.Push(closingParagraph);
```
