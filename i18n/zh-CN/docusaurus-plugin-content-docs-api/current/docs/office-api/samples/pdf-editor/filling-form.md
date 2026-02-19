---
hide_table_of_contents: true
---

# 填充表单

使用对象中存储的数据填充表单：

- 打开现有表单文档并获取所有表单（[ApiDocument/GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md)）；
- 循环遍历每个表单，检查表单类型并根据表单键设置相应数据（[ApiFormBase/GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md)、[ApiFormBase/GetFormKey](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md)、[ApiPictureForm/SetImage](/docs/office-api/usage-api/form-api/ApiPictureForm/Methods/SetImage.md)、[ApiTextForm/SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)）

:::tip
此示例也适用于 **Document Builder**。
下载示例并在 [Document Builder 示例](/docs/document-builder/samples/samples.md) 页面获取更多信息。
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
