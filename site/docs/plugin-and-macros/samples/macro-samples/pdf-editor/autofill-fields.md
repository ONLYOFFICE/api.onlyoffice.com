# Autofill fields

Automatically fills in all text fields in the document that have the same placeholder or tip text.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let tip = "Tip";

    // Get the first non-empty input from the forms
    let textInput = forms
        .filter(form => form.GetFormType() === "textForm" && form.GetTipText() === tip && form.GetText())
        .map(form => form.GetText())[0] || "";

    // Fill all forms with the specified tip text
    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetTipText() === tip) {
            form.SetText(textInput);
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetTipText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetTipText.md), [GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [SetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetText.md)

## Result

![AutofillFields](/assets/images/plugins/autofill-fields.png#gh-light-mode-only)
![AutofillFields](/assets/images/plugins/autofill-fields.dark.png#gh-dark-mode-only)
