---
hide_table_of_contents: true
---

# Filling form

Fill a form with the data stored in the object:

- open an existing form document and get all forms ([ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md));
- run a loop for each form, check the form type and set the data corresponding to the form key ([ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md),  [ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [ApiPictureForm/SetImage](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/SetImage.md), [ApiTextForm/SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md))

:::tip
This sample is also available for **Document Builder**.
Download the sample and get more information on the [Document Builder samples](/docs/document-builder/samples/samples.md) page.
:::

```ts editor-pdf zoom=60 templateUrl=https://static.onlyoffice.com/assets/docs/samples/purchase_order.pdf
let doc = Api.GetDocument();

let data = {
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
};

let forms = doc.GetAllForms();
for (let form of forms) {
  if (form.GetFormType() === "textForm") {
    form.SetText(data[form.GetFormKey()]);
  }
  if (form.GetFormType() === "pictureForm") {
    form.SetImage(data[form.GetFormKey()]);
  }
}
```
