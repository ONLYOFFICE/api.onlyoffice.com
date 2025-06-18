# Create school exam form

This example demonstrates how to create a school exam form using the ONLYOFFICE Office API. The script generates a document with a title and a series of multiple-choice questions. Each question includes radio buttons so that students can select only one answer per question.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Step 1: Add test heading
let titleParagraph = Api.CreateParagraph();
titleParagraph.AddText("Astronomy Multiple Choice Test");
titleParagraph.SetFontSize(32);
titleParagraph.SetBold(true);
titleParagraph.SetJc("center");
doc.Push(titleParagraph);

// Step 3: List of questions
const questions = [
  {
    text: "1. Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter"]
  },
  {
    text: "2. What is the name of Earth's natural satellite?",
    options: ["The Moon", "Europa", "Titan"]
  },
  {
    text: "3. Which star is at the center of our solar system?",
    options: ["The Sun", "Alpha Centauri", "Polaris"]
  }
];

// Step 4: Render all questions
questions.forEach(q => {
   // Create paragraph for the question text
  const questionParagraph = Api.CreateParagraph();
  questionParagraph.AddText(q.text);
  questionParagraph.SetFontSize(24);
  questionParagraph.SetSpacingBefore(400);
  doc.Push(questionParagraph);

  // Create radio button options
  q.options.forEach(optionText => {
    const optionParagraph = Api.CreateParagraph();
    const radioButton = Api.CreateCheckBoxForm({
      tip: optionText,
      required: true,
      placeholder: q.text,
      radio: true
    });
    radioButton.SetRadioGroup(q.text); // Group by question to enforce single selection

    optionParagraph.AddElement(radioButton);
    optionParagraph.AddText(" " + optionText);
    optionParagraph.SetFontSize(20);
    doc.Push(optionParagraph);
  });
});
```

## Script execution steps

### Step 1. Add questions with radio buttons

This step iterates through the list of questions and adds each one along with its radio button options directly into the document (no separate function is used).

- Create a question paragraph and append the question text and the font size using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- For each answer option set a radio button form using [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md)
- Add option text to the same paragraph

<details>
  <summary>Reusable function script</summary>

    ```ts
    const questions = [
        {
            text: "1. Which planet is known as the Red Planet?",
            options: ["Mars", "Venus", "Jupiter"]
        },
        {
            text: "2. What is the name of Earth's natural satellite?",
            options: ["The Moon", "Europa", "Titan"]
        },
        {
            text: "3. Which star is at the center of our solar system?",
            options: ["The Sun", "Alpha Centauri", "Polaris"]
        }
    ];

    questions.forEach(q => {
        const questionParagraph = Api.CreateParagraph();
        questionParagraph.AddText(q.text);
        questionParagraph.SetFontSize(24);
        questionParagraph.SetSpacingBefore(400);
        doc.Push(questionParagraph);

        q.options.forEach(optionText => {
            const optionParagraph = Api.CreateParagraph();
            const radioButton = Api.CreateCheckBoxForm({
                tip: optionText,
                required: true,
                placeholder: q.text,
                radio: true
            });
            radioButton.SetRadioGroup(q.text);

            optionParagraph.AddElement(radioButton);
            optionParagraph.AddText(" " + optionText);
            optionParagraph.SetFontSize(20);
            doc.Push(optionParagraph);
        });
    });
    ```

</details>