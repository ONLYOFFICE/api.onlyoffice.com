---
hide_table_of_contents: true
---

# Creating event form

Build a styled event registration form with gradient background:

- set custom page size with no margins ([ApiSection/SetPageSize](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageSize.md), [ApiSection/SetPageMargins](/docs/office-api/usage-api/text-document-api/ApiSection/Methods/SetPageMargins.md));
- create gradient background shape ([Api/CreateGradientStop](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateGradientStop.md), [Api/CreateLinearGradientFill](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateLinearGradientFill.md), [Api/CreateShape](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateShape.md));
- add text fields for attendee information ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md));
- add photo upload field ([Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md));
- add consent checkbox ([Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Get current year for dynamic conference name
let currentYear = new Date().getFullYear();

// Set custom page size (A4) with no margins
let section = doc.GetFinalSection();
section.SetPageSize(11906, 16838); // A4: 210mm x 297mm in twips
section.SetPageMargins(0, 0, 0, 0);

// Create gradient background (purple to white)
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(128, 0, 255), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(200, 150, 255), 50_000);
let gs3 = Api.CreateGradientStop(Api.CreateRGBColor(255, 255, 255), 100_000);
let gradientFill = Api.CreateLinearGradientFill([gs1, gs2, gs3], 5_400_000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());

// Create background shape (A4: 210mm x 297mm, 36000 EMUs per mm)
let backgroundShape = Api.CreateShape("rect", 210 * 36000, 297 * 36000, gradientFill, stroke);
backgroundShape.SetWrappingStyle("behind");
backgroundShape.SetHorAlign("page", "left");
backgroundShape.SetVerAlign("page", "top");

// Add background to first paragraph
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(backgroundShape);

// Create content shape for the form (160mm x 265mm card)
let contentFill = Api.CreateSolidFill(Api.CreateRGBColor(255, 255, 255));
let contentShape = Api.CreateShape("roundRect", 160 * 36000, 265 * 36000, contentFill, Api.CreateStroke(1 * 36000, Api.CreateSolidFill(Api.CreateRGBColor(128, 0, 255))));
contentShape.SetWrappingStyle("topAndBottom");
contentShape.SetHorAlign("page", "center");
contentShape.SetVerPosition("page", 16 * 36000);

// Get content area
let shapeContent = contentShape.GetDocContent();
shapeContent.RemoveAllElements();

// Conference title
let titlePara = Api.CreateParagraph();
titlePara.SetJc("center");
titlePara.SetSpacingBefore(400);
titlePara.SetSpacingAfter(200);
let titleRun = titlePara.AddText("IT FUTURE CONFERENCE " + currentYear);
titleRun.SetFontSize(28 * 2);
titleRun.SetBold(true);
titleRun.SetColor(128, 0, 255);
titleRun.SetFontFamily("Arial");
shapeContent.Push(titlePara);

// Subtitle
let subtitlePara = Api.CreateParagraph();
subtitlePara.SetJc("center");
subtitlePara.SetSpacingAfter(400);
let subtitleRun = subtitlePara.AddText("Registration Form");
subtitleRun.SetFontSize(18 * 2);
subtitleRun.SetColor(100, 100, 100);
subtitleRun.SetFontFamily("Arial");
shapeContent.Push(subtitlePara);

// Photo upload section
let photoPara = Api.CreateParagraph();
photoPara.SetJc("center");
photoPara.SetSpacingAfter(300);
let pictureForm = Api.CreatePictureForm({
  key: "attendee_photo",
  tip: "Upload your photo",
  required: false,
  placeholder: "Photo",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: true,
});
photoPara.AddElement(pictureForm);
shapeContent.Push(photoPara);

// Helper function to create form row
function createFormRow(labelText, formKey, placeholder, maxChars, required, multiLine) {
  let rowPara = Api.CreateParagraph();
  rowPara.SetSpacingBefore(150);
  rowPara.SetSpacingAfter(100);
  rowPara.SetIndLeft(400);
  rowPara.SetIndRight(400);

  let labelRun = rowPara.AddText(labelText + ": ");
  labelRun.SetFontSize(11 * 2);
  labelRun.SetBold(true);
  labelRun.SetColor(80, 80, 80);
  labelRun.SetFontFamily("Arial");

  let textForm = Api.CreateTextForm({
    key: formKey,
    required: required,
    placeholder: placeholder,
    maxCharacters: maxChars,
    multiLine: multiLine || false,
    autoFit: true,
  });
  textForm.SetBorderColor(128, 0, 255);
  let textPr = Api.CreateTextPr();
  textPr.SetColor(0, 0, 0);
  textForm.SetTextPr(textPr);
  rowPara.AddElement(textForm);

  return rowPara;
}

// Personal Information Section
let sectionPara = Api.CreateParagraph();
sectionPara.SetSpacingBefore(300);
sectionPara.SetSpacingAfter(150);
sectionPara.SetIndLeft(400);
let sectionRun = sectionPara.AddText("Personal Information");
sectionRun.SetFontSize(14 * 2);
sectionRun.SetBold(true);
sectionRun.SetColor(128, 0, 255);
sectionRun.SetFontFamily("Arial");
shapeContent.Push(sectionPara);

// Form fields
shapeContent.Push(createFormRow("Full Name", "full_name", "Enter your full name", 100, true, false));
shapeContent.Push(createFormRow("Email", "email", "your.email@example.com", 80, true, false));
shapeContent.Push(createFormRow("Phone", "phone", "+1 (555) 123-4567", 20, false, false));
shapeContent.Push(createFormRow("Company", "company", "Your company name", 60, false, false));
shapeContent.Push(createFormRow("Job Title", "job_title", "Your position", 50, false, false));

// Session Preferences Section
sectionPara = Api.CreateParagraph();
sectionPara.SetSpacingBefore(300);
sectionPara.SetSpacingAfter(150);
sectionPara.SetIndLeft(400);
sectionRun = sectionPara.AddText("Session Preferences");
sectionRun.SetFontSize(14 * 2);
sectionRun.SetBold(true);
sectionRun.SetColor(128, 0, 255);
sectionRun.SetFontFamily("Arial");
shapeContent.Push(sectionPara);

// Interests multiline field
let interestsPara = Api.CreateParagraph();
interestsPara.SetSpacingBefore(150);
interestsPara.SetSpacingAfter(100);
interestsPara.SetIndLeft(400);
interestsPara.SetIndRight(400);

let interestsLabel = interestsPara.AddText("Topics of Interest: ");
interestsLabel.SetFontSize(11 * 2);
interestsLabel.SetBold(true);
interestsLabel.SetColor(80, 80, 80);
interestsLabel.SetFontFamily("Arial");

let interestsForm = Api.CreateTextForm({
  key: "interests",
  required: false,
  placeholder: "AI/ML, Cloud Computing, Cybersecurity, DevOps, etc.",
  maxCharacters: 300,
  multiLine: true,
  autoFit: false,
});
interestsForm.SetBorderColor(128, 0, 255);
let interestsTextPr = Api.CreateTextPr();
interestsTextPr.SetColor(0, 0, 0);
interestsForm.SetTextPr(interestsTextPr);
interestsPara.AddElement(interestsForm);
shapeContent.Push(interestsPara);

// Dietary requirements
shapeContent.Push(createFormRow("Dietary Requirements", "dietary", "Vegetarian, Vegan, Allergies, etc.", 100, false, false));

// Consent Section
sectionPara = Api.CreateParagraph();
sectionPara.SetSpacingBefore(300);
sectionPara.SetSpacingAfter(150);
sectionPara.SetIndLeft(400);
sectionRun = sectionPara.AddText("Consent");
sectionRun.SetFontSize(14 * 2);
sectionRun.SetBold(true);
sectionRun.SetColor(128, 0, 255);
sectionRun.SetFontFamily("Arial");
shapeContent.Push(sectionPara);

// Consent checkbox
let consentPara = Api.CreateParagraph();
consentPara.SetSpacingBefore(100);
consentPara.SetIndLeft(400);
consentPara.SetIndRight(400);

let consentCheckbox = Api.CreateCheckBoxForm({
  key: "consent_data",
  required: true,
  tip: "Consent to data processing",
  checked: false
});
consentPara.AddElement(consentCheckbox);

let consentText = consentPara.AddText(" I agree to the processing of my personal data for conference registration purposes.");
consentText.SetFontSize(10 * 2);
consentText.SetColor(80, 80, 80);
consentText.SetFontFamily("Arial");
shapeContent.Push(consentPara);

// Photo consent checkbox
let photoConsentPara = Api.CreateParagraph();
photoConsentPara.SetSpacingBefore(100);
photoConsentPara.SetIndLeft(400);
photoConsentPara.SetIndRight(400);

let photoConsentCheckbox = Api.CreateCheckBoxForm({
  key: "consent_photo",
  required: false,
  tip: "Consent to photo/video",
  checked: false
});
photoConsentPara.AddElement(photoConsentCheckbox);

let photoConsentText = photoConsentPara.AddText(" I consent to being photographed/recorded during the event.");
photoConsentText.SetFontSize(10 * 2);
photoConsentText.SetColor(80, 80, 80);
photoConsentText.SetFontFamily("Arial");
shapeContent.Push(photoConsentPara);

// Newsletter checkbox
let newsletterPara = Api.CreateParagraph();
newsletterPara.SetSpacingBefore(100);
newsletterPara.SetIndLeft(400);
newsletterPara.SetIndRight(400);

let newsletterCheckbox = Api.CreateCheckBoxForm({
  key: "newsletter",
  required: false,
  tip: "Subscribe to newsletter",
  checked: false
});
newsletterPara.AddElement(newsletterCheckbox);

let newsletterText = newsletterPara.AddText(" Subscribe to IT Future Conference newsletter for updates.");
newsletterText.SetFontSize(10 * 2);
newsletterText.SetColor(80, 80, 80);
newsletterText.SetFontFamily("Arial");
shapeContent.Push(newsletterPara);

// Footer
let footerPara = Api.CreateParagraph();
footerPara.SetJc("center");
footerPara.SetSpacingBefore(400);
let footerRun = footerPara.AddText("www.itfutureconference.com | contact@itfutureconference.com");
footerRun.SetFontSize(9 * 2);
footerRun.SetColor(128, 0, 255);
footerRun.SetFontFamily("Arial");
shapeContent.Push(footerPara);

// Add the content shape to the document
paragraph.AddDrawing(contentShape);
```
