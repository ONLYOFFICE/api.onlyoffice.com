# Autofill fields

Automatically populate all text fields in the document that share the same placeholder or tip text.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = document.GetAllForms();
    let tip = "Tip";

    // Get a first non-empty input from the forms
    let textInput = forms
        .filter(form => form.GetFormType() === "textForm" && form.GetTipText() === tip && form.GetText())
        .map(form => form.GetText())[0] || "";

    // Fill all forms with the specified tip
    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetTipText() === tip) {
            form.SetText(textInput);
        }
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormType.md), [GetTipText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [GetText](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetText.md), [SetText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## Result

![AutofillFields](/assets/images/plugins/autofill-fields.png#gh-light-mode-only)
![AutofillFields](/assets/images/plugins/autofill-fields.dark.png#gh-dark-mode-only)
