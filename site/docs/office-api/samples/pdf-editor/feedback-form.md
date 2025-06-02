# Create feedback form

This example demonstrates how to create a customer feedback form using the ONLYOFFICE Office API. The script generates a document with a title and a series of questions, each presented as a row of radio-button options inside a bordered table.

```ts editor-pdf
function addQuestion(question, options, row) {
    paragraph = Api.CreateParagraph();
    paragraph.AddText(question);
    paragraph.SetFontSize(24);
    paragraph.SetBold(true);
    doc.Push(paragraph);

    let table = Api.CreateTable(options.length, 1);
    table.SetWidth("percent", 100);
    setBorders(table, 255);

    for (let col = 0; col < options.length; col++) {
        let cell = table.GetCell(0, col);
        cell.SetWidth("percent", 20);
        paragraph = cell.GetContent().GetElement(0);
        let checkBoxForm = Api.CreateCheckBoxForm({
            "tip": "Select the correct rating",
            "required": true,
            "placeholder": question,
            "radio": true
        });
        checkBoxForm.SetRadioGroup(question);
        paragraph.AddElement(checkBoxForm);
        paragraph.AddText(options[col]);
        paragraph.SetFontSize(24);
    };
    doc.Push(table);
};

function setBorders(table, color) {
    table.SetTableBorderTop("single", 4, 0, color, color, color);
    table.SetTableBorderBottom("single", 4, 0, color, color, color);
    table.SetTableBorderLeft("single", 4, 0, color, color, color);
    table.SetTableBorderRight("single", 4, 0, color, color, color);
    table.SetTableBorderInsideV("single", 4, 0, color, color, color);
    table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

const options = ["Excellent", "Good", "Fair", "Poor", "Very poor"];
const questions = [
    "How satisfied are you with the resolution of your issue?",
    "How clearly did our support explain the solution?",
    "How easy was it to get help from us?"
];

let doc = Api.GetDocument();

let paragraph = doc.GetElement(0);
paragraph.AddText("We’d love your feedback");
paragraph.SetFontSize(48);
doc.Push(paragraph);

for (let row = 0; row < questions.length; row++) {
    addQuestion(questions[row], options, row);
}
```

## Script execution steps

### Step 1. Define reusable layout functions

This step defines the `addQuestion` function for rendering feedback questions as table rows, and the `setBorders` function to format table outlines.

- Create a question paragraph and append the question text, set bold, and the font size using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Create a full width table for answer options using [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md), set white borders using the `setBorders` function below the `addQuestion` function
- For each answer option set a radio button form using [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md), add each option to a table column building a single row for all the options

<details>
  <summary>Reusable functions script</summary>

    ```ts
    function addQuestion(question, options, row) {
        paragraph = Api.CreateParagraph();
        paragraph.AddText(question);
        paragraph.SetFontSize(24);
        paragraph.SetBold(true);
        doc.Push(paragraph);

        let table = Api.CreateTable(options.length, 1);
        table.SetWidth("percent", 100);
        setBorders(table, 255);

        for (let col = 0; col < options.length; col++) {
            let cell = table.GetCell(0, col);
            cell.SetWidth("percent", 20);
            paragraph = cell.GetContent().GetElement(0);
            let checkBoxForm = Api.CreateCheckBoxForm({
                "tip": "Select the correct rating",
                "required": true,
                "placeholder": question,
                "radio": true
            });
            checkBoxForm.SetRadioGroup(question);
            paragraph.AddElement(checkBoxForm);
            paragraph.AddText(options[col]);
            paragraph.SetFontSize(24);
        };
        doc.Push(table);
    };

    function setBorders(table, color) {
        table.SetTableBorderTop("single", 4, 0, color, color, color);
        table.SetTableBorderBottom("single", 4, 0, color, color, color);
        table.SetTableBorderLeft("single", 4, 0, color, color, color);
        table.SetTableBorderRight("single", 4, 0, color, color, color);
        table.SetTableBorderInsideV("single", 4, 0, color, color, color);
        table.SetTableBorderInsideH("single", 4, 0, color, color, color);
    }
    ```

</details>

### Step 2. Prepare data and build feedback form

This step initializes the document, defines the title, sets up the feedback questions and options, and renders each row.

- Define answer options and questions in two separated arrays
- Initialize the document using [ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md)
- Get the first paragraph and append the title and the font size using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Run `addQuestion` function for each question

<details>
  <summary>Data and building form script</summary>

    ```ts
    const options = ["Excellent", "Good", "Fair", "Poor", "Very poor"];
    const questions = [
        "How satisfied are you with the resolution of your issue?",
        "How clearly did our support explain the solution?",
        "How easy was it to get help from us?"
    ];

    let doc = Api.GetDocument();

    let paragraph = doc.GetElement(0);
    paragraph.AddText("We’d love your feedback");
    paragraph.SetFontSize(48);
    doc.Push(paragraph);

    for (let row = 0; row < questions.length; row++) {
        addQuestion(questions[row], options, row);
    }
    ```

</details>