# Create basic form

This script creates a simple form layout for generating an employee pass card using the ONLYOFFICE Office API. It combines a styled heading, an image upload field, and a single-line text input.

- Initialize the document using [ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md)
- Get the first paragraph and append the title and style in as `Heading 3` using [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md)
- Create a picture form for user's photo using [Api/CreatePictureForm](../../usage-api/form-api/Api/Methods/CreatePictureForm.md), append picture form to a new paragraph
- Create a text form for user's name using [CreateTextForm](../../usage-api/form-api/ApiTextForm/ApiTextForm.md)

:::info This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/samples/samples.md) page.
:::

```ts editor-pdf zoom=60
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let headingStyle = doc.GetStyle("Heading 3");
paragraph.AddText("Employee pass card");
paragraph.SetStyle(headingStyle);

let pictureForm = Api.CreatePictureForm({
  key: "Photo",
  tip: "Upload your photo",
  required: false,
  placeholder: "Photo",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
  shiftX: 50,
  shiftY: 50,
});
paragraph = Api.CreateParagraph();
paragraph.AddElement(pictureForm);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
let textForm = Api.CreateTextForm({
  key: "First name",
  tip: "Enter your first name",
  required: false,
  placeholder: "First name",
  comb: true,
  maxCharacters: 13,
  cellWidth: 3,
  multiLine: false,
  autoFit: false,
});
paragraph.AddElement(textForm);
doc.Push(paragraph);
```