# Generate document with AI

This example demonstrates how to generate a professional lease agreement in a document using the ONLYOFFICE API and OpenAI. The script sends lease terms to GPT-4o and receives a markdown-style response with structured sections. If no API key is provided, it uses a fallback sample agreement.

```ts editor-docx
let doc = Api.GetDocument();

// Lease input data
let landlord = "John Smith";
let landlordAddress = "123 Main St, Springfield";
let tenant = "Acme Corp.";
let tenantAddress = "456 Commerce Ave, Springfield";
let startDate = "July 1, 2025";
let endDate = "June 30, 2026";
let rentAmount = "$2,500";
let paymentDetails = "Bank of Springfield, Account No. 123456789";
let lateFee = "$100";
let gracePeriod = "5";

let token = "sk-proj..."; // Replace with your OpenAI API key

let prompt = `
Write a formal and professional office lease agreement in English between the following parties:

- Landlord: ${landlord}, located at ${landlordAddress}
- Tenant: ${tenant}, located at ${tenantAddress}

Terms:
- Lease starts on ${startDate} and ends on ${endDate}
- Monthly rent: ${rentAmount}
- Rent is paid to: ${paymentDetails}
- Late fee: ${lateFee} after ${gracePeriod} days

Include sections: Title, Parties, Lease Term, Rent, Responsibilities, Signature Lines. Use short, clear paragraphs and double line breaks between sections. Format headings in Markdown (**Title:**) and main title as **Office Lease Agreement**.
`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.3
};

// GPT fallback for sandbox use
if (token === "sk-proj...") {
  let fakeResponse = `
**Office Lease Agreement**

**Parties:**
This Lease Agreement is entered into between John Smith (Landlord) at 123 Main St, Springfield and Acme Corp. (Tenant) at 456 Commerce Ave, Springfield.

**Lease Term:**
The lease begins on July 1, 2025 and ends on June 30, 2026.

**Rent:**
Tenant shall pay $2,500 monthly to Bank of Springfield, Account No. 123456789.

**Late Fee:**
A $100 late fee applies if rent is not received within 5 days of the due date.

**Responsibilities:**
Tenant shall keep the premises clean and comply with all laws.

**Signatures:**
_____________________ (Landlord)

_____________________ (Tenant)
  `;
  insertFormattedDocument(fakeResponse);
  return;
}

// GPT request + rendering
fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => {
  let content = data.choices?.[0]?.message?.content || "No response";
  insertFormattedDocument(content);
})
.catch(error => {
  let err = Api.CreateParagraph();
  err.AddText("Fetch error: " + error.message);
  doc.Push(err);
});

function insertFormattedDocument(content) {
  let lines = content.split("\n");
  let p = null;

  lines.forEach((line) => {
    let clean = line.trim();
    if (clean === "") {
      if (p) {
        doc.Push(p);
        p = null;
      }
      return;
    }

    if (/^\*\*[^:]+?\*\*$/.test(clean)) {
      let title = clean.replace(/^\*\*/, "").replace(/\*\*$/, "");
      p = Api.CreateParagraph();
      let t = p.AddText(title);
      t.SetBold(true);
      p.SetFontSize(32);
      p.SetJc("center");
      p.SetSpacingBefore(10);
      p.SetSpacingAfter(6);
      doc.Push(p);
      p = null;
      return;
    }

    if (/^\*\*.*?:\*\*$/.test(clean)) {
      let label = clean.replace(/^\*\*/, "").replace(/\*\*$/, "");
      p = Api.CreateParagraph();
      p.SetSpacingBefore(8);
      let t = p.AddText(label);
      t.SetBold(true);
      p.SetFontSize(24);
      doc.Push(p);
      p = null;
      return;
    }

    if (!p) {
      p = Api.CreateParagraph();
      p.SetFontSize(13);
    } else {
      p.AddLineBreak();
    }

    p.AddText(clean);
  });

  if (p) {
    doc.Push(p);
  }
}
```

## Script execution steps

### Step 1. Generate or fallback document

This step either sends the structured lease data to GPT-4o and parses the result, or uses predefined markdown-style content if the token is missing. The result is then passed to a formatting function.

- Use `if (token === "sk-proj...")` to determine sandbox mode
- Define fallback response and pass to `insertFormattedDocument()`
- Use `fetch()` to request GPT response if key is valid
- Extract GPT response and handle fallback on error
- Use `insertFormattedDocument()` to process and render

<details>
  <summary>Getting data script</summary>

    ```ts
// Lease input data
let landlord = "John Smith";
let landlordAddress = "123 Main St, Springfield";
let tenant = "Acme Corp.";
let tenantAddress = "456 Commerce Ave, Springfield";
let startDate = "July 1, 2025";
let endDate = "June 30, 2026";
let rentAmount = "$2,500";
let paymentDetails = "Bank of Springfield, Account No. 123456789";
let lateFee = "$100";
let gracePeriod = "5";

let token = "sk-proj..."; // Replace with your OpenAI API key

let prompt = `
Write a formal and professional office lease agreement in English between the following parties:

- Landlord: ${landlord}, located at ${landlordAddress}
- Tenant: ${tenant}, located at ${tenantAddress}

Terms:
- Lease starts on ${startDate} and ends on ${endDate}
- Monthly rent: ${rentAmount}
- Rent is paid to: ${paymentDetails}
- Late fee: ${lateFee} after ${gracePeriod} days

Include sections: Title, Parties, Lease Term, Rent, Responsibilities, Signature Lines. Use short, clear paragraphs and double line breaks between sections. Format headings in Markdown (**Title:**) and main title as **Office Lease Agreement**.
`;

let body = {
  model: "gpt-4o",
  messages: [{ role: "user", content: prompt }],
  temperature: 0.3
};

if (token === "sk-proj...") {
  let fakeResponse = `
**Office Lease Agreement**

**Parties:**
This Lease Agreement is entered into between John Smith (Landlord) at 123 Main St, Springfield and Acme Corp. (Tenant) at 456 Commerce Ave, Springfield.

**Lease Term:**
The lease begins on July 1, 2025 and ends on June 30, 2026.

**Rent:**
Tenant shall pay $2,500 monthly to Bank of Springfield, Account No. 123456789.

**Late Fee:**
A $100 late fee applies if rent is not received within 5 days of the due date.

**Responsibilities:**
Tenant shall keep the premises clean and comply with all laws.

**Signatures:**
_____________________ (Landlord)

_____________________ (Tenant)
  `;
  insertFormattedDocument(fakeResponse);
  return;
}

// GPT request + rendering
fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer " + token,
    "Content-Type": "application/json"
  },
  body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => {
  let content = data.choices?.[0]?.message?.content || "No response";
  insertFormattedDocument(content);
})
.catch(error => {
  let err = Api.CreateParagraph();
  err.AddText("Fetch error: " + error.message);
  doc.Push(err);
});
    ```

</details>

### Step 2. Format and insert lease content

This step parses the markdown-style text line-by-line, styles titles and section headers, and inserts each block into the document with appropriate paragraph formatting.

- Use [CreateParagraph](../../usage-api/text-document-api/Api/Methods/CreateParagraph.md) to create styled blocks
- Use [AddText](../../usage-api/text-document-api/ApiParagraph/Methods/AddText.md) to insert each line
- Use [SetBold](../../usage-api/text-document-api/ApiParagraph/Methods/SetBold.md) and [SetFontSize](../../usage-api/text-document-api/ApiParagraph/Methods/SetFontSize.md) for titles and headers
- Use [SetJc](../../usage-api/text-document-api/ApiParagraph/Methods/SetJc.md) to center-align the main title
- Use [AddLineBreak](../../usage-api/text-document-api/ApiParagraph/Methods/AddLineBreak.md) to separate content

<details>
  <summary>Generate document script</summary>

    ```ts
function insertFormattedDocument(content) {
  let lines = content.split("\n");
  let p = null;

  lines.forEach((line) => {
    let clean = line.trim();
    if (clean === "") {
      if (p) {
        doc.Push(p);
        p = null;
      }
      return;
    }

    if (/^\*\*[^:]+?\*\*$/.test(clean)) {
      let title = clean.replace(/^\*\*/, "").replace(/\*\*$/, "");
      p = Api.CreateParagraph();
      let t = p.AddText(title);
      t.SetBold(true);
      p.SetFontSize(32);
      p.SetJc("center");
      p.SetSpacingBefore(10);
      p.SetSpacingAfter(6);
      doc.Push(p);
      p = null;
      return;
    }

    if (/^\*\*.*?:\*\*$/.test(clean)) {
      let label = clean.replace(/^\*\*/, "").replace(/\*\*$/, "");
      p = Api.CreateParagraph();
      p.SetSpacingBefore(8);
      let t = p.AddText(label);
      t.SetBold(true);
      p.SetFontSize(24);
      doc.Push(p);
      p = null;
      return;
    }

    if (!p) {
      p = Api.CreateParagraph();
      p.SetFontSize(13);
    } else {
      p.AddLineBreak();
    }

    p.AddText(clean);
  });

  if (p) {
    doc.Push(p);
  }
}
    ```

</details>