---
hide_table_of_contents: true
---

# Creating multiple NDA documents

Generate multiple personalized NDA documents in one file with individual sections for different users:

- create a document with A4 page size and custom margins ([ApiDocument/CreateSection](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/CreateSection.md), [ApiSection/SetPageSize](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageSize.md), [ApiSection/SetPageMargins](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageMargins.md));
- create inline text form fields prefilled with user-specific data ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md));
- add manual signature lines and separate each NDA with page breaks ([ApiParagraph/AddPageBreak](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddPageBreak.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// User data for personalized NDAs
let users = [
  { name: "Alice Johnson", company: "Tech Solutions Inc.", date: "2025-01-15" },
  { name: "Bob Smith", company: "Digital Dynamics Ltd.", date: "2025-01-16" },
  { name: "Clara Davis", company: "Innovation Labs LLC", date: "2025-01-17" }
];

// Helper function to create a text form with prefilled value
function createPrefilledTextForm(key, placeholder, value, maxChars) {
  let textForm = Api.CreateTextForm({
    key: key,
    required: true,
    placeholder: placeholder,
    maxCharacters: maxChars || 50,
    multiLine: false,
    autoFit: true,
  });
  textForm.SetText(value);
  return textForm;
}

// Helper function to add styled text to paragraph
function addStyledText(paragraph, text, fontSize, isBold, isItalic) {
  let run = Api.CreateRun();
  run.AddText(text);
  run.SetFontSize(fontSize);
  run.SetBold(isBold || false);
  run.SetItalic(isItalic || false);
  paragraph.AddElement(run);
}

// Create NDA section for each user
for (let i = 0; i < users.length; i++) {
  let user = users[i];
  let isFirstUser = i === 0;

  // Get or create the first paragraph
  let titleParagraph;
  if (isFirstUser) {
    titleParagraph = doc.GetElement(0);
  } else {
    titleParagraph = Api.CreateParagraph();
    doc.Push(titleParagraph);
  }

  // NDA Title
  titleParagraph.AddText("NON-DISCLOSURE AGREEMENT");
  titleParagraph.SetFontSize(28);
  titleParagraph.SetBold(true);
  titleParagraph.SetJc("center");
  titleParagraph.SetSpacingAfter(400);

  // Parties section
  let partiesParagraph = Api.CreateParagraph();
  partiesParagraph.AddText("PARTIES TO THIS AGREEMENT");
  partiesParagraph.SetFontSize(24);
  partiesParagraph.SetBold(true);
  partiesParagraph.SetSpacingAfter(200);
  doc.Push(partiesParagraph);

  // Disclosing Party
  let disclosingParagraph = Api.CreateParagraph();
  disclosingParagraph.SetFontSize(22);
  addStyledText(disclosingParagraph, "Disclosing Party: ", 22, true, false);
  disclosingParagraph.AddElement(createPrefilledTextForm(
    `disclosing_party_${i}`,
    "Company Name",
    user.company,
    60
  ));
  doc.Push(disclosingParagraph);

  // Receiving Party
  let receivingParagraph = Api.CreateParagraph();
  receivingParagraph.SetFontSize(22);
  addStyledText(receivingParagraph, "Receiving Party: ", 22, true, false);
  receivingParagraph.AddElement(createPrefilledTextForm(
    `receiving_party_${i}`,
    "Full Name",
    user.name,
    50
  ));
  receivingParagraph.SetSpacingAfter(300);
  doc.Push(receivingParagraph);

  // Effective Date
  let dateParagraph = Api.CreateParagraph();
  dateParagraph.SetFontSize(22);
  addStyledText(dateParagraph, "Effective Date: ", 22, true, false);
  dateParagraph.AddElement(createPrefilledTextForm(
    `effective_date_${i}`,
    "YYYY-MM-DD",
    user.date,
    12
  ));
  dateParagraph.SetSpacingAfter(400);
  doc.Push(dateParagraph);

  // Agreement Terms Header
  let termsHeader = Api.CreateParagraph();
  termsHeader.AddText("TERMS AND CONDITIONS");
  termsHeader.SetFontSize(24);
  termsHeader.SetBold(true);
  termsHeader.SetSpacingAfter(200);
  doc.Push(termsHeader);

  // Term 1
  let term1 = Api.CreateParagraph();
  term1.AddText("1. CONFIDENTIAL INFORMATION");
  term1.SetFontSize(22);
  term1.SetBold(true);
  doc.Push(term1);

  let term1Text = Api.CreateParagraph();
  term1Text.AddText("The Receiving Party agrees to hold in confidence all proprietary information, trade secrets, technical data, and business information disclosed by the Disclosing Party.");
  term1Text.SetFontSize(22);
  term1Text.SetSpacingAfter(200);
  doc.Push(term1Text);

  // Term 2
  let term2 = Api.CreateParagraph();
  term2.AddText("2. NON-DISCLOSURE OBLIGATIONS");
  term2.SetFontSize(22);
  term2.SetBold(true);
  doc.Push(term2);

  let term2Text = Api.CreateParagraph();
  term2Text.AddText("The Receiving Party shall not disclose any Confidential Information to third parties without prior written consent from the Disclosing Party.");
  term2Text.SetFontSize(22);
  term2Text.SetSpacingAfter(200);
  doc.Push(term2Text);

  // Term 3
  let term3 = Api.CreateParagraph();
  term3.AddText("3. TERM AND TERMINATION");
  term3.SetFontSize(22);
  term3.SetBold(true);
  doc.Push(term3);

  let term3Text = Api.CreateParagraph();
  term3Text.AddText("This Agreement shall remain in effect for a period of two (2) years from the Effective Date, unless terminated earlier by mutual written agreement.");
  term3Text.SetFontSize(22);
  term3Text.SetSpacingAfter(400);
  doc.Push(term3Text);

  // Signature Section Header
  let sigHeader = Api.CreateParagraph();
  sigHeader.AddText("SIGNATURES");
  sigHeader.SetFontSize(24);
  sigHeader.SetBold(true);
  sigHeader.SetSpacingAfter(300);
  doc.Push(sigHeader);

  // Disclosing Party Signature
  let disclosingSigLabel = Api.CreateParagraph();
  disclosingSigLabel.AddText("For the Disclosing Party:");
  disclosingSigLabel.SetFontSize(22);
  disclosingSigLabel.SetBold(true);
  doc.Push(disclosingSigLabel);

  let disclosingSigLine = Api.CreateParagraph();
  disclosingSigLine.AddText("Signature: _________________________________");
  disclosingSigLine.SetFontSize(22);
  doc.Push(disclosingSigLine);

  let disclosingNameLine = Api.CreateParagraph();
  disclosingNameLine.AddText("Name: _____________________________________");
  disclosingNameLine.SetFontSize(22);
  doc.Push(disclosingNameLine);

  let disclosingDateLine = Api.CreateParagraph();
  disclosingDateLine.AddText("Date: _____________________________________");
  disclosingDateLine.SetFontSize(22);
  disclosingDateLine.SetSpacingAfter(300);
  doc.Push(disclosingDateLine);

  // Receiving Party Signature
  let receivingSigLabel = Api.CreateParagraph();
  receivingSigLabel.AddText("For the Receiving Party:");
  receivingSigLabel.SetFontSize(22);
  receivingSigLabel.SetBold(true);
  doc.Push(receivingSigLabel);

  let receivingSigLine = Api.CreateParagraph();
  receivingSigLine.AddText("Signature: _________________________________");
  receivingSigLine.SetFontSize(22);
  doc.Push(receivingSigLine);

  let receivingNameLine = Api.CreateParagraph();
  receivingNameLine.SetFontSize(22);
  addStyledText(receivingNameLine, "Name: ", 22, false, false);
  receivingNameLine.AddElement(createPrefilledTextForm(
    `signature_name_${i}`,
    "Full Name",
    user.name,
    50
  ));
  doc.Push(receivingNameLine);

  let receivingDateLine = Api.CreateParagraph();
  receivingDateLine.AddText("Date: _____________________________________");
  receivingDateLine.SetFontSize(22);
  doc.Push(receivingDateLine);

  // Add page break between NDAs (except for the last one)
  if (i < users.length - 1) {
    let pageBreakParagraph = Api.CreateParagraph();
    pageBreakParagraph.AddPageBreak();
    doc.Push(pageBreakParagraph);
  }
}

// Set A4 page size and custom margins for the final section
let finalParagraph = Api.CreateParagraph();
doc.Push(finalParagraph);
let section = doc.CreateSection(finalParagraph);
section.SetPageSize(11906, 16838); // A4: 210mm x 297mm in twips
section.SetPageMargins(1440, 1440, 1440, 1440); // 1 inch margins (1440 twips)
```
