# Creating basic form

Create a basic form with the image and text inputs:

- create a new document, add text to the first paragraph and style it as heading ([ApiDocument](/docs/office-api/usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiStyle](/docs/office-api/usage-api/text-document-api/ApiStyle/ApiStyle.md), [ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- create an image form and a text form, and add the form to the document ([Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md), [Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)).

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](/docs/document-builder/samples/samples.md) page.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create the main heading
let paragraph = doc.GetElement(0);
paragraph.AddText("Employee ID Card Application");
paragraph.SetFontSize(18 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Add employee photo section
paragraph = Api.CreateParagraph();
paragraph.AddText("Employee Photo:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let pictureForm = Api.CreatePictureForm({
  key: "employee_photo",
  tip: "Upload your employee photo",
  required: true,
  placeholder: "Click to upload photo",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
  shiftX: 50,
  shiftY: 50,
});
paragraph = Api.CreateParagraph();
paragraph.AddElement(pictureForm);
doc.Push(paragraph);

// Add personal information section
paragraph = Api.CreateParagraph();
paragraph.AddText("Personal Information:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

// First Name field
paragraph = Api.CreateParagraph();
paragraph.AddText("First Name: ");
paragraph.SetFontSize(12 * 2);
let firstNameForm = Api.CreateTextForm({
  key: "first_name",
  tip: "Enter your first name",
  required: true,
  placeholder: "First Name",
  comb: true,
  maxCharacters: 20,
  cellWidth: 3,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(firstNameForm);
doc.Push(paragraph);

// Last Name field
paragraph = Api.CreateParagraph();
paragraph.AddText("Last Name: ");
paragraph.SetFontSize(12 * 2);
let lastNameForm = Api.CreateTextForm({
  key: "last_name",
  tip: "Enter your last name",
  required: true,
  placeholder: "Last Name",
  comb: true,
  maxCharacters: 20,
  cellWidth: 3,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(lastNameForm);
doc.Push(paragraph);

// Employee ID field
paragraph = Api.CreateParagraph();
paragraph.AddText("Employee ID: ");
paragraph.SetFontSize(12 * 2);
let employeeIdForm = Api.CreateTextForm({
  key: "employee_id",
  tip: "Enter your employee ID number",
  required: true,
  placeholder: "ID Number",
  comb: true,
  maxCharacters: 10,
  cellWidth: 2,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(employeeIdForm);
doc.Push(paragraph);

// Department field
paragraph = Api.CreateParagraph();
paragraph.AddText("Department: ");
paragraph.SetFontSize(12 * 2);
let departmentForm = Api.CreateTextForm({
  key: "department",
  tip: "Enter your department",
  required: false,
  placeholder: "Department Name",
  comb: false,
  maxCharacters: 30,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(departmentForm);
doc.Push(paragraph);

// Position field
paragraph = Api.CreateParagraph();
paragraph.AddText("Position: ");
paragraph.SetFontSize(12 * 2);
let positionForm = Api.CreateTextForm({
  key: "position",
  tip: "Enter your job position",
  required: false,
  placeholder: "Job Title",
  comb: false,
  maxCharacters: 25,
  multiLine: false,
  autoFit: true,
});
paragraph.AddElement(positionForm);
doc.Push(paragraph);

// Add spacing
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Add instructions
paragraph = Api.CreateParagraph();
paragraph.AddText("Instructions:");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Upload a recent passport-style photo");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Fill in all required fields marked with *");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("• Submit this form to HR department");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);
```
