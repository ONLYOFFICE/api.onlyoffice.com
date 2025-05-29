# Set checkbox tip text

Sets the desired tip text to all checkboxes with a certain key.

```ts
(function () {
  let doc = Api.GetDocument();
  let allForms = doc.GetAllForms(); // Retrieve all form fields.
  let targetKey = "CheckBox10"; // Specify the key of checkboxes to update.
  let newTip = "Please update your marital status."; // New tip text.

  allForms.forEach(function (form) {
    // Check if the form is a checkbox and its key matches the target key.
    if (form.GetFormType() === "checkBoxForm" && form.GetFormKey() === targetKey) {
      form.SetTipText(newTip); // Set the new tip text.
    }
  });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetFormKey](../../../../office-api/usage-api/form-api/ApiFormBase/Methods/GetFormKey.md), [SetTipText](../../../../office-api/usage-api/form-api/ApiCheckBoxForm/Methods/SetTipText.md)

## Result

![TipTextSetter](/assets/images/plugins/set-checkbox-tip-text.png#gh-light-mode-only)
![TipTextSetter](/assets/images/plugins/set-checkbox-tip-text.dark.png#gh-dark-mode-only)
