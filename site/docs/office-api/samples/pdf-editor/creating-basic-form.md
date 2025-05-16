# Creating basic form

Create a basic form with the image and text inputs:

- create a new document, add text to the first paragraph and style it as heading ([ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiStyle](../../usage-api/text-document-api/ApiStyle/ApiStyle.md), [ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- create an image form and a text form, and add the form to the document ([Api/CreatePictureForm](../../usage-api/form-api/Api/Methods/CreatePictureForm.md), [Api/CreateTextForm](../../usage-api/form-api/Api/Methods/CreateTextForm.md)).

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../document-builder/builder-framework-samples/builder-framework-samples.md) page.

```ts editor-pdf
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
