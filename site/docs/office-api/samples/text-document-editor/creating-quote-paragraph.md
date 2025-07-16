# Creating quote paragraph

Create a document with a quote paragraph that has special visual formatting for highlighting quoted text or excerpts. The quote paragraph features increased left indent, light gray background, and italic styling for better visual distinction from regular text:

- insert paragraph with quoted phrase or text excerpt ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md), [ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md));
- configure visual formatting with increased left indent (40pt) ([ApiParaPr/SetIndLeft](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetIndLeft.md));
- apply light gray background color for visual separation ([ApiParaPr/SetShd](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetShd.md));
- set justified text alignment for professional appearance ([ApiParaPr/SetJc](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetJc.md));
- add spacing before and after quote for better readability ([ApiParaPr/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetSpacingBefore.md), [ApiParaPr/SetSpacingAfter](/docs/office-api/usage-api/text-document-api/ApiParaPr/Methods/SetSpacingAfter.md));
- apply italic text style for emphasis ([ApiTextPr/SetItalic](/docs/office-api/usage-api/text-document-api/ApiTextPr/Methods/SetItalic.md)).

```ts editor-docx zoom=60
const doc = Api.GetDocument();

// Create a custom style for quote paragraphs
const quoteStyle = doc.CreateStyle("Quote", "paragraph");
const quotePr = quoteStyle.GetParaPr();
quotePr.SetJc("both"); // Justify alignment
quotePr.SetIndLeft(567); // 40pt left indent (40 * 14.17 ≈ 567 twips)
quotePr.SetShd("clear", 0xEE, 0xEE, 0xEE, false); // Light gray background (#eeeeee)
quotePr.SetSpacingBefore(200); // 10pt spacing before (10 * 20 = 200 twips)
quotePr.SetSpacingAfter(200); // 10pt spacing after (10 * 20 = 200 twips)

const quoteTextPr = quoteStyle.GetTextPr();
quoteTextPr.SetItalic(true); // Italic text style

// Add introductory paragraph
let paragraph = Api.CreateParagraph();
paragraph.AddText("In this report, we will examine the role of automation in logistics and customer service.");
doc.Push(paragraph);

// Add quote paragraph with custom style
paragraph = Api.CreateParagraph();
paragraph.SetStyle(quoteStyle);
paragraph.AddText("\"Any sufficiently advanced technology is indistinguishable from magic.\"");
doc.Push(paragraph);

// Add concluding paragraph
paragraph = Api.CreateParagraph();
paragraph.AddText("Modern AI solutions are already capable of delivering human-like responses, making the technology nearly invisible to the end user.");
doc.Push(paragraph);
```
