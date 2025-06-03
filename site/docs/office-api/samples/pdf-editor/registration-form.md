# Create registration form

This example demonstrates how to build a styled registration form for an IT conference using the ONLYOFFICE Office API. The form includes text fields, a multiline field, a photo upload, and a consent checkbox.

```ts editor-pdf
let doc = Api.GetDocument();
let section = doc.GetFinalSection();
section.SetPageSize(9550, 9500);
section.SetPageMargins(0, 0, 0, 0);
section.RemoveFooter("default");
section.RemoveHeader("default");

// === Background gradient ===
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(218, 217, 253), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(232, 237, 255), 50000);
let gs3 = Api.CreateGradientStop(Api.CreateRGBColor(245, 247, 254), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2, gs3], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 6076000, 6050000, fill, stroke);
shape.SetWrappingStyle("behind");
doc.GetElement(0).AddDrawing(shape);

// === Paragraph utility ===
function addTextParagraph(ind ,text, fontSize, bold = false, jc = "left") {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(text);
  paragraph.SetIndLeft(ind);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(bold);
  paragraph.SetJc(jc);
  paragraph.SetColor(51, 51, 51);
  doc.Push(paragraph);
}

// === Field utility ===
function addTextField(key, placeholder, maxChars, multiLine = false) {
  let p = Api.CreateParagraph();
  p.SetIndLeft(1200);
  let field = Api.CreateTextForm({
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

// === Title ===
addTextParagraph(0, "IT Future Conference 2025", 32, true, "center");

// === Fields ===
addTextParagraph(1200, "Full Name:", 24, true);
addTextField("FullName", "Your name", 50);

addTextParagraph(1200, "Email:", 24, true);
addTextField("Email", "you@example.com", 50);

addTextParagraph(1200, "Phone:", 24, true);
addTextField("Phone", "+123456789", 20);

addTextParagraph(1200, "Why do you want to attend?", 24, true);
addTextField("Motivation", "Write here...", 300, true);

// === Photo ===
addTextParagraph(1200, "Insert your Photo", 24, true);
let photoPara = Api.CreateParagraph();
photoPara.SetSpacingBefore(40);
photoPara.SetIndLeft(1200);
let photo = Api.CreatePictureForm({
  key: "Photo",
  tip: "Upload your photo",
  placeholder: "Photo",
  required: false,
  lockAspectRatio: true,
  respectBorders: true,
  scaleFlag: "tooBig"
});
photoPara.AddElement(photo);
doc.Push(photoPara);

// === Consent ===
let agreement = Api.CreateParagraph();
agreement.SetSpacingBefore(30);
agreement.SetIndLeft(1200);
let checkbox = Api.CreateCheckBoxForm({ key: "Consent", required: true });
agreement.AddElement(checkbox);
agreement.AddText(" I agree to the processing of personal data.");
agreement.SetFontSize(18);
agreement.SetColor(51, 51, 51);
doc.Push(agreement);

// === Thank you footer ===
let footer = Api.CreateParagraph();
footer.SetSpacingBefore(40);
footer.AddText("Thank you for registering!");
footer.SetFontSize(24);
footer.SetJc("center");
footer.SetBold(true);
footer.SetColor(51, 51, 51);
doc.Push(footer);
```

## Script execution steps

### Step 1. Setup document layout and background

Set document size to square, remove margins, headers/footers, and apply a gradient background.

- Use [SetPageSize](../../usage-api/text-document-api/ApiSection/Methods/SetPageSize.md) and [SetPageMargins](../../usage-api/text-document-api/ApiSection/Methods/SetPageMargins.md)
- Create a gradient background using [CreateLinearGradientFill](../../usage-api/text-document-api/Api/Methods/CreateGradientStop.md)
- Add the shape with [CreateShape](../../usage-api/text-document-api/Api/Methods/CreateShape.md)

```ts
let section = doc.GetFinalSection();
section.SetPageSize(9550, 9500);
section.SetPageMargins(0, 0, 0, 0);
section.RemoveFooter("default");
section.RemoveHeader("default");

// === Background gradient ===
let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(218, 217, 253), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(232, 237, 255), 50000);
let gs3 = Api.CreateGradientStop(Api.CreateRGBColor(245, 247, 254), 100000);
let fill = Api.CreateLinearGradientFill([gs1, gs2, gs3], 5400000);
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 6076000, 6050000, fill, stroke);
shape.SetWrappingStyle("behind");
doc.GetElement(0).AddDrawing(shape);
```

### Step 2. Add paragraph and field helpers
Define reusable helper functions for adding paragraphs and text fields.

- Uses [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md) to render styled labels
- Uses [ApiTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md) for field input

```ts
function addTextParagraph(ind ,text, fontSize, bold = false, jc = "left") {
  let paragraph = Api.CreateParagraph();
  paragraph.AddText(text);
  paragraph.SetIndLeft(ind);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(bold);
  paragraph.SetJc(jc);
  paragraph.SetColor(51, 51, 51);
  doc.Push(paragraph);
}

function addTextField(key, placeholder, maxChars, multiLine = false) {
  let p = Api.CreateParagraph();
  p.SetIndLeft(1200);
  let field = Api.CreateTextForm({
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
// === Title ===
addTextParagraph(0, "IT Future Conference 2025", 32, true, "center");

// === Fields ===
addTextParagraph(1200, "Full Name:", 24, true);
addTextField("FullName", "Your name", 50);

addTextParagraph(1200, "Email:", 24, true);
addTextField("Email", "you@example.com", 50);

addTextParagraph(1200, "Phone:", 24, true);
addTextField("Phone", "+123456789", 20);

addTextParagraph(1200, "Why do you want to attend?", 24, true);
addTextField("Motivation", "Write here...", 300, true);
```

### Step 4. Add photo upload and consent checkbox
Insert an image form for uploading a photo and a required consent checkbox.

- Use [CreatePictureForm](../../usage-api/form-api/Api/Methods/CreatePictureForm.md) for image input
- Use [CreateCheckBoxForm](../../usage-api/form-api/Api/Methods/CreateCheckBoxForm.md) for agreement

```ts
// === Photo ===
addTextParagraph(1200, "Insert your Photo", 24, true);
let photoPara = Api.CreateParagraph();
photoPara.SetSpacingBefore(40);
photoPara.SetIndLeft(1200);
let photo = Api.CreatePictureForm({
  key: "Photo",
  tip: "Upload your photo",
  placeholder: "Photo",
  required: false,
  lockAspectRatio: true,
  respectBorders: true,
  scaleFlag: "tooBig"
});
photoPara.AddElement(photo);
doc.Push(photoPara);

// === Consent ===
let agreement = Api.CreateParagraph();
agreement.SetSpacingBefore(30);
agreement.SetIndLeft(1200);
let checkbox = Api.CreateCheckBoxForm({ key: "Consent", required: true });
agreement.AddElement(checkbox);
agreement.AddText(" I agree to the processing of personal data.");
agreement.SetFontSize(18);
agreement.SetColor(51, 51, 51);
doc.Push(agreement);
```

### Step 5. Display thank you message
Finish with a center-aligned message below the form.

```ts
// === Thank you footer ===
let footer = Api.CreateParagraph();
footer.SetSpacingBefore(40);
footer.AddText("Thank you for registering!");
footer.SetFontSize(24);
footer.SetJc("center");
footer.SetBold(true);
footer.SetColor(51, 51, 51);
doc.Push(footer);
```