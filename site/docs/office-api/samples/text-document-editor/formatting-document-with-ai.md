# Formatting document with AI

This example uses the ONLYOFFICE API and OpenAI to analyze document paragraphs and apply formatting recommendations (font size, bold, indent) from GPT. Paragraphs are joined and sent to GPT-4o, which returns a JSON array with formatting data for each block. In sandbox mode, sample values are used instead.

```ts editor-docx
let doc = Api.GetDocument();
let token = "sk-proj..."; // Replace with your OpenAI API key

let count = doc.GetElementsCount();
let paragraphMap = [];

// Step 1. Collect all paragraphs with text
for (let i = 0; i < count; i++) {
  let p = doc.GetElement(i);
  if (p && typeof p.GetText === "function") {
    let text = p.GetText().trim();
    if (text.length > 0) {
      paragraphMap.push({ index: i, text: text });
    }
  }
}

let allText = paragraphMap.map(p => p.text).join("\n---\n");

let prompt = `
You are a document formatting assistant.

The text is split into blocks using "---".
For each block, return:
- text (unchanged),
- fontSize (12-28),
- bold (true/false),
- indent (recommended left indent in twips, e.g., 0 for titles, 720 or 1440 for paragraphs)

Return a pure JSON array like this:
[
  {"text": "...", "fontSize": 14, "bold": false, "indent": 1440},
  ...
]

Text:
${allText}
`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.4
};

// Sandbox fallback (works even if document is empty)
if (token === "sk-proj...") {
  let sample = [
    { text: "Sample title", fontSize: 20, bold: true, indent: 0 },
    { text: "Sample body paragraph explaining some topic.", fontSize: 14, bold: false, indent: 1440 },
    { text: "Another paragraph with different formatting.", fontSize: 13, bold: false, indent: 1440 }
  ];

  if (paragraphMap.length === 0) {
    // No original content - create new paragraphs
    sample.forEach(item => {
      let p = Api.CreateParagraph();
      let t = p.AddText(item.text);
      t.SetFontSize(item.fontSize);
      t.SetBold(item.bold);
      t.SetFontFamily("Arial");
      if (typeof item.indent === "number") {
        p.SetIndLeft(item.indent);
      }
      doc.Push(p);
    });
  } else {
    // Use paragraphMap as target
    applyFormattingBlocks(sample);
  }

  return;
}

// Request to GPT
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
  let raw = data.choices?.[0]?.message?.content || "[]";
  raw = raw.replace(/```json|```/g, "").trim();

  try {
    let formatted = JSON.parse(raw);
    applyFormattingBlocks(formatted);
  } catch (e) {
    let err = Api.CreateParagraph();
    err.AddText("JSON parse error: " + e.message);
    doc.Push(err);
  }
})
.catch(error => {
  let err = Api.CreateParagraph();
  err.AddText("Fetch error: " + error.message);
  doc.Push(err);
});

// Apply formatting to existing paragraphs
function applyFormattingBlocks(formatted) {
  formatted.forEach((item, i) => {
    let pIndex = paragraphMap[i]?.index;
    if (pIndex === undefined) return;

    let original = doc.GetElement(pIndex);
    if (original && typeof original.RemoveAllElements === "function") {
      original.RemoveAllElements();

      let textObj = original.AddText(item.text);
      textObj.SetFontSize(item.fontSize);
      textObj.SetBold(item.bold);
      textObj.SetFontFamily("Arial");

      if (typeof item.indent === "number") {
        original.SetIndLeft(item.indent);
      }
    }
  });
}
```

## Script execution steps

### Step 1. Analyze text blocks and get formatting

This step collects all text paragraphs, sends them to GPT-4o for formatting instructions, or uses fallback values in sandbox mode.

- Use [GetElementsCount](../../usage-api/text-document-api/ApiDocument/Methods/GetElementsCount.md) and [GetElement](../../usage-api/text-document-api/ApiDocument/Methods/GetElement.md) to collect paragraphs
- Use [GetText](../../usage-api/text-document-api/ApiParagraph/Methods/GetText.md) and .trim() to clean up input
- Use `fetch()` to send prompt to OpenAI API
- Use fallback `sample[]` object when token is not set
- Parse result and call `applyFormattingBlocks()` to render

<details>
  <summary>Translate paragraphs script</summary>

    ```ts
let token = "sk-proj..."; // Replace with your OpenAI API key

let count = doc.GetElementsCount();
let paragraphMap = [];

// Collect all paragraphs with text
for (let i = 0; i < count; i++) {
  let p = doc.GetElement(i);
  if (p && typeof p.GetText === "function") {
    let text = p.GetText().trim();
    if (text.length > 0) {
      paragraphMap.push({ index: i, text: text });
    }
  }
}

let allText = paragraphMap.map(p => p.text).join("\n---\n");

let prompt = `
You are a document formatting assistant.

The text is split into blocks using "---".
For each block, return:
- text (unchanged),
- fontSize (12-28),
- bold (true/false),
- indent (recommended left indent in twips, e.g., 0 for titles, 720 or 1440 for paragraphs)

Return a pure JSON array like this:
[
  {"text": "...", "fontSize": 14, "bold": false, "indent": 1440},
  ...
]

Text:
${allText}
`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.4
};

// Sandbox fallback (works even if document is empty)
if (token === "sk-proj...") {
  let sample = [
    { text: "Sample title", fontSize: 20, bold: true, indent: 1440 },
    { text: "Sample body paragraph explaining some topic.", fontSize: 14, bold: false, indent: 1440 },
    { text: "Another paragraph with different formatting.", fontSize: 13, bold: false, indent: 1440 }
  ];

  if (paragraphMap.length === 0) {
    // No original content - create new paragraphs
    sample.forEach(item => {
      let p = Api.CreateParagraph();
      let t = p.AddText(item.text);
      t.SetFontSize(item.fontSize);
      t.SetBold(item.bold);
      t.SetFontFamily("Arial");
      if (typeof item.indent === "number") {
        p.SetIndLeft(item.indent);
      }
      doc.Push(p);
    });
  } else {
    // Use paragraphMap as target
    applyFormattingBlocks(sample);
  }

  return;
}

// Request to GPT
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
  let raw = data.choices?.[0]?.message?.content || "[]";
  raw = raw.replace(/```json|```/g, "").trim();

  try {
    let formatted = JSON.parse(raw);
    applyFormattingBlocks(formatted);
  } catch (e) {
    let err = Api.CreateParagraph();
    err.AddText("JSON parse error: " + e.message);
    doc.Push(err);
  }
})
.catch(error => {
  let err = Api.CreateParagraph();
  err.AddText("Fetch error: " + error.message);
  doc.Push(err);
});
    ```

</details>

### Step 2. Apply formatting to each paragraph

This step clears each paragraph's content and inserts a new text run with the recommended formatting: font size, bold, font family, and left indent.

- Use [RemoveAllElements](../../usage-api/text-document-api/ApiDocument/Methods/RemoveAllElements.md) to clear old content
- Use [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md) to insert new content
- Use [SetFontSize](../../usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md) and SetBold() to apply style
- Use [SetFontFamily](../../usage-api/text-document-api/ApiParagraph/Methods/SetFontFamily.md) to enforce consistent appearance
- Use [SetIndLeft](../../usage-api/text-document-api/ApiParagraph/Methods/SetIndLeft.md) to adjust indentation based on GPT feedback

<details>
  <summary>Apply formatting script</summary>

    ```ts
// Apply formatting to paragraphs
function applyFormattingBlocks(formatted) {
  formatted.forEach((item, i) => {
    let pIndex = paragraphMap[i]?.index;
    if (pIndex === undefined) return;

    let original = doc.GetElement(pIndex);
    if (original && typeof original.RemoveAllElements === "function") {
      original.RemoveAllElements();

      let textObj = original.AddText(item.text);
      textObj.SetFontSize(item.fontSize);
      textObj.SetBold(item.bold);
      textObj.SetFontFamily("Arial");

      if (typeof item.indent === "number") {
        original.SetIndLeft(item.indent);
      }
    }
  });
}
    ```

</details>