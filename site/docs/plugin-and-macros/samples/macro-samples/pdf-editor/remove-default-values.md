# Remove default values

Automatically removes a specific default value from all text fields in the entire document.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = doc.GetAllForms();
    let defaultValue = "Text";

    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetText() === defaultValue) {
            form.Clear();
        }
    });
})();
```

Methods used: [GetDocument](/docs/office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](/docs/office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](/docs/office-api/usage-api/form-api/ApiFormBase/Methods/GetFormType.md), [GetText](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [Clear](/docs/office-api/usage-api/form-api/ApiTextForm/Methods/Clear.md)

## Result

![RemoveDefaultValues](/assets/images/plugins/remove-default-values.png#gh-light-mode-only)
![RemoveDefaultValues](/assets/images/plugins/remove-default-values.dark.png#gh-dark-mode-only)
