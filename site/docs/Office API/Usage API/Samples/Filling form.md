Fill a form with the data stored in the object:

- open an existing form document and get all forms (ApiDocument/GetAllForms);
- run a loop for each form, check the form type and set the data corresponding to the form key (ApiFormBase/GetFormType,  ApiFormBase/GetFormKey, ApiPictureForm/SetImage, ApiComboBoxForm/SetText)

This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](../../../Document%20Builder/Builder%20Framework/Builder%20framework%20samples/Builder%20framework%20samples.md) page.

```ts document-builder={"document": {"url": "https://static.onlyoffice.com/assets/docs/samples/purchase_order.pdf"}, "documentType": "pdf", "editorConfig": {"customization": {"zoom": 60}}}
const oDocument = Api.GetDocument()

const data = {
  "Photo": "https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png",
  "Serial": "A1345",
  "Company Name": "ONLYOFFICE",
  "Date": "25.12.2023",
  "Recipient": "Space Corporation",
  "Qty1": "25",
  "Description1": "Frame",
  "Qty2": "2",
  "Description2": "Stack",
  "Qty3": "34",
  "Description3": "Shifter",
}

const aForms = oDocument.GetAllForms()
for (const form of aForms) {
  if (form.GetFormType() === "textForm") {
    form.SetText(data[form.GetFormKey()])
  }
  if (form.GetFormType() === "pictureForm") {
    form.SetImage(data[form.GetFormKey()])
  }
}

Api.Save()
```
