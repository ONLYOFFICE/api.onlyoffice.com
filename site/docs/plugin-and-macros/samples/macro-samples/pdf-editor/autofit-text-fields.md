---
hide_table_of_contents: true
---

# Autofit text fields

Autofits all the text fields in the document.

```ts
(function () {
    let doc = Api.GetDocument();
    let width = 6 * 240;
    let height = 2 * 240;
    // Set AutoFit property to true for all text fields
    doc.GetAllForms()
        .filter(form => form.GetFormType() === "textForm")
        .forEach(form => {
            form.ToFixed(width, height);
            form.SetAutoFit(true);
        });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [ToFixed](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/ToFixed.md), [SetAutoFit](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/SetAutoFit.md)

## Result

![AutofitTextForms](/assets/images/plugins/autofit-text-fields.png#gh-light-mode-only)
![AutofitTextForms](/assets/images/plugins/autofit-text-fields.dark.png#gh-dark-mode-only)