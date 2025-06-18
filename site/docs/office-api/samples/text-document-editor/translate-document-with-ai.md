# Translate document with AI

This example demonstrates how to translate all paragraphs in a document into French using the ONLYOFFICE API and OpenAI. The script sends all paragraph text joined by delimiters, and re-inserts translated blocks in their original position. If no API key is provided, it uses a sample translation.

```ts editor-docx zoom=60
let doc = Api.GetDocument();
let count = doc.GetElementsCount();
let paragraphMap = [];

let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

// Collect all paragraphs with text
for (let i = 0; i < count; i++) {
  let paragraph = doc.GetElement(i);
  if (paragraph && typeof paragraph.GetText === "function") {
    let text = paragraph.GetText().trim();
    if (text.length > 0) {
      paragraphMap.push({ index: i, text: text });
    }
  }
}

// If document is empty, insert demo content and rebuild paragraphMap
if (paragraphMap.length === 0) {
  let demo1 = Api.CreateParagraph();
  demo1.AddText("This document is confidential.");
  doc.Push(demo1);

  let demo2 = Api.CreateParagraph();
  demo2.AddText("Please read it carefully.");
  doc.Push(demo2);

  let demo3 = Api.CreateParagraph();
  demo3.AddText("Signatures are required below.");
  doc.Push(demo3);

  // Rebuild paragraphMap with new demo paragraphs
  paragraphMap = [
    { index: count, text: "This document is confidential." },
    { index: count + 1, text: "Please read it carefully." },
    { index: count + 2, text: "Signatures are required below." }
  ];
}

// Prepare prompt
let allText = paragraphMap.map(paragraph => paragraph.text).join("\n---\n");

let prompt = `Translate the following text into French. Preserve structure and meaning. Output must match the original paragraph breaks separated by "---":\n\n${allText}`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.3
};

// Fallback for sandbox
if (OPENAI_API_KEY === "sk-proj...") {
  const fallbackTranslated = [
    "Ce document est confidentiel.",
    "Veuillez le lire attentivement.",
    "Les signatures sont requises ci-dessous."
  ];
  const merged = paragraphMap.map((_, i) => fallbackTranslated[i] || "").join("\n---\n");
  insertTranslated(merged);
  return;
}

// Send request to OpenAI
fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + OPENAI_API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
.then(res => res.json())
.then(data => {
  let translated = data.choices?.[0]?.message?.content || "No translation returned.";
  insertTranslated(translated);
})
.catch(err => {
  let errorParagraph = Api.CreateParagraph();
  errorParagraph.AddText("Translation error: " + err.message);
  doc.Push(errorParagraph);
});

// Apply translated content into existing paragraph blocks
function insertTranslated(translated) {
  let lines = translated.split(/\n---\n/);
  for (let i = 0; i < lines.length; i++) {
    let paragraphIndex = paragraphMap[i]?.index;
    let paragraph = doc.GetElement(paragraphIndex);
    if (paragraph && typeof paragraph.GetElementsCount === "function") {
      let translatedText = lines[i].trim();
      paragraph.RemoveAllElements();
      let run = Api.CreateRun();
      run.AddText(translatedText);
      paragraph.AddElement(run);
    }
  }
}
```

## Script execution steps

### Step 1. Collect and translate all paragraph blocks

This step loops through all document elements and processes paragraphs using GPT-4o. In sandbox mode, it simulates comments for longer blocks. Otherwise, it sends each paragraph to OpenAI and inserts suggestions as comments if applicable.

- Use [GetElementsCount](../../usage-api/text-document-api/ApiDocument/Methods/GetElementsCount.md) and [GetElement](../../usage-api/text-document-api/ApiDocument/Methods/GetElement.md) to collect paragraphs
- Use [GetText](../../usage-api/text-document-api/ApiParagraph/Methods/GetText.md) and .trim() to filter out empty blocks
- Use `fetch()` to send prompt to OpenAI or use fallback string
- Pass response to `insertTranslated()` function

<details>
  <summary>Translate paragraphs script</summary>

    ```ts
    let count = doc.GetElementsCount();
    let paragraphMap = [];

    let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

    // Collect all paragraphs with text
    for (let i = 0; i < count; i++) {
      let paragraph = doc.GetElement(i);
      if (paragraph && typeof paragraph.GetText === "function") {
        let text = paragraph.GetText().trim();
        if (text.length > 0) {
          paragraphMap.push({ index: i, text: text });
        }
      }
    }

    // If document is empty, insert demo content and rebuild paragraphMap
    if (paragraphMap.length === 0) {
      let demo1 = Api.CreateParagraph();
      demo1.AddText("This document is confidential.");
      doc.Push(demo1);

      let demo2 = Api.CreateParagraph();
      demo2.AddText("Please read it carefully.");
      doc.Push(demo2);

      let demo3 = Api.CreateParagraph();
      demo3.AddText("Signatures are required below.");
      doc.Push(demo3);

      // Rebuild paragraphMap with new demo paragraphs
      paragraphMap = [
        { index: count, text: "This document is confidential." },
        { index: count + 1, text: "Please read it carefully." },
        { index: count + 2, text: "Signatures are required below." }
      ];
    }

    // Prepare prompt
    let allText = paragraphMap.map(paragraph => paragraph.text).join("\n---\n");

    let prompt = `Translate the following text into French. Preserve structure and meaning. Output must match the original paragraph breaks separated by "---":\n\n${allText}`;

    let body = {
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    };

    // Fallback for sandbox
    if (OPENAI_API_KEY === "sk-proj...") {
      const fallbackTranslated = [
        "Ce document est confidentiel.",
        "Veuillez le lire attentivement.",
        "Les signatures sont requises ci-dessous."
      ];
      const merged = paragraphMap.map((_, i) => fallbackTranslated[i] || "").join("\n---\n");
      insertTranslated(merged);
      return;
    }

    // Send request to OpenAI
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + OPENAI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      let translated = data.choices?.[0]?.message?.content || "No translation returned.";
      insertTranslated(translated);
    })
    .catch(err => {
      let errorParagraph = Api.CreateParagraph();
      errorParagraph.AddText("Translation error: " + err.message);
      doc.Push(errorParagraph);
    });
    ```

</details>

### Step 2. Replace paragraphs with translated content

This step loops through the translated result and replaces the original paragraph content by removing all inner elements and inserting a new Run with the translation.

- Use [GetElement](../../usage-api/text-document-api/ApiDocument/Methods/GetElement.md) to access the original paragraph
- Use [RemoveElement](../../usage-api/text-document-api/ApiDocument/Methods/RemoveElement.md) in reverse loop to clear runs
- Use [CreateRun](../../usage-api/text-document-api/Api/Methods/CreateRun.md) and [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md) to insert the translated content
- Use [AddElement](../../usage-api/text-document-api/ApiDocument//Methods/AddElement.md) to push the translated Run into paragraph

<details>
  <summary>Insert translated paragraphs script</summary>

    ```ts
    function insertTranslated(translated) {
      let lines = translated.split(/\n---\n/);
      for (let i = 0; i < lines.length; i++) {
        let paragraphIndex = paragraphMap[i]?.index;
        let paragraph = doc.GetElement(pIndex);
        if (paragraph && typeof paragraph.GetElementsCount === "function") {
          let translatedText = lines[i].trim();
          paragraph.RemoveAllElements();
          let run = Api.CreateRun();
          run.AddText(translatedText);
          paragraph.AddElement(run);
        }
      }
    }
    ```

</details>