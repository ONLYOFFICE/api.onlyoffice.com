# Review and comment document with AI

This example demonstrates how to review all text paragraphs in a document using the ONLYOFFICE API and OpenAI. For each paragraph, the script sends the content to GPT-4o for evaluation. If GPT suggests improvements, the script inserts a comment with the revised version.

If no API key is provided (e.g. in a sandbox), the script simulates review with hardcoded test responses.

```ts editor-docx zoom=60
let doc = Api. GetDocument(); 
let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

let count = doc. GetElementsCount(); 
let hasText = false; 
let promises = []; 

// Fallback test mode
if (OPENAI_API_KEY === "sk-proj...") {
  for (let i = 0; i < count; i++) {

    let element = doc.GetElement(i);
    if (element.GetText) {
      let text = element.GetText().trim();
      if (!text) continue;

      hasText = true;
      if (text.includes("Lorem") || text.length < 50) continue;

      let suggestion = `Consider rewriting this paragraph to improve clarity and formality.` ;
      Api.AddComment(element, suggestion, "AI Assistant");
    }

  }

  if (!hasText) {

    let demo = Api.CreateParagraph();
    demo.AddText("This document discusses terms and obligations of the service provider.");
    doc.Push(demo);
    Api.AddComment(demo, "Consider making this sentence more specific and structured.", "AI Assistant");

  }

  return; 
}

// Review paragraphs with GPT
for (let i = 0; i < count; i++) {
  let element = doc. GetElement(i); 
  if (element. GetText) {

    let text = element.GetText().trim();
    if (!text) continue;

    let prompt = `Review the following paragraph from a business or legal document. Assess it for clarity, tone, grammar, and professional style. If it's well-written and requires no changes, respond exactly: "Looks good." If it needs improvement, suggest a concise and constructive revision.\n\nParagraph:\n"${text}"` ;

    let body = {
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    };

    let p = fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + OPENAI_API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(data => {
      let reply = data.choices?.[0]?.message?.content?.trim();
      if (reply && !/^looks good[.!]?$/i.test(reply)) {
        Api.AddComment(element, reply, "AI Assistant");
      }
    })
    .catch(err => console.log("OpenAI Error:", err.message));

    promises.push(p);

  }
}

```

## Script execution steps

### Step 1. Review all paragraphs and insert comments

This step loops through all document elements and processes paragraphs using GPT-4o. In sandbox mode, it simulates comments for longer blocks. Otherwise, it sends each paragraph to OpenAI and inserts suggestions as comments if applicable.

- Use [GetElementsCount](../../usage-api/text-document-api/ApiDocument/Methods/GetElementsCount.md) and [GetElement](../../usage-api/text-document-api/ApiDocument/Methods/GetElement.md) to iterate all document blocks
- Use [GetText](../../usage-api/text-document-api/ApiParagraph/Methods/GetText.md) to extract paragraph content
- Use fetch() to call OpenAI chat API
- Use JSON.parse() and .trim() to extract clean reply
- Use [AddComment](../../usage-api/text-document-api/Api/Methods/AddComment.md) to insert revision if needed

<details>
  <summary>Review document script</summary>

    ```ts
    let OPENAI_API_KEY = "sk-proj..."; // Replace with your OpenAI API key

    let count = doc.GetElementsCount();
    let hasText = false;
    let promises = [];

    // Fallback test mode
    if (OPENAI_API_KEY === "sk-proj...") {
      for (let i = 0; i < count; i++) {
        let element = doc.GetElement(i);
        if (element.GetText) {
          let text = element.GetText().trim();
          if (!text) continue;

          hasText = true;
          if (text.includes("Lorem") || text.length < 50) continue;

          let suggestion = `Consider rewriting this paragraph to improve clarity and formality.`;
          Api.AddComment(element, suggestion, "AI Assistant");
        }
      }

      if (!hasText) {
        let demo = Api.CreateParagraph();
        demo.AddText("This document discusses terms and obligations of the service provider.");
        doc.Push(demo);
        Api.AddComment(demo, "Consider making this sentence more specific and structured.", "AI Assistant");
      }

      return;
    }

    for (let i = 0; i < count; i++) {
      let element = doc.GetElement(i);
      if (element.GetText) {
        let text = element.GetText().trim();
        if (!text) continue;

        let prompt = `Review the following paragraph from a business or legal document. Assess it for clarity, tone, grammar, and professional style. If it's well-written and requires no changes, respond exactly: "Looks good." If it needs improvement, suggest a concise and constructive revision.\n\nParagraph:\n"${text}"`;

        let body = {
          model: "gpt-4o",
          messages: [{ role: "user", content: prompt }],
          temperature: 0.3
        };

        let p = fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + OPENAI_API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
          let reply = data.choices?.[0]?.message?.content?.trim();
          if (reply && !/^looks good[.!]?$/i.test(reply)) {
            Api.AddComment(element, reply, "AI Assistant");
          }
        })
        .catch(err => console.log("OpenAI Error:", err.message));

        promises.push(p);
      }
    }
    ```

</details>
