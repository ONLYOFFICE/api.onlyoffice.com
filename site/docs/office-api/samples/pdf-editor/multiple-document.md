# Generate multiple NDAs in one document

This example demonstrates how to generate multiple personalized NDA documents in a single file using the ONLYOFFICE Office API. Each section is generated for a different user using inline text form fields prefilled with custom data, followed by a manual signature line and separated by page breaks.

```ts editor-pdf zoom=60
const doc = Api.GetDocument();
const section = doc.GetFinalSection();
section.SetPageSize(11900, 16840); // A4
section.SetPageMargins(1000, 1000, 1000, 1000);

// Step 1: Define user data
const users = [
  {
    FullName: "Alice Johnson",
    Email: "alice@example.com",
    Country: "USA",
    Date: "01.01.2025"
  },
  {
    FullName: "Bob Lee",
    Email: "bob@example.com",
    Country: "Canada",
    Date: "02.01.2025"
  },
  {
    FullName: "Clara Schmidt",
    Email: "clara@example.de",
    Country: "Germany",
    Date: "03.01.2025"
  }
];

// Step 2: Utility to create inline text form field
function createInlineField(fieldKey, placeholder, maxChars) {
  const field = Api.CreateTextForm({
    key: fieldKey,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
  });
  field.SetBorderColor(180, 180, 180);
  field.SetBackgroundColor(247, 250, 254, false);
  return field;
}

// Step 3: Generate NDA document section per user
function addNDADocument(userIndex, userData) {
  const fieldPrefix = `user${userIndex}`;

  const headingParagraph = Api.CreateParagraph();
  headingParagraph.AddText("NON-DISCLOSURE AGREEMENT (NDA)");
  headingParagraph.SetFontSize(26);
  headingParagraph.SetBold(true);
  headingParagraph.SetJc("center");
  headingParagraph.SetSpacingAfter(300);
  doc.Push(headingParagraph);

  const introParagraph = Api.CreateParagraph();
  introParagraph.SetSpacingAfter(200);
  introParagraph.SetFontSize(24);
  introParagraph.AddText('This Non-Disclosure Agreement ("Agreement") is made on ');
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_Date`, "Date", 12));
  introParagraph.AddText(" by and between ");
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_FullName`, "Full Name", 40));
  introParagraph.AddText(" from ");
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_Country`, "Country", 30));
  introParagraph.AddText(' ("Receiving Party") with contact email ');
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_Email`, "Email", 40));
  introParagraph.AddText(", and the Disclosing Party.");
  doc.Push(introParagraph);

  const clauses = [
    "1. Confidential Information: The Receiving Party agrees to maintain the confidentiality of information disclosed by the Disclosing Party, whether written or oral.",
    "2. No Disclosure: The Receiving Party shall not disclose any Confidential Information to third parties without prior written consent.",
    "3. Use Limitation: The Confidential Information shall only be used for evaluation purposes and not for any competitive or commercial use.",
    "4. Term: This Agreement shall remain in effect for a period of five (5) years from the date of execution.",
    "5. Return of Materials: Upon request, the Receiving Party shall return or destroy all materials containing Confidential Information.",
    "6. Governing Law: This Agreement shall be governed by the laws of the Disclosing Party’s jurisdiction."
  ];

  clauses.forEach(text => {
    const clauseParagraph = Api.CreateParagraph();
    clauseParagraph.AddText(text);
    clauseParagraph.SetFontSize(18);
    clauseParagraph.SetSpacingBefore(100);
    doc.Push(clauseParagraph);
  });

  const signatureName = Api.CreateParagraph();
  signatureName.SetSpacingBefore(400);
  signatureName.SetFontSize(18);
  signatureName.AddText("Full Name: ");
  signatureName.AddElement(createInlineField(`${fieldPrefix}_FullName`, "Full Name", 40));
  doc.Push(signatureName);

  const signatureLine = Api.CreateParagraph();
  signatureLine.SetFontSize(18);
  signatureLine.AddText("Signature: ____________________________");
  doc.Push(signatureLine);

  // Add page break for next user
  if (userIndex < users.length - 1) {
    const pageBreak = Api.CreateParagraph();
    pageBreak.AddPageBreak();
    doc.Push(pageBreak);
  }

  // Prefill values
  doc.GetAllForms().forEach(form => {
    const fullKey = form.GetFormKey();
    if (!fullKey.startsWith(fieldPrefix + "_")) return;

    const fieldName = fullKey.replace(`${fieldPrefix}_`, "");
    const type = form.GetFormType();

    if (type === "textForm" && userData[fieldName]) {
      form.SetText(userData[fieldName]);
    }
  });
}

// Step 4: Generate NDA for each user
users.forEach((userData, index) => {
  addNDADocument(index, userData);
});
```

## Script execution steps

### Step 1. Define user data
Prepare an array of user profiles with the necessary fields for personalization. Each object will be used to generate an NDA page.

- Store form values in a structured array
- Pass this array later to the rendering logic

```ts
const users = [
  {
    FullName: "Alice Johnson",
    Email: "alice@example.com",
    Country: "USA",
    Date: "01.01.2025"
  },
  {
    FullName: "Bob Lee",
    Email: "bob@example.com",
    Country: "Canada",
    Date: "02.01.2025"
  },
  {
    FullName: "Clara Schmidt",
    Email: "clara@example.de",
    Country: "Germany",
    Date: "03.01.2025"
  }
];
```

### Step 2. Create reusable input field helper
This step creates a utility to generate text form fields with pre-styled design and accessibility properties.

- Use [CreateTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md) for inline fields
- Set background, border, placeholder, and max character options

```ts
function createInlineField(fieldKey, placeholder, maxChars) {
  const field = Api.CreateTextForm({
    key: fieldKey,
    placeholder,
    required: true,
    maxCharacters: maxChars,
    autoFit: true
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
function addNDADocument(userIndex, userData) {
  const fieldPrefix = `user${userIndex}`;

  const headingParagraph = Api.CreateParagraph();
  headingParagraph.AddText("NON-DISCLOSURE AGREEMENT (NDA)");
  headingParagraph.SetFontSize(26);
  headingParagraph.SetBold(true);
  headingParagraph.SetJc("center");
  headingParagraph.SetSpacingAfter(300);
  doc.Push(headingParagraph);

  const introParagraph = Api.CreateParagraph();
  introParagraph.SetSpacingAfter(200);
  introParagraph.SetFontSize(24);
  introParagraph.AddText('This Non-Disclosure Agreement ("Agreement") is made on ');
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_Date`, "Date", 12));
  introParagraph.AddText(" by and between ");
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_FullName`, "Full Name", 40));
  introParagraph.AddText(" from ");
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_Country`, "Country", 30));
  introParagraph.AddText(' ("Receiving Party") with contact email ');
  introParagraph.AddElement(createInlineField(`${fieldPrefix}_Email`, "Email", 40));
  introParagraph.AddText(", and the Disclosing Party.");
  doc.Push(introParagraph);

  const clauses = [
    "1. Confidential Information: The Receiving Party agrees to maintain the confidentiality of information disclosed by the Disclosing Party, whether written or oral.",
    "2. No Disclosure: The Receiving Party shall not disclose any Confidential Information to third parties without prior written consent.",
    "3. Use Limitation: The Confidential Information shall only be used for evaluation purposes and not for any competitive or commercial use.",
    "4. Term: This Agreement shall remain in effect for a period of five (5) years from the date of execution.",
    "5. Return of Materials: Upon request, the Receiving Party shall return or destroy all materials containing Confidential Information.",
    "6. Governing Law: This Agreement shall be governed by the laws of the Disclosing Party’s jurisdiction."
  ];

  clauses.forEach(text => {
    const clauseParagraph = Api.CreateParagraph();
    clauseParagraph.AddText(text);
    clauseParagraph.SetFontSize(18);
    clauseParagraph.SetSpacingBefore(100);
    doc.Push(clauseParagraph);
  });

  const signatureName = Api.CreateParagraph();
  signatureName.SetSpacingBefore(400);
  signatureName.SetFontSize(18);
  signatureName.AddText("Full Name: ");
  signatureName.AddElement(createInlineField(`${fieldPrefix}_FullName`, "Full Name", 40));
  doc.Push(signatureName);

  const signatureLine = Api.CreateParagraph();
  signatureLine.SetFontSize(18);
  signatureLine.AddText("Signature: ____________________________");
  doc.Push(signatureLine);

  // Add page break for next user
  if (userIndex < users.length - 1) {
    const pageBreak = Api.CreateParagraph();
    pageBreak.AddPageBreak();
    doc.Push(pageBreak);
  }

  // Prefill values
  doc.GetAllForms().forEach(form => {
    const fullKey = form.GetFormKey();
    if (!fullKey.startsWith(fieldPrefix + "_")) return;

    const fieldName = fullKey.replace(`${fieldPrefix}_`, "");
    const type = form.GetFormType();

    if (type === "textForm" && userData[fieldName]) {
      form.SetText(userData[fieldName]);
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
users.forEach((userData, index) => {
  addNDADocument(index, userData);
});
```