# Fix Spreadsheet Formulas with AI

This example demonstrates how to automatically detect and fix erroneous formulas in a spreadsheet using the ONLYOFFICE API with OpenAI. The script scans all cells in a range for formulas beginning with `#`, sends them to OpenAI for correction, and updates the cell with the corrected version.

The script also adds a comment to the cell indicating the transformation and recalculates all formulas in the document.

```ts editor-xlsx templateUrl=https://static.onlyoffice.com/assets/docs/samples/data_with_errors.xlsx
const OPENAI_API_KEY="sk-proj..."

function fixFormula(err_cell) {
    fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [
                { role: "system", content: "You are a helpful data analyst." },
                { role: "user", content: `Fix this spreadsheet formula: ${err_cell.GetFormula()}, respond with a correct formula, no additional text` }
            ],
            temperature: 0.2
        })
    })
    .then(res => res.json())
    .then(json => {
        const result = json.choices?.[0]?.message?.content;
        let comment = `Error "${err_cell.GetFormula()}" was fixed with "${result}"`;
        err_cell.SetValue(result);
        err_cell.AddComment(comment);
        Api.RecalculateAllFormulas();
    })
}

let worksheet = Api.GetActiveSheet();

let data = worksheet.GetRange("A:G27").GetValue();
for (let row = 0; row < data.length; row += 1) {
  for (let column = 0; column < data[0].length; column += 1) {
    let cell = data[row][column];
    if (cell.indexOf("#") === 0) {
        const err_cell = worksheet.GetRangeByNumber(row, column);
        fixFormula(err_cell);
    }
  }
}
```

## Script execution steps

### Step 1. Define reusable AI function

This step sends the erroneous formula to the OpenAI API for correction and updates the cell.

- Call OpenAI's `chat/completions` API with GPT-4 using [GetFormula](../../../usage-api/spreadsheet-api/ApiRange/Methods/GetFormula/) to extract broken formula from a cell
- Extract the response and set it as the new cell value using [SetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetValue/)
- Add a comment showing what was fixed using [AddComment](../../../usage-api/spreadsheet-api/ApiRange/Methods/AddComment/)
- Recalculate the spreadsheet formulas with [RecalculateAllFormulas](../../../usage-api/spreadsheet-api/Api/Methods/RecalculateAllFormulas/)

<details>
  <summary>Reusable function script</summary>

    ```ts
    function fixFormula(err_cell) {
        fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [
                    { role: "system", content: "You are a helpful data analyst." },
                    { role: "user", content: `Fix this spreadsheet formula: ${err_cell.GetFormula()}, respond with a correct formula, no additional text` }
                ],
                temperature: 0.2
            })
        })
        .then(res => res.json())
        .then(json => {
            const result = json.choices?.[0]?.message?.content;
            let comment = `Error "${err_cell.GetFormula()}" was fixed with "${result}"`;
            err_cell.SetValue(result);
            err_cell.AddComment(comment);
            Api.RecalculateAllFormulas();
        });
    };
    ```

</details>

### Step 2. Detect broken formulas

This step loops through a predefined cell range and checks for formulas that start with `#`, indicating an error.

- Use [GetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/GetValue/) to retrieve cell values in a 2D array
- Loop through each cell and check for `#` prefix
- Retrieve the target cell with [GetRangeByNumber](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber/)
- Call `fixFormula()` defined in the previous step

<details>
  <summary>Detect broken formulas script</summary>

    ```ts
    let worksheet = Api.GetActiveSheet();

    let data = worksheet.GetRange("A:G27").GetValue();
    for (let row = 0; row < data.length; row += 1) {
        for (let column = 0; column < data[0].length; column += 1) {
            let cell = data[row][column];
            if (cell.indexOf("#") === 0) {
                const err_cell = worksheet.GetRangeByNumber(row, column);
                fixFormula(err_cell);
            }
        }
    }
    ```

</details>