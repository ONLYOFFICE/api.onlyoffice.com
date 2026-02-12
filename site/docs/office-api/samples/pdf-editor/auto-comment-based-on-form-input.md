---
hide_table_of_contents: true
---

# Auto comment based on form input

Add contextual comments to a document automatically based on form field selections, useful for triggering follow-up actions or flagging responses that need attention:

- create a survey form with radio button options ([Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md));
- detect when a specific option is selected ([ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md));
- automatically add a comment to flag the selection for review ([Api/AddComment](/docs/office-api/usage-api/text-document-api/Api/Methods/AddComment.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create the survey title
let paragraph = doc.GetElement(0);
paragraph.AddText("Job Satisfaction Survey");
paragraph.SetFontSize(18 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Add survey instructions
paragraph = Api.CreateParagraph();
paragraph.AddText("Please rate your overall job satisfaction:");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Add spacing
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Define satisfaction levels for the radio group
let satisfactionLevels = [
  { label: "Very satisfied", value: "very_satisfied" },
  { label: "Satisfied", value: "satisfied" },
  { label: "Neutral", value: "neutral" },
  { label: "Dissatisfied", value: "dissatisfied" },
  { label: "Very dissatisfied", value: "very_dissatisfied" }
];

// Store references to radio buttons and their paragraphs for later checking
let radioButtons = [];

// Create radio buttons for each satisfaction level
for (let level of satisfactionLevels) {
  paragraph = Api.CreateParagraph();

  let radioButton = Api.CreateCheckBoxForm({
    key: level.value,
    tip: "Select your satisfaction level",
    required: true,
    placeholder: "Satisfaction",
    radio: true
  });

  // Group all radio buttons together
  radioButton.SetRadioGroup("JobSatisfaction");

  // Pre-select "Very dissatisfied" to demonstrate the auto-comment feature
  if (level.value === "very_dissatisfied") {
    radioButton.SetChecked(true);
  }

  paragraph.AddElement(radioButton);
  paragraph.AddText(" " + level.label);
  paragraph.SetFontSize(12 * 2);
  doc.Push(paragraph);

  // Store reference to both form and paragraph for commenting
  radioButtons.push({ form: radioButton, paragraph: paragraph, value: level.value, label: level.label });
}

// Add spacing before the comment section
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

// Function to check selections and add comments
function checkAndAddComments() {
  for (let radio of radioButtons) {
    if (radio.form.IsChecked() && radio.value === "very_dissatisfied") {
      // Add a comment to the paragraph containing the radio button
      Api.AddComment(
        radio.paragraph,
        "ATTENTION: Employee selected 'Very dissatisfied'. Please schedule a follow-up meeting to discuss concerns and potential improvements.",
        "HR Review System"
      );
      return true;
    }
  }
  return false;
}

// Check selections and add comments if needed
let commentAdded = checkAndAddComments();

// Add status section
paragraph = Api.CreateParagraph();
paragraph.AddText("Auto-Comment Status");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

if (commentAdded) {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("A review comment has been automatically added to the 'Very dissatisfied' selection.");
  paragraph.SetFontSize(11 * 2);
  paragraph.SetColor(200, 100, 0);
  doc.Push(paragraph);

  paragraph = Api.CreateParagraph();
  paragraph.AddText("This comment will notify HR to follow up with the employee.");
  paragraph.SetFontSize(11 * 2);
  doc.Push(paragraph);
} else {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("No review comment needed for the current selection.");
  paragraph.SetFontSize(11 * 2);
  paragraph.SetColor(0, 128, 0);
  doc.Push(paragraph);
}

// Add implementation notes
paragraph = Api.CreateParagraph();
paragraph.AddText("");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("How It Works:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("1. Radio buttons are created with SetRadioGroup() to ensure only one option can be selected.");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("2. IsChecked() detects which option is currently selected.");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("3. Api.AddComment() adds a comment to the paragraph containing the selected option.");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("4. Comments can include author information to identify the source of automated feedback.");
paragraph.SetFontSize(10 * 2);
doc.Push(paragraph);
```
