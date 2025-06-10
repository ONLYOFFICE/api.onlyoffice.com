# Generate analysis table with AI

This script uses OpenAI's GPT-4 to generate a structured table of insights based on a given topic. The data is written into a spreadsheet sheet with formatted columns for `Trend`, `Label`, and `Observation`.

```ts editor-xlsx
const OPENAI_API_KEY = "sk-proj...";

const topic = "crime statistics by US states"; // Change this to any other topic

const prompt = `
You are a helpful data analyst.

Generate a structured summary of the topic "${topic}". Your goal is to produce a table of data insights.

Return a JSON array where each object has:

- "trend": a short category or trend name
- "label": relevant items or groupings
- "observation": a concise explanation or insight

Respond only with a JSON array. Do not include any headings or explanations.
`.trim();

function pasteData(trendData) {
  const columns = {
    trend: ["Trend"],
    label: ["Label"],
    observation: ["Observation"]
  };

  trendData.forEach(item => {
    columns.trend.push(item.trend || "");
    columns.label.push(Array.isArray(item.label) ? item.label.join(", ") : item.label || "");
    columns.observation.push(item.observation || "");
  });

  const keys = ["trend", "label", "observation"];
  keys.forEach((key, i) => {
    const col = columns[key];
    for (let j = 0; j < col.length; ++j) {
      responseSheet.GetRangeByNumber(j, i).SetValue(col[j]);
    }
  });
}

// Execution
let responseSheet = Api.GetActiveSheet();

const analysisRange = responseSheet.GetRange("A1:D25");
analysisRange.SetFontSize(11);
analysisRange.SetWrap(true);
analysisRange.SetAlignVertical("distributed");
analysisRange.SetColumnWidth(30);
responseSheet.GetRange("C1").SetColumnWidth(50);

if (OPENAI_API_KEY === "sk-proj...") {
  const trendData = [
    {
      "trend": "Highest Crime Rates",
      "label": "Alaska, New Mexico, Nevada",
      "observation": "These states consistently show the highest overall crime rates in the US."
    },
    {
      "trend": "Lowest Crime Rates",
      "label": "Maine, Vermont, New Hampshire",
      "observation": "These states consistently show the lowest overall crime rates in the US."
    },
    {
      "trend": "Violent Crime Rates",
      "label": "Alaska, New Mexico, Tennessee",
      "observation": "These states have the highest rates of violent crime, including assault and robbery."
    }
  ];

  pasteData(trendData);
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
      temperature: 0.3
    })
  })
  .then(res => res.json())
  .then(json => {
    const content = json.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error("No content returned by OpenAI.");

    const trendData = JSON.parse(content);
    console.log(trendData)

    pasteData(trendData)
    console.log("Analysis written to 'Analysis' sheet (columns A-C)");
  })
  .catch(err => {
    console.error("API Error:", err);
  });
}

```

## Script execution steps

### Step 1. Paste structured data into table

This step defines a function to write structured data returned by GPT-4 into a spreadsheet.

- Initializes three columns: `Trend`, `Label`, and `Observation`
- Converts label arrays into comma-separated strings
- Writes values to the active sheet using [GetRangeByNumber](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber/) and [SetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetValue/)

<details>
  <summary>Chart generation function</summary>

```ts
function pasteData(trendData) {
  const columns = {
    trend: ["Trend"],
    label: ["Label"],
    observation: ["Observation"]
  };

  trendData.forEach(item => {
    columns.trend.push(item.trend || "");
    columns.label.push(Array.isArray(item.label) ? item.label.join(", ") : item.label || "");
    columns.observation.push(item.observation || "");
  });

  const keys = ["trend", "label", "observation"];
  keys.forEach((key, i) => {
    const col = columns[key];
    for (let j = 0; j < col.length; ++j) {
      responseSheet.GetRangeByNumber(j, i).SetValue(col[j]);
    }
  });
}
```

</details>

### Step 2. Fetch or fallback to sample insight data

This step populates the sheet either by calling GPT-4 or using a hardcoded fallback.

- Sets up sheet formatting using [SetFontSize](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetFontSize/), [SetWrap](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetWrap/), [SetAlignVertical](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetAlignVertical/), and [SetColumnWidth](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetColumnWidth/)
- If no real API key is used, fills table with static sample data
- If a real key is provided, fetches JSON data from OpenAI and parses it into the sheet

<details>
  <summary>Row iteration script</summary>

```ts
// Execution
let responseSheet = Api.GetActiveSheet();

const analysisRange = responseSheet.GetRange("A1:D25");
analysisRange.SetFontSize(11);
analysisRange.SetWrap(true);
analysisRange.SetAlignVertical("distributed");
analysisRange.SetColumnWidth(30);
responseSheet.GetRange("C1").SetColumnWidth(50);

if (OPENAI_API_KEY === "sk-proj...") {
  const trendData = [
    {
      "trend": "Highest Crime Rates",
      "label": "Alaska, New Mexico, Nevada",
      "observation": "These states consistently show the highest overall crime rates in the US."
    },
    {
      "trend": "Lowest Crime Rates",
      "label": "Maine, Vermont, New Hampshire",
      "observation": "These states consistently show the lowest overall crime rates in the US."
    },
    {
      "trend": "Violent Crime Rates",
      "label": "Alaska, New Mexico, Tennessee",
      "observation": "These states have the highest rates of violent crime, including assault and robbery."
    }
  ];

  pasteData(trendData);
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
      temperature: 0.3
    })
  })
  .then(res => res.json())
  .then(json => {
    const content = json.choices?.[0]?.message?.content?.trim();
    if (!content) throw new Error("No content returned by OpenAI.");

    const trendData = JSON.parse(content);
    console.log(trendData)

    pasteData(trendData)
    console.log("Analysis written to 'Analysis' sheet (columns A-C)");
  })
  .catch(err => {
    console.error("API Error:", err);
  });
}
```

</details>
