# Generate Table with AI

This script uses the ONLYOFFICE Document API and OpenAI to generate a structured table from a user-defined topic. If no OpenAI API key is provided, a sample JSON table is used. The table is styled and inserted into the document using a reusable function.

```ts editor-docx
let doc = Api.GetDocument();

let topic = "Revenue comparison by region for 2023 and 2024";
let token = "sk-proj..."; // Replace with your real OpenAI API key

let prompt = `Generate a structured JSON table on the topic "${topic}". 
Return ONLY this JSON format:

{
  "headers": ["Column1", "Column2", "..."],
  "rows": [
    ["Value1", "Value2", "..."],
    ...
  ]
}

Use concise, clear text. No markdown formatting or commentary.`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.4
};

// Fallback for sandbox testing
if (token === "sk-proj...") {
  insertTableFromJson({
    headers: ["Region", "2023 Revenue", "2024 Revenue", "Change %"],
    rows: [
      ["North America", "$1.2M", "$1.5M", "+25%"],
      ["Europe", "$980K", "$1.1M", "+12.2%"],
      ["Asia", "$700K", "$690K", "-1.4%"]
    ]
  });
  return;
}

// Request to OpenAI and handling response
fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
.then(res => res.json())
.then(data => {
  let raw = data.choices?.[0]?.message?.content || "{}";
  raw = raw.replace(/```json|```/g, "").trim();

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    parsed = {
      headers: ["Error"],
      rows: [["Could not parse GPT response."]]
    };
  }

  insertTableFromJson(parsed);
})
.catch(err => {
  console.log("GPT fetch error:", err.message);
});

// Step function: insert table from parsed JSON
function insertTableFromJson(parsed) {
  let headers = parsed.headers || ["Header"];
  let rows = parsed.rows || [["No data"]];
  let rowCount = rows.length + 1;
  let colCount = headers.length;

  let table = Api.CreateTable(colCount, rowCount);
  table.SetWidth("percent", 100);

  let style = doc.CreateStyle("GPTTableStyle", "table");
  style.SetBasedOn(doc.GetStyle("Bordered"));
  let cellPr = style.GetTableCellPr();
  cellPr.SetCellMarginTop(40);
  cellPr.SetCellMarginBottom(40);
  table.SetStyle(style);

  let headerRow = table.GetRow(0);
  if (headerRow) {
    headerRow.SetBackgroundColor(75, 136, 209, false);
    headers.forEach((text, i) => {
      let cell = headerRow.GetCell(i);
      if (cell) {
        let content = cell.GetContent();
        content.RemoveAllElements();
        let p = content.GetElement(0);
        p.AddText(text);
        p.SetBold(true);
        p.SetColor(255, 255, 255, false);
        p.SetJc("center");
        cell.SetVerticalAlign("center");
      }
    });
  }

  rows.forEach((rowData, rIdx) => {
    let row = table.GetRow(rIdx + 1);
    if (!row) return;
    let gray = (rIdx + 1) % 2 === 0 ? 245 : 225;
    row.SetBackgroundColor(gray, gray, gray, false);
    rowData.forEach((value, cIdx) => {
      let cell = row.GetCell(cIdx);
      if (cell) {
        let content = cell.GetContent();
        content.RemoveAllElements();
        let p = content.GetElement(0);
        p.AddText(value);
        p.SetJc("center");
        cell.SetVerticalAlign("center");
        if (value.includes("%")) {
          p.SetColor(value.includes("-") ? 173 : 28, value.includes("-") ? 35 : 173, value.includes("-") ? 28 : 52);
        }
      }
    });
  });

  doc.Push(table);
}
```

## Script execution steps

### Step 1. Get data from AI or use fallback

This step handles both sandbox mode and live GPT execution. If the API key is missing, the script uses a predefined JSON. Otherwise, it sends a prompt to GPT-4o, parses the result, and prepares a table data object.

- Use `if (token === "sk-proj...")` to detect placeholder token
- Use `insertTableFromJson()` to render sample table
- Use `fetch()` to call OpenAI API when a real key is provided
- Clean response using replace() to remove Markdown
- Parse JSON with `JSON.parse()`
- Call `insertTableFromJson()` with parsed GPT result

<details>
  <summary>Getting data script</summary>

    ```ts
if (token === "sk-proj...") {
  insertTableFromJson({
    headers: ["Region", "2023 Revenue", "2024 Revenue", "Change %"],
    rows: [
      ["North America", "$1.2M", "$1.5M", "+25%"],
      ["Europe", "$980K", "$1.1M", "+12.2%"],
      ["Asia", "$700K", "$690K", "-1.4%"]
    ]
  });
  return;
}

fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
.then(res => res.json())
.then(data => {
  let raw = data.choices?.[0]?.message?.content || "{}";
  raw = raw.replace(/```json|```/g, "").trim();

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    parsed = {
      headers: ["Error"],
      rows: [["Could not parse GPT response."]]
    };
  }

  insertTableFromJson(parsed);
})
.catch(err => {
  console.log("GPT fetch error:", err.message);
});
    ```

</details>

### Step 2. Insert and style table in document

This step renders the table in the document using the ONLYOFFICE API. It applies column widths, zebra striping, padding, and styles percentage values with color.

- Use [SetWidth("percent", 100)](../../usage-api/text-document-api/ApiTable/Methods/SetWidth.md) to fill the page
- Use [SetCellMarginTop()](../../usage-api/text-document-api/ApiTableCell/Methods/SetCellMarginTop.md) and [SetCellMarginBottom()](../../usage-api/text-document-api/ApiTableCell/Methods/SetCellMarginTop.md) to apply padding
- Loop with [GetRow()](../../usage-api/text-document-api/ApiTable/Methods/GetRow.md) and [GetCell()](../../usage-api/text-document-api/ApiTable/Methods/GetCell.md) to populate header and data rows
- Use [SetBold()](../../usage-api/text-document-api/ApiParagraph/Methods/SetBold.md), [SetColor()](../../usage-api/text-document-api/ApiParagraph/Methods/SetColor.md), [SetJc()](../../usage-api/text-document-api/ApiParagraph/Methods/SetJc.md), [SetVerticalAlign()](../../usage-api/text-document-api/ApiTableCell/Methods/SetVerticalAlign.md) to format text
- Use [SetBackgroundColor()](../../usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md) for zebra styling

<details>
  <summary>Generate table script</summary>

    ```ts
function insertTableFromJson(parsed) {
  let headers = parsed.headers || ["Header"];
  let rows = parsed.rows || [["No data"]];
  let rowCount = rows.length + 1;
  let colCount = headers.length;

  let table = Api.CreateTable(colCount, rowCount);
  table.SetWidth("percent", 100);

  let style = doc.CreateStyle("GPTTableStyle", "table");
  style.SetBasedOn(doc.GetStyle("Bordered"));
  let cellPr = style.GetTableCellPr();
  cellPr.SetCellMarginTop(40);
  cellPr.SetCellMarginBottom(40);
  table.SetStyle(style);

  let headerRow = table.GetRow(0);
  if (headerRow) {
    headerRow.SetBackgroundColor(75, 136, 209, false);
    headers.forEach((text, i) => {
      let cell = headerRow.GetCell(i);
      if (cell) {
        let content = cell.GetContent();
        content.RemoveAllElements();
        let p = content.GetElement(0);
        p.AddText(text);
        p.SetBold(true);
        p.SetColor(255, 255, 255, false);
        p.SetJc("center");
        cell.SetVerticalAlign("center");
      }
    });
  }

  rows.forEach((rowData, rIdx) => {
    let row = table.GetRow(rIdx + 1);
    if (!row) return;
    let gray = (rIdx + 1) % 2 === 0 ? 245 : 225;
    row.SetBackgroundColor(gray, gray, gray, false);
    rowData.forEach((value, cIdx) => {
      let cell = row.GetCell(cIdx);
      if (cell) {
        let content = cell.GetContent();
        content.RemoveAllElements();
        let p = content.GetElement(0);
        p.AddText(value);
        p.SetJc("center");
        cell.SetVerticalAlign("center");
        if (value.includes("%")) {
          p.SetColor(value.includes("-") ? 173 : 28, value.includes("-") ? 35 : 173, value.includes("-") ? 28 : 52);
        }
      }
    });
  });

  doc.Push(table);
}
    ```

</details>