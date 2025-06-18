# Summarize document with AI

This example demonstrates how to summarize the entire content of a document using the ONLYOFFICE API and OpenAI. The script gathers all paragraphs, sends them as input to GPT-4o, and inserts a bullet-point summary at the top. If no content is found or the OPENAI_API_KEY is not set, a fallback is used.

```ts editor-docx zoom=60
let doc = Api.GetDocument();
let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

let fullText = "";
let paragraphs = doc.GetAllParagraphs();

// Collect all paragraph text
for (let i = 0; i < paragraphs.length; i++) {
  let p = paragraphs[i];
  fullText += p.GetText().trim() + "\n";
}

// Fallback for sandbox
if (OPENAI_API_KEY === "sk-proj...") {
  // Insert sample content if document is empty
  if (!fullText.trim()) {
    let paragraph1 = Api.CreateParagraph();
    paragraph1.AddText("This Lease Agreement is made between the landlord and tenant regarding the rental of office space.");
    doc.Push(paragraph1);

    let paragraph2 = Api.CreateParagraph();
    paragraph2.AddText("The lease term shall begin on July 1st, 2025 and terminate on June 30th, 2026, with a monthly rent of $2,500.");
    doc.Push(paragraph2);

    let paragraph3 = Api.CreateParagraph();
    paragraph3.AddText("Late payment beyond 5 days will result in a $100 fee. The tenant is responsible for utilities and maintenance.");
    doc.Push(paragraph3);
  }

  // Insert sample summary
  let fallbackSummary = `• Lease agreement between landlord and tenant.\n• Covers rental terms, duration, and payment amount.\n• Includes late fee clause and responsibilities.`;
  insertSummary(fallbackSummary);
  return;
}

// Normal GPT logic
if (!fullText.trim()) {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText("Document is empty. Nothing to summarize.");
  doc.Push(paragraph);
  return;
}

let prompt = `Summarize the following document in 3-5 bullet points:\n\n${fullText}`;

fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + OPENAI_API_KEY,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.5
  })
})
.then(res => res.json())
.then(data => {
  let summary = data.choices?.[0]?.message?.content || "Summary not available.";
  insertSummary(summary);
})
.catch(err => {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText("Error: " + err.message);
  doc.Push(paragraph);
});

// Function to insert formatted summary
function insertSummary(summary) {
  let header = Api.CreateParagraph();
  header.AddText("Summary");
  header.SetBold(true);
  header.SetFontSize(48);
  header.SetSpacingAfter(200);

  let content = Api.CreateParagraph();
  content.AddText(summary);
  content.SetFontSize(32);
  content.SetSpacingAfter(300);

  doc.InsertContent([header, content], 0);
}
```

## Script execution steps

### Step 1. Collect document text and summarize

This step extracts all paragraph content and sends it to GPT-4o. If the document is empty, it inserts a warning. If the key is missing, it inserts a predefined summary.

- Use [GetAllParagraphs](../../usage-api/text-document-api/ApiDocument/Methods/GetAllParagraphs.md) to retrieve all paragraphs
- Use [GetText](../../usage-api/text-document-api/ApiParagraph/Methods/GetText.md) and .trim() to clean each paragraph
- Join all text into one block and format prompt for GPT
- Use fetch() to request summary from GPT-4o
- If key is not set, use hardcoded fallback
- Call `insertSummary(summary)` to render output

<details>
  <summary>Translate paragraphs script</summary>

    ```ts
    let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

    let fullText = "";
    let paragraphs = doc.GetAllParagraphs();

    // Collect all paragraph text
    for (let i = 0; i < paragraphs.length; i++) {
      let paragraph = paragraphs[i];
      fullText += paragraph.GetText().trim() + "\n";
    }

    // Fallback for sandbox
    if (OPENAI_API_KEY === "sk-proj...") {
      // Insert sample content if document is empty
      if (!fullText.trim()) {
        let paragraph1 = Api.CreateParagraph();
        paragraph1.AddText("This Lease Agreement is made between the landlord and tenant regarding the rental of office space.");
        doc.Push(paragraph1);

        let paragraph2 = Api.CreateParagraph();
        paragraph2.AddText("The lease term shall begin on July 1st, 2025 and terminate on June 30th, 2026, with a monthly rent of $2,500.");
        doc.Push(paragraph2);

        let paragraph3 = Api.CreateParagraph();
        paragraph3.AddText("Late payment beyond 5 days will result in a $100 fee. The tenant is responsible for utilities and maintenance.");
        doc.Push(paragraph3);
      }

      // Insert sample summary
      let fallbackSummary = `• Lease agreement between landlord and tenant.\n• Covers rental terms, duration, and payment amount.\n• Includes late fee clause and responsibilities.`;
      insertSummary(fallbackSummary);
      return;
    }

    // Normal GPT logic
    if (!fullText.trim()) {
      let paragraph = Api.CreateParagraph();
      paragraph.AddText("Document is empty. Nothing to summarize.");
      doc.Push(paragraph);
      return;
    }

    let prompt = `Summarize the following document in 3-5 bullet points:\n\n${fullText}`;

    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + OPENAI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.5
      })
    })
    .then(res => res.json())
    .then(data => {
      let summary = data.choices?.[0]?.message?.content || "Summary not available.";
      insertSummary(summary);
    })
    .catch(err => {
      let paragraph = Api.CreateParagraph();
      paragraph.AddText("Error: " + err.message);
      doc.Push(paragraph);
    });
    ```

</details>

### Step 2. Insert summary block with formatting

This step creates a header and a content block for the summary and inserts both at the top of the document.

- Use [CreateParagraph](../../usage-api/text-document-api/Api/Methods/CreateParagraph.md) to create two paragraphs
- Use [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md) and [SetBold](../../usage-api/text-document-api/ApiParagraph/Methods/SetBold.md) for the title
- Use [SetFontSize](../../usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md) and [SetSpacingAfter](../../usage-api/text-document-api/ApiParagraph/Methods/SetSpacingAfter.md) for spacing
- Use [InsertContent](../../usage-api/text-document-api/ApiDocument/Methods/InsertContent.md) to place at top of document

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

          let innerCount = paragraph.GetElementsCount();
          for (let j = innerCount - 1; j >= 0; j--) {
            paragraph.RemoveElement(j);
          }

          let run = Api.CreateRun();
          run.AddText(translatedText);
          paragraph.AddElement(run);
        }
      }
    }
    ```

</details>