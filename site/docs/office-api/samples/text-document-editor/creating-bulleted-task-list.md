# Creating a bulleted task list

Create a document with a bulleted task list for enumerating tasks, steps, or requirements:

- create an abstract multilevel numbering with bullet type ([ApiDocument/CreateNumbering](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateNumbering.md), [ApiNumbering](/docs/office-api/usage-api/text-document-api/ApiNumbering/ApiNumbering.md));
- apply numbering to paragraphs and configure spacing ([ApiParagraph/SetNumbering](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetNumbering.md), [ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md));
- format list items with proper indentation and contextual spacing ([ApiParagraph/SetContextualSpacing](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetContextualSpacing.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Add title
let titleParagraph = doc.GetElement(0);
titleParagraph.AddText("Action Items for the Week:").SetBold(true).SetFontSize(14 * 2);

// Create bullet numbering
let numbering = doc.CreateNumbering("bullet");
let numLvl = numbering.GetLevel(0);

// Create bulleted task list items
let taskItems = [
  "Review project timeline",
  "Assign tasks to team members", 
  "Prepare draft presentation",
  "Confirm client meeting schedule"
];

// Add each task as a bulleted list item
for (let i = 0; i < taskItems.length; i++) {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(taskItems[i]);
  paragraph.SetNumbering(numLvl);
  paragraph.SetSpacingBefore(120); // 6pt spacing before (120 twips = 6pt)
  paragraph.SetSpacingAfter(120); // 6pt spacing after (120 twips = 6pt)
  paragraph.SetContextualSpacing(true);
  doc.Push(paragraph);
}

// Add closing note
let closingParagraph = Api.CreateParagraph();
closingParagraph.SetSpacingBefore(240); // 12pt spacing before
closingParagraph.AddText("All items must be completed before Friday to meet the delivery deadline.");
doc.Push(closingParagraph);
```
