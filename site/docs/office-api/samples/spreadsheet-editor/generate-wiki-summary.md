# Generate Wikipedia summary with AI

This script fetches a summary from a Wikipedia article and uses OpenAI's GPT-4 to extract structured information such as title, short description, keywords, and historical time period. The extracted data is inserted into an ONLYOFFICE spreadsheet.

```ts editor-xlsx
const OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

const responseSheet = Api.GetActiveSheet();
responseSheet.GetRange("B1").SetColumnWidth(50);
responseSheet.GetRange("A1:B1").SetBold(true);

const analysisRange = responseSheet.GetRange("A1:B4");
analysisRange.SetFontSize(11);
analysisRange.SetWrap(true);
analysisRange.SetAlignHorizontal("left");
analysisRange.SetAlignVertical("distributed");
analysisRange.SetColumnWidth(30);

// If OpenAI API key is provided
if (OPENAI_API_KEY != "sk-proj...") {
  const url = "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor";
const title = decodeURIComponent(url.split("/").pop());
const wikiApi = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`;

fetch(wikiApi)
  .then(res => res.json())
  .then(data => {
    const text = data.extract;
    const prompt = `
Extract the following structured information from the text below.

Return a JSON object with:
- "title": short (max 10 words)
- "description": 1 sentence summary
- "keywords": list of 3-5 key terms
- "timePeriod": years or historical period mentioned

Text:
${text}

Respond only with a JSON object. Do not include any formatting.
    `.trim();

    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a professional summarizer." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3
      })
    })
    .then(res => res.json())
    .then(json => {
      const result = JSON.parse(json.choices?.[0]?.message?.content?.trim() || "{}");

      const output = [
        ["Title", result.title || "(missing)"],
        ["Description", result.description || "(missing)"],
        ["Keywords", Array.isArray(result.keywords) ? result.keywords.join(", ") : result.keywords || "(missing)"],
        ["Time period", result.timePeriod || "(missing)"]
      ];

      output.forEach(([key, value], i) => {
        responseSheet.GetRangeByNumber(i, 0).SetValue(key);
        responseSheet.GetRangeByNumber(i, 1).SetValue(value);
      });

      console.log("Written structured info to columns A and B");
    });
  })
  .catch(err => {
    console.error("Error processing:", url, err);
    responseSheet.GetRange("A1:B4").SetValue("(error)");
  });
}
else { // If OpenAI API key is not provided
  const sampleData = {
    title: "Attack on Pearl Harbor",
    description: "The Empire of Japan launched a surprise military strike on the U.S. Pacific Fleet at Pearl Harbor, Hawaii, on December 7, 1941, leading to the U.S. entering World War II.",
    keywords: "Pearl Harbor, Empire of Japan, U.S. Pacific Fleet, World War II, surprise military strike",
    timePeriod: "07-Dec-41"
  };

  const output = [
    ["Title", sampleData.title],
    ["Description", sampleData.description],
    ["Keywords", sampleData.keywords],
    ["Time period", sampleData.timePeriod]
  ];
  output.forEach(([key, value], i) => {
    responseSheet.GetRangeByNumber(i, 0).SetValue(key);
    responseSheet.GetRangeByNumber(i, 1).SetValue(value);
  });
  console.log("Used sampleData (no real API key)");
  return;
}
```

## Script execution steps

### Step 1. Setup spreadsheet layout

This step prepares the active worksheet for displaying structured data.

- Sets bold headers on row 1 using [SetBold](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetBold/)
- Sets column width for columns A and B using [SetColumnWidth](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetColumnWidth/)
- Applies font size, text wrapping, and alignment formatting using [SetFontSize](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetFontSize/), [SetWrap](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetWrap/), and [SetAlignVertical](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetAlignVertical/)

<details>
  <summary>Layout script</summary>

```ts
const responseSheet = Api.GetActiveSheet();
responseSheet.GetRange("B1").SetColumnWidth(50);
responseSheet.GetRange("A1:B1").SetBold(true);

const analysisRange = responseSheet.GetRange("A1:B4");
analysisRange.SetFontSize(11);
analysisRange.SetWrap(true);
analysisRange.SetAlignHorizontal("left");
analysisRange.SetAlignVertical("distributed");
analysisRange.SetColumnWidth(30);
```

</details>

### Step 2. Extract and paste Wikipedia data (if API key provided)

This step retrieves a summary of a Wikipedia article, extracts key structured insights using GPT-4, and writes them to the sheet.

- Uses Wikipedia's REST API to fetch plain-text summaries
- Sends extracted text to OpenAI API with a prompt requesting structured fields: title, description, keywords, timePeriod
- Parses the JSON response and writes the results to column A and B using [GetRangeByNumber](../../../usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber/) and [SetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetValue/)

<details>
  <summary>Wikipedia + OpenAI data extraction</summary>

```ts
const OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

if (OPENAI_API_KEY != "sk-proj...") {
  const url = "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor";
const title = decodeURIComponent(url.split("/").pop());
const wikiApi = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`;

fetch(wikiApi)
  .then(res => res.json())
  .then(data => {
    const text = data.extract;
    const prompt = `
Extract the following structured information from the text below.

Return a JSON object with:
- "title": short (max 10 words)
- "description": 1 sentence summary
- "keywords": list of 3-5 key terms
- "timePeriod": years or historical period mentioned

Text:
${text}

Respond only with a JSON object. Do not include any formatting.
    `.trim();

    return fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a professional summarizer." },
          { role: "user", content: prompt }
        ],
        temperature: 0.3
      })
    })
    .then(res => res.json())
    .then(json => {
      const result = JSON.parse(json.choices?.[0]?.message?.content?.trim() || "{}");

      const output = [
        ["Title", result.title || "(missing)"],
        ["Description", result.description || "(missing)"],
        ["Keywords", Array.isArray(result.keywords) ? result.keywords.join(", ") : result.keywords || "(missing)"],
        ["Time period", result.timePeriod || "(missing)"]
      ];

      output.forEach(([key, value], i) => {
        responseSheet.GetRangeByNumber(i, 0).SetValue(key);
        responseSheet.GetRangeByNumber(i, 1).SetValue(value);
      });

      console.log("Written structured info to columns A and B");
    });
  })
  .catch(err => {
    console.error("Error processing:", url, err);
    responseSheet.GetRange("A1:B4").SetValue("(error)");
  });
}
```

</details>

### Step 3. Paste sample data (fallback)

This step provides a static fallback in case no API key is available.

- Creates a sample structured dataset
- Writes all values to the sheet using [SetValue](../../../usage-api/spreadsheet-api/ApiRange/Methods/SetValue/)
- Useful for testing the layout and logic without external API calls

<details>
  <summary>Sample data fallback</summary>

```ts
else { // If OpenAI API key is not provided
  const sampleData = {
    title: "Attack on Pearl Harbor",
    description: "The Empire of Japan launched a surprise military strike on the U.S. Pacific Fleet at Pearl Harbor, Hawaii, on December 7, 1941, leading to the U.S. entering World War II.",
    keywords: "Pearl Harbor, Empire of Japan, U.S. Pacific Fleet, World War II, surprise military strike",
    timePeriod: "07-Dec-41"
  };

  const output = [
    ["Title", sampleData.title],
    ["Description", sampleData.description],
    ["Keywords", sampleData.keywords],
    ["Time period", sampleData.timePeriod]
  ];
  output.forEach(([key, value], i) => {
    responseSheet.GetRangeByNumber(i, 0).SetValue(key);
    responseSheet.GetRangeByNumber(i, 1).SetValue(value);
  });
  console.log("Used sampleData (no real API key)");
  return;
}
```

</details>