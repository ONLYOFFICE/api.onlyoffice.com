# Creating note blocks

Create a document with styled note blocks that highlight important information using left border formatting:

- create paragraphs with custom left border styling ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- apply left border formatting with custom color and width ([ApiParagraph/SetLeftBorder](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetLeftBorder.md));
- configure text indentation and spacing for note blocks ([ApiParagraph/SetIndLeft](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetIndLeft.md), [ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md), [ApiParagraph/SetSpacingAfter](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingAfter.md));
- apply custom text color to note content ([ApiRun/SetColor](/docs/office-api/usage-api/text-document-api/ApiRun/Methods/SetColor.md)).

```ts editor-docx
let doc = Api.GetDocument();

// Add regular content paragraph
let paragraph1 = doc.GetElement(0);
paragraph1.AddText("Each department must submit its procurement needs for the next quarter by the 15th of the current month. These requests will be consolidated and forwarded for budget approval.");

// Create a styled note block
let noteParagraph = Api.CreateParagraph();
noteParagraph.AddText("Note: The deadline may shift if approval is delayed. Please consider buffer time in planning to avoid cascading project delays.");

// Apply note block styling
noteParagraph.SetLeftBorder("single", 16, 0, 0, 122, 204); // #007ACC color (0, 122, 204 in RGB), 2pt = 16 eighths of a point
noteParagraph.SetIndLeft(430); // 30pt = 430 twentieths of a point
noteParagraph.SetSpacingBefore(140); // 10pt = 140 twentieths of a point
noteParagraph.SetSpacingAfter(140); // 10pt = 140 twentieths of a point
noteParagraph.SetJc("left");

// Set text color for the note
let noteRun = noteParagraph.GetElement(0);
noteRun.SetColor(0, 90, 158); // #005A9E color (0, 90, 158 in RGB)

doc.Push(noteParagraph);

// Add another regular paragraph
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("All finalized requests should include item descriptions, estimated costs, and justification notes. Incomplete forms will not be reviewed.");
doc.Push(paragraph2);

// Create another note block with different content
let noteParagraph2 = Api.CreateParagraph();
noteParagraph2.AddText("Important: Budget approvals require manager signatures and must be submitted through the official procurement portal.");

// Apply the same note block styling
noteParagraph2.SetLeftBorder("single", 16, 0, 0, 122, 204);
noteParagraph2.SetIndLeft(430);
noteParagraph2.SetSpacingBefore(140);
noteParagraph2.SetSpacingAfter(140);
noteParagraph2.SetJc("left");

// Set text color for the second note
let noteRun2 = noteParagraph2.GetElement(0);
noteRun2.SetColor(0, 90, 158);

doc.Push(noteParagraph2);

// Add final regular paragraph
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("For questions regarding the procurement process, please contact the Finance Department at ext. 1234 or email finance@company.com.");
doc.Push(paragraph3);
```
