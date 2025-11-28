---
hide_table_of_contents: true
---

# Creating two-column text document

Create a document with text arranged in two columns. This layout is commonly used in instructions, brochures, articles, and official publications to present text compactly on one page, improving readability and visual balance.

- set up page layout with two columns ([ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiSection](/docs/office-api/usage-api/text-document-api/ApiSection/ApiSection.md));
- configure column width and spacing automatically or manually ([ApiSection/SetEqualColumns](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetEqualColumns.md));
- add text content that flows automatically between columns ([ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md), [ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md));
- apply additional formatting like indents, headings, and styling ([ApiParaPr](/docs/office-api/usage-api/text-document-api/ApiParaPr/ApiParaPr.md), [ApiTextPr](/docs/office-api/usage-api/text-document-api/ApiTextPr/ApiTextPr.md)).

```ts editor-docx zoom=60
const doc = Api.GetDocument();

// Get the final section and set up two-column layout
const finalSection = doc.GetFinalSection();
finalSection.SetEqualColumns(2, 720); // 2 columns with 720 twips spacing
finalSection.SetPageSize(12240, 15840); // Standard page size
finalSection.SetPageMargins(1440, 1440, 1440, 1440); // 1 inch margins

// Create a heading style
const headingStyle = doc.CreateStyle("CompanyHeading", "paragraph");
const headingParaPr = headingStyle.GetParaPr();
headingParaPr.SetJc("center");
headingParaPr.SetSpacingAfter(240);
const headingTextPr = headingStyle.GetTextPr();
headingTextPr.SetFontSize(28);
headingTextPr.SetBold(true);
headingTextPr.SetFontFamily("Calibri");

// Create a subheading style
const subheadingStyle = doc.CreateStyle("PolicySubheading", "paragraph");
const subheadingParaPr = subheadingStyle.GetParaPr();
subheadingParaPr.SetSpacingAfter(120);
subheadingParaPr.SetSpacingBefore(240);
const subheadingTextPr = subheadingStyle.GetTextPr();
subheadingTextPr.SetFontSize(22);
subheadingTextPr.SetBold(true);
subheadingTextPr.SetFontFamily("Calibri");

// Create normal text style
const normalStyle = doc.GetDefaultStyle("paragraph");
const normalParaPr = normalStyle.GetParaPr();
normalParaPr.SetJc("both"); // Justify text
normalParaPr.SetSpacingAfter(120);
const normalTextPr = normalStyle.GetTextPr();
normalTextPr.SetFontSize(22);
normalTextPr.SetFontFamily("Calibri");

// Add document title
let paragraph = Api.CreateParagraph();
paragraph.SetStyle(headingStyle);
paragraph.AddText("COMPANY POLICY HANDBOOK");
doc.Push(paragraph);

// Add subtitle
paragraph = Api.CreateParagraph();
paragraph.SetStyle(subheadingStyle);
paragraph.AddText("Employee Guidelines and Procedures");
doc.Push(paragraph);

// Add main content - this will automatically flow into two columns
paragraph = Api.CreateParagraph();
paragraph.AddText("The company maintains a strong focus on transparency and clear communication among all employees and departments. Regular updates must be shared via internal channels. Work from home is allowed for up to 3 days per week, subject to manager approval. Employees must remain available during core hours (10:00–16:00).");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Annual leave should be requested at least 2 weeks in advance. Emergency absences must be reported to HR immediately via phone or email. Employees are expected to comply with all security measures. Password updates are required every 60 days.");
doc.Push(paragraph);

// Add a section heading
paragraph = Api.CreateParagraph();
paragraph.SetStyle(subheadingStyle);
paragraph.AddText("Communication Standards");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("All internal communications should be professional and respectful. Email responses are expected within 24 hours during business days. Meeting invitations must include clear agendas and expected outcomes. Documentation should be stored in designated shared folders for team access.");
doc.Push(paragraph);

// Add another section
paragraph = Api.CreateParagraph();
paragraph.SetStyle(subheadingStyle);
paragraph.AddText("Performance Expectations");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Quarterly performance reviews will assess goal achievement, collaboration, and professional development. Employees are encouraged to seek feedback regularly and participate in training opportunities. Project deadlines must be communicated clearly with realistic timelines and resource requirements.");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Team collaboration is essential for success. Cross-departmental projects require coordination through designated project managers. Regular status updates help maintain project momentum and identify potential issues early in the development process.");
doc.Push(paragraph);

// Add final section
paragraph = Api.CreateParagraph();
paragraph.SetStyle(subheadingStyle);
paragraph.AddText("Compliance and Safety");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("All employees must complete mandatory safety training within the first month of employment. Workplace incidents should be reported immediately to supervisors and HR. Data protection protocols must be followed when handling sensitive information. Regular compliance audits ensure adherence to industry standards and regulations.");
doc.Push(paragraph);
```
