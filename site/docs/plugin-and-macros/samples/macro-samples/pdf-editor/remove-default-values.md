# Remove default values

Automatically remove a specific default value from all text fields in the entire document.

```ts
(function () {
    let doc = Api.GetDocument();
    let forms = document.GetAllForms();
    let defaultValue = "Text";

    forms.forEach(form => {
        if (form.GetFormType() === "textForm" && form.GetText() === defaultValue) {
            form.Clear();
        }
    });
})();
```

Methods used: [GetDocument](../../../../office-api/usage-api/text-document-api/Api/Methods/GetDocument.md), [GetAllForms](../../../../office-api/usage-api/form-api/ApiDocument/Methods/GetAllForms.md), [GetFormType](../../../../office-api/usage-api/form-api/ApiComplexForm/Methods/GetFormType.md), [GetText](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/GetText.md), [Clear](../../../../office-api/usage-api/form-api/ApiTextForm/Methods/Clear.md)

## Result

![RemoveDefaultValues](/assets/images/plugins/remove-default-values.png#gh-light-mode-only)
![RemoveDefaultValues](/assets/images/plugins/remove-default-values.dark.png#gh-dark-mode-only)
