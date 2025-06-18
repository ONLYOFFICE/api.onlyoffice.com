# Create feedback form

This example demonstrates how to create a customer feedback form using the ONLYOFFICE Office API. The script generates a document with a title and a series of questions, each presented as a row of radio-button options inside a bordered table.

```ts editor-pdf
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
    paragraph = Api.CreateParagraph();
    paragraph.AddText(questions[row]);
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
            "placeholder": questions[row],
            "radio": true
        });
        checkBoxForm.SetRadioGroup(questions[row]);
        paragraph.AddElement(checkBoxForm);
        paragraph.AddText(options[col]);
        paragraph.SetFontSize(24);
    };
    doc.Push(table);
```

## Script execution steps

### Step 1. Define table border utility

Create a helper function to style table borders for answer rows.

- Uses [SetTableBorderTop](../../usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md) and related methods to set all 6 border types
- Applies uniform border thickness and white color for clarity

<details>
  <summary>Reusable functions script</summary>

    ```ts
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

### Step 2. Insert form heading

- Retrieves the first paragraph from the document
- Adds form heading and increases font size

<details>
  <summary>Data and building form script</summary>

    ```ts
    let paragraph = doc.GetElement(0);
    paragraph.AddText("We’d love your feedback");
    paragraph.SetFontSize(48);
    doc.Push(paragraph);
    ```

</details>

### Step 3. Render questions with radio-button rows
Iterate over the list of questions and render each one with a table row of radio buttons.
- For each question:
  - Create a bold question label using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
  - Create a one-row table with multiple columns (one per option)
  - In each cell, insert a [ApiCheckBoxForm](../../usage-api/form-api/ApiCheckBoxForm/ApiCheckBoxForm.md) with radio: true
  - Group all buttons using `SetRadioGroup(question)` to enforce single selection per row

ts
Копировать
Редактировать


<details>
  <summary>Data and building form script</summary>

    ```ts
    let paragraph = doc.GetElement(0);
    paragraph.AddText("We’d love your feedback");
    paragraph.SetFontSize(48);
    doc.Push(paragraph);
    ```

</details>