# Autofit text forms

Autofit all the text forms in the document.

```ts
(function () {
    let doc = Api.GetDocument();
    let width = 6 * 240;
    let height = 2 * 240;
    // Set AutoFit property to true for all text forms
    document.GetAllForms()
        .filter(form => form.GetFormType() === "textForm")
        .forEach(form => {
            form.ToFixed(width, height);
            form.SetAutoFit(true);
        });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormType.md), [ToFixed](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/ToFixed.md), [SetAutoFit](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/SetAutoFit.md)

## Result

![AutofitTextForms](/assets/images/plugins/autofit-text-forms.png#gh-light-mode-only)
![AutofitTextForms](/assets/images/plugins/autofit-text-forms.dark.png#gh-dark-mode-only)
