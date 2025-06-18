# Rewrite paragraph with AI

This example demonstrates how to rewrite a paragraph using the ONLYOFFICE API and OpenAI. The rewriting style is defined in the prompt, allowing for various transformations such as simplification, formalization, clarification, or tone adjustment. The result replaces the original paragraph.

```ts editor-docx zoom=60
let doc = Api.GetDocument();
let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

let paragraph = doc.GetElement(0);


if ((!paragraph || paragraph.GetText().trim() === "") && OPENAI_API_KEY === "sk-proj...") {
  paragraph = Api.CreateParagraph();
  paragraph.AddText("This policy outlines how we handle customer data in our platform.");
  doc.Push(paragraph);
}


if (!paragraph || paragraph.GetText().trim() === "") {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText("Document is empty or missing the first paragraph.");
  doc.Push(paragraph);
  return;
}

let originalText = paragraph.GetText().trim();

// Fallback for sandbox
if (OPENAI_API_KEY === "sk-proj...") {
  let rewritten = "This explains how we work with customer information in a simple way.";

  let header1 = Api.CreateParagraph();
  header1.AddText("Original:");
  header1.SetBold(true);

  let paragraph1 = Api.CreateParagraph();
  paragraph1.AddText(originalText);

  let header2 = Api.CreateParagraph();
  header2.AddText("Rewritten:");
  header2.SetBold(true);
  header2.SetSpacingBefore(200);

  let paragraph2 = Api.CreateParagraph();
  paragraph2.AddText(rewritten);

  doc.Push(header1);
  doc.Push(paragraph1);
  doc.Push(header2);
  doc.Push(paragraph2);
  return;
}

// Send request to GPT
let prompt = `Rewrite the following text in a clear and simple way, like you're explaining it to a school student:\n\n"${originalText}"`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.7
};

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
  let simplified = data.choices?.[0]?.message?.content || originalText;
  replaceParagraphWithSimplified(simplified);
})
.catch(err => {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText("Error: " + err.message);
  doc.Push(paragraph);
});

// Replace original paragraph with rewritten version
function replaceParagraphWithSimplified(text) {
  if (!paragraph) return;
  paragraph.RemoveAllElements();
  paragraph.AddText(text);
}
```

## Script execution steps

### Step 1. Rewrite paragraph based on prompt

This step extracts the first paragraph, sends it to GPT-4o with a user-defined rewriting instruction (e.g. simplify, formalize, clarify), and retrieves the rewritten result. If no API key is provided, a placeholder text is used instead.

- Use [GetElement](../../usage-api/text-document-api/ApiDocument/Methods/GetElement.md) to access the first paragraph
- Use [GetText](../../usage-api/text-document-api/ApiParagraph/Methods/GetText.md) and .trim() to clean content
- Use `fetch()` to call OpenAI's chat API with a prompt
- If OPENAI_API_KEY is `sk-proj...`, use fallback
- Call `replaceParagraphWithSimplified(text)` to apply result

<details>
  <summary>Rewrite paragraph script</summary>

    ```ts
    let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

    let paragraph = doc.GetElement(0);


    if ((!paragraph || paragraph.GetText().trim() === "") && OPENAI_API_KEY === "sk-proj...") {
      paragraph = Api.CreateParagraph();
      paragraph.AddText("This policy outlines how we handle customer data in our platform.");
      doc.Push(paragraph);
    }


    if (!paragraph || paragraph.GetText().trim() === "") {
      let paragraph = Api.CreateParagraph();
      paragraph.AddText("Document is empty or missing the first paragraph.");
      doc.Push(paragraph);
      return;
    }

    let originalText = paragraph.GetText().trim();

    // Fallback for sandbox
    if (OPENAI_API_KEY === "sk-proj...") {
      let rewritten = "This explains how we work with customer information in a simple way.";

      let header1 = Api.CreateParagraph();
      header1.AddText("Original:");
      header1.SetBold(true);

      let paragraph1 = Api.CreateParagraph();
      paragraph1.AddText(originalText);

      let header2 = Api.CreateParagraph();
      header2.AddText("Rewritten:");
      header2.SetBold(true);
      header2.SetSpacingBefore(200);

      let paragraph2 = Api.CreateParagraph();
      paragraph2.AddText(rewritten);

      doc.Push(header1);
      doc.Push(paragraph1);
      doc.Push(header2);
      doc.Push(paragraph2);
      return;
    }

    // Send request to GPT
    let prompt = `Rewrite the following text in a clear and simple way, like you're explaining it to a school student:\n\n"${originalText}"`;

    let body = {
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    };

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
      let simplified = data.choices?.[0]?.message?.content || originalText;
      replaceParagraphWithSimplified(simplified);
    })
    .catch(err => {
      let paragraph = Api.CreateParagraph();
      paragraph.AddText("Error: " + err.message);
      doc.Push(paragraph);
    });
    ```

</details>

### Step 2. Replace paragraph with rewritten result

This step removes the original paragraph content and inserts the new version returned by GPT.

Use [RemoveAllElements](../../usage-api/text-document-api/ApiDocument/Methods/RemoveAllElements.md) to clear the existing text
Use [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md) to insert the rewritten version

<details>
  <summary>Replace paragraph script</summary>

    ```ts
    // Replace original paragraph with rewritten version
    function replaceParagraphWithSimplified(text) {
      let paragraph = doc.GetElement(0);
      if (!paragraph || typeof paragraph.RemoveAllElements !== "function") return;

      paragraph.RemoveAllElements();
      paragraph.AddText(text);
    }
    ```

</details>