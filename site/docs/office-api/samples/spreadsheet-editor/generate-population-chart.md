# Generate population chart with AI

This example demonstrates how to use OpenAI GPT-4 to generate historical population data for continents and visualize it in a line chart using the ONLYOFFICE spreadsheet API. The script fetches structured data in JSON format, transposes it for visualization, and renders a chart showing population growth from the 15th to the 20th century.

```ts editor-xlsx
const OPENAI_API_KEY = "sk-proj...";

const topic = "Population of Asia, Africa, Europe, Americas by centuries";

const prompt = `
You're a historical population data assistant.

Give the population (in millions) for the continents Asia, Africa, Europe, and the Americas from XV to XX century.

Respond ONLY with a JSON object like this:

{
  "headers": ["Century", "Asia", "Africa", "Europe", "Americas"],
  "data": [
    ["XV", 635, 107, 203, 24],
    ["XVI", n, n, n, n],
    ...
    ["XX", n, n, n, n]
  ]
}
Add historical data in millions.
Only respond with the JSON object. No explanation or extra text.
`.trim()

function createChart(values) {
  const headers = values.headers;       // ["Century", "Asia", ...]
  const rows = values.data;             // [["1800", 635, ...], ...]

  const centuries = rows.map(r => r[0]);
  const continents = headers.slice(1);

  // === Transpose: first row = centuries, first column = continents
  const transposed = [["Century", ...centuries]];
  for (let i = 0; i < continents.length; i++) {
    const row = [continents[i]];
    for (let j = 0; j < rows.length; j++) {
      row.push(rows[j][i + 1]); // +1 skips "Century"
    }
    transposed.push(row);
  }

  // === Write data to sheet
  for (let r = 0; r < transposed.length; r++) {
    for (let c = 0; c < transposed[r].length; c++) {
      sheet.GetRangeByNumber(r, c).SetValue(transposed[r][c]);
    }
  }

  // === Format
  sheet.GetRange("A1").SetColumnWidth(20);
  const range = `A1:${String.fromCharCode(65 + centuries.length)}${continents.length + 1}`;
  const dataRange = sheet.GetRange(range);
  dataRange.SetAlignHorizontal("left");
  dataRange.SetNumberFormat("0");

  // === Chart (firstRow = true, firstCol = true)
  const chart = sheet.AddChart(
    `'${sheet.GetName()}'!$A$1:$${String.fromCharCode(65 + centuries.length)}$${continents.length + 1}`,
    true,
    "lineNormal",
    1,
    140 * 36000,
    60 * 36000,
    0,
    0,
    6,
    0
  );
  chart.SetTitle("Continental Population Growth (XV to XX)", 10);
  chart.SetLegendPos("top");
}

// Execution
let sheet = Api.GetActiveSheet();

if (OPENAI_API_KEY === "sk-proj...") {
  const sampleData = {
    "headers": ["Century", "Asia", "Africa", "Europe", "Americas"],
    "data": [
      ["XV", 100, 61, 78, 8],
      ["XVI", 142, 66, 86, 10],
      ["XVII", 205, 76, 103, 13],
      ["XVIII", 257, 106, 140, 16],
      ["XIX", 400, 133, 203, 35],
      ["XX", 1400, 811, 547, 746]
    ]
  };

  createChart(sampleData);
} else {
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
        { role: "user", content: prompt }
      ],
      temperature: 0.1
    })
  })
  .then(res => res.json())
  .then(json => {
    const raw = json.choices?.[0]?.message?.content?.trim();
    if (!raw) throw new Error("No content returned by OpenAI");
    
    const parsed = JSON.parse(raw);
    createChart(parsed)
  
    console.log("Chart rendered successfully.");
  })
  .catch(err => {
    console.error("API Error:", err);
  });
}
```

## Script execution steps

### Step 1. Create chart function

This step defines the function to generate a chart using transposed population data.

- Extracts century labels and continent names
- Transposes data to structure each row by continent
- Writes transposed data into a spreadsheet range using [SetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetValue/)
- Applies alignment, number formatting, and column width
- Adds a line chart with proper title and legend position using [AddChart](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/AddChart/)

<details>
  <summary>Chart generation function</summary>

```ts
function createChart(values) {
  const headers = values.headers;       // ["Century", "Asia", ...]
  const rows = values.data;             // [["1800", 635, ...], ...]

  const centuries = rows.map(r => r[0]);
  const continents = headers.slice(1);

  // === Transpose: first row = centuries, first column = continents
  const transposed = [["Century", ...centuries]];
  for (let i = 0; i < continents.length; i++) {
    const row = [continents[i]];
    for (let j = 0; j < rows.length; j++) {
      row.push(rows[j][i + 1]); // +1 skips "Century"
    }
    transposed.push(row);
  }

  // === Write data to sheet
  for (let r = 0; r < transposed.length; r++) {
    for (let c = 0; c < transposed[r].length; c++) {
      sheet.GetRangeByNumber(r, c).SetValue(transposed[r][c]);
    }
  }

  // === Format
  sheet.GetRange("A1").SetColumnWidth(20);
  const range = `A1:${String.fromCharCode(65 + centuries.length)}${continents.length + 1}`;
  const dataRange = sheet.GetRange(range);
  dataRange.SetAlignHorizontal("left");
  dataRange.SetNumberFormat("0");

  // === Chart (firstRow = true, firstCol = true)
  const chart = sheet.AddChart(
    `'${sheet.GetName()}'!$A$1:$${String.fromCharCode(65 + centuries.length)}$${continents.length + 1}`,
    true,
    "lineNormal",
    1,
    140 * 36000,
    60 * 36000,
    0,
    0,
    6,
    0
  );
  chart.SetTitle("Continental Population Growth (XV to XX)", 10);
  chart.SetLegendPos("top");
}
```

</details>

### Step 2. Create chart

This step either uses predefined sample data or fetches real data from OpenAI GPT-4, parses it, and invokes the chart creation function.

- Checks if `OPENAI_API_KEY` is a real key or placeholder
- If placeholder, uses static `sampleData`
- Otherwise, sends prompt to OpenAI and parses the structured JSON response
- Passes final data to `createChart()` to render the output

<details>
  <summary>Row iteration script</summary>

```ts
// Execution
let sheet = Api.GetActiveSheet();

if (OPENAI_API_KEY === "sk-proj...") {
  const sampleData = {
    "headers": ["Century", "Asia", "Africa", "Europe", "Americas"],
    "data": [
      ["XV", 100, 61, 78, 8],
      ["XVI", 142, 66, 86, 10],
      ["XVII", 205, 76, 103, 13],
      ["XVIII", 257, 106, 140, 16],
      ["XIX", 400, 133, 203, 35],
      ["XX", 1400, 811, 547, 746]
    ]
  };

  createChart(sampleData);
} else {
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
        { role: "user", content: prompt }
      ],
      temperature: 0.1
    })
  })
  .then(res => res.json())
  .then(json => {
    const raw = json.choices?.[0]?.message?.content?.trim();
    if (!raw) throw new Error("No content returned by OpenAI");

    const parsed = JSON.parse(raw);
    createChart(parsed)

    console.log("Chart rendered successfully.");
  })
  .catch(err => {
    console.error("API Error:", err);
  });
}
```

</details>