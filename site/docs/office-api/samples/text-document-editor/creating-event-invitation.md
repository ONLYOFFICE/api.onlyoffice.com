# Creating event invitation

Create a custom-sized event invitation document with specific page dimensions and content:

- set custom page size (210 × 99 mm) for invitation format ([ApiSection](/docs/office-api/usage-api/text-document-api/ApiSection/ApiSection.md));
- configure page orientation and margins ([ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md));
- add centered title and event details ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md), [ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md));
- apply custom text formatting and styles ([ApiTextPr](/docs/office-api/usage-api/text-document-api/ApiTextPr/ApiTextPr.md), [ApiStyle](/docs/office-api/usage-api/text-document-api/ApiStyle/ApiStyle.md));
- insert contact information and RSVP details ([ApiParaPr](/docs/office-api/usage-api/text-document-api/ApiParaPr/ApiParaPr.md));
- add decorative borders around the entire invitation content ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md)).

```ts editor-docx zoom=60
const doc = Api.GetDocument();

// Get the final section to configure page settings
const finalSection = doc.GetFinalSection();

// Set custom page size: 210 × 99 mm (converted to twips: 1 mm = 56.7 twips)
// 210 mm = 11907 twips, 99 mm = 5613 twips
finalSection.SetPageSize(11907, 5613);

// Set portrait orientation and narrow margins
finalSection.SetPageMargins(360, 360, 360, 360); // 0.25 inch margins

// Create custom styles for the invitation
const titleStyle = doc.CreateStyle("InvitationTitle", "paragraph");
const titleParaPr = titleStyle.GetParaPr();
titleParaPr.SetJc("center");
titleParaPr.SetSpacingAfter(200);
const titleTextPr = titleStyle.GetTextPr();
titleTextPr.SetFontSize(32);
titleTextPr.SetBold(true);
titleTextPr.SetFontFamily("Calibri");
titleTextPr.SetColor(0x2E, 0x75, 0xB6, false); // Blue color

const eventStyle = doc.CreateStyle("EventDetails", "paragraph");
const eventParaPr = eventStyle.GetParaPr();
eventParaPr.SetJc("center");
eventParaPr.SetSpacingAfter(150);
const eventTextPr = eventStyle.GetTextPr();
eventTextPr.SetFontSize(20);
eventTextPr.SetFontFamily("Calibri");
eventTextPr.SetColor(0x1F, 0x1F, 0x1F, false);

const contactStyle = doc.CreateStyle("ContactInfo", "paragraph");
const contactParaPr = contactStyle.GetParaPr();
contactParaPr.SetJc("center");
contactParaPr.SetSpacingAfter(100);
const contactTextPr = contactStyle.GetTextPr();
contactTextPr.SetFontSize(16);
contactTextPr.SetFontFamily("Calibri");
contactTextPr.SetColor(0x70, 0x70, 0x70, false);

// Remove default paragraph
doc.RemoveAllElements();

// Add invitation title
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(titleStyle);
paragraph.AddText("Invitation");
doc.Push(paragraph);

// Add event title
paragraph = Api.CreateParagraph();
paragraph.SetStyle(eventStyle);
const eventTitleRun = paragraph.AddText("Welcome to Our Annual Meetup!");
eventTitleRun.SetBold(true);
eventTitleRun.SetFontSize(24);
doc.Push(paragraph);

// Add date and time
paragraph = Api.CreateParagraph();
paragraph.SetStyle(eventStyle);
paragraph.AddText("June 30, 2025");
paragraph.AddLineBreak();
paragraph.AddText("18:00");
doc.Push(paragraph);

// Add location
paragraph = Api.CreateParagraph();
paragraph.SetStyle(eventStyle);
paragraph.AddText("Grand Hall, Downtown Center");
doc.Push(paragraph);

// Add spacing
paragraph = Api.CreateParagraph();
paragraph.SetSpacingAfter(200);
doc.Push(paragraph);

// Add RSVP information
paragraph = Api.CreateParagraph();
paragraph.SetStyle(contactStyle);
paragraph.AddText("Please RSVP by June 25, 2025");
paragraph.AddLineBreak();
paragraph.AddText("contact@events.com");
doc.Push(paragraph);

// Add decorative borders to all paragraphs to create a bordered invitation
for (let i = 0; i < doc.GetElementsCount(); i++) {
    const element = doc.GetElement(i);
    if (element) {
        // Add top border only to first paragraph
        if (i === 0) {
            element.SetTopBorder("single", 12, 0, 0x2E, 0x75, 0xB6);
        }
        // Add bottom border only to last paragraph
        if (i === doc.GetElementsCount() - 1) {
            element.SetBottomBorder("single", 12, 0, 0x2E, 0x75, 0xB6);
        }
        // Add left and right borders to all paragraphs
        element.SetLeftBorder("single", 12, 0, 0x2E, 0x75, 0xB6);
        element.SetRightBorder("single", 12, 0, 0x2E, 0x75, 0xB6);
    }
}
```
