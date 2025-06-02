# Generate multiple NDAs in one document

This example demonstrates how to generate multiple personalized NDA documents in a single file using the ONLYOFFICE Office API. Each section is generated for a different user using inline text form fields prefilled with custom data, followed by a manual signature line and separated by page breaks.

```ts editor-pdf zoom=60
let doc = Api.GetDocument();
let section = doc.GetFinalSection();
section.SetPageSize(11900, 16840); // A4
section.SetPageMargins(1000, 1000, 1000, 1000);

// === User Data ===
let users = [
  {
    "FullName": "Alice Johnson",
    "Email": "alice@example.com",
    "Country": "USA",
    "Date": "01.01.2025"
  },
  {
    "FullName": "Bob Lee",
    "Email": "bob@example.com",
    "Country": "Canada",
    "Date": "02.01.2025"
  },
  {
    "FullName": "Clara Schmidt",
    "Email": "clara@example.de",
    "Country": "Germany",
    "Date": "03.01.2025"
  }
];

// === Utility: Inline Field Generator ===
function createInlineField(key, placeholder, maxChars) {
  let field = Api.CreateTextForm({
    key,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
  });
  field.SetBorderColor(180, 180, 180);
  field.SetBackgroundColor(247, 250, 254, false);
  return field;
}

// === NDA Generator Function ===
function addNDADocument(userIndex, data) {
  const prefix = "user" + userIndex;

  let title = Api.CreateParagraph();
  title.AddText("NON-DISCLOSURE AGREEMENT (NDA)");
  title.SetFontSize(26);
  title.SetBold(true);
  title.SetJc("center");
  title.SetSpacingAfter(300);
  doc.Push(title);

  let intro = Api.CreateParagraph();
  intro.SetSpacingAfter(200);
  intro.AddText("This Non-Disclosure Agreement (\"Agreement\") is made on ");
  intro.AddElement(createInlineField(`${prefix}_Date`, "Date", 12));
  intro.AddText(" by and between ");
  intro.AddElement(createInlineField(`${prefix}_FullName`, "Full Name", 40));
  intro.AddText(" from ");
  intro.AddElement(createInlineField(`${prefix}_Country`, "Country", 30));
  intro.AddText(" (\"Receiving Party\") with contact email ");
  intro.AddElement(createInlineField(`${prefix}_Email`, "Email", 40));
  intro.AddText(", and the Disclosing Party.");
  intro.SetFontSize(24);
  doc.Push(intro);

  const clauses = [
    "1. Confidential Information: The Receiving Party agrees to maintain the confidentiality of information disclosed by the Disclosing Party, whether written or oral.",
    "2. No Disclosure: The Receiving Party shall not disclose any Confidential Information to third parties without prior written consent.",
    "3. Use Limitation: The Confidential Information shall only be used for evaluation purposes and not for any competitive or commercial use.",
    "4. Term: This Agreement shall remain in effect for a period of five (5) years from the date of execution.",
    "5. Return of Materials: Upon request, the Receiving Party shall return or destroy all materials containing Confidential Information.",
    "6. Governing Law: This Agreement shall be governed by the laws of the Disclosing Party’s jurisdiction."
  ];

  clauses.forEach(text => {
    let clause = Api.CreateParagraph();
    clause.AddText(text);
    clause.SetFontSize(18);
    clause.SetSpacingBefore(100);
    doc.Push(clause);
  });

  let signName = Api.CreateParagraph();
  signName.SetSpacingBefore(400);
  signName.SetFontSize(18);
  signName.AddText("Full Name: ");
  signName.AddElement(createInlineField(`${prefix}_FullName`, "Full Name", 40));
  doc.Push(signName);

  let signLine = Api.CreateParagraph();
  signLine.SetFontSize(18);
  signLine.AddText("Signature: ____________________________");
  doc.Push(signLine);

  if (userIndex < users.length - 1) {
    let br = Api.CreateParagraph();
    br.AddPageBreak();
    doc.Push(br);
  }

  doc.GetAllForms().forEach(form => {
    const key = form.GetFormKey();
    if (!key.startsWith(prefix + "_")) return;
    const shortKey = key.replace(prefix + "_", "");
    if (form.GetFormType() === "textForm" && data[shortKey]) {
      form.SetText(data[shortKey]);
    }
  });
}

// === Render for all users ===
users.forEach((user, i) => addNDADocument(i, user));
```

## Script execution steps

### Step 1. Define user data
Prepare an array of user profiles with the necessary fields for personalization. Each object will be used to generate an NDA page.

- Store form values in a structured array
- Pass this array later to the rendering logic

```ts
let users = [
  {
    "FullName": "Alice Johnson",
    "Email": "alice@example.com",
    "Country": "USA",
    "Date": "01.01.2025"
  },
  {
    "FullName": "Bob Lee",
    "Email": "bob@example.com",
    "Country": "Canada",
    "Date": "02.01.2025"
  },
  {
    "FullName": "Clara Schmidt",
    "Email": "clara@example.de",
    "Country": "Germany",
    "Date": "03.01.2025"
  }
];
```

### Step 2. Create reusable input field helper
This step creates a utility to generate text form fields with pre-styled design and accessibility properties.

- Use [CreateTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md) for inline fields
- Set background, border, placeholder, and max character options

```ts
function createInlineField(key, placeholder, maxChars) {
  let field = Api.CreateTextForm({
    key, placeholder, required: true, maxCharacters: maxChars, autoFit: true
  });
  field.SetBorderColor(180, 180, 180);
  field.SetBackgroundColor(247, 250, 254, false);
  return field;
}
```

### Step 3. Generate NDA body for each user
This step defines a function to generate a single NDA page per user, including title, body text with inline fields, clauses, and signature area.

- Use [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md) for layout
- Insert inline fields inside paragraphs using the helper
- Add a manual signature placeholder
- Optionally add [AddPageBreak](../../usage-api/text-document-api/ApiParagraph/Methods/AddPageBreak.md) after each entry

<details>
  <summary>Add NDA script</summary>

```ts
function addNDADocument(userIndex, data) {
  const prefix = "user" + userIndex;

  let title = Api.CreateParagraph();
  title.AddText("NON-DISCLOSURE AGREEMENT (NDA)");
  title.SetFontSize(26);
  title.SetBold(true);
  title.SetJc("center");
  title.SetSpacingAfter(300);
  doc.Push(title);

  let intro = Api.CreateParagraph();
  intro.SetSpacingAfter(200);
  intro.AddText("This Non-Disclosure Agreement (\"Agreement\") is made on ");
  intro.AddElement(createInlineField(`${prefix}_Date`, "Date", 12));
  intro.AddText(" by and between ");
  intro.AddElement(createInlineField(`${prefix}_FullName`, "Full Name", 40));
  intro.AddText(" from ");
  intro.AddElement(createInlineField(`${prefix}_Country`, "Country", 30));
  intro.AddText(" (\"Receiving Party\") with contact email ");
  intro.AddElement(createInlineField(`${prefix}_Email`, "Email", 40));
  intro.AddText(", and the Disclosing Party.");
  intro.SetFontSize(24);
  doc.Push(intro);

  const clauses = [
    "1. Confidential Information: The Receiving Party agrees to maintain the confidentiality of information disclosed by the Disclosing Party, whether written or oral.",
    "2. No Disclosure: The Receiving Party shall not disclose any Confidential Information to third parties without prior written consent.",
    "3. Use Limitation: The Confidential Information shall only be used for evaluation purposes and not for any competitive or commercial use.",
    "4. Term: This Agreement shall remain in effect for a period of five (5) years from the date of execution.",
    "5. Return of Materials: Upon request, the Receiving Party shall return or destroy all materials containing Confidential Information.",
    "6. Governing Law: This Agreement shall be governed by the laws of the Disclosing Party’s jurisdiction."
  ];

  clauses.forEach(text => {
    let clause = Api.CreateParagraph();
    clause.AddText(text);
    clause.SetFontSize(18);
    clause.SetSpacingBefore(100);
    doc.Push(clause);
  });

  let signName = Api.CreateParagraph();
  signName.SetSpacingBefore(400);
  signName.SetFontSize(18);
  signName.AddText("Full Name: ");
  signName.AddElement(createInlineField(`${prefix}_FullName`, "Full Name", 40));
  doc.Push(signName);

  let signLine = Api.CreateParagraph();
  signLine.SetFontSize(18);
  signLine.AddText("Signature: ____________________________");
  doc.Push(signLine);

  if (userIndex < users.length - 1) {
    let br = Api.CreateParagraph();
    br.AddPageBreak();
    doc.Push(br);
  }

  doc.GetAllForms().forEach(form => {
    const key = form.GetFormKey();
    if (!key.startsWith(prefix + "_")) return;
    const shortKey = key.replace(prefix + "_", "");
    if (form.GetFormType() === "textForm" && data[shortKey]) {
      form.SetText(data[shortKey]);
    }
  });
}
```

</details>

### Step 4. Apply data and render all documents
Finally, loop through the user array and render each document using the function from Step 3. Prefill input fields using [SetText](../../usage-api/form-api/ApiTextForm/Methods/SetText.md)

- Iterate users and call the `addNDADocument` function
- Match keys by prefix and populate inputs

```ts
users.forEach((user, i) => addNDADocument(i, user));
```