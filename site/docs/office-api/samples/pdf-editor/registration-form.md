# Create registration form

This example demonstrates how to build a styled registration form for an IT conference using the ONLYOFFICE Office API. The form includes text fields, a multiline field, a photo upload, and a consent checkbox.

```ts editor-pdf zoom=60
const doc = Api.GetDocument();
const section = doc.GetFinalSection();
section.SetPageSize(9550, 9500);
section.SetPageMargins(0, 0, 0, 0);
section.RemoveFooter("default");
section.RemoveHeader("default");

// Step 1: Background gradient
const stop1 = Api.CreateGradientStop(Api.CreateRGBColor(218, 217, 253), 0);
const stop2 = Api.CreateGradientStop(Api.CreateRGBColor(232, 237, 255), 50000);
const stop3 = Api.CreateGradientStop(Api.CreateRGBColor(245, 247, 254), 100000);
const gradientFill = Api.CreateLinearGradientFill([stop1, stop2, stop3], 5400000);
const noStroke = Api.CreateStroke(0, Api.CreateNoFill());
const backgroundShape = Api.CreateShape("rect", 6076000, 6050000, gradientFill, noStroke);
backgroundShape.SetWrappingStyle("behind");
doc.GetElement(0).AddDrawing(backgroundShape);

// Step 2: Utilities
function addTextParagraph(indent, text, fontSize, isBold = false, alignment = "left") {
  const p = Api.CreateParagraph();
  p.AddText(text);
  p.SetIndLeft(indent);
  p.SetFontSize(fontSize);
  p.SetBold(isBold);
  p.SetJc(alignment);
  p.SetColor(51, 51, 51);
  doc.Push(p);
}

function addTextField(key, placeholder, maxChars, multiLine = false) {
  const p = Api.CreateParagraph();
  p.SetIndLeft(1200);

  const field = Api.CreateTextForm({
    key,
    placeholder,
    maxCharacters: maxChars,
    required: true,
    multiLine,
    autoFit: true
  });

  field.SetBorderColor(204, 204, 204);
  field.SetBackgroundColor(247, 250, 254, false);

  p.AddElement(field);
  p.SetFontSize(18);
  p.SetSpacingBefore(10);
  doc.Push(p);
}

// Step 3: Title
addTextParagraph(0, "IT Future Conference 2025", 32, true, "center");

// Step 4: User input fields
addTextParagraph(1200, "Full Name:", 24, true);
addTextField("fullName", "Your name", 50);

addTextParagraph(1200, "Email:", 24, true);
addTextField("email", "you@example.com", 50);

addTextParagraph(1200, "Phone:", 24, true);
addTextField("phone", "+123456789", 20);

addTextParagraph(1200, "Why do you want to attend?", 24, true);
addTextField("motivation", "Write here...", 300, true);

// Step 5: Photo upload
addTextParagraph(1200, "Insert your Photo", 24, true);

const photoParagraph = Api.CreateParagraph();
photoParagraph.SetSpacingBefore(40);
photoParagraph.SetIndLeft(1200);

const photoField = Api.CreatePictureForm({
  key: "photo",
  tip: "Upload your photo",
  placeholder: "Photo",
  required: false,
  lockAspectRatio: true,
  respectBorders: true,
  scaleFlag: "tooBig"
});
photoParagraph.AddElement(photoField);
doc.Push(photoParagraph);

// Step 6: Consent checkbox
const consentParagraph = Api.CreateParagraph();
consentParagraph.SetSpacingBefore(30);
consentParagraph.SetIndLeft(1200);

const consentCheckbox = Api.CreateCheckBoxForm({
  key: "consent",
  required: true
});
consentParagraph.AddElement(consentCheckbox);
consentParagraph.AddText(" I agree to the processing of personal data.");
consentParagraph.SetFontSize(18);
consentParagraph.SetColor(51, 51, 51);
doc.Push(consentParagraph);

// Step 7: Footer message
const footerParagraph = Api.CreateParagraph();
footerParagraph.SetSpacingBefore(40);
footerParagraph.AddText("Thank you for registering!");
footerParagraph.SetFontSize(24);
footerParagraph.SetBold(true);
footerParagraph.SetJc("center");
footerParagraph.SetColor(51, 51, 51);
doc.Push(footerParagraph);
```

## Script execution steps

### Step 1. Setup document layout and background

Set document size to square, remove margins, headers/footers, and apply a gradient background.

- Use [SetPageSize](../../usage-api/text-document-api/ApiSection/Methods/SetPageSize.md) and [SetPageMargins](../../usage-api/text-document-api/ApiSection/Methods/SetPageMargins.md)
- Create a gradient background using [CreateLinearGradientFill](../../usage-api/text-document-api/Api/Methods/CreateGradientStop.md)
- Add the shape with [CreateShape](../../usage-api/text-document-api/Api/Methods/CreateShape.md)

```ts
const section = doc.GetFinalSection();
section.SetPageSize(9550, 9500);
section.SetPageMargins(0, 0, 0, 0);
section.RemoveFooter("default");
section.RemoveHeader("default");

const stop1 = Api.CreateGradientStop(Api.CreateRGBColor(218, 217, 253), 0);
const stop2 = Api.CreateGradientStop(Api.CreateRGBColor(232, 237, 255), 50000);
const stop3 = Api.CreateGradientStop(Api.CreateRGBColor(245, 247, 254), 100000);
const gradientFill = Api.CreateLinearGradientFill([stop1, stop2, stop3], 5400000);
const noStroke = Api.CreateStroke(0, Api.CreateNoFill());
const backgroundShape = Api.CreateShape("rect", 6076000, 6050000, gradientFill, noStroke);
backgroundShape.SetWrappingStyle("behind");
doc.GetElement(0).AddDrawing(backgroundShape);
```

### Step 2. Add paragraph and field helpers
Define reusable helper functions for rendering styled labels and input fields.

- Uses [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md) to render styled labels
- Uses [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md) for field input

```ts
function addTextParagraph(indent, text, fontSize, isBold = false, alignment = "left") {
  const p = Api.CreateParagraph();
  p.AddText(text);
  p.SetIndLeft(indent);
  p.SetFontSize(fontSize);
  p.SetBold(isBold);
  p.SetJc(alignment);
  p.SetColor(51, 51, 51);
  doc.Push(p);
}

function addTextField(key, placeholder, maxChars, multiLine = false) {
  const p = Api.CreateParagraph();
  p.SetIndLeft(1200);

  const field = Api.CreateTextForm({
    key,
    placeholder,
    maxCharacters: maxChars,
    required: true,
    multiLine,
    autoFit: true
  });

  field.SetBorderColor(204, 204, 204);
  field.SetBackgroundColor(247, 250, 254, false);

  p.AddElement(field);
  p.SetFontSize(18);
  p.SetSpacingBefore(10);
  doc.Push(p);
}
```

### Step 3. Insert form fields
Add the registration fields for full name, email, phone, and motivation.

- Each field uses `addTextField` with unique keys and appropriate lengths
- The motivation field uses the `multiLine: true` option

```ts
addTextParagraph(0, "IT Future Conference 2025", 32, true, "center");

addTextParagraph(1200, "Full Name:", 24, true);
addTextField("fullName", "Your name", 50);

addTextParagraph(1200, "Email:", 24, true);
addTextField("email", "you@example.com", 50);

addTextParagraph(1200, "Phone:", 24, true);
addTextField("phone", "+123456789", 20);

addTextParagraph(1200, "Why do you want to attend?", 24, true);
addTextField("motivation", "Write here...", 300, true);

```

### Step 4. Add photo upload and consent checkbox
Insert an image form for uploading a photo and a required consent checkbox.

- Use [CreatePictureForm](../../usage-api/form-api/Api/Methods/CreatePictureForm.md) for image input
- Use [CreateCheckBoxForm](../../usage-api/form-api/Api/Methods/CreateCheckBoxForm.md) for agreement

```ts
addTextParagraph(1200, "Insert your Photo", 24, true);

const photoParagraph = Api.CreateParagraph();
photoParagraph.SetSpacingBefore(40);
photoParagraph.SetIndLeft(1200);

const photoField = Api.CreatePictureForm({
  key: "photo",
  tip: "Upload your photo",
  placeholder: "Photo",
  required: false,
  lockAspectRatio: true,
  respectBorders: true,
  scaleFlag: "tooBig"
});
photoParagraph.AddElement(photoField);
doc.Push(photoParagraph);

const consentParagraph = Api.CreateParagraph();
consentParagraph.SetSpacingBefore(30);
consentParagraph.SetIndLeft(1200);

const consentCheckbox = Api.CreateCheckBoxForm({
  key: "consent",
  required: true
});
consentParagraph.AddElement(consentCheckbox);
consentParagraph.AddText(" I agree to the processing of personal data.");
consentParagraph.SetFontSize(18);
consentParagraph.SetColor(51, 51, 51);
doc.Push(consentParagraph);
```

### Step 5. Display thank you message
Finish with a center-aligned message below the form.

```ts
const footerParagraph = Api.CreateParagraph();
footerParagraph.SetSpacingBefore(40);
footerParagraph.AddText("Thank you for registering!");
footerParagraph.SetFontSize(24);
footerParagraph.SetBold(true);
footerParagraph.SetJc("center");
footerParagraph.SetColor(51, 51, 51);
doc.Push(footerParagraph);
```