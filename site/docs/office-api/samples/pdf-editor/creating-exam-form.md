---
hide_table_of_contents: true
---

# Creating exam form

Creates a school exam form with multiple-choice questions:

- create radio button options for each question ([Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md));
- group radio buttons per question to allow single selection ([ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md));
- add spacing between questions ([ApiParagraph/SetSpacingBefore](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/SetSpacingBefore.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Create the exam title
let paragraph = doc.GetElement(0);
paragraph.AddText("Astronomy Multiple Choice Test");
paragraph.SetFontSize(22 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Add exam instructions
paragraph = Api.CreateParagraph();
paragraph.AddText("Instructions: Select the correct answer for each question.");
paragraph.SetFontSize(11 * 2);
paragraph.SetItalic(true);
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

// Helper function to create a question with radio button options
function createQuestion(questionNumber, questionText, options, radioGroupName) {
  // Question text
  let questionPara = Api.CreateParagraph();
  questionPara.AddText(questionNumber + ". " + questionText);
  questionPara.SetFontSize(12 * 2);
  questionPara.SetBold(true);
  questionPara.SetSpacingBefore(400);
  doc.Push(questionPara);

  // Create radio button options
  for (let i = 0; i < options.length; i++) {
    let optionPara = Api.CreateParagraph();

    let radioButton = Api.CreateCheckBoxForm({
      key: radioGroupName + "_option_" + String.fromCharCode(65 + i),
      tip: "Select this answer",
      required: false,
      radio: true
    });

    // Group radio buttons for this question
    radioButton.SetRadioGroup(radioGroupName);

    optionPara.AddElement(radioButton);
    optionPara.AddText(" " + String.fromCharCode(65 + i) + ") " + options[i]);
    optionPara.SetFontSize(11 * 2);
    optionPara.SetSpacingBefore(100);
    doc.Push(optionPara);
  }
}

// Question 1: About planets
createQuestion(
  "1",
  "Which planet is known as the Red Planet?",
  [
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn"
  ],
  "Question1"
);

// Question 2: About satellites
createQuestion(
  "2",
  "Which moon is the largest satellite in our Solar System?",
  [
    "Europa",
    "Titan",
    "Ganymede",
    "Callisto"
  ],
  "Question2"
);

// Question 3: About stars
createQuestion(
  "3",
  "What type of star is our Sun classified as?",
  [
    "Red giant",
    "White dwarf",
    "Yellow dwarf",
    "Blue supergiant"
  ],
  "Question3"
);

// Add footer section
paragraph = Api.CreateParagraph();
paragraph.AddText("End of Test");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(600);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Please review your answers before submitting.");
paragraph.SetFontSize(10 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
doc.Push(paragraph);
```
