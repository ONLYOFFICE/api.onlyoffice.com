---
hide_table_of_contents: true
---

# Creating paragraph with colored border

Create a document with a paragraph that has a decorative colored bottom border:

- add a paragraph with text content ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md));
- configure paragraph formatting with bottom border styling ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md), [ApiParaPr](/docs/office-api/usage-api/text-document-api/ApiParaPr/ApiParaPr.md));
- set border properties including color, thickness, and spacing ([ApiParaPr/SetBottomBorder](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetBottomBorder.md), [ApiParaPr/SetSpacingAfter](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetSpacingAfter.md)).

This technique is commonly used for visual separation of sections, highlighting important phrases, or creating accents in documents such as annotations, headers, or signatures.

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create the main paragraph with colored border
let paragraph = doc.GetElement(0);
paragraph.AddText("Project Overview");

// Get paragraph properties to configure formatting
let paraPr = paragraph.GetParaPr();

// Set bottom border with blue color (#007ACC)
// Parameters: borderType, size (in eighths of a point), space, color (RGB values)
paraPr.SetBottomBorder("single", 12, 0, 0, 122, 204); // 12/8 = 1.5pt thickness

// Add spacing after the paragraph to separate the border from following content
paraPr.SetSpacingAfter(400); // 20pt spacing (400 twentieths of a point)

// Set text alignment
paraPr.SetJc("left");

// Add content paragraph
let contentParagraph = Api.CreateParagraph();
contentParagraph.AddText("This section provides a brief overview of the goals, deliverables, and stakeholders involved in the upcoming software rollout. The focus is on efficiency, timeline alignment, and transparency.");
doc.Push(contentParagraph);

// Add another example with different styling
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Key Deliverables");

let paraPr2 = paragraph2.GetParaPr();
// Set a thicker border with different color (dark blue)
paraPr2.SetBottomBorder("single", 16, 0, 0, 51, 102); // 2pt thickness
paraPr2.SetSpacingAfter(300); // 15pt spacing
paraPr2.SetJc("left");

doc.Push(paragraph2);

// Add content for the second section
let contentParagraph2 = Api.CreateParagraph();
contentParagraph2.AddText("• Implementation timeline and milestones");
contentParagraph2.AddLineBreak();
contentParagraph2.AddText("• Resource allocation and team assignments");
contentParagraph2.AddLineBreak();
contentParagraph2.AddText("• Quality assurance and testing protocols");
contentParagraph2.AddLineBreak();
contentParagraph2.AddText("• Documentation and training materials");
doc.Push(contentParagraph2);

// Add a final example with accent styling
let paragraph3 = Api.CreateParagraph();
paragraph3.AddText("Important Notice").SetBold(true);

let paraPr3 = paragraph3.GetParaPr();
// Set a medium border with accent color
paraPr3.SetBottomBorder("single", 10, 0, 204, 102, 0); // Orange color, 1.25pt thickness
paraPr3.SetSpacingAfter(200); // 10pt spacing
paraPr3.SetJc("left");

doc.Push(paragraph3);

// Add final content
let contentParagraph3 = Api.CreateParagraph();
contentParagraph3.AddText("All team members must complete the mandatory training sessions before the rollout date. Failure to comply may result in delayed access to the new system.");
doc.Push(contentParagraph3);
```
