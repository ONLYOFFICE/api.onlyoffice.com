---
hide_table_of_contents: true
---

# Validating exam form

Validates and scores exam answers from a multiple-choice test (continuation of [Creating exam form](creating-exam-form.md)):

- recreate the exam form structure with radio button options ([Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md), [ApiCheckBoxForm/SetRadioGroup](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetRadioGroup.md));
- pre-fill sample answers for demonstration ([ApiCheckBoxForm/SetChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetChecked.md));
- iterate through all forms and validate answers ([ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md));
- check selected options and compare with correct answers ([ApiCheckBoxForm/IsChecked](/docs/office-api/usage-api/form-api/ApiCheckBoxForm/Methods/IsChecked.md), [ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md));
- retrieve form tooltips for detailed feedback ([ApiFormBase/GetTipText](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetTipText.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Define correct answers for the exam
const correctAnswers = {
  "Question1": "B", // Mars is the Red Planet
  "Question2": "C", // Ganymede is the largest moon
  "Question3": "C"  // Sun is a Yellow dwarf
};

// Define question details for scoring feedback
const questionDetails = {
  "Question1": {
    text: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"]
  },
  "Question2": {
    text: "Which moon is the largest satellite in our Solar System?",
    options: ["Europa", "Titan", "Ganymede", "Callisto"]
  },
  "Question3": {
    text: "What type of star is our Sun classified as?",
    options: ["Red giant", "White dwarf", "Yellow dwarf", "Blue supergiant"]
  }
};

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
  let questionPara = Api.CreateParagraph();
  questionPara.AddText(questionNumber + ". " + questionText);
  questionPara.SetFontSize(12 * 2);
  questionPara.SetBold(true);
  questionPara.SetSpacingBefore(400);
  doc.Push(questionPara);

  for (let i = 0; i < options.length; i++) {
    let optionPara = Api.CreateParagraph();
    let optionLetter = String.fromCharCode(65 + i);

    let radioButton = Api.CreateCheckBoxForm({
      key: radioGroupName + "_option_" + optionLetter,
      tip: "Option " + optionLetter + ": " + options[i],
      required: false,
      radio: true
    });

    radioButton.SetRadioGroup(radioGroupName);

    optionPara.AddElement(radioButton);
    optionPara.AddText(" " + optionLetter + ") " + options[i]);
    optionPara.SetFontSize(11 * 2);
    optionPara.SetSpacingBefore(100);
    doc.Push(optionPara);
  }
}

// Create questions
createQuestion("1", questionDetails["Question1"].text, questionDetails["Question1"].options, "Question1");
createQuestion("2", questionDetails["Question2"].text, questionDetails["Question2"].options, "Question2");
createQuestion("3", questionDetails["Question3"].text, questionDetails["Question3"].options, "Question3");

// Pre-fill sample answers for demonstration (simulating student responses)
// Student answers: Q1=B (correct), Q2=B (wrong - chose Titan), Q3=C (correct)
let forms = doc.GetAllForms();
for (let form of forms) {
  let key = form.GetFormKey();
  if (form.GetFormType() === "checkBoxForm") {
    if (key === "Question1_option_B") form.SetChecked(true); // Correct
    if (key === "Question2_option_B") form.SetChecked(true); // Wrong (Titan instead of Ganymede)
    if (key === "Question3_option_C") form.SetChecked(true); // Correct
  }
}

// Function to validate exam and calculate score
function validateExam() {
  let results = {
    totalQuestions: Object.keys(correctAnswers).length,
    correctCount: 0,
    wrongCount: 0,
    details: []
  };

  let forms = doc.GetAllForms();

  // Check each question
  for (let questionKey in correctAnswers) {
    let correctOption = correctAnswers[questionKey];
    let selectedOption = null;
    let selectedTip = "";

    // Find which option is selected for this question
    for (let form of forms) {
      let formKey = form.GetFormKey();
      let formType = form.GetFormType();

      if (formType === "checkBoxForm" && formKey.startsWith(questionKey + "_option_")) {
        if (form.IsChecked()) {
          // Extract the option letter from the key (e.g., "Question1_option_B" -> "B")
          selectedOption = formKey.split("_option_")[1];
          selectedTip = form.GetTipText();
          break;
        }
      }
    }

    let isCorrect = selectedOption === correctOption;
    if (isCorrect) {
      results.correctCount++;
    } else {
      results.wrongCount++;
    }

    let questionInfo = questionDetails[questionKey];
    let correctIndex = correctOption.charCodeAt(0) - 65;
    let selectedIndex = selectedOption ? selectedOption.charCodeAt(0) - 65 : -1;

    results.details.push({
      question: questionKey,
      questionText: questionInfo.text,
      selectedAnswer: selectedOption || "Not answered",
      selectedText: selectedIndex >= 0 ? questionInfo.options[selectedIndex] : "N/A",
      correctAnswer: correctOption,
      correctText: questionInfo.options[correctIndex],
      isCorrect: isCorrect,
      tipText: selectedTip
    });
  }

  results.score = Math.round((results.correctCount / results.totalQuestions) * 100);
  return results;
}

// Validate the exam
let examResults = validateExam();

// Output results to console
console.log("=== EXAM VALIDATION RESULTS ===");
console.log("Total Questions: " + examResults.totalQuestions);
console.log("Correct Answers: " + examResults.correctCount);
console.log("Wrong Answers: " + examResults.wrongCount);
console.log("Final Score: " + examResults.score + "%");
console.log("");
console.log("=== DETAILED RESULTS ===");

for (let detail of examResults.details) {
  console.log("Question: " + detail.questionText);
  console.log("  Selected: " + detail.selectedAnswer + " (" + detail.selectedText + ")");
  console.log("  Correct:  " + detail.correctAnswer + " (" + detail.correctText + ")");
  console.log("  Result:   " + (detail.isCorrect ? "✓ CORRECT" : "✗ WRONG"));
  if (detail.tipText) {
    console.log("  Tip: " + detail.tipText);
  }
  console.log("");
}

// Add results section to document
paragraph = Api.CreateParagraph();
paragraph.AddText("Exam Results");
paragraph.SetFontSize(18 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(600);
doc.Push(paragraph);

// Score display
paragraph = Api.CreateParagraph();
paragraph.AddText("Score: " + examResults.correctCount + "/" + examResults.totalQuestions + " (" + examResults.score + "%)");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);

// Detailed results
paragraph = Api.CreateParagraph();
paragraph.AddText("Detailed Feedback:");
paragraph.SetFontSize(12 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(400);
doc.Push(paragraph);

for (let detail of examResults.details) {
  paragraph = Api.CreateParagraph();
  let resultIcon = detail.isCorrect ? "✓" : "✗";
  let resultText = resultIcon + " " + detail.question.replace("Question", "Q") + ": ";
  resultText += detail.selectedAnswer + " (" + detail.selectedText + ")";
  if (!detail.isCorrect) {
    resultText += " → Correct: " + detail.correctAnswer + " (" + detail.correctText + ")";
  }
  paragraph.AddText(resultText);
  paragraph.SetFontSize(10 * 2);
  paragraph.SetSpacingBefore(100);
  if (detail.isCorrect) {
    paragraph.SetColor(0, 128, 0);
  } else {
    paragraph.SetColor(200, 0, 0);
  }
  doc.Push(paragraph);
}
```
