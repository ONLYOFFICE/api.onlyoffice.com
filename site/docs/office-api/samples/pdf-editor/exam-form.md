# Create school exam form

This example demonstrates how to create a school exam form using the ONLYOFFICE Office API. The script generates a document with a title and a series of multiple-choice questions. Each question includes radio buttons so that students can select only one answer per question.

```ts editor-pdf
function addQuestion(text, options) {
    paragraph = Api.CreateParagraph();
    paragraph.AddText(text);
    paragraph.SetFontSize(24);
    doc.Push(paragraph);

    options.forEach(option => {
        paragraph = Api.CreateParagraph();
        let checkBoxForm = Api.CreateCheckBoxForm({"tip": option, "required": true, "placeholder": text, "radio": true});
        checkBoxForm.SetRadioGroup(text);
        paragraph.AddElement(checkBoxForm);
        paragraph.AddText(option);
        paragraph.SetFontSize(20);
        doc.Push(paragraph);
    })
};

let questions = [
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

let doc = Api.GetDocument();

let paragraph = doc.GetElement(0);
paragraph.AddText("Astronomy Multiple Choice Test");
paragraph.SetFontSize(32);
doc.Push(paragraph);

questions.forEach(question => {
    addQuestion(question.text, question.options);
});
```

## Script execution steps

### Step 1. Define reusable layout function

This step defines the `addQuestion` function, which renders a multiple-choice question and its answer options as radio buttons inside the document.

- Create a question paragraph and append the question text and the font size using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- For each answer option set a radio button form using [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md)
- Add option text to the same paragraph

<details>
  <summary>Reusable function script</summary>

    ```ts
    function addQuestion(text, options) {
        paragraph = Api.CreateParagraph();
        paragraph.AddText(text);
        paragraph.SetFontSize(24);
        doc.Push(paragraph);

        options.forEach(option => {
            paragraph = Api.CreateParagraph();
            let checkBoxForm = Api.CreateCheckBoxForm({"tip": "Specify your marital status", "required": true, "placeholder": text, "radio": true});
            checkBoxForm.SetRadioGroup(text);
            paragraph.AddElement(checkBoxForm);
            paragraph.AddText(option);
            paragraph.SetFontSize(20);
            doc.Push(paragraph);
        })
    };
    ```

</details>

### Step 2. Prepare data and build exam form

This step initializes the document, defines the exam title, sets up the question list, and renders each question using the function from Step 1.

- Define questions with answer options in array
- Initialize the document using [ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md)
- Get the first paragraph and append the title and the font size using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Run `addQuestion` function for each question

<details>
  <summary>Data and building form script</summary>

    ```ts
    let questions = [
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

    let doc = Api.GetDocument();

    let paragraph = doc.GetElement(0);
    paragraph.AddText("Astronomy Multiple Choice Test");
    paragraph.SetFontSize(32);
    doc.Push(paragraph);

    questions.forEach(question => {
        addQuestion(question.text, question.options);
    });
    ```

</details>